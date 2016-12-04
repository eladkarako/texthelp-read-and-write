var texthelp = texthelp || {};
texthelp.RW4GC = texthelp.RW4GC || {};
texthelp.RW4GC.interact = {};
(function (realWindow) {
  'use strict';
  if (!realWindow) {
    return;
  }
  var
    window = (function () {
      var el = realWindow.document.createTextNode('');
      if (el.ownerDocument !== realWindow.document && typeof realWindow.wrap === 'function' && realWindow.wrap(el) === el) {
        return realWindow.wrap(realWindow);
      }
      return realWindow;
    }())
    , document = window.document
    , DocumentFragment = window.DocumentFragment || blank
    , SVGElement = window.SVGElement || blank
    , SVGSVGElement = window.SVGSVGElement || blank
    , SVGElementInstance = window.SVGElementInstance || blank
    , HTMLElement = window.HTMLElement || window.Element
    , PointerEvent = (window.PointerEvent || window.MSPointerEvent)
    , pEventTypes, hypot = Math.hypot || function (x, y) {
      return Math.sqrt(x * x + y * y);
    }
    , tmpXY = {}
    , documents = []
    , interactables = []
    , interactions = []
    , dynamicDrop = false
    , delegatedEvents = {}
    , defaultOptions = {
      base: {
        accept: null
        , actionChecker: null
        , styleCursor: true
        , preventDefault: 'auto'
        , origin: {
          x: 0
          , y: 0
        }
        , deltaSource: 'page'
        , allowFrom: null
        , ignoreFrom: null
        , _context: document
        , dropChecker: null
      }
      , drag: {
        enabled: false
        , manualStart: true
        , max: Infinity
        , maxPerElement: 1
        , snap: null
        , restrict: null
        , inertia: null
        , autoScroll: null
        , axis: 'xy'
      }
      , drop: {
        enabled: false
        , accept: null
        , overlap: 'pointer'
      }
      , resize: {
        enabled: false
        , manualStart: false
        , max: Infinity
        , maxPerElement: 1
        , snap: null
        , restrict: null
        , inertia: null
        , autoScroll: null
        , square: false
        , preserveAspectRatio: false
        , axis: 'xy'
        , margin: NaN
        , edges: null
        , invert: 'none'
      }
      , gesture: {
        manualStart: false
        , enabled: false
        , max: Infinity
        , maxPerElement: 1
        , restrict: null
      }
      , perAction: {
        manualStart: false
        , max: Infinity
        , maxPerElement: 1
        , snap: {
          enabled: false
          , endOnly: false
          , range: Infinity
          , targets: null
          , offsets: null
          , relativePoints: null
        }
        , restrict: {
          enabled: false
          , endOnly: false
        }
        , autoScroll: {
          enabled: false
          , container: null
          , margin: 60
          , speed: 300
        }
        , inertia: {
          enabled: false
          , resistance: 10
          , minSpeed: 100
          , endSpeed: 10
          , allowResume: true
          , zeroResumeDelta: true
          , smoothEndDuration: 300
        }
      }
      , _holdDuration: 600
    }
    , autoScroll = {
      interaction: null
      , i: null
      , x: 0
      , y: 0
      , scroll: function () {
        var options = autoScroll.interaction.target.options[autoScroll.interaction.prepared.name].autoScroll
          , container = options.container || getWindow(autoScroll.interaction.element)
          , now = new Date()
          .getTime()
          , dtx = (now - autoScroll.prevTimeX) / 1000
          , dty = (now - autoScroll.prevTimeY) / 1000
          , vx, vy, sx, sy;
        if (options.velocity) {
          vx = options.velocity.x;
          vy = options.velocity.y;
        } else {
          vx = vy = options.speed
        }
        sx = vx * dtx;
        sy = vy * dty;
        if (sx >= 1 || sy >= 1) {
          if (isWindow(container)) {
            container.scrollBy(autoScroll.x * sx, autoScroll.y * sy);
          } else if (container) {
            container.scrollLeft += autoScroll.x * sx;
            container.scrollTop += autoScroll.y * sy;
          }
          if (sx >= 1) autoScroll.prevTimeX = now;
          if (sy >= 1) autoScroll.prevTimeY = now;
        }
        if (autoScroll.isScrolling) {
          cancelFrame(autoScroll.i);
          autoScroll.i = reqFrame(autoScroll.scroll);
        }
      }
      , isScrolling: false
      , prevTimeX: 0
      , prevTimeY: 0
      , start: function (interaction) {
        autoScroll.isScrolling = true;
        cancelFrame(autoScroll.i);
        autoScroll.interaction = interaction;
        autoScroll.prevTimeX = new Date()
          .getTime();
        autoScroll.prevTimeY = new Date()
          .getTime();
        autoScroll.i = reqFrame(autoScroll.scroll);
      }
      , stop: function () {
        autoScroll.isScrolling = false;
        cancelFrame(autoScroll.i);
      }
    }
    , supportsTouch = (('ontouchstart' in window) || window.DocumentTouch && document instanceof window.DocumentTouch)
    , supportsPointerEvent = !!PointerEvent
    , margin = supportsTouch || supportsPointerEvent ? 20 : 10
    , pointerMoveTolerance = 1
    , prevTouchTime = 0
    , maxInteractions = Infinity
    , actionCursors = (document.all && !window.atob) ? {
      drag: 'move'
      , resizex: 'e-resize'
      , resizey: 's-resize'
      , resizexy: 'se-resize'
      , resizetop: 'n-resize'
      , resizeleft: 'w-resize'
      , resizebottom: 's-resize'
      , resizeright: 'e-resize'
      , resizetopleft: 'se-resize'
      , resizebottomright: 'se-resize'
      , resizetopright: 'ne-resize'
      , resizebottomleft: 'ne-resize'
      , gesture: ''
    } : {
      drag: 'move'
      , resizex: 'ew-resize'
      , resizey: 'ns-resize'
      , resizexy: 'nwse-resize'
      , resizetop: 'ns-resize'
      , resizeleft: 'ew-resize'
      , resizebottom: 'ns-resize'
      , resizeright: 'ew-resize'
      , resizetopleft: 'nwse-resize'
      , resizebottomright: 'nwse-resize'
      , resizetopright: 'nesw-resize'
      , resizebottomleft: 'nesw-resize'
      , gesture: ''
    }
    , actionIsEnabled = {
      drag: true
      , resize: true
      , gesture: true
    }
    , wheelEvent = 'onmousewheel' in document ? 'mousewheel' : 'wheel'
    , eventTypes = ['dragstart', 'dragmove', 'draginertiastart', 'dragend', 'dragenter', 'dragleave', 'dropactivate', 'dropdeactivate', 'dropmove', 'drop', 'resizestart', 'resizemove', 'resizeinertiastart', 'resizeend', 'gesturestart', 'gesturemove', 'gestureinertiastart', 'gestureend', 'down', 'move', 'up', 'cancel', 'tap', 'doubletap', 'hold']
    , globalEvents = {}
    , isOperaMobile = navigator.appName == 'Opera' && supportsTouch && navigator.userAgent.match('Presto')
    , isIOS7 = (/iP(hone|od|ad)/.test(navigator.platform) && /OS 7[^\d]/.test(navigator.appVersion))
    , prefixedMatchesSelector = 'matches' in Element.prototype ? 'matches' : 'webkitMatchesSelector' in Element.prototype ? 'webkitMatchesSelector' : 'mozMatchesSelector' in Element.prototype ? 'mozMatchesSelector' : 'oMatchesSelector' in Element.prototype ? 'oMatchesSelector' : 'msMatchesSelector'
    , ie8MatchesSelector, reqFrame = realWindow.requestAnimationFrame
    , cancelFrame = realWindow.cancelAnimationFrame
    , events = (function () {
      var useAttachEvent = ('attachEvent' in window) && !('addEventListener' in window)
        , addEvent = useAttachEvent ? 'attachEvent' : 'addEventListener'
        , removeEvent = useAttachEvent ? 'detachEvent' : 'removeEventListener'
        , on = useAttachEvent ? 'on' : ''
        , elements = []
        , targets = []
        , attachedListeners = [];

      function add(element, type, listener, useCapture) {
        var elementIndex = indexOf(elements, element)
          , target = targets[elementIndex];
        if (!target) {
          target = {
            events: {}
            , typeCount: 0
          };
          elementIndex = elements.push(element) - 1;
          targets.push(target);
          attachedListeners.push((useAttachEvent ? {
            supplied: []
            , wrapped: []
            , useCount: []
          } : null));
        }
        if (!target.events[type]) {
          target.events[type] = [];
          target.typeCount++;
        }
        if (!contains(target.events[type], listener)) {
          var ret;
          if (useAttachEvent) {
            var listeners = attachedListeners[elementIndex]
              , listenerIndex = indexOf(listeners.supplied, listener);
            var wrapped = listeners.wrapped[listenerIndex] || function (event) {
              if (!event.immediatePropagationStopped) {
                event.target = event.srcElement;
                event.currentTarget = element;
                event.preventDefault = event.preventDefault || preventDef;
                event.stopPropagation = event.stopPropagation || stopProp;
                event.stopImmediatePropagation = event.stopImmediatePropagation || stopImmProp;
                if (/mouse|click/.test(event.type)) {
                  event.pageX = event.clientX + getWindow(element)
                    .document.documentElement.scrollLeft;
                  event.pageY = event.clientY + getWindow(element)
                    .document.documentElement.scrollTop;
                }
                listener(event);
              }
            };
            ret = element[addEvent](on + type, wrapped, Boolean(useCapture));
            if (listenerIndex === -1) {
              listeners.supplied.push(listener);
              listeners.wrapped.push(wrapped);
              listeners.useCount.push(1);
            } else {
              listeners.useCount[listenerIndex]++;
            }
          } else {
            ret = element[addEvent](type, listener, useCapture || false);
          }
          target.events[type].push(listener);
          return ret;
        }
      }

      function remove(element, type, listener, useCapture) {
        var i, elementIndex = indexOf(elements, element)
          , target = targets[elementIndex]
          , listeners, listenerIndex, wrapped = listener;
        if (!target || !target.events) {
          return;
        }
        if (useAttachEvent) {
          listeners = attachedListeners[elementIndex];
          listenerIndex = indexOf(listeners.supplied, listener);
          wrapped = listeners.wrapped[listenerIndex];
        }
        if (type === 'all') {
          for (type in target.events) {
            if (target.events.hasOwnProperty(type)) {
              remove(element, type, 'all');
            }
          }
          return;
        }
        if (target.events[type]) {
          var len = target.events[type].length;
          if (listener === 'all') {
            for (i = 0; i < len; i++) {
              remove(element, type, target.events[type][i], Boolean(useCapture));
            }
            return;
          } else {
            for (i = 0; i < len; i++) {
              if (target.events[type][i] === listener) {
                element[removeEvent](on + type, wrapped, useCapture || false);
                target.events[type].splice(i, 1);
                if (useAttachEvent && listeners) {
                  listeners.useCount[listenerIndex]--;
                  if (listeners.useCount[listenerIndex] === 0) {
                    listeners.supplied.splice(listenerIndex, 1);
                    listeners.wrapped.splice(listenerIndex, 1);
                    listeners.useCount.splice(listenerIndex, 1);
                  }
                }
                break;
              }
            }
          }
          if (target.events[type] && target.events[type].length === 0) {
            target.events[type] = null;
            target.typeCount--;
          }
        }
        if (!target.typeCount) {
          targets.splice(elementIndex, 1);
          elements.splice(elementIndex, 1);
          attachedListeners.splice(elementIndex, 1);
        }
      }

      function preventDef() {
        this.returnValue = false;
      }

      function stopProp() {
        this.cancelBubble = true;
      }

      function stopImmProp() {
        this.cancelBubble = true;
        this.immediatePropagationStopped = true;
      }
      return {
        add: add
        , remove: remove
        , useAttachEvent: useAttachEvent
        , _elements: elements
        , _targets: targets
        , _attachedListeners: attachedListeners
      };
    }());

  function blank() {}

  function isElement(o) {
    if (!o || (typeof o !== 'object')) {
      return false;
    }
    var _window = getWindow(o) || window;
    return (/object|function/.test(typeof _window.Element) ? o instanceof _window.Element : o.nodeType === 1 && typeof o.nodeName === "string");
  }

  function isWindow(thing) {
    return thing === window || !!(thing && thing.Window) && (thing instanceof thing.Window);
  }

  function isDocFrag(thing) {
    return !!thing && thing instanceof DocumentFragment;
  }

  function isArray(thing) {
    return isObject(thing) && (typeof thing.length !== undefined) && isFunction(thing.splice);
  }

  function isObject(thing) {
    return !!thing && (typeof thing === 'object');
  }

  function isFunction(thing) {
    return typeof thing === 'function';
  }

  function isNumber(thing) {
    return typeof thing === 'number';
  }

  function isBool(thing) {
    return typeof thing === 'boolean';
  }

  function isString(thing) {
    return typeof thing === 'string';
  }

  function trySelector(value) {
    if (!isString(value)) {
      return false;
    }
    document.querySelector(value);
    return true;
  }

  function extend(dest, source) {
    for (var prop in source) {
      dest[prop] = source[prop];
    }
    return dest;
  }
  var prefixedPropREs = {
    webkit: /(Movement[XY]|Radius[XY]|RotationAngle|Force)$/
  };

  function pointerExtend(dest, source) {
    for (var prop in source) {
      var deprecated = false;
      for (var vendor in prefixedPropREs) {
        if (prop.indexOf(vendor) === 0 && prefixedPropREs[vendor].test(prop)) {
          deprecated = true;
          break;
        }
      }
      if (!deprecated) {
        dest[prop] = source[prop];
      }
    }
    return dest;
  }

  function copyCoords(dest, src) {
    dest.page = dest.page || {};
    dest.page.x = src.page.x;
    dest.page.y = src.page.y;
    dest.client = dest.client || {};
    dest.client.x = src.client.x;
    dest.client.y = src.client.y;
    dest.timeStamp = src.timeStamp;
  }

  function setEventXY(targetObj, pointers, interaction) {
    var pointer = (pointers.length > 1 ? pointerAverage(pointers) : pointers[0]);
    getPageXY(pointer, tmpXY, interaction);
    targetObj.page.x = tmpXY.x;
    targetObj.page.y = tmpXY.y;
    getClientXY(pointer, tmpXY, interaction);
    targetObj.client.x = tmpXY.x;
    targetObj.client.y = tmpXY.y;
    targetObj.timeStamp = new Date()
      .getTime();
  }

  function setEventDeltas(targetObj, prev, cur) {
    targetObj.page.x = cur.page.x - prev.page.x;
    targetObj.page.y = cur.page.y - prev.page.y;
    targetObj.client.x = cur.client.x - prev.client.x;
    targetObj.client.y = cur.client.y - prev.client.y;
    targetObj.timeStamp = new Date()
      .getTime() - prev.timeStamp;
    var dt = Math.max(targetObj.timeStamp / 1000, 0.001);
    targetObj.page.speed = hypot(targetObj.page.x, targetObj.page.y) / dt;
    targetObj.page.vx = targetObj.page.x / dt;
    targetObj.page.vy = targetObj.page.y / dt;
    targetObj.client.speed = hypot(targetObj.client.x, targetObj.page.y) / dt;
    targetObj.client.vx = targetObj.client.x / dt;
    targetObj.client.vy = targetObj.client.y / dt;
  }

  function isNativePointer(pointer) {
    return (pointer instanceof window.Event || (supportsTouch && window.Touch && pointer instanceof window.Touch));
  }

  function getXY(type, pointer, xy) {
    xy = xy || {};
    type = type || 'page';
    xy.x = pointer[type + 'X'];
    xy.y = pointer[type + 'Y'];
    return xy;
  }

  function getPageXY(pointer, page) {
    page = page || {};
    if (isOperaMobile && isNativePointer(pointer)) {
      getXY('screen', pointer, page);
      page.x += window.scrollX;
      page.y += window.scrollY;
    } else {
      getXY('page', pointer, page);
    }
    return page;
  }

  function getClientXY(pointer, client) {
    client = client || {};
    if (isOperaMobile && isNativePointer(pointer)) {
      getXY('screen', pointer, client);
    } else {
      getXY('client', pointer, client);
    }
    return client;
  }

  function getScrollXY(win) {
    win = win || window;
    return {
      x: win.scrollX || win.document.documentElement.scrollLeft
      , y: win.scrollY || win.document.documentElement.scrollTop
    };
  }

  function getPointerId(pointer) {
    return isNumber(pointer.pointerId) ? pointer.pointerId : pointer.identifier;
  }

  function getActualElement(element) {
    return (element instanceof SVGElementInstance ? element.correspondingUseElement : element);
  }

  function getWindow(node) {
    if (isWindow(node)) {
      return node;
    }
    var rootNode = (node.ownerDocument || node);
    return rootNode.defaultView || rootNode.parentWindow || window;
  }

  function getElementClientRect(element) {
    var clientRect = (element instanceof SVGElement ? element.getBoundingClientRect() : element.getClientRects()[0]);
    return clientRect && {
      left: clientRect.left
      , right: clientRect.right
      , top: clientRect.top
      , bottom: clientRect.bottom
      , width: clientRect.width || clientRect.right - clientRect.left
      , height: clientRect.height || clientRect.bottom - clientRect.top
    };
  }

  function getElementRect(element) {
    var clientRect = getElementClientRect(element);
    if (!isIOS7 && clientRect) {
      var scroll = getScrollXY(getWindow(element));
      clientRect.left += scroll.x;
      clientRect.right += scroll.x;
      clientRect.top += scroll.y;
      clientRect.bottom += scroll.y;
    }
    return clientRect;
  }

  function getTouchPair(event) {
    var touches = [];
    if (isArray(event)) {
      touches[0] = event[0];
      touches[1] = event[1];
    } else {
      if (event.type === 'touchend') {
        if (event.touches.length === 1) {
          touches[0] = event.touches[0];
          touches[1] = event.changedTouches[0];
        } else if (event.touches.length === 0) {
          touches[0] = event.changedTouches[0];
          touches[1] = event.changedTouches[1];
        }
      } else {
        touches[0] = event.touches[0];
        touches[1] = event.touches[1];
      }
    }
    return touches;
  }

  function pointerAverage(pointers) {
    var average = {
      pageX: 0
      , pageY: 0
      , clientX: 0
      , clientY: 0
      , screenX: 0
      , screenY: 0
    };
    var prop;
    for (var i = 0; i < pointers.length; i++) {
      for (prop in average) {
        average[prop] += pointers[i][prop];
      }
    }
    for (prop in average) {
      average[prop] /= pointers.length;
    }
    return average;
  }

  function touchBBox(event) {
    if (!event.length && !(event.touches && event.touches.length > 1)) {
      return;
    }
    var touches = getTouchPair(event)
      , minX = Math.min(touches[0].pageX, touches[1].pageX)
      , minY = Math.min(touches[0].pageY, touches[1].pageY)
      , maxX = Math.max(touches[0].pageX, touches[1].pageX)
      , maxY = Math.max(touches[0].pageY, touches[1].pageY);
    return {
      x: minX
      , y: minY
      , left: minX
      , top: minY
      , width: maxX - minX
      , height: maxY - minY
    };
  }

  function touchDistance(event, deltaSource) {
    deltaSource = deltaSource || defaultOptions.deltaSource;
    var sourceX = deltaSource + 'X'
      , sourceY = deltaSource + 'Y'
      , touches = getTouchPair(event);
    var dx = touches[0][sourceX] - touches[1][sourceX]
      , dy = touches[0][sourceY] - touches[1][sourceY];
    return hypot(dx, dy);
  }

  function touchAngle(event, prevAngle, deltaSource) {
    deltaSource = deltaSource || defaultOptions.deltaSource;
    var sourceX = deltaSource + 'X'
      , sourceY = deltaSource + 'Y'
      , touches = getTouchPair(event)
      , dx = touches[0][sourceX] - touches[1][sourceX]
      , dy = touches[0][sourceY] - touches[1][sourceY]
      , angle = 180 * Math.atan(dy / dx) / Math.PI;
    if (isNumber(prevAngle)) {
      var dr = angle - prevAngle
        , drClamped = dr % 360;
      if (drClamped > 315) {
        angle -= 360 + (angle / 360) | 0 * 360;
      } else if (drClamped > 135) {
        angle -= 180 + (angle / 360) | 0 * 360;
      } else if (drClamped < -315) {
        angle += 360 + (angle / 360) | 0 * 360;
      } else if (drClamped < -135) {
        angle += 180 + (angle / 360) | 0 * 360;
      }
    }
    return angle;
  }

  function getOriginXY(interactable, element) {
    var origin = interactable ? interactable.options.origin : defaultOptions.origin;
    if (origin === 'parent') {
      origin = parentElement(element);
    } else if (origin === 'self') {
      origin = interactable.getRect(element);
    } else if (trySelector(origin)) {
      origin = closest(element, origin) || {
        x: 0
        , y: 0
      };
    }
    if (isFunction(origin)) {
      origin = origin(interactable && element);
    }
    if (isElement(origin)) {
      origin = getElementRect(origin);
    }
    origin.x = ('x' in origin) ? origin.x : origin.left;
    origin.y = ('y' in origin) ? origin.y : origin.top;
    return origin;
  }

  function _getQBezierValue(t, p1, p2, p3) {
    var iT = 1 - t;
    return iT * iT * p1 + 2 * iT * t * p2 + t * t * p3;
  }

  function getQuadraticCurvePoint(startX, startY, cpX, cpY, endX, endY, position) {
    return {
      x: _getQBezierValue(position, startX, cpX, endX)
      , y: _getQBezierValue(position, startY, cpY, endY)
    };
  }

  function easeOutQuad(t, b, c, d) {
    t /= d;
    return -c * t * (t - 2) + b;
  }

  function nodeContains(parent, child) {
    while (child) {
      if (child === parent) {
        return true;
      }
      child = child.parentNode;
    }
    return false;
  }

  function closest(child, selector) {
    var parent = parentElement(child);
    while (isElement(parent)) {
      if (matchesSelector(parent, selector)) {
        return parent;
      }
      parent = parentElement(parent);
    }
    return null;
  }

  function parentElement(node) {
    var parent = node.parentNode;
    if (isDocFrag(parent)) {
      while ((parent = parent.host) && isDocFrag(parent)) {}
      return parent;
    }
    return parent;
  }

  function inContext(interactable, element) {
    return interactable._context === element.ownerDocument || nodeContains(interactable._context, element);
  }

  function testIgnore(interactable, interactableElement, element) {
    var ignoreFrom = interactable.options.ignoreFrom;
    if (!ignoreFrom || !isElement(element)) {
      return false;
    }
    if (isString(ignoreFrom)) {
      return matchesUpTo(element, ignoreFrom, interactableElement);
    } else if (isElement(ignoreFrom)) {
      return nodeContains(ignoreFrom, element);
    }
    return false;
  }

  function testAllow(interactable, interactableElement, element) {
    var allowFrom = interactable.options.allowFrom;
    if (!allowFrom) {
      return true;
    }
    if (!isElement(element)) {
      return false;
    }
    if (isString(allowFrom)) {
      return matchesUpTo(element, allowFrom, interactableElement);
    } else if (isElement(allowFrom)) {
      return nodeContains(allowFrom, element);
    }
    return false;
  }

  function checkAxis(axis, interactable) {
    if (!interactable) {
      return false;
    }
    var thisAxis = interactable.options.drag.axis;
    return (axis === 'xy' || thisAxis === 'xy' || thisAxis === axis);
  }

  function checkSnap(interactable, action) {
    var options = interactable.options;
    if (/^resize/.test(action)) {
      action = 'resize';
    }
    return options[action].snap && options[action].snap.enabled;
  }

  function checkRestrict(interactable, action) {
    var options = interactable.options;
    if (/^resize/.test(action)) {
      action = 'resize';
    }
    return options[action].restrict && options[action].restrict.enabled;
  }

  function checkAutoScroll(interactable, action) {
    var options = interactable.options;
    if (/^resize/.test(action)) {
      action = 'resize';
    }
    return options[action].autoScroll && options[action].autoScroll.enabled;
  }

  function withinInteractionLimit(interactable, element, action) {
    var options = interactable.options
      , maxActions = options[action.name].max
      , maxPerElement = options[action.name].maxPerElement
      , activeInteractions = 0
      , targetCount = 0
      , targetElementCount = 0;
    for (var i = 0, len = interactions.length; i < len; i++) {
      var interaction = interactions[i]
        , otherAction = interaction.prepared.name
        , active = interaction.interacting();
      if (!active) {
        continue;
      }
      activeInteractions++;
      if (activeInteractions >= maxInteractions) {
        return false;
      }
      if (interaction.target !== interactable) {
        continue;
      }
      targetCount += (otherAction === action.name) | 0;
      if (targetCount >= maxActions) {
        return false;
      }
      if (interaction.element === element) {
        targetElementCount++;
        if (otherAction !== action.name || targetElementCount >= maxPerElement) {
          return false;
        }
      }
    }
    return maxInteractions > 0;
  }

  function indexOfDeepestElement(elements) {
    var dropzone, deepestZone = elements[0]
      , index = deepestZone ? 0 : -1
      , parent, deepestZoneParents = []
      , dropzoneParents = []
      , child, i, n;
    for (i = 1; i < elements.length; i++) {
      dropzone = elements[i];
      if (!dropzone || dropzone === deepestZone) {
        continue;
      }
      if (!deepestZone) {
        deepestZone = dropzone;
        index = i;
        continue;
      }
      if (dropzone.parentNode === dropzone.ownerDocument) {
        continue;
      } else if (deepestZone.parentNode === dropzone.ownerDocument) {
        deepestZone = dropzone;
        index = i;
        continue;
      }
      if (!deepestZoneParents.length) {
        parent = deepestZone;
        while (parent.parentNode && parent.parentNode !== parent.ownerDocument) {
          deepestZoneParents.unshift(parent);
          parent = parent.parentNode;
        }
      }
      if (deepestZone instanceof HTMLElement && dropzone instanceof SVGElement && !(dropzone instanceof SVGSVGElement)) {
        if (dropzone === deepestZone.parentNode) {
          continue;
        }
        parent = dropzone.ownerSVGElement;
      } else {
        parent = dropzone;
      }
      dropzoneParents = [];
      while (parent.parentNode !== parent.ownerDocument) {
        dropzoneParents.unshift(parent);
        parent = parent.parentNode;
      }
      n = 0;
      while (dropzoneParents[n] && dropzoneParents[n] === deepestZoneParents[n]) {
        n++;
      }
      var parents = [dropzoneParents[n - 1], dropzoneParents[n], deepestZoneParents[n]];
      child = parents[0].lastChild;
      while (child) {
        if (child === parents[1]) {
          deepestZone = dropzone;
          index = i;
          deepestZoneParents = [];
          break;
        } else if (child === parents[2]) {
          break;
        }
        child = child.previousSibling;
      }
    }
    return index;
  }

  function Interaction() {
    this.target = null;
    this.element = null;
    this.dropTarget = null;
    this.dropElement = null;
    this.prevDropTarget = null;
    this.prevDropElement = null;
    this.prepared = {
      name: null
      , axis: null
      , edges: null
    };
    this.matches = [];
    this.matchElements = [];
    this.inertiaStatus = {
      active: false
      , smoothEnd: false
      , ending: false
      , startEvent: null
      , upCoords: {}
      , xe: 0
      , ye: 0
      , sx: 0
      , sy: 0
      , t0: 0
      , vx0: 0
      , vys: 0
      , duration: 0
      , resumeDx: 0
      , resumeDy: 0
      , lambda_v0: 0
      , one_ve_v0: 0
      , i: null
    };
    if (isFunction(Function.prototype.bind)) {
      this.boundInertiaFrame = this.inertiaFrame.bind(this);
      this.boundSmoothEndFrame = this.smoothEndFrame.bind(this);
    } else {
      var that = this;
      this.boundInertiaFrame = function () {
        return that.inertiaFrame();
      };
      this.boundSmoothEndFrame = function () {
        return that.smoothEndFrame();
      };
    }
    this.activeDrops = {
      dropzones: []
      , elements: []
      , rects: []
    };
    this.pointers = [];
    this.pointerIds = [];
    this.downTargets = [];
    this.downTimes = [];
    this.holdTimers = [];
    this.prevCoords = {
      page: {
        x: 0
        , y: 0
      }
      , client: {
        x: 0
        , y: 0
      }
      , timeStamp: 0
    };
    this.curCoords = {
      page: {
        x: 0
        , y: 0
      }
      , client: {
        x: 0
        , y: 0
      }
      , timeStamp: 0
    };
    this.startCoords = {
      page: {
        x: 0
        , y: 0
      }
      , client: {
        x: 0
        , y: 0
      }
      , timeStamp: 0
    };
    this.pointerDelta = {
      page: {
        x: 0
        , y: 0
        , vx: 0
        , vy: 0
        , speed: 0
      }
      , client: {
        x: 0
        , y: 0
        , vx: 0
        , vy: 0
        , speed: 0
      }
      , timeStamp: 0
    };
    this.downEvent = null;
    this.downPointer = {};
    this._eventTarget = null;
    this._curEventTarget = null;
    this.prevEvent = null;
    this.tapTime = 0;
    this.prevTap = null;
    this.startOffset = {
      left: 0
      , right: 0
      , top: 0
      , bottom: 0
    };
    this.restrictOffset = {
      left: 0
      , right: 0
      , top: 0
      , bottom: 0
    };
    this.snapOffsets = [];
    this.gesture = {
      start: {
        x: 0
        , y: 0
      }
      , startDistance: 0
      , prevDistance: 0
      , distance: 0
      , scale: 1
      , startAngle: 0
      , prevAngle: 0
    };
    this.snapStatus = {
      x: 0
      , y: 0
      , dx: 0
      , dy: 0
      , realX: 0
      , realY: 0
      , snappedX: 0
      , snappedY: 0
      , targets: []
      , locked: false
      , changed: false
    };
    this.restrictStatus = {
      dx: 0
      , dy: 0
      , restrictedX: 0
      , restrictedY: 0
      , snap: null
      , restricted: false
      , changed: false
    };
    this.restrictStatus.snap = this.snapStatus;
    this.pointerIsDown = false;
    this.pointerWasMoved = false;
    this.gesturing = false;
    this.dragging = false;
    this.resizing = false;
    this.resizeAxes = 'xy';
    this.mouse = false;
    interactions.push(this);
  }
  Interaction.prototype = {
    getPageXY: function (pointer, xy) {
      return getPageXY(pointer, xy, this);
    }
    , getClientXY: function (pointer, xy) {
      return getClientXY(pointer, xy, this);
    }
    , setEventXY: function (target, ptr) {
      return setEventXY(target, ptr, this);
    }
    , pointerOver: function (pointer, event, eventTarget) {
      if (this.prepared.name || !this.mouse) {
        return;
      }
      var curMatches = []
        , curMatchElements = []
        , prevTargetElement = this.element;
      this.addPointer(pointer);
      if (this.target && (testIgnore(this.target, this.element, eventTarget) || !testAllow(this.target, this.element, eventTarget))) {
        this.target = null;
        this.element = null;
        this.matches = [];
        this.matchElements = [];
      }
      var elementInteractable = interactables.get(eventTarget)
        , elementAction = (elementInteractable && !testIgnore(elementInteractable, eventTarget, eventTarget) && testAllow(elementInteractable, eventTarget, eventTarget) && validateAction(elementInteractable.getAction(pointer, event, this, eventTarget), elementInteractable));
      if (elementAction && !withinInteractionLimit(elementInteractable, eventTarget, elementAction)) {
        elementAction = null;
      }

      function pushCurMatches(interactable, selector) {
        if (interactable && inContext(interactable, eventTarget) && !testIgnore(interactable, eventTarget, eventTarget) && testAllow(interactable, eventTarget, eventTarget) && matchesSelector(eventTarget, selector)) {
          curMatches.push(interactable);
          curMatchElements.push(eventTarget);
        }
      }
      if (elementAction) {
        this.target = elementInteractable;
        this.element = eventTarget;
        this.matches = [];
        this.matchElements = [];
      } else {
        interactables.forEachSelector(pushCurMatches);
        if (this.validateSelector(pointer, event, curMatches, curMatchElements)) {
          this.matches = curMatches;
          this.matchElements = curMatchElements;
          this.pointerHover(pointer, event, this.matches, this.matchElements);
          events.add(eventTarget, PointerEvent ? pEventTypes.move : 'mousemove', listeners.pointerHover);
        } else if (this.target) {
          if (nodeContains(prevTargetElement, eventTarget)) {
            this.pointerHover(pointer, event, this.matches, this.matchElements);
            events.add(this.element, PointerEvent ? pEventTypes.move : 'mousemove', listeners.pointerHover);
          } else {
            this.target = null;
            this.element = null;
            this.matches = [];
            this.matchElements = [];
          }
        }
      }
    }
    , pointerHover: function (pointer, event, eventTarget, curEventTarget, matches, matchElements) {
      var target = this.target;
      if (!this.prepared.name && this.mouse) {
        var action;
        this.setEventXY(this.curCoords, [pointer]);
        if (matches) {
          action = this.validateSelector(pointer, event, matches, matchElements);
        } else if (target) {
          action = validateAction(target.getAction(this.pointers[0], event, this, this.element), this.target);
        }
        if (target && target.options.styleCursor) {
          if (action) {
            target._doc.documentElement.style.cursor = getActionCursor(action);
          } else {
            target._doc.documentElement.style.cursor = '';
          }
        }
      } else if (this.prepared.name) {
        this.checkAndPreventDefault(event, target, this.element);
      }
    }
    , pointerOut: function (pointer, event, eventTarget) {
      if (this.prepared.name) {
        return;
      }
      if (!interactables.get(eventTarget)) {
        events.remove(eventTarget, PointerEvent ? pEventTypes.move : 'mousemove', listeners.pointerHover);
      }
      if (this.target && this.target.options.styleCursor && !this.interacting()) {
        this.target._doc.documentElement.style.cursor = '';
      }
    }
    , selectorDown: function (pointer, event, eventTarget, curEventTarget) {
      var that = this
        , eventCopy = events.useAttachEvent ? extend({}, event) : event
        , element = eventTarget
        , pointerIndex = this.addPointer(pointer)
        , action;
      this.holdTimers[pointerIndex] = setTimeout(function () {
        that.pointerHold(events.useAttachEvent ? eventCopy : pointer, eventCopy, eventTarget, curEventTarget);
      }, defaultOptions._holdDuration);
      this.pointerIsDown = true;
      if (this.inertiaStatus.active && this.target.selector) {
        while (isElement(element)) {
          if (element === this.element && validateAction(this.target.getAction(pointer, event, this, this.element), this.target)
            .name === this.prepared.name) {
            cancelFrame(this.inertiaStatus.i);
            this.inertiaStatus.active = false;
            this.collectEventTargets(pointer, event, eventTarget, 'down');
            return;
          }
          element = parentElement(element);
        }
      }
      if (this.interacting()) {
        this.collectEventTargets(pointer, event, eventTarget, 'down');
        return;
      }

      function pushMatches(interactable, selector, context) {
        var elements = ie8MatchesSelector ? context.querySelectorAll(selector) : undefined;
        if (inContext(interactable, element) && !testIgnore(interactable, element, eventTarget) && testAllow(interactable, element, eventTarget) && matchesSelector(element, selector, elements)) {
          that.matches.push(interactable);
          that.matchElements.push(element);
        }
      }
      this.setEventXY(this.curCoords, [pointer]);
      this.downEvent = event;
      while (isElement(element) && !action) {
        this.matches = [];
        this.matchElements = [];
        interactables.forEachSelector(pushMatches);
        action = this.validateSelector(pointer, event, this.matches, this.matchElements);
        element = parentElement(element);
      }
      if (action) {
        this.prepared.name = action.name;
        this.prepared.axis = action.axis;
        this.prepared.edges = action.edges;
        this.collectEventTargets(pointer, event, eventTarget, 'down');
        return this.pointerDown(pointer, event, eventTarget, curEventTarget, action);
      } else {
        this.downTimes[pointerIndex] = new Date()
          .getTime();
        this.downTargets[pointerIndex] = eventTarget;
        pointerExtend(this.downPointer, pointer);
        copyCoords(this.prevCoords, this.curCoords);
        this.pointerWasMoved = false;
      }
      this.collectEventTargets(pointer, event, eventTarget, 'down');
    }
    , pointerDown: function (pointer, event, eventTarget, curEventTarget, forceAction) {
      if (!forceAction && !this.inertiaStatus.active && this.pointerWasMoved && this.prepared.name) {
        this.checkAndPreventDefault(event, this.target, this.element);
        return;
      }
      this.pointerIsDown = true;
      this.downEvent = event;
      var pointerIndex = this.addPointer(pointer)
        , action;
      if (this.pointerIds.length > 1 && this.target._element === this.element) {
        var newAction = validateAction(forceAction || this.target.getAction(pointer, event, this, this.element), this.target);
        if (withinInteractionLimit(this.target, this.element, newAction)) {
          action = newAction;
        }
        this.prepared.name = null;
      } else if (!this.prepared.name) {
        var interactable = interactables.get(curEventTarget);
        if (interactable && !testIgnore(interactable, curEventTarget, eventTarget) && testAllow(interactable, curEventTarget, eventTarget) && (action = validateAction(forceAction || interactable.getAction(pointer, event, this, curEventTarget), interactable, eventTarget)) && withinInteractionLimit(interactable, curEventTarget, action)) {
          this.target = interactable;
          this.element = curEventTarget;
        }
      }
      var target = this.target
        , options = target && target.options;
      if (target && (forceAction || !this.prepared.name)) {
        action = action || validateAction(forceAction || target.getAction(pointer, event, this, curEventTarget), target, this.element);
        this.setEventXY(this.startCoords, this.pointers);
        if (!action) {
          return;
        }
        if (options.styleCursor) {
          target._doc.documentElement.style.cursor = getActionCursor(action);
        }
        this.resizeAxes = action.name === 'resize' ? action.axis : null;
        if (action === 'gesture' && this.pointerIds.length < 2) {
          action = null;
        }
        this.prepared.name = action.name;
        this.prepared.axis = action.axis;
        this.prepared.edges = action.edges;
        this.snapStatus.snappedX = this.snapStatus.snappedY = this.restrictStatus.restrictedX = this.restrictStatus.restrictedY = NaN;
        this.downTimes[pointerIndex] = new Date()
          .getTime();
        this.downTargets[pointerIndex] = eventTarget;
        pointerExtend(this.downPointer, pointer);
        copyCoords(this.prevCoords, this.startCoords);
        this.pointerWasMoved = false;
        this.checkAndPreventDefault(event, target, this.element);
      } else if (this.inertiaStatus.active && curEventTarget === this.element && validateAction(target.getAction(pointer, event, this, this.element), target)
        .name === this.prepared.name) {
        cancelFrame(this.inertiaStatus.i);
        this.inertiaStatus.active = false;
        this.checkAndPreventDefault(event, target, this.element);
      }
    }
    , setModifications: function (coords, preEnd) {
      var target = this.target
        , shouldMove = true
        , shouldSnap = checkSnap(target, this.prepared.name) && (!target.options[this.prepared.name].snap.endOnly || preEnd)
        , shouldRestrict = checkRestrict(target, this.prepared.name) && (!target.options[this.prepared.name].restrict.endOnly || preEnd);
      if (shouldSnap) {
        this.setSnapping(coords);
      } else {
        this.snapStatus.locked = false;
      }
      if (shouldRestrict) {
        this.setRestriction(coords);
      } else {
        this.restrictStatus.restricted = false;
      }
      if (shouldSnap && this.snapStatus.locked && !this.snapStatus.changed) {
        shouldMove = shouldRestrict && this.restrictStatus.restricted && this.restrictStatus.changed;
      } else if (shouldRestrict && this.restrictStatus.restricted && !this.restrictStatus.changed) {
        shouldMove = false;
      }
      return shouldMove;
    }
    , setStartOffsets: function (action, interactable, element) {
      var rect = interactable.getRect(element)
        , origin = getOriginXY(interactable, element)
        , snap = interactable.options[this.prepared.name].snap
        , restrict = interactable.options[this.prepared.name].restrict
        , width, height;
      if (rect) {
        this.startOffset.left = this.startCoords.page.x - rect.left;
        this.startOffset.top = this.startCoords.page.y - rect.top;
        this.startOffset.right = rect.right - this.startCoords.page.x;
        this.startOffset.bottom = rect.bottom - this.startCoords.page.y;
        if ('width' in rect) {
          width = rect.width;
        } else {
          width = rect.right - rect.left;
        }
        if ('height' in rect) {
          height = rect.height;
        } else {
          height = rect.bottom - rect.top;
        }
      } else {
        this.startOffset.left = this.startOffset.top = this.startOffset.right = this.startOffset.bottom = 0;
      }
      this.snapOffsets.splice(0);
      var snapOffset = snap && snap.offset === 'startCoords' ? {
        x: this.startCoords.page.x - origin.x
        , y: this.startCoords.page.y - origin.y
      } : snap && snap.offset || {
        x: 0
        , y: 0
      };
      if (rect && snap && snap.relativePoints && snap.relativePoints.length) {
        for (var i = 0; i < snap.relativePoints.length; i++) {
          this.snapOffsets.push({
            x: this.startOffset.left - (width * snap.relativePoints[i].x) + snapOffset.x
            , y: this.startOffset.top - (height * snap.relativePoints[i].y) + snapOffset.y
          });
        }
      } else {
        this.snapOffsets.push(snapOffset);
      }
      if (rect && restrict.elementRect) {
        this.restrictOffset.left = this.startOffset.left - (width * restrict.elementRect.left);
        this.restrictOffset.top = this.startOffset.top - (height * restrict.elementRect.top);
        this.restrictOffset.right = this.startOffset.right - (width * (1 - restrict.elementRect.right));
        this.restrictOffset.bottom = this.startOffset.bottom - (height * (1 - restrict.elementRect.bottom));
      } else {
        this.restrictOffset.left = this.restrictOffset.top = this.restrictOffset.right = this.restrictOffset.bottom = 0;
      }
    }
    , start: function (action, interactable, element) {
      if (this.interacting() || !this.pointerIsDown || this.pointerIds.length < (action.name === 'gesture' ? 2 : 1)) {
        return;
      }
      if (indexOf(interactions, this) === -1) {
        interactions.push(this);
      }
      if (!this.prepared.name) {
        this.setEventXY(this.startCoords);
      }
      this.prepared.name = action.name;
      this.prepared.axis = action.axis;
      this.prepared.edges = action.edges;
      this.target = interactable;
      this.element = element;
      this.setStartOffsets(action.name, interactable, element);
      this.setModifications(this.startCoords.page);
      this.prevEvent = this[this.prepared.name + 'Start'](this.downEvent);
    }
    , pointerMove: function (pointer, event, eventTarget, curEventTarget, preEnd) {
      if (this.inertiaStatus.active) {
        var pageUp = this.inertiaStatus.upCoords.page;
        var clientUp = this.inertiaStatus.upCoords.client;
        var inertiaPosition = {
          pageX: pageUp.x + this.inertiaStatus.sx
          , pageY: pageUp.y + this.inertiaStatus.sy
          , clientX: clientUp.x + this.inertiaStatus.sx
          , clientY: clientUp.y + this.inertiaStatus.sy
        };
        this.setEventXY(this.curCoords, [inertiaPosition]);
      } else {
        this.recordPointer(pointer);
        this.setEventXY(this.curCoords, this.pointers);
      }
      var duplicateMove = (this.curCoords.page.x === this.prevCoords.page.x && this.curCoords.page.y === this.prevCoords.page.y && this.curCoords.client.x === this.prevCoords.client.x && this.curCoords.client.y === this.prevCoords.client.y);
      var dx, dy, pointerIndex = this.mouse ? 0 : indexOf(this.pointerIds, getPointerId(pointer));
      if (this.pointerIsDown && !this.pointerWasMoved) {
        dx = this.curCoords.client.x - this.startCoords.client.x;
        dy = this.curCoords.client.y - this.startCoords.client.y;
        this.pointerWasMoved = hypot(dx, dy) > pointerMoveTolerance;
      }
      if (!duplicateMove && (!this.pointerIsDown || this.pointerWasMoved)) {
        if (this.pointerIsDown) {
          clearTimeout(this.holdTimers[pointerIndex]);
        }
        this.collectEventTargets(pointer, event, eventTarget, 'move');
      }
      if (!this.pointerIsDown) {
        return;
      }
      if (duplicateMove && this.pointerWasMoved && !preEnd) {
        this.checkAndPreventDefault(event, this.target, this.element);
        return;
      }
      setEventDeltas(this.pointerDelta, this.prevCoords, this.curCoords);
      if (!this.prepared.name) {
        return;
      }
      if (this.pointerWasMoved && (!this.inertiaStatus.active || (pointer instanceof InteractEvent && /inertiastart/.test(pointer.type)))) {
        if (!this.interacting()) {
          setEventDeltas(this.pointerDelta, this.prevCoords, this.curCoords);
          if (this.prepared.name === 'drag') {
            var absX = Math.abs(dx)
              , absY = Math.abs(dy)
              , targetAxis = this.target.options.drag.axis
              , axis = (absX > absY ? 'x' : absX < absY ? 'y' : 'xy');
            if (axis !== 'xy' && targetAxis !== 'xy' && targetAxis !== axis) {
              this.prepared.name = null;
              var element = eventTarget;
              while (isElement(element)) {
                var elementInteractable = interactables.get(element);
                if (elementInteractable && elementInteractable !== this.target && !elementInteractable.options.drag.manualStart && elementInteractable.getAction(this.downPointer, this.downEvent, this, element)
                  .name === 'drag' && checkAxis(axis, elementInteractable)) {
                  this.prepared.name = 'drag';
                  this.target = elementInteractable;
                  this.element = element;
                  break;
                }
                element = parentElement(element);
              }
              if (!this.prepared.name) {
                var thisInteraction = this;
                var getDraggable = function (interactable, selector, context) {
                  var elements = ie8MatchesSelector ? context.querySelectorAll(selector) : undefined;
                  if (interactable === thisInteraction.target) {
                    return;
                  }
                  if (inContext(interactable, eventTarget) && !interactable.options.drag.manualStart && !testIgnore(interactable, element, eventTarget) && testAllow(interactable, element, eventTarget) && matchesSelector(element, selector, elements) && interactable.getAction(thisInteraction.downPointer, thisInteraction.downEvent, thisInteraction, element)
                    .name === 'drag' && checkAxis(axis, interactable) && withinInteractionLimit(interactable, element, 'drag')) {
                    return interactable;
                  }
                };
                element = eventTarget;
                while (isElement(element)) {
                  var selectorInteractable = interactables.forEachSelector(getDraggable);
                  if (selectorInteractable) {
                    this.prepared.name = 'drag';
                    this.target = selectorInteractable;
                    this.element = element;
                    break;
                  }
                  element = parentElement(element);
                }
              }
            }
          }
        }
        var starting = !!this.prepared.name && !this.interacting();
        if (starting && (this.target.options[this.prepared.name].manualStart || !withinInteractionLimit(this.target, this.element, this.prepared))) {
          this.stop(event);
          return;
        }
        if (this.prepared.name && this.target) {
          if (starting) {
            this.start(this.prepared, this.target, this.element);
          }
          var shouldMove = this.setModifications(this.curCoords.page, preEnd);
          if (shouldMove || starting) {
            this.prevEvent = this[this.prepared.name + 'Move'](event);
          }
          this.checkAndPreventDefault(event, this.target, this.element);
        }
      }
      copyCoords(this.prevCoords, this.curCoords);
      if (this.dragging || this.resizing) {
        this.autoScrollMove(pointer);
      }
    }
    , dragStart: function (event) {
      var dragEvent = new InteractEvent(this, event, 'drag', 'start', this.element);
      this.dragging = true;
      this.target.fire(dragEvent);
      this.activeDrops.dropzones = [];
      this.activeDrops.elements = [];
      this.activeDrops.rects = [];
      if (!this.dynamicDrop) {
        this.setActiveDrops(this.element);
      }
      var dropEvents = this.getDropEvents(event, dragEvent);
      if (dropEvents.activate) {
        this.fireActiveDrops(dropEvents.activate);
      }
      return dragEvent;
    }
    , dragMove: function (event) {
      var target = this.target
        , dragEvent = new InteractEvent(this, event, 'drag', 'move', this.element)
        , draggableElement = this.element
        , drop = this.getDrop(dragEvent, event, draggableElement);
      this.dropTarget = drop.dropzone;
      this.dropElement = drop.element;
      var dropEvents = this.getDropEvents(event, dragEvent);
      target.fire(dragEvent);
      if (dropEvents.leave) {
        this.prevDropTarget.fire(dropEvents.leave);
      }
      if (dropEvents.enter) {
        this.dropTarget.fire(dropEvents.enter);
      }
      if (dropEvents.move) {
        this.dropTarget.fire(dropEvents.move);
      }
      this.prevDropTarget = this.dropTarget;
      this.prevDropElement = this.dropElement;
      return dragEvent;
    }
    , resizeStart: function (event) {
      var resizeEvent = new InteractEvent(this, event, 'resize', 'start', this.element);
      if (this.prepared.edges) {
        var startRect = this.target.getRect(this.element);
        if (this.target.options.resize.square || this.target.options.resize.preserveAspectRatio) {
          var linkedEdges = extend({}, this.prepared.edges);
          linkedEdges.top = linkedEdges.top || (linkedEdges.left && !linkedEdges.bottom);
          linkedEdges.left = linkedEdges.left || (linkedEdges.top && !linkedEdges.right);
          linkedEdges.bottom = linkedEdges.bottom || (linkedEdges.right && !linkedEdges.top);
          linkedEdges.right = linkedEdges.right || (linkedEdges.bottom && !linkedEdges.left);
          this.prepared._linkedEdges = linkedEdges;
        } else {
          this.prepared._linkedEdges = null;
        }
        if (this.target.options.resize.preserveAspectRatio) {
          this.resizeStartAspectRatio = startRect.width / startRect.height;
        }
        this.resizeRects = {
          start: startRect
          , current: extend({}, startRect)
          , restricted: extend({}, startRect)
          , previous: extend({}, startRect)
          , delta: {
            left: 0
            , right: 0
            , width: 0
            , top: 0
            , bottom: 0
            , height: 0
          }
        };
        resizeEvent.rect = this.resizeRects.restricted;
        resizeEvent.deltaRect = this.resizeRects.delta;
      }
      this.target.fire(resizeEvent);
      this.resizing = true;
      return resizeEvent;
    }
    , resizeMove: function (event) {
      var resizeEvent = new InteractEvent(this, event, 'resize', 'move', this.element);
      var edges = this.prepared.edges
        , invert = this.target.options.resize.invert
        , invertible = invert === 'reposition' || invert === 'negate';
      if (edges) {
        var dx = resizeEvent.dx
          , dy = resizeEvent.dy
          , start = this.resizeRects.start
          , current = this.resizeRects.current
          , restricted = this.resizeRects.restricted
          , delta = this.resizeRects.delta
          , previous = extend(this.resizeRects.previous, restricted)
          , originalEdges = edges;
        if (this.target.options.resize.preserveAspectRatio) {
          var resizeStartAspectRatio = this.resizeStartAspectRatio;
          edges = this.prepared._linkedEdges;
          if ((originalEdges.left && originalEdges.bottom) || (originalEdges.right && originalEdges.top)) {
            dy = -dx / resizeStartAspectRatio;
          } else if (originalEdges.left || originalEdges.right) {
            dy = dx / resizeStartAspectRatio;
          } else if (originalEdges.top || originalEdges.bottom) {
            dx = dy * resizeStartAspectRatio;
          }
        } else if (this.target.options.resize.square) {
          edges = this.prepared._linkedEdges;
          if ((originalEdges.left && originalEdges.bottom) || (originalEdges.right && originalEdges.top)) {
            dy = -dx;
          } else if (originalEdges.left || originalEdges.right) {
            dy = dx;
          } else if (originalEdges.top || originalEdges.bottom) {
            dx = dy;
          }
        }
        if (edges.top) {
          current.top += dy;
        }
        if (edges.bottom) {
          current.bottom += dy;
        }
        if (edges.left) {
          current.left += dx;
        }
        if (edges.right) {
          current.right += dx;
        }
        if (invertible) {
          extend(restricted, current);
          if (invert === 'reposition') {
            var swap;
            if (restricted.top > restricted.bottom) {
              swap = restricted.top;
              restricted.top = restricted.bottom;
              restricted.bottom = swap;
            }
            if (restricted.left > restricted.right) {
              swap = restricted.left;
              restricted.left = restricted.right;
              restricted.right = swap;
            }
          }
        } else {
          restricted.top = Math.min(current.top, start.bottom);
          restricted.bottom = Math.max(current.bottom, start.top);
          restricted.left = Math.min(current.left, start.right);
          restricted.right = Math.max(current.right, start.left);
        }
        restricted.width = restricted.right - restricted.left;
        restricted.height = restricted.bottom - restricted.top;
        for (var edge in restricted) {
          delta[edge] = restricted[edge] - previous[edge];
        }
        resizeEvent.edges = this.prepared.edges;
        resizeEvent.rect = restricted;
        resizeEvent.deltaRect = delta;
      }
      this.target.fire(resizeEvent);
      return resizeEvent;
    }
    , gestureStart: function (event) {
      var gestureEvent = new InteractEvent(this, event, 'gesture', 'start', this.element);
      gestureEvent.ds = 0;
      this.gesture.startDistance = this.gesture.prevDistance = gestureEvent.distance;
      this.gesture.startAngle = this.gesture.prevAngle = gestureEvent.angle;
      this.gesture.scale = 1;
      this.gesturing = true;
      this.target.fire(gestureEvent);
      return gestureEvent;
    }
    , gestureMove: function (event) {
      if (!this.pointerIds.length) {
        return this.prevEvent;
      }
      var gestureEvent;
      gestureEvent = new InteractEvent(this, event, 'gesture', 'move', this.element);
      gestureEvent.ds = gestureEvent.scale - this.gesture.scale;
      this.target.fire(gestureEvent);
      this.gesture.prevAngle = gestureEvent.angle;
      this.gesture.prevDistance = gestureEvent.distance;
      if (gestureEvent.scale !== Infinity && gestureEvent.scale !== null && gestureEvent.scale !== undefined && !isNaN(gestureEvent.scale)) {
        this.gesture.scale = gestureEvent.scale;
      }
      return gestureEvent;
    }
    , pointerHold: function (pointer, event, eventTarget) {
      this.collectEventTargets(pointer, event, eventTarget, 'hold');
    }
    , pointerUp: function (pointer, event, eventTarget, curEventTarget) {
      var pointerIndex = this.mouse ? 0 : indexOf(this.pointerIds, getPointerId(pointer));
      clearTimeout(this.holdTimers[pointerIndex]);
      this.collectEventTargets(pointer, event, eventTarget, 'up');
      this.collectEventTargets(pointer, event, eventTarget, 'tap');
      this.pointerEnd(pointer, event, eventTarget, curEventTarget);
      this.removePointer(pointer);
    }
    , pointerCancel: function (pointer, event, eventTarget, curEventTarget) {
      var pointerIndex = this.mouse ? 0 : indexOf(this.pointerIds, getPointerId(pointer));
      clearTimeout(this.holdTimers[pointerIndex]);
      this.collectEventTargets(pointer, event, eventTarget, 'cancel');
      this.pointerEnd(pointer, event, eventTarget, curEventTarget);
      this.removePointer(pointer);
    }
    , ie8Dblclick: function (pointer, event, eventTarget) {
      if (this.prevTap && event.clientX === this.prevTap.clientX && event.clientY === this.prevTap.clientY && eventTarget === this.prevTap.target) {
        this.downTargets[0] = eventTarget;
        this.downTimes[0] = new Date()
          .getTime();
        this.collectEventTargets(pointer, event, eventTarget, 'tap');
      }
    }
    , pointerEnd: function (pointer, event, eventTarget, curEventTarget) {
      var endEvent, target = this.target
        , options = target && target.options
        , inertiaOptions = options && this.prepared.name && options[this.prepared.name].inertia
        , inertiaStatus = this.inertiaStatus;
      if (this.interacting()) {
        if (inertiaStatus.active && !inertiaStatus.ending) {
          return;
        }
        var pointerSpeed, now = new Date()
          .getTime()
          , inertiaPossible = false
          , inertia = false
          , smoothEnd = false
          , endSnap = checkSnap(target, this.prepared.name) && options[this.prepared.name].snap.endOnly
          , endRestrict = checkRestrict(target, this.prepared.name) && options[this.prepared.name].restrict.endOnly
          , dx = 0
          , dy = 0
          , startEvent;
        if (this.dragging) {
          if (options.drag.axis === 'x') {
            pointerSpeed = Math.abs(this.pointerDelta.client.vx);
          } else if (options.drag.axis === 'y') {
            pointerSpeed = Math.abs(this.pointerDelta.client.vy);
          } else {
            pointerSpeed = this.pointerDelta.client.speed;
          }
        } else {
          pointerSpeed = this.pointerDelta.client.speed;
        }
        inertiaPossible = (inertiaOptions && inertiaOptions.enabled && this.prepared.name !== 'gesture' && event !== inertiaStatus.startEvent);
        inertia = (inertiaPossible && (now - this.curCoords.timeStamp) < 50 && pointerSpeed > inertiaOptions.minSpeed && pointerSpeed > inertiaOptions.endSpeed);
        if (inertiaPossible && !inertia && (endSnap || endRestrict)) {
          var snapRestrict = {};
          snapRestrict.snap = snapRestrict.restrict = snapRestrict;
          if (endSnap) {
            this.setSnapping(this.curCoords.page, snapRestrict);
            if (snapRestrict.locked) {
              dx += snapRestrict.dx;
              dy += snapRestrict.dy;
            }
          }
          if (endRestrict) {
            this.setRestriction(this.curCoords.page, snapRestrict);
            if (snapRestrict.restricted) {
              dx += snapRestrict.dx;
              dy += snapRestrict.dy;
            }
          }
          if (dx || dy) {
            smoothEnd = true;
          }
        }
        if (inertia || smoothEnd) {
          copyCoords(inertiaStatus.upCoords, this.curCoords);
          this.pointers[0] = inertiaStatus.startEvent = startEvent = new InteractEvent(this, event, this.prepared.name, 'inertiastart', this.element);
          inertiaStatus.t0 = now;
          target.fire(inertiaStatus.startEvent);
          if (inertia) {
            inertiaStatus.vx0 = this.pointerDelta.client.vx;
            inertiaStatus.vy0 = this.pointerDelta.client.vy;
            inertiaStatus.v0 = pointerSpeed;
            this.calcInertia(inertiaStatus);
            var page = extend({}, this.curCoords.page)
              , origin = getOriginXY(target, this.element)
              , statusObject;
            page.x = page.x + inertiaStatus.xe - origin.x;
            page.y = page.y + inertiaStatus.ye - origin.y;
            statusObject = {
              useStatusXY: true
              , x: page.x
              , y: page.y
              , dx: 0
              , dy: 0
              , snap: null
            };
            statusObject.snap = statusObject;
            dx = dy = 0;
            if (endSnap) {
              var snap = this.setSnapping(this.curCoords.page, statusObject);
              if (snap.locked) {
                dx += snap.dx;
                dy += snap.dy;
              }
            }
            if (endRestrict) {
              var restrict = this.setRestriction(this.curCoords.page, statusObject);
              if (restrict.restricted) {
                dx += restrict.dx;
                dy += restrict.dy;
              }
            }
            inertiaStatus.modifiedXe += dx;
            inertiaStatus.modifiedYe += dy;
            inertiaStatus.i = reqFrame(this.boundInertiaFrame);
          } else {
            inertiaStatus.smoothEnd = true;
            inertiaStatus.xe = dx;
            inertiaStatus.ye = dy;
            inertiaStatus.sx = inertiaStatus.sy = 0;
            inertiaStatus.i = reqFrame(this.boundSmoothEndFrame);
          }
          inertiaStatus.active = true;
          return;
        }
        if (endSnap || endRestrict) {
          this.pointerMove(pointer, event, eventTarget, curEventTarget, true);
        }
      }
      if (this.dragging) {
        endEvent = new InteractEvent(this, event, 'drag', 'end', this.element);
        var draggableElement = this.element
          , drop = this.getDrop(endEvent, event, draggableElement);
        this.dropTarget = drop.dropzone;
        this.dropElement = drop.element;
        var dropEvents = this.getDropEvents(event, endEvent);
        if (dropEvents.leave) {
          this.prevDropTarget.fire(dropEvents.leave);
        }
        if (dropEvents.enter) {
          this.dropTarget.fire(dropEvents.enter);
        }
        if (dropEvents.drop) {
          this.dropTarget.fire(dropEvents.drop);
        }
        if (dropEvents.deactivate) {
          this.fireActiveDrops(dropEvents.deactivate);
        }
        target.fire(endEvent);
      } else if (this.resizing) {
        endEvent = new InteractEvent(this, event, 'resize', 'end', this.element);
        target.fire(endEvent);
      } else if (this.gesturing) {
        endEvent = new InteractEvent(this, event, 'gesture', 'end', this.element);
        target.fire(endEvent);
      }
      this.stop(event);
    }
    , collectDrops: function (element) {
      var drops = []
        , elements = []
        , i;
      element = element || this.element;
      for (i = 0; i < interactables.length; i++) {
        if (!interactables[i].options.drop.enabled) {
          continue;
        }
        var current = interactables[i]
          , accept = current.options.drop.accept;
        if ((isElement(accept) && accept !== element) || (isString(accept) && !matchesSelector(element, accept))) {
          continue;
        }
        var dropElements = current.selector ? current._context.querySelectorAll(current.selector) : [current._element];
        for (var j = 0, len = dropElements.length; j < len; j++) {
          var currentElement = dropElements[j];
          if (currentElement === element) {
            continue;
          }
          drops.push(current);
          elements.push(currentElement);
        }
      }
      return {
        dropzones: drops
        , elements: elements
      };
    }
    , fireActiveDrops: function (event) {
      var i, current, currentElement, prevElement;
      for (i = 0; i < this.activeDrops.dropzones.length; i++) {
        current = this.activeDrops.dropzones[i];
        currentElement = this.activeDrops.elements[i];
        if (currentElement !== prevElement) {
          event.target = currentElement;
          current.fire(event);
        }
        prevElement = currentElement;
      }
    }
    , setActiveDrops: function (dragElement) {
      var possibleDrops = this.collectDrops(dragElement, true);
      this.activeDrops.dropzones = possibleDrops.dropzones;
      this.activeDrops.elements = possibleDrops.elements;
      this.activeDrops.rects = [];
      for (var i = 0; i < this.activeDrops.dropzones.length; i++) {
        this.activeDrops.rects[i] = this.activeDrops.dropzones[i].getRect(this.activeDrops.elements[i]);
      }
    }
    , getDrop: function (dragEvent, event, dragElement) {
      var validDrops = [];
      if (dynamicDrop) {
        this.setActiveDrops(dragElement);
      }
      for (var j = 0; j < this.activeDrops.dropzones.length; j++) {
        var current = this.activeDrops.dropzones[j]
          , currentElement = this.activeDrops.elements[j]
          , rect = this.activeDrops.rects[j];
        validDrops.push(current.dropCheck(dragEvent, event, this.target, dragElement, currentElement, rect) ? currentElement : null);
      }
      var dropIndex = indexOfDeepestElement(validDrops)
        , dropzone = this.activeDrops.dropzones[dropIndex] || null
        , element = this.activeDrops.elements[dropIndex] || null;
      return {
        dropzone: dropzone
        , element: element
      };
    }
    , getDropEvents: function (pointerEvent, dragEvent) {
      var dropEvents = {
        enter: null
        , leave: null
        , activate: null
        , deactivate: null
        , move: null
        , drop: null
      };
      if (this.dropElement !== this.prevDropElement) {
        if (this.prevDropTarget) {
          dropEvents.leave = {
            target: this.prevDropElement
            , dropzone: this.prevDropTarget
            , relatedTarget: dragEvent.target
            , draggable: dragEvent.interactable
            , dragEvent: dragEvent
            , interaction: this
            , timeStamp: dragEvent.timeStamp
            , type: 'dragleave'
          };
          dragEvent.dragLeave = this.prevDropElement;
          dragEvent.prevDropzone = this.prevDropTarget;
        }
        if (this.dropTarget) {
          dropEvents.enter = {
            target: this.dropElement
            , dropzone: this.dropTarget
            , relatedTarget: dragEvent.target
            , draggable: dragEvent.interactable
            , dragEvent: dragEvent
            , interaction: this
            , timeStamp: dragEvent.timeStamp
            , type: 'dragenter'
          };
          dragEvent.dragEnter = this.dropElement;
          dragEvent.dropzone = this.dropTarget;
        }
      }
      if (dragEvent.type === 'dragend' && this.dropTarget) {
        dropEvents.drop = {
          target: this.dropElement
          , dropzone: this.dropTarget
          , relatedTarget: dragEvent.target
          , draggable: dragEvent.interactable
          , dragEvent: dragEvent
          , interaction: this
          , timeStamp: dragEvent.timeStamp
          , type: 'drop'
        };
        dragEvent.dropzone = this.dropTarget;
      }
      if (dragEvent.type === 'dragstart') {
        dropEvents.activate = {
          target: null
          , dropzone: null
          , relatedTarget: dragEvent.target
          , draggable: dragEvent.interactable
          , dragEvent: dragEvent
          , interaction: this
          , timeStamp: dragEvent.timeStamp
          , type: 'dropactivate'
        };
      }
      if (dragEvent.type === 'dragend') {
        dropEvents.deactivate = {
          target: null
          , dropzone: null
          , relatedTarget: dragEvent.target
          , draggable: dragEvent.interactable
          , dragEvent: dragEvent
          , interaction: this
          , timeStamp: dragEvent.timeStamp
          , type: 'dropdeactivate'
        };
      }
      if (dragEvent.type === 'dragmove' && this.dropTarget) {
        dropEvents.move = {
          target: this.dropElement
          , dropzone: this.dropTarget
          , relatedTarget: dragEvent.target
          , draggable: dragEvent.interactable
          , dragEvent: dragEvent
          , interaction: this
          , dragmove: dragEvent
          , timeStamp: dragEvent.timeStamp
          , type: 'dropmove'
        };
        dragEvent.dropzone = this.dropTarget;
      }
      return dropEvents;
    }
    , currentAction: function () {
      return (this.dragging && 'drag') || (this.resizing && 'resize') || (this.gesturing && 'gesture') || null;
    }
    , interacting: function () {
      return this.dragging || this.resizing || this.gesturing;
    }
    , clearTargets: function () {
      this.target = this.element = null;
      this.dropTarget = this.dropElement = this.prevDropTarget = this.prevDropElement = null;
    }
    , stop: function (event) {
      if (this.interacting()) {
        autoScroll.stop();
        this.matches = [];
        this.matchElements = [];
        var target = this.target;
        if (target.options.styleCursor) {
          target._doc.documentElement.style.cursor = '';
        }
        if (event && isFunction(event.preventDefault)) {
          this.checkAndPreventDefault(event, target, this.element);
        }
        if (this.dragging) {
          this.activeDrops.dropzones = this.activeDrops.elements = this.activeDrops.rects = null;
        }
      }
      this.clearTargets();
      this.pointerIsDown = this.snapStatus.locked = this.dragging = this.resizing = this.gesturing = false;
      this.prepared.name = this.prevEvent = null;
      this.inertiaStatus.resumeDx = this.inertiaStatus.resumeDy = 0;
      for (var i = 0; i < this.pointers.length; i++) {
        if (indexOf(this.pointerIds, getPointerId(this.pointers[i])) === -1) {
          this.pointers.splice(i, 1);
        }
      }
    }
    , inertiaFrame: function () {
      var inertiaStatus = this.inertiaStatus
        , options = this.target.options[this.prepared.name].inertia
        , lambda = options.resistance
        , t = new Date()
        .getTime() / 1000 - inertiaStatus.t0;
      if (t < inertiaStatus.te) {
        var progress = 1 - (Math.exp(-lambda * t) - inertiaStatus.lambda_v0) / inertiaStatus.one_ve_v0;
        if (inertiaStatus.modifiedXe === inertiaStatus.xe && inertiaStatus.modifiedYe === inertiaStatus.ye) {
          inertiaStatus.sx = inertiaStatus.xe * progress;
          inertiaStatus.sy = inertiaStatus.ye * progress;
        } else {
          var quadPoint = getQuadraticCurvePoint(0, 0, inertiaStatus.xe, inertiaStatus.ye, inertiaStatus.modifiedXe, inertiaStatus.modifiedYe, progress);
          inertiaStatus.sx = quadPoint.x;
          inertiaStatus.sy = quadPoint.y;
        }
        this.pointerMove(inertiaStatus.startEvent, inertiaStatus.startEvent);
        inertiaStatus.i = reqFrame(this.boundInertiaFrame);
      } else {
        inertiaStatus.ending = true;
        inertiaStatus.sx = inertiaStatus.modifiedXe;
        inertiaStatus.sy = inertiaStatus.modifiedYe;
        this.pointerMove(inertiaStatus.startEvent, inertiaStatus.startEvent);
        this.pointerEnd(inertiaStatus.startEvent, inertiaStatus.startEvent);
        inertiaStatus.active = inertiaStatus.ending = false;
      }
    }
    , smoothEndFrame: function () {
      var inertiaStatus = this.inertiaStatus
        , t = new Date()
        .getTime() - inertiaStatus.t0
        , duration = this.target.options[this.prepared.name].inertia.smoothEndDuration;
      if (t < duration) {
        inertiaStatus.sx = easeOutQuad(t, 0, inertiaStatus.xe, duration);
        inertiaStatus.sy = easeOutQuad(t, 0, inertiaStatus.ye, duration);
        this.pointerMove(inertiaStatus.startEvent, inertiaStatus.startEvent);
        inertiaStatus.i = reqFrame(this.boundSmoothEndFrame);
      } else {
        inertiaStatus.ending = true;
        inertiaStatus.sx = inertiaStatus.xe;
        inertiaStatus.sy = inertiaStatus.ye;
        this.pointerMove(inertiaStatus.startEvent, inertiaStatus.startEvent);
        this.pointerEnd(inertiaStatus.startEvent, inertiaStatus.startEvent);
        inertiaStatus.smoothEnd = inertiaStatus.active = inertiaStatus.ending = false;
      }
    }
    , addPointer: function (pointer) {
      var id = getPointerId(pointer)
        , index = this.mouse ? 0 : indexOf(this.pointerIds, id);
      if (index === -1) {
        index = this.pointerIds.length;
      }
      this.pointerIds[index] = id;
      this.pointers[index] = pointer;
      return index;
    }
    , removePointer: function (pointer) {
      var id = getPointerId(pointer)
        , index = this.mouse ? 0 : indexOf(this.pointerIds, id);
      if (index === -1) {
        return;
      }
      this.pointers.splice(index, 1);
      this.pointerIds.splice(index, 1);
      this.downTargets.splice(index, 1);
      this.downTimes.splice(index, 1);
      this.holdTimers.splice(index, 1);
    }
    , recordPointer: function (pointer) {
      var index = this.mouse ? 0 : indexOf(this.pointerIds, getPointerId(pointer));
      if (index === -1) {
        return;
      }
      this.pointers[index] = pointer;
    }
    , collectEventTargets: function (pointer, event, eventTarget, eventType) {
      var pointerIndex = this.mouse ? 0 : indexOf(this.pointerIds, getPointerId(pointer));
      if (eventType === 'tap' && (this.pointerWasMoved || !(this.downTargets[pointerIndex] && this.downTargets[pointerIndex] === eventTarget))) {
        return;
      }
      var targets = []
        , elements = []
        , element = eventTarget;

      function collectSelectors(interactable, selector, context) {
        var els = ie8MatchesSelector ? context.querySelectorAll(selector) : undefined;
        if (interactable._iEvents[eventType] && isElement(element) && inContext(interactable, element) && !testIgnore(interactable, element, eventTarget) && testAllow(interactable, element, eventTarget) && matchesSelector(element, selector, els)) {
          targets.push(interactable);
          elements.push(element);
        }
      }
      while (element) {
        if (interact.isSet(element) && interact(element)
          ._iEvents[eventType]) {
          targets.push(interact(element));
          elements.push(element);
        }
        interactables.forEachSelector(collectSelectors);
        element = parentElement(element);
      }
      if (targets.length || eventType === 'tap') {
        this.firePointers(pointer, event, eventTarget, targets, elements, eventType);
      }
    }
    , firePointers: function (pointer, event, eventTarget, targets, elements, eventType) {
      var pointerIndex = this.mouse ? 0 : indexOf(this.pointerIds, getPointerId(pointer))
        , pointerEvent = {}
        , i, interval, createNewDoubleTap;
      if (eventType === 'doubletap') {
        pointerEvent = pointer;
      } else {
        pointerExtend(pointerEvent, event);
        if (event !== pointer) {
          pointerExtend(pointerEvent, pointer);
        }
        pointerEvent.preventDefault = preventOriginalDefault;
        pointerEvent.stopPropagation = InteractEvent.prototype.stopPropagation;
        pointerEvent.stopImmediatePropagation = InteractEvent.prototype.stopImmediatePropagation;
        pointerEvent.interaction = this;
        pointerEvent.timeStamp = new Date()
          .getTime();
        pointerEvent.originalEvent = event;
        pointerEvent.originalPointer = pointer;
        pointerEvent.type = eventType;
        pointerEvent.pointerId = getPointerId(pointer);
        pointerEvent.pointerType = this.mouse ? 'mouse' : !supportsPointerEvent ? 'touch' : isString(pointer.pointerType) ? pointer.pointerType : [, , 'touch', 'pen', 'mouse'][pointer.pointerType];
      }
      if (eventType === 'tap') {
        pointerEvent.dt = pointerEvent.timeStamp - this.downTimes[pointerIndex];
        interval = pointerEvent.timeStamp - this.tapTime;
        createNewDoubleTap = !!(this.prevTap && this.prevTap.type !== 'doubletap' && this.prevTap.target === pointerEvent.target && interval < 500);
        pointerEvent.double = createNewDoubleTap;
        this.tapTime = pointerEvent.timeStamp;
      }
      for (i = 0; i < targets.length; i++) {
        pointerEvent.currentTarget = elements[i];
        pointerEvent.interactable = targets[i];
        targets[i].fire(pointerEvent);
        if (pointerEvent.immediatePropagationStopped || (pointerEvent.propagationStopped && elements[i + 1] !== pointerEvent.currentTarget)) {
          break;
        }
      }
      if (createNewDoubleTap) {
        var doubleTap = {};
        extend(doubleTap, pointerEvent);
        doubleTap.dt = interval;
        doubleTap.type = 'doubletap';
        this.collectEventTargets(doubleTap, event, eventTarget, 'doubletap');
        this.prevTap = doubleTap;
      } else if (eventType === 'tap') {
        this.prevTap = pointerEvent;
      }
    }
    , validateSelector: function (pointer, event, matches, matchElements) {
      for (var i = 0, len = matches.length; i < len; i++) {
        var match = matches[i]
          , matchElement = matchElements[i]
          , action = validateAction(match.getAction(pointer, event, this, matchElement), match);
        if (action && withinInteractionLimit(match, matchElement, action)) {
          this.target = match;
          this.element = matchElement;
          return action;
        }
      }
    }
    , setSnapping: function (pageCoords, status) {
      var snap = this.target.options[this.prepared.name].snap
        , targets = []
        , target, page, i;
      status = status || this.snapStatus;
      if (status.useStatusXY) {
        page = {
          x: status.x
          , y: status.y
        };
      } else {
        var origin = getOriginXY(this.target, this.element);
        page = extend({}, pageCoords);
        page.x -= origin.x;
        page.y -= origin.y;
      }
      status.realX = page.x;
      status.realY = page.y;
      page.x = page.x - this.inertiaStatus.resumeDx;
      page.y = page.y - this.inertiaStatus.resumeDy;
      var len = snap.targets ? snap.targets.length : 0;
      for (var relIndex = 0; relIndex < this.snapOffsets.length; relIndex++) {
        var relative = {
          x: page.x - this.snapOffsets[relIndex].x
          , y: page.y - this.snapOffsets[relIndex].y
        };
        for (i = 0; i < len; i++) {
          if (isFunction(snap.targets[i])) {
            target = snap.targets[i](relative.x, relative.y, this);
          } else {
            target = snap.targets[i];
          }
          if (!target) {
            continue;
          }
          targets.push({
            x: isNumber(target.x) ? (target.x + this.snapOffsets[relIndex].x) : relative.x
            , y: isNumber(target.y) ? (target.y + this.snapOffsets[relIndex].y) : relative.y
            , range: isNumber(target.range) ? target.range : snap.range
          });
        }
      }
      var closest = {
        target: null
        , inRange: false
        , distance: 0
        , range: 0
        , dx: 0
        , dy: 0
      };
      for (i = 0, len = targets.length; i < len; i++) {
        target = targets[i];
        var range = target.range
          , dx = target.x - page.x
          , dy = target.y - page.y
          , distance = hypot(dx, dy)
          , inRange = distance <= range;
        if (range === Infinity && closest.inRange && closest.range !== Infinity) {
          inRange = false;
        }
        if (!closest.target || (inRange ? (closest.inRange && range !== Infinity ? distance / range < closest.distance / closest.range : (range === Infinity && closest.range !== Infinity) || distance < closest.distance) : (!closest.inRange && distance < closest.distance))) {
          if (range === Infinity) {
            inRange = true;
          }
          closest.target = target;
          closest.distance = distance;
          closest.range = range;
          closest.inRange = inRange;
          closest.dx = dx;
          closest.dy = dy;
          status.range = range;
        }
      }
      var snapChanged;
      if (closest.target) {
        snapChanged = (status.snappedX !== closest.target.x || status.snappedY !== closest.target.y);
        status.snappedX = closest.target.x;
        status.snappedY = closest.target.y;
      } else {
        snapChanged = true;
        status.snappedX = NaN;
        status.snappedY = NaN;
      }
      status.dx = closest.dx;
      status.dy = closest.dy;
      status.changed = (snapChanged || (closest.inRange && !status.locked));
      status.locked = closest.inRange;
      return status;
    }
    , setRestriction: function (pageCoords, status) {
      var target = this.target
        , restrict = target && target.options[this.prepared.name].restrict
        , restriction = restrict && restrict.restriction
        , page;
      if (!restriction) {
        return status;
      }
      status = status || this.restrictStatus;
      page = status.useStatusXY ? page = {
        x: status.x
        , y: status.y
      } : page = extend({}, pageCoords);
      if (status.snap && status.snap.locked) {
        page.x += status.snap.dx || 0;
        page.y += status.snap.dy || 0;
      }
      page.x -= this.inertiaStatus.resumeDx;
      page.y -= this.inertiaStatus.resumeDy;
      status.dx = 0;
      status.dy = 0;
      status.restricted = false;
      var rect, restrictedX, restrictedY;
      if (isString(restriction)) {
        if (restriction === 'parent') {
          restriction = parentElement(this.element);
        } else if (restriction === 'self') {
          restriction = target.getRect(this.element);
        } else {
          restriction = closest(this.element, restriction);
        }
        if (!restriction) {
          return status;
        }
      }
      if (isFunction(restriction)) {
        restriction = restriction(page.x, page.y, this.element);
      }
      if (isElement(restriction)) {
        restriction = getElementRect(restriction);
      }
      rect = restriction;
      if (!restriction) {
        restrictedX = page.x;
        restrictedY = page.y;
      } else if ('x' in restriction && 'y' in restriction) {
        restrictedX = Math.max(Math.min(rect.x + rect.width - this.restrictOffset.right, page.x), rect.x + this.restrictOffset.left);
        restrictedY = Math.max(Math.min(rect.y + rect.height - this.restrictOffset.bottom, page.y), rect.y + this.restrictOffset.top);
      } else {
        restrictedX = Math.max(Math.min(rect.right - this.restrictOffset.right, page.x), rect.left + this.restrictOffset.left);
        restrictedY = Math.max(Math.min(rect.bottom - this.restrictOffset.bottom, page.y), rect.top + this.restrictOffset.top);
      }
      status.dx = restrictedX - page.x;
      status.dy = restrictedY - page.y;
      status.changed = status.restrictedX !== restrictedX || status.restrictedY !== restrictedY;
      status.restricted = !!(status.dx || status.dy);
      status.restrictedX = restrictedX;
      status.restrictedY = restrictedY;
      return status;
    }
    , checkAndPreventDefault: function (event, interactable, element) {
      if (!(interactable = interactable || this.target)) {
        return;
      }
      var options = interactable.options
        , prevent = options.preventDefault;
      if (prevent === 'auto' && element && !/^(input|select|textarea)$/i.test(event.target.nodeName)) {
        if (/down|start/i.test(event.type) && this.prepared.name === 'drag' && options.drag.axis !== 'xy') {
          return;
        }
        if (options[this.prepared.name] && options[this.prepared.name].manualStart && !this.interacting()) {
          return;
        }
        event.preventDefault();
        return;
      }
      if (prevent === 'always') {
        event.preventDefault();
        return;
      }
    }
    , calcInertia: function (status) {
      var inertiaOptions = this.target.options[this.prepared.name].inertia
        , lambda = inertiaOptions.resistance
        , inertiaDur = -Math.log(inertiaOptions.endSpeed / status.v0) / lambda;
      status.x0 = this.prevEvent.pageX;
      status.y0 = this.prevEvent.pageY;
      status.t0 = status.startEvent.timeStamp / 1000;
      status.sx = status.sy = 0;
      status.modifiedXe = status.xe = (status.vx0 - inertiaDur) / lambda;
      status.modifiedYe = status.ye = (status.vy0 - inertiaDur) / lambda;
      status.te = inertiaDur;
      status.lambda_v0 = lambda / status.v0;
      status.one_ve_v0 = 1 - inertiaOptions.endSpeed / status.v0;
    }
    , autoScrollMove: function (pointer) {
      if (!(this.interacting() && checkAutoScroll(this.target, this.prepared.name))) {
        return;
      }
      if (this.inertiaStatus.active) {
        autoScroll.x = autoScroll.y = 0;
        return;
      }
      var top, right, bottom, left, options = this.target.options[this.prepared.name].autoScroll
        , container = options.container || getWindow(this.element);
      if (isWindow(container)) {
        left = pointer.clientX < autoScroll.margin;
        top = pointer.clientY < autoScroll.margin;
        right = pointer.clientX > container.innerWidth - autoScroll.margin;
        bottom = pointer.clientY > container.innerHeight - autoScroll.margin;
      } else {
        var rect = getElementClientRect(container);
        left = pointer.clientX < rect.left + autoScroll.margin;
        top = pointer.clientY < rect.top + autoScroll.margin;
        right = pointer.clientX > rect.right - autoScroll.margin;
        bottom = pointer.clientY > rect.bottom - autoScroll.margin;
      }
      autoScroll.x = (right ? 1 : left ? -1 : 0);
      autoScroll.y = (bottom ? 1 : top ? -1 : 0);
      if (!autoScroll.isScrolling) {
        autoScroll.margin = options.margin;
        autoScroll.speed = options.speed;
        autoScroll.start(this);
      }
    }
    , _updateEventTargets: function (target, currentTarget) {
      this._eventTarget = target;
      this._curEventTarget = currentTarget;
    }
  };

  function getInteractionFromPointer(pointer, eventType, eventTarget) {
    var i = 0
      , len = interactions.length
      , mouseEvent = (/mouse/i.test(pointer.pointerType || eventType) || pointer.pointerType === 4)
      , interaction;
    var id = getPointerId(pointer);
    if (/down|start/i.test(eventType)) {
      for (i = 0; i < len; i++) {
        interaction = interactions[i];
        var element = eventTarget;
        if (interaction.inertiaStatus.active && interaction.target.options[interaction.prepared.name].inertia.allowResume && (interaction.mouse === mouseEvent)) {
          while (element) {
            if (element === interaction.element) {
              return interaction;
            }
            element = parentElement(element);
          }
        }
      }
    }
    if (mouseEvent || !(supportsTouch || supportsPointerEvent)) {
      for (i = 0; i < len; i++) {
        if (interactions[i].mouse && !interactions[i].inertiaStatus.active) {
          return interactions[i];
        }
      }
      for (i = 0; i < len; i++) {
        if (interactions[i].mouse && !(/down/.test(eventType) && interactions[i].inertiaStatus.active)) {
          return interaction;
        }
      }
      interaction = new Interaction();
      interaction.mouse = true;
      return interaction;
    }
    for (i = 0; i < len; i++) {
      if (contains(interactions[i].pointerIds, id)) {
        return interactions[i];
      }
    }
    if (/up|end|out/i.test(eventType)) {
      return null;
    }
    for (i = 0; i < len; i++) {
      interaction = interactions[i];
      if ((!interaction.prepared.name || (interaction.target.options.gesture.enabled)) && !interaction.interacting() && !(!mouseEvent && interaction.mouse)) {
        return interaction;
      }
    }
    return new Interaction();
  }

  function doOnInteractions(method) {
    return (function (event) {
      var interaction, eventTarget = getActualElement(event.path ? event.path[0] : event.target)
        , curEventTarget = getActualElement(event.currentTarget)
        , i;
      if (supportsTouch && /touch/.test(event.type)) {
        prevTouchTime = new Date()
          .getTime();
        for (i = 0; i < event.changedTouches.length; i++) {
          var pointer = event.changedTouches[i];
          interaction = getInteractionFromPointer(pointer, event.type, eventTarget);
          if (!interaction) {
            continue;
          }
          interaction._updateEventTargets(eventTarget, curEventTarget);
          interaction[method](pointer, event, eventTarget, curEventTarget);
        }
      } else {
        if (!supportsPointerEvent && /mouse/.test(event.type)) {
          for (i = 0; i < interactions.length; i++) {
            if (!interactions[i].mouse && interactions[i].pointerIsDown) {
              return;
            }
          }
          if (new Date()
            .getTime() - prevTouchTime < 500) {
            return;
          }
        }
        interaction = getInteractionFromPointer(event, event.type, eventTarget);
        if (!interaction) {
          return;
        }
        interaction._updateEventTargets(eventTarget, curEventTarget);
        interaction[method](event, event, eventTarget, curEventTarget);
      }
    });
  }

  function InteractEvent(interaction, event, action, phase, element, related) {
    var client, page, target = interaction.target
      , snapStatus = interaction.snapStatus
      , restrictStatus = interaction.restrictStatus
      , pointers = interaction.pointers
      , deltaSource = (target && target.options || defaultOptions)
      .deltaSource
      , sourceX = deltaSource + 'X'
      , sourceY = deltaSource + 'Y'
      , options = target ? target.options : defaultOptions
      , origin = getOriginXY(target, element)
      , starting = phase === 'start'
      , ending = phase === 'end'
      , coords = starting ? interaction.startCoords : interaction.curCoords;
    element = element || interaction.element;
    page = extend({}, coords.page);
    client = extend({}, coords.client);
    page.x -= origin.x;
    page.y -= origin.y;
    client.x -= origin.x;
    client.y -= origin.y;
    var relativePoints = options[action].snap && options[action].snap.relativePoints;
    if (checkSnap(target, action) && !(starting && relativePoints && relativePoints.length)) {
      this.snap = {
        range: snapStatus.range
        , locked: snapStatus.locked
        , x: snapStatus.snappedX
        , y: snapStatus.snappedY
        , realX: snapStatus.realX
        , realY: snapStatus.realY
        , dx: snapStatus.dx
        , dy: snapStatus.dy
      };
      if (snapStatus.locked) {
        page.x += snapStatus.dx;
        page.y += snapStatus.dy;
        client.x += snapStatus.dx;
        client.y += snapStatus.dy;
      }
    }
    if (checkRestrict(target, action) && !(starting && options[action].restrict.elementRect) && restrictStatus.restricted) {
      page.x += restrictStatus.dx;
      page.y += restrictStatus.dy;
      client.x += restrictStatus.dx;
      client.y += restrictStatus.dy;
      this.restrict = {
        dx: restrictStatus.dx
        , dy: restrictStatus.dy
      };
    }
    this.pageX = page.x;
    this.pageY = page.y;
    this.clientX = client.x;
    this.clientY = client.y;
    this.x0 = interaction.startCoords.page.x - origin.x;
    this.y0 = interaction.startCoords.page.y - origin.y;
    this.clientX0 = interaction.startCoords.client.x - origin.x;
    this.clientY0 = interaction.startCoords.client.y - origin.y;
    this.ctrlKey = event.ctrlKey;
    this.altKey = event.altKey;
    this.shiftKey = event.shiftKey;
    this.metaKey = event.metaKey;
    this.button = event.button;
    this.buttons = event.buttons;
    this.target = element;
    this.t0 = interaction.downTimes[0];
    this.type = action + (phase || '');
    this.interaction = interaction;
    this.interactable = target;
    var inertiaStatus = interaction.inertiaStatus;
    if (inertiaStatus.active) {
      this.detail = 'inertia';
    }
    if (related) {
      this.relatedTarget = related;
    }
    if (ending) {
      if (deltaSource === 'client') {
        this.dx = client.x - interaction.startCoords.client.x;
        this.dy = client.y - interaction.startCoords.client.y;
      } else {
        this.dx = page.x - interaction.startCoords.page.x;
        this.dy = page.y - interaction.startCoords.page.y;
      }
    } else if (starting) {
      this.dx = 0;
      this.dy = 0;
    } else if (phase === 'inertiastart') {
      this.dx = interaction.prevEvent.dx;
      this.dy = interaction.prevEvent.dy;
    } else {
      if (deltaSource === 'client') {
        this.dx = client.x - interaction.prevEvent.clientX;
        this.dy = client.y - interaction.prevEvent.clientY;
      } else {
        this.dx = page.x - interaction.prevEvent.pageX;
        this.dy = page.y - interaction.prevEvent.pageY;
      }
    }
    if (interaction.prevEvent && interaction.prevEvent.detail === 'inertia' && !inertiaStatus.active && options[action].inertia && options[action].inertia.zeroResumeDelta) {
      inertiaStatus.resumeDx += this.dx;
      inertiaStatus.resumeDy += this.dy;
      this.dx = this.dy = 0;
    }
    if (action === 'resize' && interaction.resizeAxes) {
      if (options.resize.square) {
        if (interaction.resizeAxes === 'y') {
          this.dx = this.dy;
        } else {
          this.dy = this.dx;
        }
        this.axes = 'xy';
      } else {
        this.axes = interaction.resizeAxes;
        if (interaction.resizeAxes === 'x') {
          this.dy = 0;
        } else if (interaction.resizeAxes === 'y') {
          this.dx = 0;
        }
      }
    } else if (action === 'gesture') {
      this.touches = [pointers[0], pointers[1]];
      if (starting) {
        this.distance = touchDistance(pointers, deltaSource);
        this.box = touchBBox(pointers);
        this.scale = 1;
        this.ds = 0;
        this.angle = touchAngle(pointers, undefined, deltaSource);
        this.da = 0;
      } else if (ending || event instanceof InteractEvent) {
        this.distance = interaction.prevEvent.distance;
        this.box = interaction.prevEvent.box;
        this.scale = interaction.prevEvent.scale;
        this.ds = this.scale - 1;
        this.angle = interaction.prevEvent.angle;
        this.da = this.angle - interaction.gesture.startAngle;
      } else {
        this.distance = touchDistance(pointers, deltaSource);
        this.box = touchBBox(pointers);
        this.scale = this.distance / interaction.gesture.startDistance;
        this.angle = touchAngle(pointers, interaction.gesture.prevAngle, deltaSource);
        this.ds = this.scale - interaction.gesture.prevScale;
        this.da = this.angle - interaction.gesture.prevAngle;
      }
    }
    if (starting) {
      this.timeStamp = interaction.downTimes[0];
      this.dt = 0;
      this.duration = 0;
      this.speed = 0;
      this.velocityX = 0;
      this.velocityY = 0;
    } else if (phase === 'inertiastart') {
      this.timeStamp = interaction.prevEvent.timeStamp;
      this.dt = interaction.prevEvent.dt;
      this.duration = interaction.prevEvent.duration;
      this.speed = interaction.prevEvent.speed;
      this.velocityX = interaction.prevEvent.velocityX;
      this.velocityY = interaction.prevEvent.velocityY;
    } else {
      this.timeStamp = new Date()
        .getTime();
      this.dt = this.timeStamp - interaction.prevEvent.timeStamp;
      this.duration = this.timeStamp - interaction.downTimes[0];
      if (event instanceof InteractEvent) {
        var dx = this[sourceX] - interaction.prevEvent[sourceX]
          , dy = this[sourceY] - interaction.prevEvent[sourceY]
          , dt = this.dt / 1000;
        this.speed = hypot(dx, dy) / dt;
        this.velocityX = dx / dt;
        this.velocityY = dy / dt;
      } else {
        this.speed = interaction.pointerDelta[deltaSource].speed;
        this.velocityX = interaction.pointerDelta[deltaSource].vx;
        this.velocityY = interaction.pointerDelta[deltaSource].vy;
      }
    }
    if ((ending || phase === 'inertiastart') && interaction.prevEvent.speed > 600 && this.timeStamp - interaction.prevEvent.timeStamp < 150) {
      var angle = 180 * Math.atan2(interaction.prevEvent.velocityY, interaction.prevEvent.velocityX) / Math.PI
        , overlap = 22.5;
      if (angle < 0) {
        angle += 360;
      }
      var left = 135 - overlap <= angle && angle < 225 + overlap
        , up = 225 - overlap <= angle && angle < 315 + overlap
        , right = !left && (315 - overlap <= angle || angle < 45 + overlap)
        , down = !up && 45 - overlap <= angle && angle < 135 + overlap;
      this.swipe = {
        up: up
        , down: down
        , left: left
        , right: right
        , angle: angle
        , speed: interaction.prevEvent.speed
        , velocity: {
          x: interaction.prevEvent.velocityX
          , y: interaction.prevEvent.velocityY
        }
      };
    }
  }
  InteractEvent.prototype = {
    preventDefault: blank
    , stopImmediatePropagation: function () {
      this.immediatePropagationStopped = this.propagationStopped = true;
    }
    , stopPropagation: function () {
      this.propagationStopped = true;
    }
  };

  function preventOriginalDefault() {
    this.originalEvent.preventDefault();
  }

  function getActionCursor(action) {
    var cursor = '';
    if (action.name === 'drag') {
      cursor = actionCursors.drag;
    }
    if (action.name === 'resize') {
      if (action.axis) {
        cursor = actionCursors[action.name + action.axis];
      } else if (action.edges) {
        var cursorKey = 'resize'
          , edgeNames = ['top', 'bottom', 'left', 'right'];
        for (var i = 0; i < 4; i++) {
          if (action.edges[edgeNames[i]]) {
            cursorKey += edgeNames[i];
          }
        }
        cursor = actionCursors[cursorKey];
      }
    }
    return cursor;
  }

  function checkResizeEdge(name, value, page, element, interactableElement, rect, margin) {
    if (!value) {
      return false;
    }
    if (value === true) {
      var width = isNumber(rect.width) ? rect.width : rect.right - rect.left
        , height = isNumber(rect.height) ? rect.height : rect.bottom - rect.top;
      if (width < 0) {
        if (name === 'left') {
          name = 'right';
        } else if (name === 'right') {
          name = 'left';
        }
      }
      if (height < 0) {
        if (name === 'top') {
          name = 'bottom';
        } else if (name === 'bottom') {
          name = 'top';
        }
      }
      if (name === 'left') {
        return page.x < ((width >= 0 ? rect.left : rect.right) + margin);
      }
      if (name === 'top') {
        return page.y < ((height >= 0 ? rect.top : rect.bottom) + margin);
      }
      if (name === 'right') {
        return page.x > ((width >= 0 ? rect.right : rect.left) - margin);
      }
      if (name === 'bottom') {
        return page.y > ((height >= 0 ? rect.bottom : rect.top) - margin);
      }
    }
    if (!isElement(element)) {
      return false;
    }
    return isElement(value) ? value === element : matchesUpTo(element, value, interactableElement);
  }

  function defaultActionChecker(pointer, interaction, element) {
    var rect = this.getRect(element)
      , shouldResize = false
      , action = null
      , resizeAxes = null
      , resizeEdges, page = extend({}, interaction.curCoords.page)
      , options = this.options;
    if (!rect) {
      return null;
    }
    if (actionIsEnabled.resize && options.resize.enabled) {
      var resizeOptions = options.resize;
      resizeEdges = {
        left: false
        , right: false
        , top: false
        , bottom: false
      };
      if (isObject(resizeOptions.edges)) {
        for (var edge in resizeEdges) {
          resizeEdges[edge] = checkResizeEdge(edge, resizeOptions.edges[edge], page, interaction._eventTarget, element, rect, resizeOptions.margin || margin);
        }
        resizeEdges.left = resizeEdges.left && !resizeEdges.right;
        resizeEdges.top = resizeEdges.top && !resizeEdges.bottom;
        shouldResize = resizeEdges.left || resizeEdges.right || resizeEdges.top || resizeEdges.bottom;
      } else {
        var right = options.resize.axis !== 'y' && page.x > (rect.right - margin)
          , bottom = options.resize.axis !== 'x' && page.y > (rect.bottom - margin);
        shouldResize = right || bottom;
        resizeAxes = (right ? 'x' : '') + (bottom ? 'y' : '');
      }
    }
    action = shouldResize ? 'resize' : actionIsEnabled.drag && options.drag.enabled ? 'drag' : null;
    if (actionIsEnabled.gesture && interaction.pointerIds.length >= 2 && !(interaction.dragging || interaction.resizing)) {
      action = 'gesture';
    }
    if (action) {
      return {
        name: action
        , axis: resizeAxes
        , edges: resizeEdges
      };
    }
    return null;
  }

  function validateAction(action, interactable) {
    if (!isObject(action)) {
      return null;
    }
    var actionName = action.name
      , options = interactable.options;
    if (((actionName === 'resize' && options.resize.enabled) || (actionName === 'drag' && options.drag.enabled) || (actionName === 'gesture' && options.gesture.enabled)) && actionIsEnabled[actionName]) {
      if (actionName === 'resize' || actionName === 'resizeyx') {
        actionName = 'resizexy';
      }
      return action;
    }
    return null;
  }
  var listeners = {}
    , interactionListeners = ['dragStart', 'dragMove', 'resizeStart', 'resizeMove', 'gestureStart', 'gestureMove', 'pointerOver', 'pointerOut', 'pointerHover', 'selectorDown', 'pointerDown', 'pointerMove', 'pointerUp', 'pointerCancel', 'pointerEnd', 'addPointer', 'removePointer', 'recordPointer', 'autoScrollMove'];
  for (var i = 0, len = interactionListeners.length; i < len; i++) {
    var name = interactionListeners[i];
    listeners[name] = doOnInteractions(name);
  }

  function delegateListener(event, useCapture) {
    var fakeEvent = {}
      , delegated = delegatedEvents[event.type]
      , eventTarget = getActualElement(event.path ? event.path[0] : event.target)
      , element = eventTarget;
    useCapture = useCapture ? true : false;
    for (var prop in event) {
      fakeEvent[prop] = event[prop];
    }
    fakeEvent.originalEvent = event;
    fakeEvent.preventDefault = preventOriginalDefault;
    while (isElement(element)) {
      for (var i = 0; i < delegated.selectors.length; i++) {
        var selector = delegated.selectors[i]
          , context = delegated.contexts[i];
        if (matchesSelector(element, selector) && nodeContains(context, eventTarget) && nodeContains(context, element)) {
          var listeners = delegated.listeners[i];
          fakeEvent.currentTarget = element;
          for (var j = 0; j < listeners.length; j++) {
            if (listeners[j][1] === useCapture) {
              listeners[j][0](fakeEvent);
            }
          }
        }
      }
      element = parentElement(element);
    }
  }

  function delegateUseCapture(event) {
    return delegateListener.call(this, event, true);
  }
  interactables.indexOfElement = function indexOfElement(element, context) {
    context = context || document;
    for (var i = 0; i < this.length; i++) {
      var interactable = this[i];
      if ((interactable.selector === element && (interactable._context === context)) || (!interactable.selector && interactable._element === element)) {
        return i;
      }
    }
    return -1;
  };
  interactables.get = function interactableGet(element, options) {
    return this[this.indexOfElement(element, options && options.context)];
  };
  interactables.forEachSelector = function (callback) {
    for (var i = 0; i < this.length; i++) {
      var interactable = this[i];
      if (!interactable.selector) {
        continue;
      }
      var ret = callback(interactable, interactable.selector, interactable._context, i, this);
      if (ret !== undefined) {
        return ret;
      }
    }
  };

  function interact(element, options) {
    return interactables.get(element, options) || new Interactable(element, options);
  }

  function Interactable(element, options) {
    this._element = element;
    this._iEvents = this._iEvents || {};
    var _window;
    if (trySelector(element)) {
      this.selector = element;
      var context = options && options.context;
      _window = context ? getWindow(context) : window;
      if (context && (_window.Node ? context instanceof _window.Node : (isElement(context) || context === _window.document))) {
        this._context = context;
      }
    } else {
      _window = getWindow(element);
      if (isElement(element, _window)) {
        if (PointerEvent) {
          events.add(this._element, pEventTypes.down, listeners.pointerDown);
          events.add(this._element, pEventTypes.move, listeners.pointerHover);
        } else {
          events.add(this._element, 'mousedown', listeners.pointerDown);
          events.add(this._element, 'mousemove', listeners.pointerHover);
          events.add(this._element, 'touchstart', listeners.pointerDown);
          events.add(this._element, 'touchmove', listeners.pointerHover);
        }
      }
    }
    this._doc = _window.document;
    if (!contains(documents, this._doc)) {
      listenToDocument(this._doc);
    }
    interactables.push(this);
    this.set(options);
  }
  Interactable.prototype = {
    setOnEvents: function (action, phases) {
      if (action === 'drop') {
        if (isFunction(phases.ondrop)) {
          this.ondrop = phases.ondrop;
        }
        if (isFunction(phases.ondropactivate)) {
          this.ondropactivate = phases.ondropactivate;
        }
        if (isFunction(phases.ondropdeactivate)) {
          this.ondropdeactivate = phases.ondropdeactivate;
        }
        if (isFunction(phases.ondragenter)) {
          this.ondragenter = phases.ondragenter;
        }
        if (isFunction(phases.ondragleave)) {
          this.ondragleave = phases.ondragleave;
        }
        if (isFunction(phases.ondropmove)) {
          this.ondropmove = phases.ondropmove;
        }
      } else {
        action = 'on' + action;
        if (isFunction(phases.onstart)) {
          this[action + 'start'] = phases.onstart;
        }
        if (isFunction(phases.onmove)) {
          this[action + 'move'] = phases.onmove;
        }
        if (isFunction(phases.onend)) {
          this[action + 'end'] = phases.onend;
        }
        if (isFunction(phases.oninertiastart)) {
          this[action + 'inertiastart'] = phases.oninertiastart;
        }
      }
      return this;
    }
    , draggable: function (options) {
      if (isObject(options)) {
        this.options.drag.enabled = options.enabled === false ? false : true;
        this.setPerAction('drag', options);
        this.setOnEvents('drag', options);
        if (/^x$|^y$|^xy$/.test(options.axis)) {
          this.options.drag.axis = options.axis;
        } else if (options.axis === null) {
          delete this.options.drag.axis;
        }
        return this;
      }
      if (isBool(options)) {
        this.options.drag.enabled = options;
        return this;
      }
      return this.options.drag;
    }
    , setPerAction: function (action, options) {
      for (var option in options) {
        if (option in defaultOptions[action]) {
          if (isObject(options[option])) {
            this.options[action][option] = extend(this.options[action][option] || {}, options[option]);
            if (isObject(defaultOptions.perAction[option]) && 'enabled' in defaultOptions.perAction[option]) {
              this.options[action][option].enabled = options[option].enabled === false ? false : true;
            }
          } else if (isBool(options[option]) && isObject(defaultOptions.perAction[option])) {
            this.options[action][option].enabled = options[option];
          } else if (options[option] !== undefined) {
            this.options[action][option] = options[option];
          }
        }
      }
    }
    , dropzone: function (options) {
      if (isObject(options)) {
        this.options.drop.enabled = options.enabled === false ? false : true;
        this.setOnEvents('drop', options);
        if (/^(pointer|center)$/.test(options.overlap)) {
          this.options.drop.overlap = options.overlap;
        } else if (isNumber(options.overlap)) {
          this.options.drop.overlap = Math.max(Math.min(1, options.overlap), 0);
        }
        if ('accept' in options) {
          this.options.drop.accept = options.accept;
        }
        if ('checker' in options) {
          this.options.drop.checker = options.checker;
        }
        return this;
      }
      if (isBool(options)) {
        this.options.drop.enabled = options;
        return this;
      }
      return this.options.drop;
    }
    , dropCheck: function (dragEvent, event, draggable, draggableElement, dropElement, rect) {
      var dropped = false;
      if (!(rect = rect || this.getRect(dropElement))) {
        return (this.options.drop.checker ? this.options.drop.checker(dragEvent, event, dropped, this, dropElement, draggable, draggableElement) : false);
      }
      var dropOverlap = this.options.drop.overlap;
      if (dropOverlap === 'pointer') {
        var page = getPageXY(dragEvent)
          , origin = getOriginXY(draggable, draggableElement)
          , horizontal, vertical;
        page.x += origin.x;
        page.y += origin.y;
        horizontal = (page.x > rect.left) && (page.x < rect.right);
        vertical = (page.y > rect.top) && (page.y < rect.bottom);
        dropped = horizontal && vertical;
      }
      var dragRect = draggable.getRect(draggableElement);
      if (dropOverlap === 'center') {
        var cx = dragRect.left + dragRect.width / 2
          , cy = dragRect.top + dragRect.height / 2;
        dropped = cx >= rect.left && cx <= rect.right && cy >= rect.top && cy <= rect.bottom;
      }
      if (isNumber(dropOverlap)) {
        var overlapArea = (Math.max(0, Math.min(rect.right, dragRect.right) - Math.max(rect.left, dragRect.left)) * Math.max(0, Math.min(rect.bottom, dragRect.bottom) - Math.max(rect.top, dragRect.top)))
          , overlapRatio = overlapArea / (dragRect.width * dragRect.height);
        dropped = overlapRatio >= dropOverlap;
      }
      if (this.options.drop.checker) {
        dropped = this.options.drop.checker(dragEvent, event, dropped, this, dropElement, draggable, draggableElement);
      }
      return dropped;
    }
    , dropChecker: function (checker) {
      if (isFunction(checker)) {
        this.options.drop.checker = checker;
        return this;
      }
      if (checker === null) {
        delete this.options.getRect;
        return this;
      }
      return this.options.drop.checker;
    }
    , accept: function (newValue) {
      if (isElement(newValue)) {
        this.options.drop.accept = newValue;
        return this;
      }
      if (trySelector(newValue)) {
        this.options.drop.accept = newValue;
        return this;
      }
      if (newValue === null) {
        delete this.options.drop.accept;
        return this;
      }
      return this.options.drop.accept;
    }
    , resizable: function (options) {
      if (isObject(options)) {
        this.options.resize.enabled = options.enabled === false ? false : true;
        this.setPerAction('resize', options);
        this.setOnEvents('resize', options);
        if (/^x$|^y$|^xy$/.test(options.axis)) {
          this.options.resize.axis = options.axis;
        } else if (options.axis === null) {
          this.options.resize.axis = defaultOptions.resize.axis;
        }
        if (isBool(options.preserveAspectRatio)) {
          this.options.resize.preserveAspectRatio = options.preserveAspectRatio;
        } else if (isBool(options.square)) {
          this.options.resize.square = options.square;
        }
        return this;
      }
      if (isBool(options)) {
        this.options.resize.enabled = options;
        return this;
      }
      return this.options.resize;
    }
    , squareResize: function (newValue) {
      if (isBool(newValue)) {
        this.options.resize.square = newValue;
        return this;
      }
      if (newValue === null) {
        delete this.options.resize.square;
        return this;
      }
      return this.options.resize.square;
    }
    , gesturable: function (options) {
      if (isObject(options)) {
        this.options.gesture.enabled = options.enabled === false ? false : true;
        this.setPerAction('gesture', options);
        this.setOnEvents('gesture', options);
        return this;
      }
      if (isBool(options)) {
        this.options.gesture.enabled = options;
        return this;
      }
      return this.options.gesture;
    }
    , autoScroll: function (options) {
      if (isObject(options)) {
        options = extend({
          actions: ['drag', 'resize']
        }, options);
      } else if (isBool(options)) {
        options = {
          actions: ['drag', 'resize']
          , enabled: options
        };
      }
      return this.setOptions('autoScroll', options);
    }
    , snap: function (options) {
      var ret = this.setOptions('snap', options);
      if (ret === this) {
        return this;
      }
      return ret.drag;
    }
    , setOptions: function (option, options) {
      var actions = options && isArray(options.actions) ? options.actions : ['drag'];
      var i;
      if (isObject(options) || isBool(options)) {
        for (i = 0; i < actions.length; i++) {
          var action = /resize/.test(actions[i]) ? 'resize' : actions[i];
          if (!isObject(this.options[action])) {
            continue;
          }
          var thisOption = this.options[action][option];
          if (isObject(options)) {
            extend(thisOption, options);
            thisOption.enabled = options.enabled === false ? false : true;
            if (option === 'snap') {
              if (thisOption.mode === 'grid') {
                thisOption.targets = [interact.createSnapGrid(extend({
                  offset: thisOption.gridOffset || {
                    x: 0
                    , y: 0
                  }
                }, thisOption.grid || {}))];
              } else if (thisOption.mode === 'anchor') {
                thisOption.targets = thisOption.anchors;
              } else if (thisOption.mode === 'path') {
                thisOption.targets = thisOption.paths;
              }
              if ('elementOrigin' in options) {
                thisOption.relativePoints = [options.elementOrigin];
              }
            }
          } else if (isBool(options)) {
            thisOption.enabled = options;
          }
        }
        return this;
      }
      var ret = {}
        , allActions = ['drag', 'resize', 'gesture'];
      for (i = 0; i < allActions.length; i++) {
        if (option in defaultOptions[allActions[i]]) {
          ret[allActions[i]] = this.options[allActions[i]][option];
        }
      }
      return ret;
    }
    , inertia: function (options) {
      var ret = this.setOptions('inertia', options);
      if (ret === this) {
        return this;
      }
      return ret.drag;
    }
    , getAction: function (pointer, event, interaction, element) {
      var action = this.defaultActionChecker(pointer, interaction, element);
      if (this.options.actionChecker) {
        return this.options.actionChecker(pointer, event, action, this, element, interaction);
      }
      return action;
    }
    , defaultActionChecker: defaultActionChecker
    , actionChecker: function (checker) {
      if (isFunction(checker)) {
        this.options.actionChecker = checker;
        return this;
      }
      if (checker === null) {
        delete this.options.actionChecker;
        return this;
      }
      return this.options.actionChecker;
    }
    , getRect: function rectCheck(element) {
      element = element || this._element;
      if (this.selector && !(isElement(element))) {
        element = this._context.querySelector(this.selector);
      }
      return getElementRect(element);
    }
    , rectChecker: function (checker) {
      if (isFunction(checker)) {
        this.getRect = checker;
        return this;
      }
      if (checker === null) {
        delete this.options.getRect;
        return this;
      }
      return this.getRect;
    }
    , styleCursor: function (newValue) {
      if (isBool(newValue)) {
        this.options.styleCursor = newValue;
        return this;
      }
      if (newValue === null) {
        delete this.options.styleCursor;
        return this;
      }
      return this.options.styleCursor;
    }
    , preventDefault: function (newValue) {
      if (/^(always|never|auto)$/.test(newValue)) {
        this.options.preventDefault = newValue;
        return this;
      }
      if (isBool(newValue)) {
        this.options.preventDefault = newValue ? 'always' : 'never';
        return this;
      }
      return this.options.preventDefault;
    }
    , origin: function (newValue) {
      if (trySelector(newValue)) {
        this.options.origin = newValue;
        return this;
      } else if (isObject(newValue)) {
        this.options.origin = newValue;
        return this;
      }
      return this.options.origin;
    }
    , deltaSource: function (newValue) {
      if (newValue === 'page' || newValue === 'client') {
        this.options.deltaSource = newValue;
        return this;
      }
      return this.options.deltaSource;
    }
    , restrict: function (options) {
      if (!isObject(options)) {
        return this.setOptions('restrict', options);
      }
      var actions = ['drag', 'resize', 'gesture']
        , ret;
      for (var i = 0; i < actions.length; i++) {
        var action = actions[i];
        if (action in options) {
          var perAction = extend({
            actions: [action]
            , restriction: options[action]
          }, options);
          ret = this.setOptions('restrict', perAction);
        }
      }
      return ret;
    }
    , context: function () {
      return this._context;
    }
    , _context: document
    , ignoreFrom: function (newValue) {
      if (trySelector(newValue)) {
        this.options.ignoreFrom = newValue;
        return this;
      }
      if (isElement(newValue)) {
        this.options.ignoreFrom = newValue;
        return this;
      }
      return this.options.ignoreFrom;
    }
    , allowFrom: function (newValue) {
      if (trySelector(newValue)) {
        this.options.allowFrom = newValue;
        return this;
      }
      if (isElement(newValue)) {
        this.options.allowFrom = newValue;
        return this;
      }
      return this.options.allowFrom;
    }
    , element: function () {
      return this._element;
    }
    , fire: function (iEvent) {
      if (!(iEvent && iEvent.type) || !contains(eventTypes, iEvent.type)) {
        return this;
      }
      var listeners, i, len, onEvent = 'on' + iEvent.type
        , funcName = '';
      if (iEvent.type in this._iEvents) {
        listeners = this._iEvents[iEvent.type];
        for (i = 0, len = listeners.length; i < len && !iEvent.immediatePropagationStopped; i++) {
          funcName = listeners[i].name;
          listeners[i](iEvent);
        }
      }
      if (isFunction(this[onEvent])) {
        funcName = this[onEvent].name;
        this[onEvent](iEvent);
      }
      if (iEvent.type in globalEvents && (listeners = globalEvents[iEvent.type])) {
        for (i = 0, len = listeners.length; i < len && !iEvent.immediatePropagationStopped; i++) {
          funcName = listeners[i].name;
          listeners[i](iEvent);
        }
      }
      return this;
    }
    , on: function (eventType, listener, useCapture) {
      var i;
      if (isString(eventType) && eventType.search(' ') !== -1) {
        eventType = eventType.trim()
          .split(/ +/);
      }
      if (isArray(eventType)) {
        for (i = 0; i < eventType.length; i++) {
          this.on(eventType[i], listener, useCapture);
        }
        return this;
      }
      if (isObject(eventType)) {
        for (var prop in eventType) {
          this.on(prop, eventType[prop], listener);
        }
        return this;
      }
      if (eventType === 'wheel') {
        eventType = wheelEvent;
      }
      useCapture = useCapture ? true : false;
      if (contains(eventTypes, eventType)) {
        if (!(eventType in this._iEvents)) {
          this._iEvents[eventType] = [listener];
        } else {
          this._iEvents[eventType].push(listener);
        }
      } else if (this.selector) {
        if (!delegatedEvents[eventType]) {
          delegatedEvents[eventType] = {
            selectors: []
            , contexts: []
            , listeners: []
          };
          for (i = 0; i < documents.length; i++) {
            events.add(documents[i], eventType, delegateListener);
            events.add(documents[i], eventType, delegateUseCapture, true);
          }
        }
        var delegated = delegatedEvents[eventType]
          , index;
        for (index = delegated.selectors.length - 1; index >= 0; index--) {
          if (delegated.selectors[index] === this.selector && delegated.contexts[index] === this._context) {
            break;
          }
        }
        if (index === -1) {
          index = delegated.selectors.length;
          delegated.selectors.push(this.selector);
          delegated.contexts.push(this._context);
          delegated.listeners.push([]);
        }
        delegated.listeners[index].push([listener, useCapture]);
      } else {
        events.add(this._element, eventType, listener, useCapture);
      }
      return this;
    }
    , off: function (eventType, listener, useCapture) {
      var i;
      if (isString(eventType) && eventType.search(' ') !== -1) {
        eventType = eventType.trim()
          .split(/ +/);
      }
      if (isArray(eventType)) {
        for (i = 0; i < eventType.length; i++) {
          this.off(eventType[i], listener, useCapture);
        }
        return this;
      }
      if (isObject(eventType)) {
        for (var prop in eventType) {
          this.off(prop, eventType[prop], listener);
        }
        return this;
      }
      var eventList, index = -1;
      useCapture = useCapture ? true : false;
      if (eventType === 'wheel') {
        eventType = wheelEvent;
      }
      if (contains(eventTypes, eventType)) {
        eventList = this._iEvents[eventType];
        if (eventList && (index = indexOf(eventList, listener)) !== -1) {
          this._iEvents[eventType].splice(index, 1);
        }
      } else if (this.selector) {
        var delegated = delegatedEvents[eventType]
          , matchFound = false;
        if (!delegated) {
          return this;
        }
        for (index = delegated.selectors.length - 1; index >= 0; index--) {
          if (delegated.selectors[index] === this.selector && delegated.contexts[index] === this._context) {
            var listeners = delegated.listeners[index];
            for (i = listeners.length - 1; i >= 0; i--) {
              var fn = listeners[i][0]
                , useCap = listeners[i][1];
              if (fn === listener && useCap === useCapture) {
                listeners.splice(i, 1);
                if (!listeners.length) {
                  delegated.selectors.splice(index, 1);
                  delegated.contexts.splice(index, 1);
                  delegated.listeners.splice(index, 1);
                  events.remove(this._context, eventType, delegateListener);
                  events.remove(this._context, eventType, delegateUseCapture, true);
                  if (!delegated.selectors.length) {
                    delegatedEvents[eventType] = null;
                  }
                }
                matchFound = true;
                break;
              }
            }
            if (matchFound) {
              break;
            }
          }
        }
      } else {
        events.remove(this._element, eventType, listener, useCapture);
      }
      return this;
    }
    , set: function (options) {
      if (!isObject(options)) {
        options = {};
      }
      this.options = extend({}, defaultOptions.base);
      var i, actions = ['drag', 'drop', 'resize', 'gesture']
        , methods = ['draggable', 'dropzone', 'resizable', 'gesturable']
        , perActions = extend(extend({}, defaultOptions.perAction), options[action] || {});
      for (i = 0; i < actions.length; i++) {
        var action = actions[i];
        this.options[action] = extend({}, defaultOptions[action]);
        this.setPerAction(action, perActions);
        this[methods[i]](options[action]);
      }
      var settings = ['accept', 'actionChecker', 'allowFrom', 'deltaSource', 'dropChecker', 'ignoreFrom', 'origin', 'preventDefault', 'rectChecker', 'styleCursor'];
      for (i = 0, len = settings.length; i < len; i++) {
        var setting = settings[i];
        this.options[setting] = defaultOptions.base[setting];
        if (setting in options) {
          this[setting](options[setting]);
        }
      }
      return this;
    }
    , unset: function () {
      events.remove(this._element, 'all');
      if (!isString(this.selector)) {
        events.remove(this, 'all');
        if (this.options.styleCursor) {
          this._element.style.cursor = '';
        }
      } else {
        for (var type in delegatedEvents) {
          var delegated = delegatedEvents[type];
          for (var i = 0; i < delegated.selectors.length; i++) {
            if (delegated.selectors[i] === this.selector && delegated.contexts[i] === this._context) {
              delegated.selectors.splice(i, 1);
              delegated.contexts.splice(i, 1);
              delegated.listeners.splice(i, 1);
              if (!delegated.selectors.length) {
                delegatedEvents[type] = null;
              }
            }
            events.remove(this._context, type, delegateListener);
            events.remove(this._context, type, delegateUseCapture, true);
            break;
          }
        }
      }
      this.dropzone(false);
      interactables.splice(indexOf(interactables, this), 1);
      return interact;
    }
  };

  function warnOnce(method, message) {
    var warned = false;
    return function () {
      if (!warned) {
        window.console.warn(message);
        warned = true;
      }
      return method.apply(this, arguments);
    };
  }
  Interactable.prototype.snap = warnOnce(Interactable.prototype.snap, 'Interactable#snap is deprecated. See the new documentation for snapping at http://interactjs.io/docs/snapping');
  Interactable.prototype.restrict = warnOnce(Interactable.prototype.restrict, 'Interactable#restrict is deprecated. See the new documentation for resticting at http://interactjs.io/docs/restriction');
  Interactable.prototype.inertia = warnOnce(Interactable.prototype.inertia, 'Interactable#inertia is deprecated. See the new documentation for inertia at http://interactjs.io/docs/inertia');
  Interactable.prototype.autoScroll = warnOnce(Interactable.prototype.autoScroll, 'Interactable#autoScroll is deprecated. See the new documentation for autoScroll at http://interactjs.io/docs/#autoscroll');
  Interactable.prototype.squareResize = warnOnce(Interactable.prototype.squareResize, 'Interactable#squareResize is deprecated. See http://interactjs.io/docs/#resize-square');
  Interactable.prototype.accept = warnOnce(Interactable.prototype.accept, 'Interactable#accept is deprecated. use Interactable#dropzone({ accept: target }) instead');
  Interactable.prototype.dropChecker = warnOnce(Interactable.prototype.dropChecker, 'Interactable#dropChecker is deprecated. use Interactable#dropzone({ dropChecker: checkerFunction }) instead');
  Interactable.prototype.context = warnOnce(Interactable.prototype.context, 'Interactable#context as a method is deprecated. It will soon be a DOM Node instead');
  interact.isSet = function (element, options) {
    return interactables.indexOfElement(element, options && options.context) !== -1;
  };
  interact.on = function (type, listener, useCapture) {
    if (isString(type) && type.search(' ') !== -1) {
      type = type.trim()
        .split(/ +/);
    }
    if (isArray(type)) {
      for (var i = 0; i < type.length; i++) {
        interact.on(type[i], listener, useCapture);
      }
      return interact;
    }
    if (isObject(type)) {
      for (var prop in type) {
        interact.on(prop, type[prop], listener);
      }
      return interact;
    }
    if (contains(eventTypes, type)) {
      if (!globalEvents[type]) {
        globalEvents[type] = [listener];
      } else {
        globalEvents[type].push(listener);
      }
    } else {
      events.add(document, type, listener, useCapture);
    }
    return interact;
  };
  interact.off = function (type, listener, useCapture) {
    if (isString(type) && type.search(' ') !== -1) {
      type = type.trim()
        .split(/ +/);
    }
    if (isArray(type)) {
      for (var i = 0; i < type.length; i++) {
        interact.off(type[i], listener, useCapture);
      }
      return interact;
    }
    if (isObject(type)) {
      for (var prop in type) {
        interact.off(prop, type[prop], listener);
      }
      return interact;
    }
    if (!contains(eventTypes, type)) {
      events.remove(document, type, listener, useCapture);
    } else {
      var index;
      if (type in globalEvents && (index = indexOf(globalEvents[type], listener)) !== -1) {
        globalEvents[type].splice(index, 1);
      }
    }
    return interact;
  };
  interact.enableDragging = warnOnce(function (newValue) {
    if (newValue !== null && newValue !== undefined) {
      actionIsEnabled.drag = newValue;
      return interact;
    }
    return actionIsEnabled.drag;
  }, 'interact.enableDragging is deprecated and will soon be removed.');
  interact.enableResizing = warnOnce(function (newValue) {
    if (newValue !== null && newValue !== undefined) {
      actionIsEnabled.resize = newValue;
      return interact;
    }
    return actionIsEnabled.resize;
  }, 'interact.enableResizing is deprecated and will soon be removed.');
  interact.enableGesturing = warnOnce(function (newValue) {
    if (newValue !== null && newValue !== undefined) {
      actionIsEnabled.gesture = newValue;
      return interact;
    }
    return actionIsEnabled.gesture;
  }, 'interact.enableGesturing is deprecated and will soon be removed.');
  interact.eventTypes = eventTypes;
  interact.debug = function () {
    var interaction = interactions[0] || new Interaction();
    return {
      interactions: interactions
      , target: interaction.target
      , dragging: interaction.dragging
      , resizing: interaction.resizing
      , gesturing: interaction.gesturing
      , prepared: interaction.prepared
      , matches: interaction.matches
      , matchElements: interaction.matchElements
      , prevCoords: interaction.prevCoords
      , startCoords: interaction.startCoords
      , pointerIds: interaction.pointerIds
      , pointers: interaction.pointers
      , addPointer: listeners.addPointer
      , removePointer: listeners.removePointer
      , recordPointer: listeners.recordPointer
      , snap: interaction.snapStatus
      , restrict: interaction.restrictStatus
      , inertia: interaction.inertiaStatus
      , downTime: interaction.downTimes[0]
      , downEvent: interaction.downEvent
      , downPointer: interaction.downPointer
      , prevEvent: interaction.prevEvent
      , Interactable: Interactable
      , interactables: interactables
      , pointerIsDown: interaction.pointerIsDown
      , defaultOptions: defaultOptions
      , defaultActionChecker: defaultActionChecker
      , actionCursors: actionCursors
      , dragMove: listeners.dragMove
      , resizeMove: listeners.resizeMove
      , gestureMove: listeners.gestureMove
      , pointerUp: listeners.pointerUp
      , pointerDown: listeners.pointerDown
      , pointerMove: listeners.pointerMove
      , pointerHover: listeners.pointerHover
      , eventTypes: eventTypes
      , events: events
      , globalEvents: globalEvents
      , delegatedEvents: delegatedEvents
      , prefixedPropREs: prefixedPropREs
    };
  };
  interact.getPointerAverage = pointerAverage;
  interact.getTouchBBox = touchBBox;
  interact.getTouchDistance = touchDistance;
  interact.getTouchAngle = touchAngle;
  interact.getElementRect = getElementRect;
  interact.getElementClientRect = getElementClientRect;
  interact.matchesSelector = matchesSelector;
  interact.closest = closest;
  interact.margin = warnOnce(function (newvalue) {
    if (isNumber(newvalue)) {
      margin = newvalue;
      return interact;
    }
    return margin;
  }, 'interact.margin is deprecated. Use interact(target).resizable({ margin: number }); instead.');
  interact.supportsTouch = function () {
    return supportsTouch;
  };
  interact.supportsPointerEvent = function () {
    return supportsPointerEvent;
  };
  interact.stop = function (event) {
    for (var i = interactions.length - 1; i >= 0; i--) {
      interactions[i].stop(event);
    }
    return interact;
  };
  interact.dynamicDrop = function (newValue) {
    if (isBool(newValue)) {
      dynamicDrop = newValue;
      return interact;
    }
    return dynamicDrop;
  };
  interact.pointerMoveTolerance = function (newValue) {
    if (isNumber(newValue)) {
      pointerMoveTolerance = newValue;
      return this;
    }
    return pointerMoveTolerance;
  };
  interact.maxInteractions = function (newValue) {
    if (isNumber(newValue)) {
      maxInteractions = newValue;
      return this;
    }
    return maxInteractions;
  };
  interact.createSnapGrid = function (grid) {
    return function (x, y) {
      var offsetX = 0
        , offsetY = 0;
      if (isObject(grid.offset)) {
        offsetX = grid.offset.x;
        offsetY = grid.offset.y;
      }
      var gridx = Math.round((x - offsetX) / grid.x)
        , gridy = Math.round((y - offsetY) / grid.y)
        , newX = gridx * grid.x + offsetX
        , newY = gridy * grid.y + offsetY;
      return {
        x: newX
        , y: newY
        , range: grid.range
      };
    };
  };

  function endAllInteractions(event) {
    for (var i = 0; i < interactions.length; i++) {
      interactions[i].pointerEnd(event, event);
    }
  }

  function listenToDocument(doc) {
    if (contains(documents, doc)) {
      return;
    }
    var win = doc.defaultView || doc.parentWindow;
    for (var eventType in delegatedEvents) {
      events.add(doc, eventType, delegateListener);
      events.add(doc, eventType, delegateUseCapture, true);
    }
    if (PointerEvent) {
      if (PointerEvent === win.MSPointerEvent) {
        pEventTypes = {
          up: 'MSPointerUp'
          , down: 'MSPointerDown'
          , over: 'mouseover'
          , out: 'mouseout'
          , move: 'MSPointerMove'
          , cancel: 'MSPointerCancel'
        };
      } else {
        pEventTypes = {
          up: 'pointerup'
          , down: 'pointerdown'
          , over: 'pointerover'
          , out: 'pointerout'
          , move: 'pointermove'
          , cancel: 'pointercancel'
        };
      }
      events.add(doc, pEventTypes.down, listeners.selectorDown);
      events.add(doc, pEventTypes.move, listeners.pointerMove);
      events.add(doc, pEventTypes.over, listeners.pointerOver);
      events.add(doc, pEventTypes.out, listeners.pointerOut);
      events.add(doc, pEventTypes.up, listeners.pointerUp);
      events.add(doc, pEventTypes.cancel, listeners.pointerCancel);
      events.add(doc, pEventTypes.move, listeners.autoScrollMove);
    } else {
      events.add(doc, 'mousedown', listeners.selectorDown);
      events.add(doc, 'mousemove', listeners.pointerMove);
      events.add(doc, 'mouseup', listeners.pointerUp);
      events.add(doc, 'mouseover', listeners.pointerOver);
      events.add(doc, 'mouseout', listeners.pointerOut);
      events.add(doc, 'touchstart', listeners.selectorDown);
      events.add(doc, 'touchmove', listeners.pointerMove);
      events.add(doc, 'touchend', listeners.pointerUp);
      events.add(doc, 'touchcancel', listeners.pointerCancel);
      events.add(doc, 'mousemove', listeners.autoScrollMove);
      events.add(doc, 'touchmove', listeners.autoScrollMove);
    }
    events.add(win, 'blur', endAllInteractions);
    try {
      if (win.frameElement) {
        var parentDoc = win.frameElement.ownerDocument
          , parentWindow = parentDoc.defaultView;
        events.add(parentDoc, 'mouseup', listeners.pointerEnd);
        events.add(parentDoc, 'touchend', listeners.pointerEnd);
        events.add(parentDoc, 'touchcancel', listeners.pointerEnd);
        events.add(parentDoc, 'pointerup', listeners.pointerEnd);
        events.add(parentDoc, 'MSPointerUp', listeners.pointerEnd);
        events.add(parentWindow, 'blur', endAllInteractions);
      }
    } catch (error) {
      interact.windowParentError = error;
    }
    events.add(doc, 'dragstart', function (event) {
      for (var i = 0; i < interactions.length; i++) {
        var interaction = interactions[i];
        if (interaction.element && (interaction.element === event.target || nodeContains(interaction.element, event.target))) {
          interaction.checkAndPreventDefault(event, interaction.target, interaction.element);
          return;
        }
      }
    });
    if (events.useAttachEvent) {
      events.add(doc, 'selectstart', function (event) {
        var interaction = interactions[0];
        if (interaction.currentAction()) {
          interaction.checkAndPreventDefault(event);
        }
      });
      events.add(doc, 'dblclick', doOnInteractions('ie8Dblclick'));
    }
    documents.push(doc);
  }
  listenToDocument(document);

  function indexOf(array, target) {
    for (var i = 0, len = array.length; i < len; i++) {
      if (array[i] === target) {
        return i;
      }
    }
    return -1;
  }

  function contains(array, target) {
    return indexOf(array, target) !== -1;
  }

  function matchesSelector(element, selector, nodeList) {
    if (ie8MatchesSelector) {
      return ie8MatchesSelector(element, selector, nodeList);
    }
    if (window !== realWindow) {
      selector = selector.replace(/\/deep\//g, ' ');
    }
    return element[prefixedMatchesSelector](selector);
  }

  function matchesUpTo(element, selector, limit) {
    while (isElement(element)) {
      if (matchesSelector(element, selector)) {
        return true;
      }
      element = parentElement(element);
      if (element === limit) {
        return matchesSelector(element, selector);
      }
    }
    return false;
  }
  if (!(prefixedMatchesSelector in Element.prototype) || !isFunction(Element.prototype[prefixedMatchesSelector])) {
    ie8MatchesSelector = function (element, selector, elems) {
      elems = elems || element.parentNode.querySelectorAll(selector);
      for (var i = 0, len = elems.length; i < len; i++) {
        if (elems[i] === element) {
          return true;
        }
      }
      return false;
    };
  }
  (function () {
    var lastTime = 0
      , vendors = ['ms', 'moz', 'webkit', 'o'];
    for (var x = 0; x < vendors.length && !realWindow.requestAnimationFrame; ++x) {
      reqFrame = realWindow[vendors[x] + 'RequestAnimationFrame'];
      cancelFrame = realWindow[vendors[x] + 'CancelAnimationFrame'] || realWindow[vendors[x] + 'CancelRequestAnimationFrame'];
    }
    if (!reqFrame) {
      reqFrame = function (callback) {
        var currTime = new Date()
          .getTime()
          , timeToCall = Math.max(0, 16 - (currTime - lastTime))
          , id = setTimeout(function () {
            callback(currTime + timeToCall);
          }, timeToCall);
        lastTime = currTime + timeToCall;
        return id;
      };
    }
    if (!cancelFrame) {
      cancelFrame = function (id) {
        clearTimeout(id);
      };
    }
  }());
  realWindow.texthelp.RW4GC.interact = interact;
}(typeof window === 'undefined' ? undefined : window));

var texthelp = texthelp || {};
texthelp.RW4GC = texthelp.RW4GC || {};
texthelp.RW4GC.MDL = {};
(function () {
  "use strict";
  var componentHandler = {
    upgradeDom: function (optJsClass, optCssClass) {}
    , upgradeElement: function (element, optJsClass) {}
    , upgradeElements: function (elements) {}
    , upgradeAllRegistered: function () {}
    , registerUpgradedCallback: function (jsClass, callback) {}
    , register: function (config) {}
    , downgradeElements: function (nodes) {}
  };
  componentHandler = (function () {
    'use strict';
    var registeredComponents_ = [];
    var createdComponents_ = [];
    var downgradeMethod_ = 'mdlDowngrade';
    var componentConfigProperty_ = 'mdlComponentConfigInternal_';

    function findRegisteredClass_(name, optReplace) {
      for (var i = 0; i < registeredComponents_.length; i++) {
        if (registeredComponents_[i].className === name) {
          if (typeof optReplace !== 'undefined') {
            registeredComponents_[i] = optReplace;
          }
          return registeredComponents_[i];
        }
      }
      return false;
    }

    function getUpgradedListOfElement_(element) {
      var dataUpgraded = element.getAttribute('data-upgraded');
      return dataUpgraded === null ? [''] : dataUpgraded.split(',');
    }

    function isElementUpgraded_(element, jsClass) {
      var upgradedList = getUpgradedListOfElement_(element);
      return upgradedList.indexOf(jsClass) !== -1;
    }

    function upgradeDomInternal(optJsClass, optCssClass) {
      if (typeof optJsClass === 'undefined' && typeof optCssClass === 'undefined') {
        for (var i = 0; i < registeredComponents_.length; i++) {
          upgradeDomInternal(registeredComponents_[i].className, registeredComponents_[i].cssClass);
        }
      } else {
        var jsClass = (optJsClass);
        if (typeof optCssClass === 'undefined') {
          var registeredClass = findRegisteredClass_(jsClass);
          if (registeredClass) {
            optCssClass = registeredClass.cssClass;
          }
        }
        var elements = document.querySelectorAll('.' + optCssClass);
        for (var n = 0; n < elements.length; n++) {
          upgradeElementInternal(elements[n], jsClass);
        }
      }
    }

    function upgradeElementInternal(element, optJsClass) {
      if (!(typeof element === 'object' && element instanceof Element)) {
        throw new Error('Invalid argument provided to upgrade MDL element.');
      }
      var upgradedList = getUpgradedListOfElement_(element);
      var classesToUpgrade = [];
      if (!optJsClass) {
        var classList = element.classList;
        registeredComponents_.forEach(function (component) {
          if (classList.contains(component.cssClass) && classesToUpgrade.indexOf(component) === -1 && !isElementUpgraded_(element, component.className)) {
            classesToUpgrade.push(component);
          }
        });
      } else if (!isElementUpgraded_(element, optJsClass)) {
        classesToUpgrade.push(findRegisteredClass_(optJsClass));
      }
      for (var i = 0, n = classesToUpgrade.length, registeredClass; i < n; i++) {
        registeredClass = classesToUpgrade[i];
        if (registeredClass) {
          upgradedList.push(registeredClass.className);
          element.setAttribute('data-upgraded', upgradedList.join(','));
          var instance = new registeredClass.classConstructor(element);
          instance[componentConfigProperty_] = registeredClass;
          createdComponents_.push(instance);
          for (var j = 0, m = registeredClass.callbacks.length; j < m; j++) {
            registeredClass.callbacks[j](element);
          }
          if (registeredClass.widget) {
            element[registeredClass.className] = instance;
          }
        } else {
          throw new Error('Unable to find a registered component for the given class.');
        }
        var ev = document.createEvent('Events');
        ev.initEvent('thmdl-componentupgraded', true, true);
        element.dispatchEvent(ev);
      }
    }

    function upgradeElementsInternal(elements) {
      if (!Array.isArray(elements)) {
        if (typeof elements.item === 'function') {
          elements = Array.prototype.slice.call((elements));
        } else {
          elements = [elements];
        }
      }
      for (var i = 0, n = elements.length, element; i < n; i++) {
        element = elements[i];
        if (element instanceof HTMLElement) {
          upgradeElementInternal(element);
          if (element.children.length > 0) {
            upgradeElementsInternal(element.children);
          }
        }
      }
    }

    function registerInternal(config) {
      var widgetMissing = (typeof config.widget === 'undefined' && typeof config['widget'] === 'undefined');
      var widget = true;
      if (!widgetMissing) {
        widget = config.widget || config['widget'];
      }
      var newConfig = ({
        classConstructor: config.constructor || config['constructor']
        , className: config.classAsString || config['classAsString']
        , cssClass: config.cssClass || config['cssClass']
        , widget: widget
        , callbacks: []
      });
      registeredComponents_.forEach(function (item) {
        if (item.cssClass === newConfig.cssClass) {
          throw new Error('The provided cssClass has already been registered: ' + item.cssClass);
        }
        if (item.className === newConfig.className) {
          throw new Error('The provided className has already been registered');
        }
      });
      if (config.constructor.prototype.hasOwnProperty(componentConfigProperty_)) {
        throw new Error('MDL component classes must not have ' + componentConfigProperty_ + ' defined as a property.');
      }
      var found = findRegisteredClass_(config.classAsString, newConfig);
      if (!found) {
        registeredComponents_.push(newConfig);
      }
    }

    function registerUpgradedCallbackInternal(jsClass, callback) {
      var regClass = findRegisteredClass_(jsClass);
      if (regClass) {
        regClass.callbacks.push(callback);
      }
    }

    function upgradeAllRegisteredInternal() {
      for (var n = 0; n < registeredComponents_.length; n++) {
        upgradeDomInternal(registeredComponents_[n].className);
      }
    }

    function findCreatedComponentByNodeInternal(node) {
      for (var n = 0; n < createdComponents_.length; n++) {
        var component = createdComponents_[n];
        if (component.element_ === node) {
          return component;
        }
      }
    }

    function deconstructComponentInternal(component) {
      if (component && component[componentConfigProperty_].classConstructor.prototype.hasOwnProperty(downgradeMethod_)) {
        component[downgradeMethod_]();
        var componentIndex = createdComponents_.indexOf(component);
        createdComponents_.splice(componentIndex, 1);
        var upgrades = component.element_.getAttribute('data-upgraded')
          .split(',');
        var componentPlace = upgrades.indexOf(component[componentConfigProperty_].classAsString);
        upgrades.splice(componentPlace, 1);
        component.element_.setAttribute('data-upgraded', upgrades.join(','));
        var ev = document.createEvent('Events');
        ev.initEvent('thmdl-componentdowngraded', true, true);
        component.element_.dispatchEvent(ev);
      }
    }

    function downgradeNodesInternal(nodes) {
      var downgradeNode = function (node) {
        deconstructComponentInternal(findCreatedComponentByNodeInternal(node));
      };
      if (nodes instanceof Array || nodes instanceof NodeList) {
        for (var n = 0; n < nodes.length; n++) {
          downgradeNode(nodes[n]);
        }
      } else if (nodes instanceof Node) {
        downgradeNode(nodes);
      } else {
        throw new Error('Invalid argument provided to downgrade MDL nodes.');
      }
    }
    return {
      upgradeDom: upgradeDomInternal
      , upgradeElement: upgradeElementInternal
      , upgradeElements: upgradeElementsInternal
      , upgradeAllRegistered: upgradeAllRegisteredInternal
      , registerUpgradedCallback: registerUpgradedCallbackInternal
      , register: registerInternal
      , downgradeElements: downgradeNodesInternal
    };
  })();
  componentHandler.ComponentConfigPublic;
  componentHandler.ComponentConfig;
  componentHandler.Component;
  componentHandler['upgradeDom'] = componentHandler.upgradeDom;
  componentHandler['upgradeElement'] = componentHandler.upgradeElement;
  componentHandler['upgradeElements'] = componentHandler.upgradeElements;
  componentHandler['upgradeAllRegistered'] = componentHandler.upgradeAllRegistered;
  componentHandler['registerUpgradedCallback'] = componentHandler.registerUpgradedCallback;
  componentHandler['register'] = componentHandler.register;
  componentHandler['downgradeElements'] = componentHandler.downgradeElements;
  window['texthelp']['RW4GC']['MDL'].componentHandler = componentHandler;
  window['texthelp']['RW4GC']['MDL']['componentHandler'] = componentHandler;
  window.addEventListener('load', function () {
    'use strict';
    if ('classList' in document.createElement('div') && 'querySelector' in document && 'addEventListener' in window && Array.prototype.forEach) {
      document.documentElement.classList.add('thmdl-js');
      componentHandler.upgradeAllRegistered();
    } else {
      componentHandler.upgradeElement = function () {};
      componentHandler.register = function () {};
    }
  });
  if (!Date.now) {
    Date.now = function () {
      return new Date()
        .getTime();
    };
    Date['now'] = Date.now;
  }
  var vendors = ['webkit', 'moz'];
  for (var i = 0; i < vendors.length && !window.requestAnimationFrame; ++i) {
    var vp = vendors[i];
    window.requestAnimationFrame = window[vp + 'RequestAnimationFrame'];
    window.cancelAnimationFrame = window[vp + 'CancelAnimationFrame'] || window['MDL'][vp + 'CancelRequestAnimationFrame'];
    window['requestAnimationFrame'] = window.requestAnimationFrame;
    window['cancelAnimationFrame'] = window.cancelAnimationFrame;
  }
  if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
    var lastTime = 0;
    window.requestAnimationFrame = function (callback) {
      var now = Date.now();
      var nextTime = Math.max(lastTime + 16, now);
      return setTimeout(function () {
        callback(lastTime = nextTime);
      }, nextTime - now);
    };
    window.cancelAnimationFrame = clearTimeout;
    window['requestAnimationFrame'] = window.requestAnimationFrame;
    window['cancelAnimationFrame'] = window.cancelAnimationFrame;
  }
  var MaterialButton = function MaterialButton(element) {
    this.element_ = element;
    this.init();
  };
  window['texthelp']['RW4GC']['MDL']['MaterialButton'] = MaterialButton;
  MaterialButton.prototype.Constant_ = {};
  MaterialButton.prototype.CssClasses_ = {
    RIPPLE_EFFECT: 'thmdl-js-ripple-effect'
    , RIPPLE_CONTAINER: 'thmdl-button__ripple-container'
    , RIPPLE: 'thmdl-ripple'
  };
  MaterialButton.prototype.blurHandler_ = function (event) {
    if (event) {
      this.element_.blur();
    }
  };
  MaterialButton.prototype.disable = function () {
    this.element_.disabled = true;
  };
  MaterialButton.prototype['disable'] = MaterialButton.prototype.disable;
  MaterialButton.prototype.enable = function () {
    this.element_.disabled = false;
  };
  MaterialButton.prototype['enable'] = MaterialButton.prototype.enable;
  MaterialButton.prototype.init = function () {
    if (this.element_) {
      if (this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)) {
        var rippleContainer = document.createElement('span');
        rippleContainer.classList.add(this.CssClasses_.RIPPLE_CONTAINER);
        this.rippleElement_ = document.createElement('span');
        this.rippleElement_.classList.add(this.CssClasses_.RIPPLE);
        rippleContainer.appendChild(this.rippleElement_);
        this.boundRippleBlurHandler = this.blurHandler_.bind(this);
        this.rippleElement_.addEventListener('mouseup', this.boundRippleBlurHandler);
        this.element_.appendChild(rippleContainer);
      }
      this.boundButtonBlurHandler = this.blurHandler_.bind(this);
      this.element_.addEventListener('mouseup', this.boundButtonBlurHandler);
      this.element_.addEventListener('mouseleave', this.boundButtonBlurHandler);
    }
  };
  MaterialButton.prototype.mdlDowngrade_ = function () {
    if (this.rippleElement_) {
      this.rippleElement_.removeEventListener('mouseup', this.boundRippleBlurHandler);
    }
    this.element_.removeEventListener('mouseup', this.boundButtonBlurHandler);
    this.element_.removeEventListener('mouseleave', this.boundButtonBlurHandler);
  };
  MaterialButton.prototype.mdlDowngrade = MaterialButton.prototype.mdlDowngrade_;
  MaterialButton.prototype['mdlDowngrade'] = MaterialButton.prototype.mdlDowngrade;
  componentHandler.register({
    constructor: MaterialButton
    , classAsString: 'MaterialButton'
    , cssClass: 'thmdl-js-button'
    , widget: true
  });
  var MaterialCheckbox = function MaterialCheckbox(element) {
    this.element_ = element;
    this.init();
  };
  window['texthelp']['RW4GC']['MDL']['MaterialCheckbox'] = MaterialCheckbox;
  MaterialCheckbox.prototype.Constant_ = {
    TINY_TIMEOUT: 0.001
  };
  MaterialCheckbox.prototype.CssClasses_ = {
    INPUT: 'thmdl-checkbox__input'
    , BOX_OUTLINE: 'thmdl-checkbox__box-outline'
    , FOCUS_HELPER: 'thmdl-checkbox__focus-helper'
    , TICK_OUTLINE: 'thmdl-checkbox__tick-outline'
    , RIPPLE_EFFECT: 'thmdl-js-ripple-effect'
    , RIPPLE_IGNORE_EVENTS: 'thmdl-js-ripple-effect--ignore-events'
    , RIPPLE_CONTAINER: 'thmdl-checkbox__ripple-container'
    , RIPPLE_CENTER: 'thmdl-ripple--center'
    , RIPPLE: 'thmdl-ripple'
    , IS_FOCUSED: 'is-focused'
    , IS_DISABLED: 'is-disabled'
    , IS_CHECKED: 'is-checked'
    , IS_UPGRADED: 'is-upgraded'
  };
  MaterialCheckbox.prototype.onChange_ = function (event) {
    this.updateClasses_();
  };
  MaterialCheckbox.prototype.onFocus_ = function (event) {
    this.element_.classList.add(this.CssClasses_.IS_FOCUSED);
  };
  MaterialCheckbox.prototype.onBlur_ = function (event) {
    this.element_.classList.remove(this.CssClasses_.IS_FOCUSED);
  };
  MaterialCheckbox.prototype.onMouseUp_ = function (event) {
    this.blur_();
  };
  MaterialCheckbox.prototype.updateClasses_ = function () {
    this.checkDisabled();
    this.checkToggleState();
  };
  MaterialCheckbox.prototype.blur_ = function () {
    window.setTimeout(function () {
      this.inputElement_.blur();
    }.bind(this), this.Constant_.TINY_TIMEOUT);
  };
  MaterialCheckbox.prototype.checkToggleState = function () {
    if (this.inputElement_.checked) {
      this.element_.classList.add(this.CssClasses_.IS_CHECKED);
    } else {
      this.element_.classList.remove(this.CssClasses_.IS_CHECKED);
    }
  };
  MaterialCheckbox.prototype['checkToggleState'] = MaterialCheckbox.prototype.checkToggleState;
  MaterialCheckbox.prototype.checkDisabled = function () {
    if (this.inputElement_.disabled) {
      this.element_.classList.add(this.CssClasses_.IS_DISABLED);
    } else {
      this.element_.classList.remove(this.CssClasses_.IS_DISABLED);
    }
  };
  MaterialCheckbox.prototype['checkDisabled'] = MaterialCheckbox.prototype.checkDisabled;
  MaterialCheckbox.prototype.disable = function () {
    this.inputElement_.disabled = true;
    this.updateClasses_();
  };
  MaterialCheckbox.prototype['disable'] = MaterialCheckbox.prototype.disable;
  MaterialCheckbox.prototype.enable = function () {
    this.inputElement_.disabled = false;
    this.updateClasses_();
  };
  MaterialCheckbox.prototype['enable'] = MaterialCheckbox.prototype.enable;
  MaterialCheckbox.prototype.check = function () {
    this.inputElement_.checked = true;
    this.updateClasses_();
  };
  MaterialCheckbox.prototype['check'] = MaterialCheckbox.prototype.check;
  MaterialCheckbox.prototype.uncheck = function () {
    this.inputElement_.checked = false;
    this.updateClasses_();
  };
  MaterialCheckbox.prototype['uncheck'] = MaterialCheckbox.prototype.uncheck;
  MaterialCheckbox.prototype.init = function () {
    if (this.element_) {
      this.inputElement_ = this.element_.querySelector('.' + this.CssClasses_.INPUT);
      var boxOutline = document.createElement('span');
      boxOutline.classList.add(this.CssClasses_.BOX_OUTLINE);
      var tickContainer = document.createElement('span');
      tickContainer.classList.add(this.CssClasses_.FOCUS_HELPER);
      var tickOutline = document.createElement('span');
      tickOutline.classList.add(this.CssClasses_.TICK_OUTLINE);
      boxOutline.appendChild(tickOutline);
      this.element_.appendChild(tickContainer);
      this.element_.appendChild(boxOutline);
      if (this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)) {
        this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS);
        this.rippleContainerElement_ = document.createElement('span');
        this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CONTAINER);
        this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_EFFECT);
        this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CENTER);
        this.boundRippleMouseUp = this.onMouseUp_.bind(this);
        this.rippleContainerElement_.addEventListener('mouseup', this.boundRippleMouseUp);
        var ripple = document.createElement('span');
        ripple.classList.add(this.CssClasses_.RIPPLE);
        this.rippleContainerElement_.appendChild(ripple);
        this.element_.appendChild(this.rippleContainerElement_);
      }
      this.boundInputOnChange = this.onChange_.bind(this);
      this.boundInputOnFocus = this.onFocus_.bind(this);
      this.boundInputOnBlur = this.onBlur_.bind(this);
      this.boundElementMouseUp = this.onMouseUp_.bind(this);
      this.inputElement_.addEventListener('change', this.boundInputOnChange);
      this.inputElement_.addEventListener('focus', this.boundInputOnFocus);
      this.inputElement_.addEventListener('blur', this.boundInputOnBlur);
      this.element_.addEventListener('mouseup', this.boundElementMouseUp);
      this.updateClasses_();
      this.element_.classList.add(this.CssClasses_.IS_UPGRADED);
    }
  };
  MaterialCheckbox.prototype.mdlDowngrade_ = function () {
    if (this.rippleContainerElement_) {
      this.rippleContainerElement_.removeEventListener('mouseup', this.boundRippleMouseUp);
    }
    this.inputElement_.removeEventListener('change', this.boundInputOnChange);
    this.inputElement_.removeEventListener('focus', this.boundInputOnFocus);
    this.inputElement_.removeEventListener('blur', this.boundInputOnBlur);
    this.element_.removeEventListener('mouseup', this.boundElementMouseUp);
  };
  MaterialCheckbox.prototype.mdlDowngrade = MaterialCheckbox.prototype.mdlDowngrade_;
  MaterialCheckbox.prototype['mdlDowngrade'] = MaterialCheckbox.prototype.mdlDowngrade;
  componentHandler.register({
    constructor: MaterialCheckbox
    , classAsString: 'MaterialCheckbox'
    , cssClass: 'thmdl-js-checkbox'
    , widget: true
  });
  var MaterialIconToggle = function MaterialIconToggle(element) {
    this.element_ = element;
    this.init();
  };
  window['texthelp']['RW4GC']['MDL']['MaterialIconToggle'] = MaterialIconToggle;
  MaterialIconToggle.prototype.Constant_ = {
    TINY_TIMEOUT: 0.001
  };
  MaterialIconToggle.prototype.CssClasses_ = {
    INPUT: 'thmdl-icon-toggle__input'
    , JS_RIPPLE_EFFECT: 'thmdl-js-ripple-effect'
    , RIPPLE_IGNORE_EVENTS: 'thmdl-js-ripple-effect--ignore-events'
    , RIPPLE_CONTAINER: 'thmdl-icon-toggle__ripple-container'
    , RIPPLE_CENTER: 'thmdl-ripple--center'
    , RIPPLE: 'thmdl-ripple'
    , IS_FOCUSED: 'is-focused'
    , IS_DISABLED: 'is-disabled'
    , IS_CHECKED: 'is-checked'
  };
  MaterialIconToggle.prototype.onChange_ = function (event) {
    this.updateClasses_();
  };
  MaterialIconToggle.prototype.onFocus_ = function (event) {
    this.element_.classList.add(this.CssClasses_.IS_FOCUSED);
  };
  MaterialIconToggle.prototype.onBlur_ = function (event) {
    this.element_.classList.remove(this.CssClasses_.IS_FOCUSED);
  };
  MaterialIconToggle.prototype.onMouseUp_ = function (event) {
    this.blur_();
  };
  MaterialIconToggle.prototype.updateClasses_ = function () {
    this.checkDisabled();
    this.checkToggleState();
  };
  MaterialIconToggle.prototype.blur_ = function () {
    window.setTimeout(function () {
      this.inputElement_.blur();
    }.bind(this), this.Constant_.TINY_TIMEOUT);
  };
  MaterialIconToggle.prototype.checkToggleState = function () {
    if (this.inputElement_.checked) {
      this.element_.classList.add(this.CssClasses_.IS_CHECKED);
    } else {
      this.element_.classList.remove(this.CssClasses_.IS_CHECKED);
    }
  };
  MaterialIconToggle.prototype['checkToggleState'] = MaterialIconToggle.prototype.checkToggleState;
  MaterialIconToggle.prototype.checkDisabled = function () {
    if (this.inputElement_.disabled) {
      this.element_.classList.add(this.CssClasses_.IS_DISABLED);
    } else {
      this.element_.classList.remove(this.CssClasses_.IS_DISABLED);
    }
  };
  MaterialIconToggle.prototype['checkDisabled'] = MaterialIconToggle.prototype.checkDisabled;
  MaterialIconToggle.prototype.disable = function () {
    this.inputElement_.disabled = true;
    this.updateClasses_();
  };
  MaterialIconToggle.prototype['disable'] = MaterialIconToggle.prototype.disable;
  MaterialIconToggle.prototype.enable = function () {
    this.inputElement_.disabled = false;
    this.updateClasses_();
  };
  MaterialIconToggle.prototype['enable'] = MaterialIconToggle.prototype.enable;
  MaterialIconToggle.prototype.check = function () {
    this.inputElement_.checked = true;
    this.updateClasses_();
  };
  MaterialIconToggle.prototype['check'] = MaterialIconToggle.prototype.check;
  MaterialIconToggle.prototype.uncheck = function () {
    this.inputElement_.checked = false;
    this.updateClasses_();
  };
  MaterialIconToggle.prototype['uncheck'] = MaterialIconToggle.prototype.uncheck;
  MaterialIconToggle.prototype.init = function () {
    if (this.element_) {
      this.inputElement_ = this.element_.querySelector('.' + this.CssClasses_.INPUT);
      if (this.element_.classList.contains(this.CssClasses_.JS_RIPPLE_EFFECT)) {
        this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS);
        this.rippleContainerElement_ = document.createElement('span');
        this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CONTAINER);
        this.rippleContainerElement_.classList.add(this.CssClasses_.JS_RIPPLE_EFFECT);
        this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CENTER);
        this.boundRippleMouseUp = this.onMouseUp_.bind(this);
        this.rippleContainerElement_.addEventListener('mouseup', this.boundRippleMouseUp);
        var ripple = document.createElement('span');
        ripple.classList.add(this.CssClasses_.RIPPLE);
        this.rippleContainerElement_.appendChild(ripple);
        this.element_.appendChild(this.rippleContainerElement_);
      }
      this.boundInputOnChange = this.onChange_.bind(this);
      this.boundInputOnFocus = this.onFocus_.bind(this);
      this.boundInputOnBlur = this.onBlur_.bind(this);
      this.boundElementOnMouseUp = this.onMouseUp_.bind(this);
      this.inputElement_.addEventListener('change', this.boundInputOnChange);
      this.inputElement_.addEventListener('focus', this.boundInputOnFocus);
      this.inputElement_.addEventListener('blur', this.boundInputOnBlur);
      this.element_.addEventListener('mouseup', this.boundElementOnMouseUp);
      this.updateClasses_();
      this.element_.classList.add('is-upgraded');
    }
  };
  MaterialIconToggle.prototype.mdlDowngrade_ = function () {
    if (this.rippleContainerElement_) {
      this.rippleContainerElement_.removeEventListener('mouseup', this.boundRippleMouseUp);
    }
    this.inputElement_.removeEventListener('change', this.boundInputOnChange);
    this.inputElement_.removeEventListener('focus', this.boundInputOnFocus);
    this.inputElement_.removeEventListener('blur', this.boundInputOnBlur);
    this.element_.removeEventListener('mouseup', this.boundElementOnMouseUp);
  };
  MaterialIconToggle.prototype.mdlDowngrade = MaterialIconToggle.prototype.mdlDowngrade_;
  MaterialIconToggle.prototype['mdlDowngrade'] = MaterialIconToggle.prototype.mdlDowngrade;
  componentHandler.register({
    constructor: MaterialIconToggle
    , classAsString: 'MaterialIconToggle'
    , cssClass: 'thmdl-js-icon-toggle'
    , widget: true
  });
  var MaterialMenu = function MaterialMenu(element) {
    this.element_ = element;
    this.init();
  };
  window['texthelp']['RW4GC']['MDL']['MaterialMenu'] = MaterialMenu;
  MaterialMenu.prototype.Constant_ = {
    TRANSITION_DURATION_SECONDS: 0.3
    , TRANSITION_DURATION_FRACTION: 0.8
    , CLOSE_TIMEOUT: 150
  };
  MaterialMenu.prototype.Keycodes_ = {
    ENTER: 13
    , ESCAPE: 27
    , SPACE: 32
    , UP_ARROW: 38
    , DOWN_ARROW: 40
  };
  MaterialMenu.prototype.CssClasses_ = {
    CONTAINER: 'thmdl-menu__container'
    , OUTLINE: 'thmdl-menu__outline'
    , ITEM: 'thmdl-menu__item'
    , ITEM_RIPPLE_CONTAINER: 'thmdl-menu__item-ripple-container'
    , RIPPLE_EFFECT: 'thmdl-js-ripple-effect'
    , RIPPLE_IGNORE_EVENTS: 'thmdl-js-ripple-effect--ignore-events'
    , RIPPLE: 'thmdl-ripple'
    , IS_UPGRADED: 'is-upgraded'
    , IS_VISIBLE: 'is-visible'
    , IS_ANIMATING: 'is-animating'
    , BOTTOM_LEFT: 'thmdl-menu--bottom-left'
    , BOTTOM_RIGHT: 'thmdl-menu--bottom-right'
    , TOP_LEFT: 'thmdl-menu--top-left'
    , TOP_RIGHT: 'thmdl-menu--top-right'
    , UNALIGNED: 'thmdl-menu--unaligned'
  };
  MaterialMenu.prototype.init = function () {
    if (this.element_) {
      var container = document.createElement('div');
      container.classList.add(this.CssClasses_.CONTAINER);
      this.element_.parentElement.insertBefore(container, this.element_);
      this.element_.parentElement.removeChild(this.element_);
      container.appendChild(this.element_);
      this.container_ = container;
      var outline = document.createElement('div');
      outline.classList.add(this.CssClasses_.OUTLINE);
      this.outline_ = outline;
      container.insertBefore(outline, this.element_);
      var forElId = this.element_.getAttribute('for');
      var forEl = null;
      if (forElId) {
        forEl = document.getElementById(forElId);
        if (forEl) {
          this.forElement_ = forEl;
          forEl.addEventListener('click', this.handleForClick_.bind(this));
          forEl.addEventListener('keydown', this.handleForKeyboardEvent_.bind(this));
        }
      }
      var items = this.element_.querySelectorAll('.' + this.CssClasses_.ITEM);
      this.boundItemKeydown_ = this.handleItemKeyboardEvent_.bind(this);
      this.boundItemClick_ = this.handleItemClick_.bind(this);
      for (var i = 0; i < items.length; i++) {
        items[i].addEventListener('click', this.boundItemClick_);
        items[i].tabIndex = '-1';
        items[i].addEventListener('keydown', this.boundItemKeydown_);
      }
      if (this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)) {
        this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS);
        for (i = 0; i < items.length; i++) {
          var item = items[i];
          var rippleContainer = document.createElement('span');
          rippleContainer.classList.add(this.CssClasses_.ITEM_RIPPLE_CONTAINER);
          var ripple = document.createElement('span');
          ripple.classList.add(this.CssClasses_.RIPPLE);
          rippleContainer.appendChild(ripple);
          item.appendChild(rippleContainer);
          item.classList.add(this.CssClasses_.RIPPLE_EFFECT);
        }
      }
      if (this.element_.classList.contains(this.CssClasses_.BOTTOM_LEFT)) {
        this.outline_.classList.add(this.CssClasses_.BOTTOM_LEFT);
      }
      if (this.element_.classList.contains(this.CssClasses_.BOTTOM_RIGHT)) {
        this.outline_.classList.add(this.CssClasses_.BOTTOM_RIGHT);
      }
      if (this.element_.classList.contains(this.CssClasses_.TOP_LEFT)) {
        this.outline_.classList.add(this.CssClasses_.TOP_LEFT);
      }
      if (this.element_.classList.contains(this.CssClasses_.TOP_RIGHT)) {
        this.outline_.classList.add(this.CssClasses_.TOP_RIGHT);
      }
      if (this.element_.classList.contains(this.CssClasses_.UNALIGNED)) {
        this.outline_.classList.add(this.CssClasses_.UNALIGNED);
      }
      container.classList.add(this.CssClasses_.IS_UPGRADED);
    }
  };
  MaterialMenu.prototype.handleForClick_ = function (evt) {
    if (this.element_ && this.forElement_) {
      var rect = this.forElement_.getBoundingClientRect();
      var forRect = this.forElement_.parentElement.getBoundingClientRect();
      if (this.element_.classList.contains(this.CssClasses_.UNALIGNED)) {} else if (this.element_.classList.contains(this.CssClasses_.BOTTOM_RIGHT)) {
        this.container_.style.right = forRect.right - rect.right + 'px';
        this.container_.style.top = this.forElement_.offsetTop + this.forElement_.offsetHeight + 'px';
      } else if (this.element_.classList.contains(this.CssClasses_.TOP_LEFT)) {
        this.container_.style.left = this.forElement_.offsetLeft + 'px';
        this.container_.style.bottom = forRect.bottom - rect.top + 'px';
      } else if (this.element_.classList.contains(this.CssClasses_.TOP_RIGHT)) {
        this.container_.style.right = forRect.right - rect.right + 'px';
        this.container_.style.bottom = forRect.bottom - rect.top + 'px';
      } else {
        this.container_.style.left = this.forElement_.offsetLeft + 'px';
        this.container_.style.top = this.forElement_.offsetTop + this.forElement_.offsetHeight + 'px';
      }
    }
    this.toggle(evt);
  };
  MaterialMenu.prototype.handleForKeyboardEvent_ = function (evt) {
    if (this.element_ && this.container_ && this.forElement_) {
      var items = this.element_.querySelectorAll('.' + this.CssClasses_.ITEM + ':not([disabled])');
      if (items && items.length > 0 && this.container_.classList.contains(this.CssClasses_.IS_VISIBLE)) {
        if (evt.keyCode === this.Keycodes_.UP_ARROW) {
          evt.preventDefault();
          items[items.length - 1].focus();
        } else if (evt.keyCode === this.Keycodes_.DOWN_ARROW) {
          evt.preventDefault();
          items[0].focus();
        }
      }
    }
  };
  MaterialMenu.prototype.handleItemKeyboardEvent_ = function (evt) {
    if (this.element_ && this.container_) {
      var items = this.element_.querySelectorAll('.' + this.CssClasses_.ITEM + ':not([disabled])');
      if (items && items.length > 0 && this.container_.classList.contains(this.CssClasses_.IS_VISIBLE)) {
        var currentIndex = Array.prototype.slice.call(items)
          .indexOf(evt.target);
        if (evt.keyCode === this.Keycodes_.UP_ARROW) {
          evt.preventDefault();
          if (currentIndex > 0) {
            items[currentIndex - 1].focus();
          } else {
            items[items.length - 1].focus();
          }
        } else if (evt.keyCode === this.Keycodes_.DOWN_ARROW) {
          evt.preventDefault();
          if (items.length > currentIndex + 1) {
            items[currentIndex + 1].focus();
          } else {
            items[0].focus();
          }
        } else if (evt.keyCode === this.Keycodes_.SPACE || evt.keyCode === this.Keycodes_.ENTER) {
          evt.preventDefault();
          var e = new MouseEvent('mousedown');
          evt.target.dispatchEvent(e);
          e = new MouseEvent('mouseup');
          evt.target.dispatchEvent(e);
          evt.target.click();
        } else if (evt.keyCode === this.Keycodes_.ESCAPE) {
          evt.preventDefault();
          this.hide();
        }
      }
    }
  };
  MaterialMenu.prototype.handleItemClick_ = function (evt) {
    if (evt.target.hasAttribute('disabled')) {
      evt.stopPropagation();
    } else {
      this.closing_ = true;
      window.setTimeout(function (evt) {
        this.hide();
        this.closing_ = false;
      }.bind(this), this.Constant_.CLOSE_TIMEOUT);
    }
  };
  MaterialMenu.prototype.applyClip_ = function (height, width) {
    if (this.element_.classList.contains(this.CssClasses_.UNALIGNED)) {
      this.element_.style.clip = '';
    } else if (this.element_.classList.contains(this.CssClasses_.BOTTOM_RIGHT)) {
      this.element_.style.clip = 'rect(0 ' + width + 'px ' + '0 ' + width + 'px)';
    } else if (this.element_.classList.contains(this.CssClasses_.TOP_LEFT)) {
      this.element_.style.clip = 'rect(' + height + 'px 0 ' + height + 'px 0)';
    } else if (this.element_.classList.contains(this.CssClasses_.TOP_RIGHT)) {
      this.element_.style.clip = 'rect(' + height + 'px ' + width + 'px ' + height + 'px ' + width + 'px)';
    } else {
      this.element_.style.clip = '';
    }
  };
  MaterialMenu.prototype.addAnimationEndListener_ = function () {
    var cleanup = function () {
      this.element_.removeEventListener('transitionend', cleanup);
      this.element_.removeEventListener('webkitTransitionEnd', cleanup);
      this.element_.classList.remove(this.CssClasses_.IS_ANIMATING);
    }.bind(this);
    this.element_.addEventListener('transitionend', cleanup);
    this.element_.addEventListener('webkitTransitionEnd', cleanup);
  };
  MaterialMenu.prototype.show = function (evt) {
    if (this.element_ && this.container_ && this.outline_) {
      var height = this.element_.getBoundingClientRect()
        .height;
      var width = this.element_.getBoundingClientRect()
        .width;
      this.container_.style.width = width + 'px';
      this.container_.style.height = height + 'px';
      this.outline_.style.width = width + 'px';
      this.outline_.style.height = height + 'px';
      var transitionDuration = this.Constant_.TRANSITION_DURATION_SECONDS * this.Constant_.TRANSITION_DURATION_FRACTION;
      var items = this.element_.querySelectorAll('.' + this.CssClasses_.ITEM);
      for (var i = 0; i < items.length; i++) {
        var itemDelay = null;
        if (this.element_.classList.contains(this.CssClasses_.TOP_LEFT) || this.element_.classList.contains(this.CssClasses_.TOP_RIGHT)) {
          itemDelay = (height - items[i].offsetTop - items[i].offsetHeight) / height * transitionDuration + 's';
        } else {
          itemDelay = items[i].offsetTop / height * transitionDuration + 's';
        }
        items[i].style.transitionDelay = itemDelay;
      }
      this.applyClip_(height, width);
      window.requestAnimationFrame(function () {
        this.element_.classList.add(this.CssClasses_.IS_ANIMATING);
        this.element_.style.clip = 'rect(0 ' + width + 'px ' + height + 'px 0)';
        this.container_.classList.add(this.CssClasses_.IS_VISIBLE);
      }.bind(this));
      this.addAnimationEndListener_();
      var callback = function (e) {
        if (e !== evt && !this.closing_ && e.target.parentNode !== this.element_) {
          document.removeEventListener('click', callback);
          this.hide();
        }
      }.bind(this);
      document.addEventListener('click', callback);
    }
  };
  MaterialMenu.prototype['show'] = MaterialMenu.prototype.show;
  MaterialMenu.prototype.hide = function () {
    if (this.element_ && this.container_ && this.outline_) {
      var items = this.element_.querySelectorAll('.' + this.CssClasses_.ITEM);
      for (var i = 0; i < items.length; i++) {
        items[i].style.transitionDelay = null;
      }
      var rect = this.element_.getBoundingClientRect();
      var height = rect.height;
      var width = rect.width;
      this.element_.classList.add(this.CssClasses_.IS_ANIMATING);
      this.applyClip_(height, width);
      this.container_.classList.remove(this.CssClasses_.IS_VISIBLE);
      this.addAnimationEndListener_();
    }
  };
  MaterialMenu.prototype['hide'] = MaterialMenu.prototype.hide;
  MaterialMenu.prototype.toggle = function (evt) {
    if (this.container_.classList.contains(this.CssClasses_.IS_VISIBLE)) {
      this.hide();
    } else {
      this.show(evt);
    }
  };
  MaterialMenu.prototype['toggle'] = MaterialMenu.prototype.toggle;
  MaterialMenu.prototype.mdlDowngrade_ = function () {
    var items = this.element_.querySelectorAll('.' + this.CssClasses_.ITEM);
    for (var i = 0; i < items.length; i++) {
      items[i].removeEventListener('click', this.boundItemClick_);
      items[i].removeEventListener('keydown', this.boundItemKeydown_);
    }
  };
  MaterialMenu.prototype.mdlDowngrade = MaterialMenu.prototype.mdlDowngrade_;
  MaterialMenu.prototype['mdlDowngrade'] = MaterialMenu.prototype.mdlDowngrade;
  componentHandler.register({
    constructor: MaterialMenu
    , classAsString: 'MaterialMenu'
    , cssClass: 'thmdl-js-menu'
    , widget: true
  });
  var MaterialProgress = function MaterialProgress(element) {
    this.element_ = element;
    this.init();
  };
  window['texthelp']['RW4GC']['MDL']['MaterialProgress'] = MaterialProgress;
  MaterialProgress.prototype.Constant_ = {};
  MaterialProgress.prototype.CssClasses_ = {
    INDETERMINATE_CLASS: 'thmdl-progress__indeterminate'
  };
  MaterialProgress.prototype.setProgress = function (p) {
    if (this.element_.classList.contains(this.CssClasses_.INDETERMINATE_CLASS)) {
      return;
    }
    this.progressbar_.style.width = p + '%';
  };
  MaterialProgress.prototype['setProgress'] = MaterialProgress.prototype.setProgress;
  MaterialProgress.prototype.setBuffer = function (p) {
    this.bufferbar_.style.width = p + '%';
    this.auxbar_.style.width = 100 - p + '%';
  };
  MaterialProgress.prototype['setBuffer'] = MaterialProgress.prototype.setBuffer;
  MaterialProgress.prototype.init = function () {
    if (this.element_) {
      var el = document.createElement('div');
      el.className = 'progressbar bar bar1';
      this.element_.appendChild(el);
      this.progressbar_ = el;
      el = document.createElement('div');
      el.className = 'bufferbar bar bar2';
      this.element_.appendChild(el);
      this.bufferbar_ = el;
      el = document.createElement('div');
      el.className = 'auxbar bar bar3';
      this.element_.appendChild(el);
      this.auxbar_ = el;
      this.progressbar_.style.width = '0%';
      this.bufferbar_.style.width = '100%';
      this.auxbar_.style.width = '0%';
      this.element_.classList.add('is-upgraded');
    }
  };
  MaterialProgress.prototype.mdlDowngrade_ = function () {
    while (this.element_.firstChild) {
      this.element_.removeChild(this.element_.firstChild);
    }
  };
  MaterialProgress.prototype.mdlDowngrade = MaterialProgress.prototype.mdlDowngrade_;
  MaterialProgress.prototype['mdlDowngrade'] = MaterialProgress.prototype.mdlDowngrade;
  componentHandler.register({
    constructor: MaterialProgress
    , classAsString: 'MaterialProgress'
    , cssClass: 'thmdl-js-progress'
    , widget: true
  });
  var MaterialRadio = function MaterialRadio(element) {
    this.element_ = element;
    this.init();
  };
  window['texthelp']['RW4GC']['MDL']['MaterialRadio'] = MaterialRadio;
  MaterialRadio.prototype.Constant_ = {
    TINY_TIMEOUT: 0.001
  };
  MaterialRadio.prototype.CssClasses_ = {
    IS_FOCUSED: 'is-focused'
    , IS_DISABLED: 'is-disabled'
    , IS_CHECKED: 'is-checked'
    , IS_UPGRADED: 'is-upgraded'
    , JS_RADIO: 'thmdl-js-radio'
    , RADIO_BTN: 'thmdl-radio__button'
    , RADIO_OUTER_CIRCLE: 'thmdl-radio__outer-circle'
    , RADIO_INNER_CIRCLE: 'thmdl-radio__inner-circle'
    , RIPPLE_EFFECT: 'thmdl-js-ripple-effect'
    , RIPPLE_IGNORE_EVENTS: 'thmdl-js-ripple-effect--ignore-events'
    , RIPPLE_CONTAINER: 'thmdl-radio__ripple-container'
    , RIPPLE_CENTER: 'thmdl-ripple--center'
    , RIPPLE: 'thmdl-ripple'
  };
  MaterialRadio.prototype.onChange_ = function (event) {
    var radios = document.getElementsByClassName(this.CssClasses_.JS_RADIO);
    for (var i = 0; i < radios.length; i++) {
      var button = radios[i].querySelector('.' + this.CssClasses_.RADIO_BTN);
      if (button.getAttribute('name') === this.btnElement_.getAttribute('name')) {
        radios[i]['MaterialRadio'].updateClasses_();
      }
    }
  };
  MaterialRadio.prototype.onFocus_ = function (event) {
    this.element_.classList.add(this.CssClasses_.IS_FOCUSED);
  };
  MaterialRadio.prototype.onBlur_ = function (event) {
    this.element_.classList.remove(this.CssClasses_.IS_FOCUSED);
  };
  MaterialRadio.prototype.onMouseup_ = function (event) {
    this.blur_();
  };
  MaterialRadio.prototype.updateClasses_ = function () {
    this.checkDisabled();
    this.checkToggleState();
  };
  MaterialRadio.prototype.blur_ = function () {
    window.setTimeout(function () {
      this.btnElement_.blur();
    }.bind(this), this.Constant_.TINY_TIMEOUT);
  };
  MaterialRadio.prototype.checkDisabled = function () {
    if (this.btnElement_.disabled) {
      this.element_.classList.add(this.CssClasses_.IS_DISABLED);
    } else {
      this.element_.classList.remove(this.CssClasses_.IS_DISABLED);
    }
  };
  MaterialRadio.prototype['checkDisabled'] = MaterialRadio.prototype.checkDisabled;
  MaterialRadio.prototype.checkToggleState = function () {
    if (this.btnElement_.checked) {
      this.element_.classList.add(this.CssClasses_.IS_CHECKED);
    } else {
      this.element_.classList.remove(this.CssClasses_.IS_CHECKED);
    }
  };
  MaterialRadio.prototype['checkToggleState'] = MaterialRadio.prototype.checkToggleState;
  MaterialRadio.prototype.disable = function () {
    this.btnElement_.disabled = true;
    this.updateClasses_();
  };
  MaterialRadio.prototype['disable'] = MaterialRadio.prototype.disable;
  MaterialRadio.prototype.enable = function () {
    this.btnElement_.disabled = false;
    this.updateClasses_();
  };
  MaterialRadio.prototype['enable'] = MaterialRadio.prototype.enable;
  MaterialRadio.prototype.check = function () {
    this.btnElement_.checked = true;
    this.updateClasses_();
  };
  MaterialRadio.prototype['check'] = MaterialRadio.prototype.check;
  MaterialRadio.prototype.uncheck = function () {
    this.btnElement_.checked = false;
    this.updateClasses_();
  };
  MaterialRadio.prototype['uncheck'] = MaterialRadio.prototype.uncheck;
  MaterialRadio.prototype.init = function () {
    if (this.element_) {
      this.btnElement_ = this.element_.querySelector('.' + this.CssClasses_.RADIO_BTN);
      this.boundChangeHandler_ = this.onChange_.bind(this);
      this.boundFocusHandler_ = this.onChange_.bind(this);
      this.boundBlurHandler_ = this.onBlur_.bind(this);
      this.boundMouseUpHandler_ = this.onMouseup_.bind(this);
      var outerCircle = document.createElement('span');
      outerCircle.classList.add(this.CssClasses_.RADIO_OUTER_CIRCLE);
      var innerCircle = document.createElement('span');
      innerCircle.classList.add(this.CssClasses_.RADIO_INNER_CIRCLE);
      this.element_.appendChild(outerCircle);
      this.element_.appendChild(innerCircle);
      var rippleContainer;
      if (this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)) {
        this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS);
        rippleContainer = document.createElement('span');
        rippleContainer.classList.add(this.CssClasses_.RIPPLE_CONTAINER);
        rippleContainer.classList.add(this.CssClasses_.RIPPLE_EFFECT);
        rippleContainer.classList.add(this.CssClasses_.RIPPLE_CENTER);
        rippleContainer.addEventListener('mouseup', this.boundMouseUpHandler_);
        var ripple = document.createElement('span');
        ripple.classList.add(this.CssClasses_.RIPPLE);
        rippleContainer.appendChild(ripple);
        this.element_.appendChild(rippleContainer);
      }
      this.btnElement_.addEventListener('change', this.boundChangeHandler_);
      this.btnElement_.addEventListener('focus', this.boundFocusHandler_);
      this.btnElement_.addEventListener('blur', this.boundBlurHandler_);
      this.element_.addEventListener('mouseup', this.boundMouseUpHandler_);
      this.updateClasses_();
      this.element_.classList.add(this.CssClasses_.IS_UPGRADED);
    }
  };
  MaterialRadio.prototype.mdlDowngrade_ = function () {
    var rippleContainer = this.element_.querySelector('.' + this.CssClasses_.RIPPLE_CONTAINER);
    this.btnElement_.removeEventListener('change', this.boundChangeHandler_);
    this.btnElement_.removeEventListener('focus', this.boundFocusHandler_);
    this.btnElement_.removeEventListener('blur', this.boundBlurHandler_);
    this.element_.removeEventListener('mouseup', this.boundMouseUpHandler_);
    if (rippleContainer) {
      rippleContainer.removeEventListener('mouseup', this.boundMouseUpHandler_);
      this.element_.removeChild(rippleContainer);
    }
  };
  MaterialRadio.prototype.mdlDowngrade = MaterialRadio.prototype.mdlDowngrade_;
  MaterialRadio.prototype['mdlDowngrade'] = MaterialRadio.prototype.mdlDowngrade;
  componentHandler.register({
    constructor: MaterialRadio
    , classAsString: 'MaterialRadio'
    , cssClass: 'thmdl-js-radio'
    , widget: true
  });
  var MaterialSlider = function MaterialSlider(element) {
    this.element_ = element;
    this.isIE_ = window.navigator.msPointerEnabled;
    this.init();
  };
  window['texthelp']['RW4GC']['MDL']['MaterialSlider'] = MaterialSlider;
  MaterialSlider.prototype.Constant_ = {};
  MaterialSlider.prototype.CssClasses_ = {
    IE_CONTAINER: 'thmdl-slider__ie-container'
    , SLIDER_CONTAINER: 'thmdl-slider__container'
    , BACKGROUND_FLEX: 'thmdl-slider__background-flex'
    , BACKGROUND_LOWER: 'thmdl-slider__background-lower'
    , BACKGROUND_UPPER: 'thmdl-slider__background-upper'
    , IS_LOWEST_VALUE: 'is-lowest-value'
    , IS_UPGRADED: 'is-upgraded'
  };
  MaterialSlider.prototype.onInput_ = function (event) {
    this.updateValueStyles_();
  };
  MaterialSlider.prototype.onChange_ = function (event) {
    this.updateValueStyles_();
  };
  MaterialSlider.prototype.onMouseUp_ = function (event) {
    event.target.blur();
  };
  MaterialSlider.prototype.onContainerMouseDown_ = function (event) {
    if (event.target !== this.element_.parentElement) {
      return;
    }
    event.preventDefault();
    var newEvent = new MouseEvent('mousedown', {
      target: event.target
      , buttons: event.buttons
      , clientX: event.clientX
      , clientY: this.element_.getBoundingClientRect()
        .y
    });
    this.element_.dispatchEvent(newEvent);
  };
  MaterialSlider.prototype.updateValueStyles_ = function () {
    var fraction = (this.element_.value - this.element_.min) / (this.element_.max - this.element_.min);
    if (fraction === 0) {
      this.element_.classList.add(this.CssClasses_.IS_LOWEST_VALUE);
    } else {
      this.element_.classList.remove(this.CssClasses_.IS_LOWEST_VALUE);
    }
    if (!this.isIE_) {
      this.backgroundLower_.style.flex = fraction;
      this.backgroundLower_.style.webkitFlex = fraction;
      this.backgroundUpper_.style.flex = 1 - fraction;
      this.backgroundUpper_.style.webkitFlex = 1 - fraction;
    }
  };
  MaterialSlider.prototype.disable = function () {
    this.element_.disabled = true;
  };
  MaterialSlider.prototype['disable'] = MaterialSlider.prototype.disable;
  MaterialSlider.prototype.enable = function () {
    this.element_.disabled = false;
  };
  MaterialSlider.prototype['enable'] = MaterialSlider.prototype.enable;
  MaterialSlider.prototype.change = function (value) {
    if (typeof value !== 'undefined') {
      this.element_.value = value;
    }
    this.updateValueStyles_();
  };
  MaterialSlider.prototype['change'] = MaterialSlider.prototype.change;
  MaterialSlider.prototype.init = function () {
    if (this.element_) {
      if (this.isIE_) {
        var containerIE = document.createElement('div');
        containerIE.classList.add(this.CssClasses_.IE_CONTAINER);
        this.element_.parentElement.insertBefore(containerIE, this.element_);
        this.element_.parentElement.removeChild(this.element_);
        containerIE.appendChild(this.element_);
      } else {
        var container = document.createElement('div');
        container.classList.add(this.CssClasses_.SLIDER_CONTAINER);
        this.element_.parentElement.insertBefore(container, this.element_);
        this.element_.parentElement.removeChild(this.element_);
        container.appendChild(this.element_);
        var backgroundFlex = document.createElement('div');
        backgroundFlex.classList.add(this.CssClasses_.BACKGROUND_FLEX);
        container.appendChild(backgroundFlex);
        this.backgroundLower_ = document.createElement('div');
        this.backgroundLower_.classList.add(this.CssClasses_.BACKGROUND_LOWER);
        backgroundFlex.appendChild(this.backgroundLower_);
        this.backgroundUpper_ = document.createElement('div');
        this.backgroundUpper_.classList.add(this.CssClasses_.BACKGROUND_UPPER);
        backgroundFlex.appendChild(this.backgroundUpper_);
      }
      this.boundInputHandler = this.onInput_.bind(this);
      this.boundChangeHandler = this.onChange_.bind(this);
      this.boundMouseUpHandler = this.onMouseUp_.bind(this);
      this.boundContainerMouseDownHandler = this.onContainerMouseDown_.bind(this);
      this.element_.addEventListener('input', this.boundInputHandler);
      this.element_.addEventListener('change', this.boundChangeHandler);
      this.element_.addEventListener('mouseup', this.boundMouseUpHandler);
      this.element_.parentElement.addEventListener('mousedown', this.boundContainerMouseDownHandler);
      this.updateValueStyles_();
      this.element_.classList.add(this.CssClasses_.IS_UPGRADED);
    }
  };
  MaterialSlider.prototype.mdlDowngrade_ = function () {
    this.element_.removeEventListener('input', this.boundInputHandler);
    this.element_.removeEventListener('change', this.boundChangeHandler);
    this.element_.removeEventListener('mouseup', this.boundMouseUpHandler);
    this.element_.parentElement.removeEventListener('mousedown', this.boundContainerMouseDownHandler);
  };
  MaterialSlider.prototype.mdlDowngrade = MaterialSlider.prototype.mdlDowngrade_;
  MaterialSlider.prototype['mdlDowngrade'] = MaterialSlider.prototype.mdlDowngrade;
  componentHandler.register({
    constructor: MaterialSlider
    , classAsString: 'MaterialSlider'
    , cssClass: 'thmdl-js-slider'
    , widget: true
  });
  var MaterialSpinner = function MaterialSpinner(element) {
    this.element_ = element;
    this.init();
  };
  window['texthelp']['RW4GC']['MDL']['MaterialSpinner'] = MaterialSpinner;
  MaterialSpinner.prototype.Constant_ = {
    MDL_SPINNER_LAYER_COUNT: 4
  };
  MaterialSpinner.prototype.CssClasses_ = {
    MDL_SPINNER_LAYER: 'thmdl-spinner__layer'
    , MDL_SPINNER_CIRCLE_CLIPPER: 'thmdl-spinner__circle-clipper'
    , MDL_SPINNER_CIRCLE: 'thmdl-spinner__circle'
    , MDL_SPINNER_GAP_PATCH: 'thmdl-spinner__gap-patch'
    , MDL_SPINNER_LEFT: 'thmdl-spinner__left'
    , MDL_SPINNER_RIGHT: 'thmdl-spinner__right'
  };
  MaterialSpinner.prototype.createLayer = function (index) {
    var layer = document.createElement('div');
    layer.classList.add(this.CssClasses_.MDL_SPINNER_LAYER);
    layer.classList.add(this.CssClasses_.MDL_SPINNER_LAYER + '-' + index);
    var leftClipper = document.createElement('div');
    leftClipper.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE_CLIPPER);
    leftClipper.classList.add(this.CssClasses_.MDL_SPINNER_LEFT);
    var gapPatch = document.createElement('div');
    gapPatch.classList.add(this.CssClasses_.MDL_SPINNER_GAP_PATCH);
    var rightClipper = document.createElement('div');
    rightClipper.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE_CLIPPER);
    rightClipper.classList.add(this.CssClasses_.MDL_SPINNER_RIGHT);
    var circleOwners = [leftClipper, gapPatch, rightClipper];
    for (var i = 0; i < circleOwners.length; i++) {
      var circle = document.createElement('div');
      circle.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE);
      circleOwners[i].appendChild(circle);
    }
    layer.appendChild(leftClipper);
    layer.appendChild(gapPatch);
    layer.appendChild(rightClipper);
    this.element_.appendChild(layer);
  };
  MaterialSpinner.prototype['createLayer'] = MaterialSpinner.prototype.createLayer;
  MaterialSpinner.prototype.stop = function () {
    this.element_.classList.remove('is-active');
  };
  MaterialSpinner.prototype['stop'] = MaterialSpinner.prototype.stop;
  MaterialSpinner.prototype.start = function () {
    this.element_.classList.add('is-active');
  };
  MaterialSpinner.prototype['start'] = MaterialSpinner.prototype.start;
  MaterialSpinner.prototype.init = function () {
    if (this.element_) {
      for (var i = 1; i <= this.Constant_.MDL_SPINNER_LAYER_COUNT; i++) {
        this.createLayer(i);
      }
      this.element_.classList.add('is-upgraded');
    }
  };
  componentHandler.register({
    constructor: MaterialSpinner
    , classAsString: 'MaterialSpinner'
    , cssClass: 'thmdl-js-spinner'
    , widget: true
  });
  var MaterialSwitch = function MaterialSwitch(element) {
    this.element_ = element;
    this.init();
  };
  window['texthelp']['RW4GC']['MDL']['MaterialSwitch'] = MaterialSwitch;
  MaterialSwitch.prototype.Constant_ = {
    TINY_TIMEOUT: 0.001
  };
  MaterialSwitch.prototype.CssClasses_ = {
    INPUT: 'thmdl-switch__input'
    , TRACK: 'thmdl-switch__track'
    , THUMB: 'thmdl-switch__thumb'
    , FOCUS_HELPER: 'thmdl-switch__focus-helper'
    , RIPPLE_EFFECT: 'thmdl-js-ripple-effect'
    , RIPPLE_IGNORE_EVENTS: 'thmdl-js-ripple-effect--ignore-events'
    , RIPPLE_CONTAINER: 'thmdl-switch__ripple-container'
    , RIPPLE_CENTER: 'thmdl-ripple--center'
    , RIPPLE: 'thmdl-ripple'
    , IS_FOCUSED: 'is-focused'
    , IS_DISABLED: 'is-disabled'
    , IS_CHECKED: 'is-checked'
  };
  MaterialSwitch.prototype.onChange_ = function (event) {
    this.updateClasses_();
  };
  MaterialSwitch.prototype.onFocus_ = function (event) {
    this.element_.classList.add(this.CssClasses_.IS_FOCUSED);
  };
  MaterialSwitch.prototype.onBlur_ = function (event) {
    this.element_.classList.remove(this.CssClasses_.IS_FOCUSED);
  };
  MaterialSwitch.prototype.onMouseUp_ = function (event) {
    this.blur_();
  };
  MaterialSwitch.prototype.updateClasses_ = function () {
    this.checkDisabled();
    this.checkToggleState();
  };
  MaterialSwitch.prototype.blur_ = function () {
    window.setTimeout(function () {
      this.inputElement_.blur();
    }.bind(this), this.Constant_.TINY_TIMEOUT);
  };
  MaterialSwitch.prototype.checkDisabled = function () {
    if (this.inputElement_.disabled) {
      this.element_.classList.add(this.CssClasses_.IS_DISABLED);
    } else {
      this.element_.classList.remove(this.CssClasses_.IS_DISABLED);
    }
  };
  MaterialSwitch.prototype['checkDisabled'] = MaterialSwitch.prototype.checkDisabled;
  MaterialSwitch.prototype.checkToggleState = function () {
    if (this.inputElement_.checked) {
      this.element_.classList.add(this.CssClasses_.IS_CHECKED);
    } else {
      this.element_.classList.remove(this.CssClasses_.IS_CHECKED);
    }
  };
  MaterialSwitch.prototype['checkToggleState'] = MaterialSwitch.prototype.checkToggleState;
  MaterialSwitch.prototype.disable = function () {
    this.inputElement_.disabled = true;
    this.updateClasses_();
  };
  MaterialSwitch.prototype['disable'] = MaterialSwitch.prototype.disable;
  MaterialSwitch.prototype.enable = function () {
    this.inputElement_.disabled = false;
    this.updateClasses_();
  };
  MaterialSwitch.prototype['enable'] = MaterialSwitch.prototype.enable;
  MaterialSwitch.prototype.on = function () {
    this.inputElement_.checked = true;
    this.updateClasses_();
  };
  MaterialSwitch.prototype['on'] = MaterialSwitch.prototype.on;
  MaterialSwitch.prototype.off = function () {
    this.inputElement_.checked = false;
    this.updateClasses_();
  };
  MaterialSwitch.prototype['off'] = MaterialSwitch.prototype.off;
  MaterialSwitch.prototype.init = function () {
    if (this.element_) {
      this.inputElement_ = this.element_.querySelector('.' + this.CssClasses_.INPUT);
      var track = document.createElement('div');
      track.classList.add(this.CssClasses_.TRACK);
      var thumb = document.createElement('div');
      thumb.classList.add(this.CssClasses_.THUMB);
      var focusHelper = document.createElement('span');
      focusHelper.classList.add(this.CssClasses_.FOCUS_HELPER);
      thumb.appendChild(focusHelper);
      this.element_.appendChild(track);
      this.element_.appendChild(thumb);
      this.boundMouseUpHandler = this.onMouseUp_.bind(this);
      if (this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)) {
        this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS);
        this.rippleContainerElement_ = document.createElement('span');
        this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CONTAINER);
        this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_EFFECT);
        this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CENTER);
        this.rippleContainerElement_.addEventListener('mouseup', this.boundMouseUpHandler);
        var ripple = document.createElement('span');
        ripple.classList.add(this.CssClasses_.RIPPLE);
        this.rippleContainerElement_.appendChild(ripple);
        this.element_.appendChild(this.rippleContainerElement_);
      }
      this.boundChangeHandler = this.onChange_.bind(this);
      this.boundFocusHandler = this.onFocus_.bind(this);
      this.boundBlurHandler = this.onBlur_.bind(this);
      this.inputElement_.addEventListener('change', this.boundChangeHandler);
      this.inputElement_.addEventListener('focus', this.boundFocusHandler);
      this.inputElement_.addEventListener('blur', this.boundBlurHandler);
      this.element_.addEventListener('mouseup', this.boundMouseUpHandler);
      this.updateClasses_();
      this.element_.classList.add('is-upgraded');
    }
  };
  MaterialSwitch.prototype.mdlDowngrade_ = function () {
    if (this.rippleContainerElement_) {
      this.rippleContainerElement_.removeEventListener('mouseup', this.boundMouseUpHandler);
    }
    this.inputElement_.removeEventListener('change', this.boundChangeHandler);
    this.inputElement_.removeEventListener('focus', this.boundFocusHandler);
    this.inputElement_.removeEventListener('blur', this.boundBlurHandler);
    this.element_.removeEventListener('mouseup', this.boundMouseUpHandler);
  };
  MaterialSwitch.prototype.mdlDowngrade = MaterialSwitch.prototype.mdlDowngrade_;
  MaterialSwitch.prototype['mdlDowngrade'] = MaterialSwitch.prototype.mdlDowngrade;
  componentHandler.register({
    constructor: MaterialSwitch
    , classAsString: 'MaterialSwitch'
    , cssClass: 'thmdl-js-switch'
    , widget: true
  });
  var MaterialTabs = function MaterialTabs(element) {
    this.element_ = element;
    this.init();
  };
  window['texthelp']['RW4GC']['MDL']['MaterialTabs'] = MaterialTabs;
  MaterialTabs.prototype.Constant_ = {};
  MaterialTabs.prototype.CssClasses_ = {
    TAB_CLASS: 'thmdl-tabs__tab'
    , PANEL_CLASS: 'thmdl-tabs__panel'
    , ACTIVE_CLASS: 'is-active'
    , UPGRADED_CLASS: 'is-upgraded'
    , MDL_JS_RIPPLE_EFFECT: 'thmdl-js-ripple-effect'
    , MDL_RIPPLE_CONTAINER: 'thmdl-tabs__ripple-container'
    , MDL_RIPPLE: 'thmdl-ripple'
    , MDL_JS_RIPPLE_EFFECT_IGNORE_EVENTS: 'thmdl-js-ripple-effect--ignore-events'
  };
  MaterialTabs.prototype.initTabs_ = function () {
    if (this.element_.classList.contains(this.CssClasses_.MDL_JS_RIPPLE_EFFECT)) {
      this.element_.classList.add(this.CssClasses_.MDL_JS_RIPPLE_EFFECT_IGNORE_EVENTS);
    }
    this.tabs_ = this.element_.querySelectorAll('.' + this.CssClasses_.TAB_CLASS);
    this.panels_ = this.element_.querySelectorAll('.' + this.CssClasses_.PANEL_CLASS);
    for (var i = 0; i < this.tabs_.length; i++) {
      new MaterialTab(this.tabs_[i], this);
    }
    this.element_.classList.add(this.CssClasses_.UPGRADED_CLASS);
  };
  MaterialTabs.prototype.resetTabState_ = function () {
    for (var k = 0; k < this.tabs_.length; k++) {
      this.tabs_[k].classList.remove(this.CssClasses_.ACTIVE_CLASS);
    }
  };
  MaterialTabs.prototype.resetPanelState_ = function () {
    for (var j = 0; j < this.panels_.length; j++) {
      this.panels_[j].classList.remove(this.CssClasses_.ACTIVE_CLASS);
    }
  };
  MaterialTabs.prototype.init = function () {
    if (this.element_) {
      this.initTabs_();
    }
  };

  function MaterialTab(tab, ctx) {
    if (tab) {
      if (ctx.element_.classList.contains(ctx.CssClasses_.MDL_JS_RIPPLE_EFFECT)) {
        var rippleContainer = document.createElement('span');
        rippleContainer.classList.add(ctx.CssClasses_.MDL_RIPPLE_CONTAINER);
        rippleContainer.classList.add(ctx.CssClasses_.MDL_JS_RIPPLE_EFFECT);
        var ripple = document.createElement('span');
        ripple.classList.add(ctx.CssClasses_.MDL_RIPPLE);
        rippleContainer.appendChild(ripple);
        tab.appendChild(rippleContainer);
      }
      tab.addEventListener('click', function (e) {
        e.preventDefault();
        var href = tab.href.split('#')[1];
        var panel = ctx.element_.querySelector('#' + href);
        ctx.resetTabState_();
        ctx.resetPanelState_();
        tab.classList.add(ctx.CssClasses_.ACTIVE_CLASS);
        panel.classList.add(ctx.CssClasses_.ACTIVE_CLASS);
      });
    }
  }
  componentHandler.register({
    constructor: MaterialTabs
    , classAsString: 'MaterialTabs'
    , cssClass: 'thmdl-js-tabs'
  });
  var MaterialTextfield = function MaterialTextfield(element) {
    this.element_ = element;
    this.maxRows = this.Constant_.NO_MAX_ROWS;
    this.init();
  };
  window['texthelp']['RW4GC']['MDL']['MaterialTextfield'] = MaterialTextfield;
  MaterialTextfield.prototype.Constant_ = {
    NO_MAX_ROWS: -1
    , MAX_ROWS_ATTRIBUTE: 'maxrows'
  };
  MaterialTextfield.prototype.CssClasses_ = {
    LABEL: 'thmdl-textfield__label'
    , INPUT: 'thmdl-textfield__input'
    , IS_DIRTY: 'is-dirty'
    , IS_FOCUSED: 'is-focused'
    , IS_DISABLED: 'is-disabled'
    , IS_INVALID: 'is-invalid'
    , IS_UPGRADED: 'is-upgraded'
  };
  MaterialTextfield.prototype.onKeyDown_ = function (event) {
    var currentRowCount = event.target.value.split('\n')
      .length;
    if (event.keyCode === 13) {
      if (currentRowCount >= this.maxRows) {
        event.preventDefault();
      }
    }
  };
  MaterialTextfield.prototype.onFocus_ = function (event) {
    this.element_.classList.add(this.CssClasses_.IS_FOCUSED);
  };
  MaterialTextfield.prototype.onBlur_ = function (event) {
    this.element_.classList.remove(this.CssClasses_.IS_FOCUSED);
  };
  MaterialTextfield.prototype.updateClasses_ = function () {
    this.checkDisabled();
    this.checkValidity();
    this.checkDirty();
  };
  MaterialTextfield.prototype.checkDisabled = function () {
    if (this.input_.disabled) {
      this.element_.classList.add(this.CssClasses_.IS_DISABLED);
    } else {
      this.element_.classList.remove(this.CssClasses_.IS_DISABLED);
    }
  };
  MaterialTextfield.prototype['checkDisabled'] = MaterialTextfield.prototype.checkDisabled;
  MaterialTextfield.prototype.checkValidity = function () {
    if (this.input_.validity) {
      if (this.input_.validity.valid) {
        this.element_.classList.remove(this.CssClasses_.IS_INVALID);
      } else {
        this.element_.classList.add(this.CssClasses_.IS_INVALID);
      }
    }
  };
  MaterialTextfield.prototype['checkValidity'] = MaterialTextfield.prototype.checkValidity;
  MaterialTextfield.prototype.checkDirty = function () {
    if (this.input_.value && this.input_.value.length > 0) {
      this.element_.classList.add(this.CssClasses_.IS_DIRTY);
    } else {
      this.element_.classList.remove(this.CssClasses_.IS_DIRTY);
    }
  };
  MaterialTextfield.prototype['checkDirty'] = MaterialTextfield.prototype.checkDirty;
  MaterialTextfield.prototype.disable = function () {
    this.input_.disabled = true;
    this.updateClasses_();
  };
  MaterialTextfield.prototype['disable'] = MaterialTextfield.prototype.disable;
  MaterialTextfield.prototype.enable = function () {
    this.input_.disabled = false;
    this.updateClasses_();
  };
  MaterialTextfield.prototype['enable'] = MaterialTextfield.prototype.enable;
  MaterialTextfield.prototype.change = function (value) {
    this.input_.value = value || '';
    this.updateClasses_();
  };
  MaterialTextfield.prototype['change'] = MaterialTextfield.prototype.change;
  MaterialTextfield.prototype.init = function () {
    if (this.element_) {
      this.label_ = this.element_.querySelector('.' + this.CssClasses_.LABEL);
      this.input_ = this.element_.querySelector('.' + this.CssClasses_.INPUT);
      if (this.input_) {
        if (this.input_.hasAttribute(this.Constant_.MAX_ROWS_ATTRIBUTE)) {
          this.maxRows = parseInt(this.input_.getAttribute(this.Constant_.MAX_ROWS_ATTRIBUTE), 10);
          if (isNaN(this.maxRows)) {
            this.maxRows = this.Constant_.NO_MAX_ROWS;
          }
        }
        this.boundUpdateClassesHandler = this.updateClasses_.bind(this);
        this.boundFocusHandler = this.onFocus_.bind(this);
        this.boundBlurHandler = this.onBlur_.bind(this);
        this.input_.addEventListener('input', this.boundUpdateClassesHandler);
        this.input_.addEventListener('focus', this.boundFocusHandler);
        this.input_.addEventListener('blur', this.boundBlurHandler);
        if (this.maxRows !== this.Constant_.NO_MAX_ROWS) {
          this.boundKeyDownHandler = this.onKeyDown_.bind(this);
          this.input_.addEventListener('keydown', this.boundKeyDownHandler);
        }
        var invalid = this.element_.classList.contains(this.CssClasses_.IS_INVALID);
        this.updateClasses_();
        this.element_.classList.add(this.CssClasses_.IS_UPGRADED);
        if (invalid) {
          this.element_.classList.add(this.CssClasses_.IS_INVALID);
        }
      }
    }
  };
  MaterialTextfield.prototype.mdlDowngrade_ = function () {
    this.input_.removeEventListener('input', this.boundUpdateClassesHandler);
    this.input_.removeEventListener('focus', this.boundFocusHandler);
    this.input_.removeEventListener('blur', this.boundBlurHandler);
    if (this.boundKeyDownHandler) {
      this.input_.removeEventListener('keydown', this.boundKeyDownHandler);
    }
  };
  MaterialTextfield.prototype.mdlDowngrade = MaterialTextfield.prototype.mdlDowngrade_;
  MaterialTextfield.prototype['mdlDowngrade'] = MaterialTextfield.prototype.mdlDowngrade;
  componentHandler.register({
    constructor: MaterialTextfield
    , classAsString: 'MaterialTextfield'
    , cssClass: 'thmdl-js-textfield'
    , widget: true
  });
  var MaterialTooltip = function MaterialTooltip(element) {
    this.element_ = element;
    this.init();
  };
  window['texthelp']['RW4GC']['MDL']['MaterialTooltip'] = MaterialTooltip;
  MaterialTooltip.prototype.Constant_ = {};
  MaterialTooltip.prototype.CssClasses_ = {
    IS_ACTIVE: 'is-active'
  };
  MaterialTooltip.prototype.handleMouseEnter_ = function (event) {
    event.stopPropagation();
    var props = event.target.getBoundingClientRect();
    var left = props.left + props.width / 2;
    var marginLeft = -1 * (this.element_.offsetWidth / 2);
    if (left + marginLeft < 0) {
      this.element_.style.left = 0;
      this.element_.style.marginLeft = 0;
    } else {
      this.element_.style.left = left + 'px';
      this.element_.style.marginLeft = marginLeft + 'px';
    }
    this.element_.style.top = props.top + props.height + 10 + 'px';
    this.element_.classList.add(this.CssClasses_.IS_ACTIVE);
    window.addEventListener('scroll', this.boundMouseLeaveHandler, false);
    window.addEventListener('touchmove', this.boundMouseLeaveHandler, false);
  };
  MaterialTooltip.prototype.handleMouseLeave_ = function (event) {
    event.stopPropagation();
    this.element_.classList.remove(this.CssClasses_.IS_ACTIVE);
    window.removeEventListener('scroll', this.boundMouseLeaveHandler);
    window.removeEventListener('touchmove', this.boundMouseLeaveHandler, false);
  };
  MaterialTooltip.prototype.init = function () {
    if (this.element_) {
      var forElId = this.element_.getAttribute('for');
      if (forElId) {
        this.forElement_ = document.getElementById(forElId);
      }
      if (this.forElement_) {
        if (!this.forElement_.hasAttribute('tabindex')) {
          this.forElement_.setAttribute('tabindex', '0');
        }
        this.boundMouseEnterHandler = this.handleMouseEnter_.bind(this);
        this.boundMouseLeaveHandler = this.handleMouseLeave_.bind(this);
        this.forElement_.addEventListener('mouseenter', this.boundMouseEnterHandler, false);
        this.forElement_.addEventListener('click', this.boundMouseEnterHandler, false);
        this.forElement_.addEventListener('blur', this.boundMouseLeaveHandler);
        this.forElement_.addEventListener('touchstart', this.boundMouseEnterHandler, false);
        this.forElement_.addEventListener('mouseleave', this.boundMouseLeaveHandler);
      }
    }
  };
  MaterialTooltip.prototype.mdlDowngrade_ = function () {
    if (this.forElement_) {
      this.forElement_.removeEventListener('mouseenter', this.boundMouseEnterHandler, false);
      this.forElement_.removeEventListener('click', this.boundMouseEnterHandler, false);
      this.forElement_.removeEventListener('touchstart', this.boundMouseEnterHandler, false);
      this.forElement_.removeEventListener('mouseleave', this.boundMouseLeaveHandler);
    }
  };
  MaterialTooltip.prototype.mdlDowngrade = MaterialTooltip.prototype.mdlDowngrade_;
  MaterialTooltip.prototype['mdlDowngrade'] = MaterialTooltip.prototype.mdlDowngrade;
  componentHandler.register({
    constructor: MaterialTooltip
    , classAsString: 'MaterialTooltip'
    , cssClass: 'thmdl-tooltip'
  });
  var MaterialLayout = function MaterialLayout(element) {
    this.element_ = element;
    this.init();
  };
  window['texthelp']['RW4GC']['MDL']['MaterialLayout'] = MaterialLayout;
  MaterialLayout.prototype.Constant_ = {
    MAX_WIDTH: '(max-width: 1024px)'
    , TAB_SCROLL_PIXELS: 100
    , MENU_ICON: 'menu'
    , CHEVRON_LEFT: 'chevron_left'
    , CHEVRON_RIGHT: 'chevron_right'
  };
  MaterialLayout.prototype.Mode_ = {
    STANDARD: 0
    , SEAMED: 1
    , WATERFALL: 2
    , SCROLL: 3
  };
  MaterialLayout.prototype.CssClasses_ = {
    CONTAINER: 'thmdl-layout__container'
    , HEADER: 'thmdl-layout__header'
    , DRAWER: 'thmdl-layout__drawer'
    , CONTENT: 'thmdl-layout__content'
    , DRAWER_BTN: 'thmdl-layout__drawer-button'
    , ICON: 'material-icons'
    , JS_RIPPLE_EFFECT: 'thmdl-js-ripple-effect'
    , RIPPLE_CONTAINER: 'thmdl-layout__tab-ripple-container'
    , RIPPLE: 'thmdl-ripple'
    , RIPPLE_IGNORE_EVENTS: 'thmdl-js-ripple-effect--ignore-events'
    , HEADER_SEAMED: 'thmdl-layout__header--seamed'
    , HEADER_WATERFALL: 'thmdl-layout__header--waterfall'
    , HEADER_SCROLL: 'thmdl-layout__header--scroll'
    , FIXED_HEADER: 'thmdl-layout--fixed-header'
    , OBFUSCATOR: 'thmdl-layout__obfuscator'
    , TAB_BAR: 'thmdl-layout__tab-bar'
    , TAB_CONTAINER: 'thmdl-layout__tab-bar-container'
    , TAB: 'thmdl-layout__tab'
    , TAB_BAR_BUTTON: 'thmdl-layout__tab-bar-button'
    , TAB_BAR_LEFT_BUTTON: 'thmdl-layout__tab-bar-left-button'
    , TAB_BAR_RIGHT_BUTTON: 'thmdl-layout__tab-bar-right-button'
    , PANEL: 'thmdl-layout__tab-panel'
    , HAS_DRAWER: 'has-drawer'
    , HAS_TABS: 'has-tabs'
    , HAS_SCROLLING_HEADER: 'has-scrolling-header'
    , CASTING_SHADOW: 'is-casting-shadow'
    , IS_COMPACT: 'is-compact'
    , IS_SMALL_SCREEN: 'is-small-screen'
    , IS_DRAWER_OPEN: 'is-visible'
    , IS_ACTIVE: 'is-active'
    , IS_UPGRADED: 'is-upgraded'
    , IS_ANIMATING: 'is-animating'
    , ON_LARGE_SCREEN: 'thmdl-layout--large-screen-only'
    , ON_SMALL_SCREEN: 'thmdl-layout--small-screen-only'
  };
  MaterialLayout.prototype.contentScrollHandler_ = function () {
    if (this.header_.classList.contains(this.CssClasses_.IS_ANIMATING)) {
      return;
    }
    if (this.content_.scrollTop > 0 && !this.header_.classList.contains(this.CssClasses_.IS_COMPACT)) {
      this.header_.classList.add(this.CssClasses_.CASTING_SHADOW);
      this.header_.classList.add(this.CssClasses_.IS_COMPACT);
      this.header_.classList.add(this.CssClasses_.IS_ANIMATING);
    } else if (this.content_.scrollTop <= 0 && this.header_.classList.contains(this.CssClasses_.IS_COMPACT)) {
      this.header_.classList.remove(this.CssClasses_.CASTING_SHADOW);
      this.header_.classList.remove(this.CssClasses_.IS_COMPACT);
      this.header_.classList.add(this.CssClasses_.IS_ANIMATING);
    }
  };
  MaterialLayout.prototype.screenSizeHandler_ = function () {
    if (this.screenSizeMediaQuery_.matches) {
      this.element_.classList.add(this.CssClasses_.IS_SMALL_SCREEN);
    } else {
      this.element_.classList.remove(this.CssClasses_.IS_SMALL_SCREEN);
      if (this.drawer_) {
        this.drawer_.classList.remove(this.CssClasses_.IS_DRAWER_OPEN);
        this.obfuscator_.classList.remove(this.CssClasses_.IS_DRAWER_OPEN);
      }
    }
  };
  MaterialLayout.prototype.drawerToggleHandler_ = function () {
    this.drawer_.classList.toggle(this.CssClasses_.IS_DRAWER_OPEN);
    this.obfuscator_.classList.toggle(this.CssClasses_.IS_DRAWER_OPEN);
  };
  MaterialLayout.prototype.headerTransitionEndHandler_ = function () {
    this.header_.classList.remove(this.CssClasses_.IS_ANIMATING);
  };
  MaterialLayout.prototype.headerClickHandler_ = function () {
    if (this.header_.classList.contains(this.CssClasses_.IS_COMPACT)) {
      this.header_.classList.remove(this.CssClasses_.IS_COMPACT);
      this.header_.classList.add(this.CssClasses_.IS_ANIMATING);
    }
  };
  MaterialLayout.prototype.resetTabState_ = function (tabBar) {
    for (var k = 0; k < tabBar.length; k++) {
      tabBar[k].classList.remove(this.CssClasses_.IS_ACTIVE);
    }
  };
  MaterialLayout.prototype.resetPanelState_ = function (panels) {
    for (var j = 0; j < panels.length; j++) {
      panels[j].classList.remove(this.CssClasses_.IS_ACTIVE);
    }
  };
  MaterialLayout.prototype.init = function () {
    if (this.element_) {
      var container = document.createElement('div');
      container.classList.add(this.CssClasses_.CONTAINER);
      this.element_.parentElement.insertBefore(container, this.element_);
      this.element_.parentElement.removeChild(this.element_);
      container.appendChild(this.element_);
      var directChildren = this.element_.childNodes;
      var numChildren = directChildren.length;
      for (var c = 0; c < numChildren; c++) {
        var child = directChildren[c];
        if (child.classList && child.classList.contains(this.CssClasses_.HEADER)) {
          this.header_ = child;
        }
        if (child.classList && child.classList.contains(this.CssClasses_.DRAWER)) {
          this.drawer_ = child;
        }
        if (child.classList && child.classList.contains(this.CssClasses_.CONTENT)) {
          this.content_ = child;
        }
      }
      if (this.header_) {
        this.tabBar_ = this.header_.querySelector('.' + this.CssClasses_.TAB_BAR);
      }
      var mode = this.Mode_.STANDARD;
      if (this.header_) {
        if (this.header_.classList.contains(this.CssClasses_.HEADER_SEAMED)) {
          mode = this.Mode_.SEAMED;
        } else if (this.header_.classList.contains(this.CssClasses_.HEADER_WATERFALL)) {
          mode = this.Mode_.WATERFALL;
          this.header_.addEventListener('transitionend', this.headerTransitionEndHandler_.bind(this));
          this.header_.addEventListener('click', this.headerClickHandler_.bind(this));
        } else if (this.header_.classList.contains(this.CssClasses_.HEADER_SCROLL)) {
          mode = this.Mode_.SCROLL;
          container.classList.add(this.CssClasses_.HAS_SCROLLING_HEADER);
        }
        if (mode === this.Mode_.STANDARD) {
          this.header_.classList.add(this.CssClasses_.CASTING_SHADOW);
          if (this.tabBar_) {
            this.tabBar_.classList.add(this.CssClasses_.CASTING_SHADOW);
          }
        } else if (mode === this.Mode_.SEAMED || mode === this.Mode_.SCROLL) {
          this.header_.classList.remove(this.CssClasses_.CASTING_SHADOW);
          if (this.tabBar_) {
            this.tabBar_.classList.remove(this.CssClasses_.CASTING_SHADOW);
          }
        } else if (mode === this.Mode_.WATERFALL) {
          this.content_.addEventListener('scroll', this.contentScrollHandler_.bind(this));
          this.contentScrollHandler_();
        }
      }
      if (this.drawer_) {
        var drawerButton = this.element_.querySelector('.' + this.CssClasses_.DRAWER_BTN);
        if (!drawerButton) {
          drawerButton = document.createElement('div');
          drawerButton.classList.add(this.CssClasses_.DRAWER_BTN);
          var drawerButtonIcon = document.createElement('i');
          drawerButtonIcon.classList.add(this.CssClasses_.ICON);
          drawerButtonIcon.textContent = this.Constant_.MENU_ICON;
          drawerButton.appendChild(drawerButtonIcon);
        }
        if (this.drawer_.classList.contains(this.CssClasses_.ON_LARGE_SCREEN)) {
          drawerButton.classList.add(this.CssClasses_.ON_LARGE_SCREEN);
        } else if (this.drawer_.classList.contains(this.CssClasses_.ON_SMALL_SCREEN)) {
          drawerButton.classList.add(this.CssClasses_.ON_SMALL_SCREEN);
        }
        drawerButton.addEventListener('click', this.drawerToggleHandler_.bind(this));
        this.element_.classList.add(this.CssClasses_.HAS_DRAWER);
        if (this.element_.classList.contains(this.CssClasses_.FIXED_HEADER)) {
          this.header_.insertBefore(drawerButton, this.header_.firstChild);
        } else {
          this.element_.insertBefore(drawerButton, this.content_);
        }
        var obfuscator = document.createElement('div');
        obfuscator.classList.add(this.CssClasses_.OBFUSCATOR);
        this.element_.appendChild(obfuscator);
        obfuscator.addEventListener('click', this.drawerToggleHandler_.bind(this));
        this.obfuscator_ = obfuscator;
      }
      this.screenSizeMediaQuery_ = window.matchMedia(this.Constant_.MAX_WIDTH);
      this.screenSizeMediaQuery_.addListener(this.screenSizeHandler_.bind(this));
      this.screenSizeHandler_();
      if (this.header_ && this.tabBar_) {
        this.element_.classList.add(this.CssClasses_.HAS_TABS);
        var tabContainer = document.createElement('div');
        tabContainer.classList.add(this.CssClasses_.TAB_CONTAINER);
        this.header_.insertBefore(tabContainer, this.tabBar_);
        this.header_.removeChild(this.tabBar_);
        var leftButton = document.createElement('div');
        leftButton.classList.add(this.CssClasses_.TAB_BAR_BUTTON);
        leftButton.classList.add(this.CssClasses_.TAB_BAR_LEFT_BUTTON);
        var leftButtonIcon = document.createElement('i');
        leftButtonIcon.classList.add(this.CssClasses_.ICON);
        leftButtonIcon.textContent = this.Constant_.CHEVRON_LEFT;
        leftButton.appendChild(leftButtonIcon);
        leftButton.addEventListener('click', function () {
          this.tabBar_.scrollLeft -= this.Constant_.TAB_SCROLL_PIXELS;
        }.bind(this));
        var rightButton = document.createElement('div');
        rightButton.classList.add(this.CssClasses_.TAB_BAR_BUTTON);
        rightButton.classList.add(this.CssClasses_.TAB_BAR_RIGHT_BUTTON);
        var rightButtonIcon = document.createElement('i');
        rightButtonIcon.classList.add(this.CssClasses_.ICON);
        rightButtonIcon.textContent = this.Constant_.CHEVRON_RIGHT;
        rightButton.appendChild(rightButtonIcon);
        rightButton.addEventListener('click', function () {
          this.tabBar_.scrollLeft += this.Constant_.TAB_SCROLL_PIXELS;
        }.bind(this));
        tabContainer.appendChild(leftButton);
        tabContainer.appendChild(this.tabBar_);
        tabContainer.appendChild(rightButton);
        var tabScrollHandler = function () {
          if (this.tabBar_.scrollLeft > 0) {
            leftButton.classList.add(this.CssClasses_.IS_ACTIVE);
          } else {
            leftButton.classList.remove(this.CssClasses_.IS_ACTIVE);
          }
          if (this.tabBar_.scrollLeft < this.tabBar_.scrollWidth - this.tabBar_.offsetWidth) {
            rightButton.classList.add(this.CssClasses_.IS_ACTIVE);
          } else {
            rightButton.classList.remove(this.CssClasses_.IS_ACTIVE);
          }
        }.bind(this);
        this.tabBar_.addEventListener('scroll', tabScrollHandler);
        tabScrollHandler();
        if (this.tabBar_.classList.contains(this.CssClasses_.JS_RIPPLE_EFFECT)) {
          this.tabBar_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS);
        }
        var tabs = this.tabBar_.querySelectorAll('.' + this.CssClasses_.TAB);
        var panels = this.content_.querySelectorAll('.' + this.CssClasses_.PANEL);
        for (var i = 0; i < tabs.length; i++) {
          new MaterialLayoutTab(tabs[i], tabs, panels, this);
        }
      }
      this.element_.classList.add(this.CssClasses_.IS_UPGRADED);
    }
  };

  function MaterialLayoutTab(tab, tabs, panels, layout) {
    if (layout.tabBar_.classList.contains(layout.CssClasses_.JS_RIPPLE_EFFECT)) {
      var rippleContainer = document.createElement('span');
      rippleContainer.classList.add(layout.CssClasses_.RIPPLE_CONTAINER);
      rippleContainer.classList.add(layout.CssClasses_.JS_RIPPLE_EFFECT);
      var ripple = document.createElement('span');
      ripple.classList.add(layout.CssClasses_.RIPPLE);
      rippleContainer.appendChild(ripple);
      tab.appendChild(rippleContainer);
    }
    tab.addEventListener('click', function (e) {
      e.preventDefault();
      var href = tab.href.split('#')[1];
      var panel = layout.content_.querySelector('#' + href);
      layout.resetTabState_(tabs);
      layout.resetPanelState_(panels);
      tab.classList.add(layout.CssClasses_.IS_ACTIVE);
      panel.classList.add(layout.CssClasses_.IS_ACTIVE);
    });
  }
  componentHandler.register({
    constructor: MaterialLayout
    , classAsString: 'MaterialLayout'
    , cssClass: 'thmdl-js-layout'
  });
  var MaterialDataTable = function MaterialDataTable(element) {
    this.element_ = element;
    this.init();
  };
  window['texthelp']['RW4GC']['MDL']['MaterialDataTable'] = MaterialDataTable;
  MaterialDataTable.prototype.Constant_ = {};
  MaterialDataTable.prototype.CssClasses_ = {
    DATA_TABLE: 'thmdl-data-table'
    , SELECTABLE: 'thmdl-data-table--selectable'
    , SELECT_ELEMENT: 'thmdl-data-table__select'
    , IS_SELECTED: 'is-selected'
    , IS_UPGRADED: 'is-upgraded'
  };
  MaterialDataTable.prototype.selectRow_ = function (checkbox, row, opt_rows) {
    if (row) {
      return function () {
        if (checkbox.checked) {
          row.classList.add(this.CssClasses_.IS_SELECTED);
        } else {
          row.classList.remove(this.CssClasses_.IS_SELECTED);
        }
      }.bind(this);
    }
    if (opt_rows) {
      return function () {
        var i;
        var el;
        if (checkbox.checked) {
          for (i = 0; i < opt_rows.length; i++) {
            el = opt_rows[i].querySelector('td')
              .querySelector('.thmdl-checkbox');
            el['MaterialCheckbox'].check();
            opt_rows[i].classList.add(this.CssClasses_.IS_SELECTED);
          }
        } else {
          for (i = 0; i < opt_rows.length; i++) {
            el = opt_rows[i].querySelector('td')
              .querySelector('.thmdl-checkbox');
            el['MaterialCheckbox'].uncheck();
            opt_rows[i].classList.remove(this.CssClasses_.IS_SELECTED);
          }
        }
      }.bind(this);
    }
  };
  MaterialDataTable.prototype.createCheckbox_ = function (row, opt_rows) {
    var label = document.createElement('label');
    var labelClasses = ['thmdl-checkbox', 'thmdl-js-checkbox', 'thmdl-js-ripple-effect', this.CssClasses_.SELECT_ELEMENT];
    label.className = labelClasses.join(' ');
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('thmdl-checkbox__input');
    checkbox.addEventListener('change', this.selectRow_(checkbox, row, opt_rows));
    label.appendChild(checkbox);
    componentHandler.upgradeElement(label, 'MaterialCheckbox');
    return label;
  };
  MaterialDataTable.prototype.init = function () {
    if (this.element_) {
      var firstHeader = this.element_.querySelector('th');
      var rows = this.element_.querySelector('tbody')
        .querySelectorAll('tr');
      if (this.element_.classList.contains(this.CssClasses_.SELECTABLE)) {
        var th = document.createElement('th');
        var headerCheckbox = this.createCheckbox_(null, rows);
        th.appendChild(headerCheckbox);
        firstHeader.parentElement.insertBefore(th, firstHeader);
        for (var i = 0; i < rows.length; i++) {
          var firstCell = rows[i].querySelector('td');
          if (firstCell) {
            var td = document.createElement('td');
            var rowCheckbox = this.createCheckbox_(rows[i]);
            td.appendChild(rowCheckbox);
            rows[i].insertBefore(td, firstCell);
          }
        }
      }
      this.element_.classList.add(this.CssClasses_.IS_UPGRADED);
    }
  };
  componentHandler.register({
    constructor: MaterialDataTable
    , classAsString: 'MaterialDataTable'
    , cssClass: 'thmdl-js-data-table'
  });
  var MaterialRipple = function MaterialRipple(element) {
    this.element_ = element;
    this.init();
  };
  window['texthelp']['RW4GC']['MDL']['MaterialRipple'] = MaterialRipple;
  MaterialRipple.prototype.Constant_ = {
    INITIAL_SCALE: 'scale(0.0001, 0.0001)'
    , INITIAL_SIZE: '1px'
    , INITIAL_OPACITY: '0.4'
    , FINAL_OPACITY: '0'
    , FINAL_SCALE: ''
  };
  MaterialRipple.prototype.CssClasses_ = {
    RIPPLE_CENTER: 'thmdl-ripple--center'
    , RIPPLE_EFFECT_IGNORE_EVENTS: 'thmdl-js-ripple-effect--ignore-events'
    , RIPPLE: 'thmdl-ripple'
    , IS_ANIMATING: 'is-animating'
    , IS_VISIBLE: 'is-visible'
  };
  MaterialRipple.prototype.downHandler_ = function (event) {
    if (!this.rippleElement_.style.width && !this.rippleElement_.style.height) {
      var rect = this.element_.getBoundingClientRect();
      this.boundHeight = rect.height;
      this.boundWidth = rect.width;
      this.rippleSize_ = Math.sqrt(rect.width * rect.width + rect.height * rect.height) * 2 + 2;
      this.rippleElement_.style.width = this.rippleSize_ + 'px';
      this.rippleElement_.style.height = this.rippleSize_ + 'px';
    }
    this.rippleElement_.classList.add(this.CssClasses_.IS_VISIBLE);
    if (event.type === 'mousedown' && this.ignoringMouseDown_) {
      this.ignoringMouseDown_ = false;
    } else {
      if (event.type === 'touchstart') {
        this.ignoringMouseDown_ = true;
      }
      var frameCount = this.getFrameCount();
      if (frameCount > 0) {
        return;
      }
      this.setFrameCount(1);
      var bound = event.currentTarget.getBoundingClientRect();
      var x;
      var y;
      if (event.clientX === 0 && event.clientY === 0) {
        x = Math.round(bound.width / 2);
        y = Math.round(bound.height / 2);
      } else {
        var clientX = event.clientX ? event.clientX : event.touches[0].clientX;
        var clientY = event.clientY ? event.clientY : event.touches[0].clientY;
        x = Math.round(clientX - bound.left);
        y = Math.round(clientY - bound.top);
      }
      this.setRippleXY(x, y);
      this.setRippleStyles(true);
      window.requestAnimationFrame(this.animFrameHandler.bind(this));
    }
  };
  MaterialRipple.prototype.upHandler_ = function (event) {
    if (event && event.detail !== 2) {
      this.rippleElement_.classList.remove(this.CssClasses_.IS_VISIBLE);
    }
    window.setTimeout(function () {
      this.rippleElement_.classList.remove(this.CssClasses_.IS_VISIBLE);
    }.bind(this), 0);
  };
  MaterialRipple.prototype.init = function () {
    if (this.element_) {
      var recentering = this.element_.classList.contains(this.CssClasses_.RIPPLE_CENTER);
      if (!this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT_IGNORE_EVENTS)) {
        this.rippleElement_ = this.element_.querySelector('.' + this.CssClasses_.RIPPLE);
        this.frameCount_ = 0;
        this.rippleSize_ = 0;
        this.x_ = 0;
        this.y_ = 0;
        this.ignoringMouseDown_ = false;
        this.boundDownHandler = this.downHandler_.bind(this);
        this.element_.addEventListener('mousedown', this.boundDownHandler);
        this.element_.addEventListener('touchstart', this.boundDownHandler);
        this.boundUpHandler = this.upHandler_.bind(this);
        this.element_.addEventListener('mouseup', this.boundUpHandler);
        this.element_.addEventListener('mouseleave', this.boundUpHandler);
        this.element_.addEventListener('touchend', this.boundUpHandler);
        this.element_.addEventListener('blur', this.boundUpHandler);
        this.getFrameCount = function () {
          return this.frameCount_;
        };
        this.setFrameCount = function (fC) {
          this.frameCount_ = fC;
        };
        this.getRippleElement = function () {
          return this.rippleElement_;
        };
        this.setRippleXY = function (newX, newY) {
          this.x_ = newX;
          this.y_ = newY;
        };
        this.setRippleStyles = function (start) {
          if (this.rippleElement_ !== null) {
            var transformString;
            var scale;
            var size;
            var offset = 'translate(' + this.x_ + 'px, ' + this.y_ + 'px)';
            if (start) {
              scale = this.Constant_.INITIAL_SCALE;
              size = this.Constant_.INITIAL_SIZE;
            } else {
              scale = this.Constant_.FINAL_SCALE;
              size = this.rippleSize_ + 'px';
              if (recentering) {
                offset = 'translate(' + this.boundWidth / 2 + 'px, ' + this.boundHeight / 2 + 'px)';
              }
            }
            transformString = 'translate(-50%, -50%) ' + offset + scale;
            this.rippleElement_.style.webkitTransform = transformString;
            this.rippleElement_.style.msTransform = transformString;
            this.rippleElement_.style.transform = transformString;
            if (start) {
              this.rippleElement_.classList.remove(this.CssClasses_.IS_ANIMATING);
            } else {
              this.rippleElement_.classList.add(this.CssClasses_.IS_ANIMATING);
            }
          }
        };
        this.animFrameHandler = function () {
          if (this.frameCount_-- > 0) {
            window.requestAnimationFrame(this.animFrameHandler.bind(this));
          } else {
            this.setRippleStyles(false);
          }
        };
      }
    }
  };
  MaterialRipple.prototype.mdlDowngrade_ = function () {
    this.element_.removeEventListener('mousedown', this.boundDownHandler);
    this.element_.removeEventListener('touchstart', this.boundDownHandler);
    this.element_.removeEventListener('mouseup', this.boundUpHandler);
    this.element_.removeEventListener('mouseleave', this.boundUpHandler);
    this.element_.removeEventListener('touchend', this.boundUpHandler);
    this.element_.removeEventListener('blur', this.boundUpHandler);
  };
  MaterialRipple.prototype.mdlDowngrade = MaterialRipple.prototype.mdlDowngrade_;
  MaterialRipple.prototype['mdlDowngrade'] = MaterialRipple.prototype.mdlDowngrade;
  componentHandler.register({
    constructor: MaterialRipple
    , classAsString: 'MaterialRipple'
    , cssClass: 'thmdl-js-ripple-effect'
    , widget: false
  });
}());

var texthelp = texthelp || {};
texthelp.RW4GC = texthelp.RW4GC || {};
texthelp.RW4GC.riot = {};;
(function (window, undefined) {
  'use strict';
  var riot = {
      version: 'v2.3.11'
      , settings: {}
    }
    , __uid = 0
    , __virtualDom = []
    , __tagImpl = {}
    , RIOT_PREFIX = 'riot-'
    , RIOT_TAG = RIOT_PREFIX + 'tag'
    , T_STRING = 'string'
    , T_OBJECT = 'object'
    , T_UNDEF = 'undefined'
    , T_FUNCTION = 'function'
    , SPECIAL_TAGS_REGEX = /^(?:opt(ion|group)|tbody|col|t[rhd])$/
    , RESERVED_WORDS_BLACKLIST = ['_item', '_id', '_parent', 'update', 'root', 'mount', 'unmount', 'mixin', 'isMounted', 'isLoop', 'tags', 'parent', 'opts', 'trigger', 'on', 'off', 'one']
    , IE_VERSION = (window && window.document || {})
    .documentMode | 0
  texthelp.RW4GC.riot.observable = function (el) {
    el = el || {}
    var callbacks = {}
      , onEachEvent = function (e, fn) {
        e.replace(/\S+/g, fn)
      }
      , defineProperty = function (key, value) {
        Object.defineProperty(el, key, {
          value: value
          , enumerable: false
          , writable: false
          , configurable: false
        })
      }
    defineProperty('on', function (events, fn) {
      if (typeof fn != 'function') return el
      onEachEvent(events, function (name, pos) {
        (callbacks[name] = callbacks[name] || [])
        .push(fn)
        fn.typed = pos > 0
      })
      return el
    })
    defineProperty('off', function (events, fn) {
      if (events == '*') callbacks = {}
      else {
        onEachEvent(events, function (name) {
          if (fn) {
            var arr = callbacks[name]
            for (var i = 0, cb; cb = arr && arr[i]; ++i) {
              if (cb == fn) arr.splice(i--, 1)
            }
          } else delete callbacks[name]
        })
      }
      return el
    })
    defineProperty('one', function (events, fn) {
      function on() {
        el.off(events, on)
        fn.apply(el, arguments)
      }
      return el.on(events, on)
    })
    defineProperty('trigger', function (events) {
      var arglen = arguments.length - 1
        , args = new Array(arglen)
      for (var i = 0; i < arglen; i++) {
        args[i] = arguments[i + 1]
      }
      onEachEvent(events, function (name) {
        var fns = (callbacks[name] || [])
          .slice(0)
        for (var i = 0, fn; fn = fns[i]; ++i) {
          if (fn.busy) return
          fn.busy = 1
          try {
            fn.apply(el, fn.typed ? [name].concat(args) : args)
          } catch (e) {
            el.trigger('error', e)
          }
          if (fns[i] !== fn) {
            i--
          }
          fn.busy = 0
        }
        if (callbacks.all && name != 'all')
          el.trigger.apply(el, ['all', name].concat(args))
      })
      return el
    })
    return el
  };
  (function (riot) {
    if (!window) return;
    var RE_ORIGIN = /^.+?\/+[^\/]+/
      , EVENT_LISTENER = 'EventListener'
      , REMOVE_EVENT_LISTENER = 'remove' + EVENT_LISTENER
      , ADD_EVENT_LISTENER = 'add' + EVENT_LISTENER
      , HAS_ATTRIBUTE = 'hasAttribute'
      , REPLACE = 'replace'
      , POPSTATE = 'popstate'
      , TRIGGER = 'trigger'
      , MAX_EMIT_STACK_LEVEL = 3
      , win = window
      , doc = document
      , loc = win.history.location || win.location
      , prot = Router.prototype
      , clickEvent = doc && doc.ontouchstart ? 'touchstart' : 'click'
      , started = false
      , central = texthelp.RW4GC.riot.observable()
      , routeFound = false
      , base, current, parser, secondParser, emitStack = []
      , emitStackLevel = 0

    function DEFAULT_PARSER(path) {
      return path.split(/[/?#]/)
    }

    function DEFAULT_SECOND_PARSER(path, filter) {
      var re = new RegExp('^' + filter[REPLACE](/\*/g, '([^/?#]+?)')[REPLACE](/\.\./, '.*') + '$')
        , args = path.match(re)
      if (args) return args.slice(1)
    }

    function Router() {
      this.$ = []
      texthelp.RW4GC.riot.observable(this)
      central.on('stop', this.s.bind(this))
      central.on('emit', this.e.bind(this))
    }

    function normalize(path) {
      return path[REPLACE](/^\/|\/$/, '')
    }

    function isString(str) {
      return typeof str == 'string'
    }

    function getPathFromRoot(href) {
      return (href || loc.href)[REPLACE](RE_ORIGIN, '')
    }

    function getPathFromBase(href) {
      return base[0] == '#' ? (href || loc.href)
        .split(base)[1] || '' : getPathFromRoot(href)[REPLACE](base, '')
    }

    function emit(force) {
      var isRoot = emitStackLevel == 0
      if (MAX_EMIT_STACK_LEVEL <= emitStackLevel) return
      emitStackLevel++
      emitStack.push(function () {
        var path = getPathFromBase()
        if (force || path != current) {
          central[TRIGGER]('emit', path)
          current = path
        }
      })
      if (isRoot) {
        while (emitStack.length) {
          emitStack[0]()
          emitStack.shift()
        }
        emitStackLevel = 0
      }
    }

    function click(e) {
      if (e.which != 1 || e.metaKey || e.ctrlKey || e.shiftKey || e.defaultPrevented) return
      var el = e.target
      while (el && el.nodeName != 'A') el = el.parentNode
      if (!el || el.nodeName != 'A' || el[HAS_ATTRIBUTE]('download') || !el[HAS_ATTRIBUTE]('href') || el.target && el.target != '_self' || el.href.indexOf(loc.href.match(RE_ORIGIN)[0]) == -1) return
      if (el.href != loc.href) {
        if (el.href.split('#')[0] == loc.href.split('#')[0] || base != '#' && getPathFromRoot(el.href)
          .indexOf(base) !== 0 || !go(getPathFromBase(el.href), el.title || doc.title)) return
      }
      e.preventDefault()
    }

    function go(path, title) {
      title = title || doc.title
      history.pushState(null, title, base + normalize(path))
      doc.title = title
      routeFound = false
      emit()
      return routeFound
    }
    prot.m = function (first, second) {
      if (isString(first) && (!second || isString(second))) go(first, second)
      else if (second) this.r(first, second)
      else this.r('@', first)
    }
    prot.s = function () {
      this.off('*')
      this.$ = []
    }
    prot.e = function (path) {
      this.$.concat('@')
        .some(function (filter) {
          var args = (filter == '@' ? parser : secondParser)(normalize(path), normalize(filter))
          if (args) {
            this[TRIGGER].apply(null, [filter].concat(args))
            return routeFound = true
          }
        }, this)
    }
    prot.r = function (filter, action) {
      if (filter != '@') {
        filter = '/' + normalize(filter)
        this.$.push(filter)
      }
      this.on(filter, action)
    }
    var mainRouter = new Router()
    var route = mainRouter.m.bind(mainRouter)
    route.create = function () {
      var newSubRouter = new Router()
      newSubRouter.m.stop = newSubRouter.s.bind(newSubRouter)
      return newSubRouter.m.bind(newSubRouter)
    }
    route.base = function (arg) {
      base = arg || '#'
      current = getPathFromBase()
    }
    route.exec = function () {
      emit(true)
    }
    route.parser = function (fn, fn2) {
      if (!fn && !fn2) {
        parser = DEFAULT_PARSER
        secondParser = DEFAULT_SECOND_PARSER
      }
      if (fn) parser = fn
      if (fn2) secondParser = fn2
    }
    route.query = function () {
      var q = {}
      loc.href[REPLACE](/[?&](.+?)=([^&]*)/g, function (_, k, v) {
        q[k] = v
      })
      return q
    }
    route.stop = function () {
      if (started) {
        win[REMOVE_EVENT_LISTENER](POPSTATE, emit)
        doc[REMOVE_EVENT_LISTENER](clickEvent, click)
        central[TRIGGER]('stop')
        started = false
      }
    }
    route.start = function (autoExec) {
      if (!started) {
        win[ADD_EVENT_LISTENER](POPSTATE, emit)
        doc[ADD_EVENT_LISTENER](clickEvent, click)
        started = true
      }
      if (autoExec) emit(true)
    }
    route.base()
    route.parser()
    texthelp.RW4GC.riot.route = route
  })(riot)
  var brackets = (function (UNDEF) {
    var
      REGLOB = 'g'
      , MLCOMMS = /\/\*[^*]*\*+(?:[^*\/][^*]*\*+)*\//g
      , STRINGS = /"[^"\\]*(?:\\[\S\s][^"\\]*)*"|'[^'\\]*(?:\\[\S\s][^'\\]*)*'/g
      , S_QBSRC = STRINGS.source + '|' +
      /(?:[$\w\)\]]|\+\+|--)\s*(\/)(?![*\/])/.source + '|' +
      /\/(?=[^*\/])[^[\/\\]*(?:(?:\[(?:\\.|[^\]\\]*)*\]|\\.)[^[\/\\]*)*?(\/)[gim]*/.source
      , DEFAULT = '{ }'
      , FINDBRACES = {
        '(': _regExp('([()])|' + S_QBSRC, REGLOB)
        , '[': _regExp('([[\\]])|' + S_QBSRC, REGLOB)
        , '{': _regExp('([{}])|' + S_QBSRC, REGLOB)
      }
    var
      cachedBrackets = UNDEF
      , _regex, _pairs = []

    function _regExp(source, flags) {
      return new RegExp(source, flags)
    }

    function _loopback(re) {
      return re
    }

    function _rewrite(re) {
      return new RegExp(re.source.replace(/{/g, _pairs[2])
        .replace(/}/g, _pairs[3]), re.global ? REGLOB : '')
    }

    function _reset(pair) {
      pair = pair || DEFAULT
      if (pair !== _pairs[8]) {
        var bp = pair.split(' ')
        if (pair === DEFAULT) {
          _pairs = bp.concat(bp)
          _regex = _loopback
        } else {
          if (bp.length !== 2 || /[\x00-\x1F<>a-zA-Z0-9'",;\\]/.test(pair)) {
            throw new Error('Unsupported brackets "' + pair + '"')
          }
          _pairs = bp.concat(pair.replace(/(?=[[\]()*+?.^$|])/g, '\\')
            .split(' '))
          _regex = _rewrite
        }
        _pairs[4] = _regex(_pairs[1].length > 1 ? /(?:^|[^\\]){[\S\s]*?}/ : /(?:^|[^\\]){[^}]*}/)
        _pairs[5] = _regex(/\\({|})/g)
        _pairs[6] = _regex(/(\\?)({)/g)
        _pairs[7] = _regExp('(\\\\?)(?:([[({])|(' + _pairs[3] + '))|' + S_QBSRC, REGLOB)
        _pairs[9] = _regex(/^\s*{\^?\s*([$\w]+)(?:\s*,\s*(\S+))?\s+in\s+(\S+)\s*}/)
        _pairs[8] = pair
      }
      _brackets.settings.brackets = cachedBrackets = pair
    }

    function _brackets(reOrIdx) {
      _reset(_brackets.settings.brackets)
      return reOrIdx instanceof RegExp ? _regex(reOrIdx) : _pairs[reOrIdx]
    }
    _brackets.split = function split(str, tmpl) {
      var
        parts = []
        , match, isexpr, start, pos, re = _brackets(6)
      isexpr = start = re.lastIndex = 0
      while (match = re.exec(str)) {
        pos = match.index
        if (isexpr) {
          if (match[2]) {
            re.lastIndex = skipBraces(match[2], re.lastIndex)
            continue
          }
          if (!match[3])
            continue
        }
        if (!match[1]) {
          unescapeStr(str.slice(start, pos))
          start = re.lastIndex
          re = _pairs[6 + (isexpr ^= 1)]
          re.lastIndex = start
        }
      }
      if (str && start < str.length) {
        unescapeStr(str.slice(start))
      }
      return parts

      function unescapeStr(str) {
        if (tmpl || isexpr)
          parts.push(str && str.replace(_pairs[5], '$1'))
        else
          parts.push(str)
      }

      function skipBraces(ch, pos) {
        var
          match, recch = FINDBRACES[ch]
          , level = 1
        recch.lastIndex = pos
        while (match = recch.exec(str)) {
          if (match[1] && !(match[1] === ch ? ++level : --level)) break
        }
        return match ? recch.lastIndex : str.length
      }
    }
    _brackets.hasExpr = function hasExpr(str) {
      return _brackets(4)
        .test(str)
    }
    _brackets.loopKeys = function loopKeys(expr) {
      var m = expr.match(_brackets(9))
      return m ? {
        key: m[1]
        , pos: m[2]
        , val: _pairs[0] + m[3] + _pairs[1]
      } : {
        val: expr.trim()
      }
    }
    _brackets.array = function array(pair) {
      _reset(pair || _brackets.settings.brackets)
      return _pairs
    }
    _brackets.settings = typeof riot !== 'undefined' && texthelp.RW4GC.riot.settings || {}
    _brackets.set = _reset
    _brackets.R_STRINGS = STRINGS
    _brackets.R_MLCOMMS = MLCOMMS
    _brackets.S_QBLOCKS = S_QBSRC
    _reset(_brackets.settings.brackets)
    return _brackets
  })()
  var tmpl = (function () {
    var
      FALSE = !1
      , _cache = {}

    function _tmpl(str, data) {
      if (!str) return str
      return (_cache[str] || (_cache[str] = _create(str)))
        .call(data, _logErr)
    }
    _tmpl.hasExpr = brackets.hasExpr
    _tmpl.loopKeys = brackets.loopKeys
    _tmpl.errorHandler = FALSE

    function _logErr(err, ctx) {
      if (_tmpl.errorHandler) {
        err.riotData = {
          tagName: ctx && ctx.root && ctx.root.tagName
          , _riot_id: ctx && ctx._riot_id
        }
        _tmpl.errorHandler(err)
      }
    }

    function _create(str) {
      var expr = _getTmpl(str)
      if (expr.slice(0, 11) !== 'try{return ') expr = 'return ' + expr
      return new Function('E', expr + ';')
    }
    var
      RE_QBLOCK = new RegExp(brackets.S_QBLOCKS, 'g')
      , RE_QBMARK = /\x01(\d+)~/g

    function _getTmpl(str) {
      var
        qstr = []
        , expr, parts = brackets.split(str, 1)
      if (parts.length > 2 || parts[0]) {
        var i, j, list = []
        for (i = j = 0; i < parts.length; ++i) {
          expr = parts[i]
          if (expr && (expr = i & 1 ? _parseExpr(expr, 1, qstr) : '"' + expr.replace(/\\/g, '\\\\')
              .replace(/\r\n?|\n/g, '\\n')
              .replace(/"/g, '\\"') + '"')) list[j++] = expr
        }
        expr = j < 2 ? list[0] : '[' + list.join(',') + '].join("")'
      } else {
        expr = _parseExpr(parts[1], 0, qstr)
      }
      if (qstr[0])
        expr = expr.replace(RE_QBMARK, function (_, pos) {
          return qstr[pos].replace(/\r/g, '\\r')
            .replace(/\n/g, '\\n')
        })
      return expr
    }
    var
      CS_IDENT = /^(?:(-?[_A-Za-z\xA0-\xFF][-\w\xA0-\xFF]*)|\x01(\d+)~):/
      , RE_BRACE = /,|([[{(])|$/g

    function _parseExpr(expr, asText, qstr) {
      expr = expr.replace(RE_QBLOCK, function (s, div) {
          return s.length > 2 && !div ? '\x01' + (qstr.push(s) - 1) + '~' : s
        })
        .replace(/\s+/g, ' ')
        .trim()
        .replace(/\ ?([[\({},?\.:])\ ?/g, '$1')
      if (expr) {
        var
          list = []
          , cnt = 0
          , match
        while (expr && (match = expr.match(CS_IDENT)) && !match.index) {
          var
            key, jsb, re = /,|([[{(])|$/g
          expr = RegExp.rightContext
          key = match[2] ? qstr[match[2]].slice(1, -1)
            .trim()
            .replace(/\s+/g, ' ') : match[1]
          while (jsb = (match = re.exec(expr))[1]) skipBraces(jsb, re)
          jsb = expr.slice(0, match.index)
          expr = RegExp.rightContext
          list[cnt++] = _wrapExpr(jsb, 1, key)
        }
        expr = !cnt ? _wrapExpr(expr, asText) : cnt > 1 ? '[' + list.join(',') + '].join(" ").trim()' : list[0]
      }
      return expr

      function skipBraces(jsb, re) {
        var
          match, lv = 1
          , ir = jsb === '(' ? /[()]/g : jsb === '[' ? /[[\]]/g : /[{}]/g
        ir.lastIndex = re.lastIndex
        while (match = ir.exec(expr)) {
          if (match[0] === jsb) ++lv
          else if (!--lv) break
        }
        re.lastIndex = lv ? expr.length : ir.lastIndex
      }
    }
    var JS_CONTEXT = '"in this?this:' + (typeof window !== 'object' ? 'global' : 'window') + ').'
    var JS_VARNAME = /[,{][$\w]+:|(^ *|[^$\w\.])(?!(?:typeof|true|false|null|undefined|in|instanceof|is(?:Finite|NaN)|void|NaN|new|Date|RegExp|Math)(?![$\w]))([$_A-Za-z][$\w]*)/g

    function _wrapExpr(expr, asText, key) {
      var tb = FALSE
      expr = expr.replace(JS_VARNAME, function (match, p, mvar, pos, s) {
        if (mvar) {
          pos = tb ? 0 : pos + match.length
          if (mvar !== 'this' && mvar !== 'global' && mvar !== 'window') {
            match = p + '("' + mvar + JS_CONTEXT + mvar
            if (pos) tb = (s = s[pos]) === '.' || s === '(' || s === '['
          } else if (pos)
            tb = !/^(?=(\.[$\w]+))\1(?:[^.[(]|$)/.test(s.slice(pos))
        }
        return match
      })
      if (tb) {
        expr = 'try{return ' + expr + '}catch(e){E(e,this)}'
      }
      if (key) {
        expr = (tb ? 'function(){' + expr + '}.call(this)' : '(' + expr + ')') + '?"' + key + '":""'
      } else if (asText) {
        expr = 'function(v){' + (tb ? expr.replace('return ', 'v=') : 'v=(' + expr + ')') + ';return v||v===0?v:""}.call(this)'
      }
      return expr
    }
    _tmpl.parse = function (s) {
      return s
    }
    return _tmpl
  })()
  var mkdom = (function (checkIE) {
    var rootEls = {
        'tr': 'tbody'
        , 'th': 'tr'
        , 'td': 'tr'
        , 'tbody': 'table'
        , 'col': 'colgroup'
      }
      , GENERIC = 'div'
    checkIE = checkIE && checkIE < 10

    function _mkdom(html) {
      var match = html && html.match(/^\s*<([-\w]+)/)
        , tagName = match && match[1].toLowerCase()
        , rootTag = rootEls[tagName] || GENERIC
        , el = mkEl(rootTag)
      el.stub = true
      if (checkIE && tagName && (match = tagName.match(SPECIAL_TAGS_REGEX)))
        ie9elem(el, html, tagName, !!match[1])
      else
        el.innerHTML = html
      return el
    }

    function ie9elem(el, html, tagName, select) {
      var div = mkEl(GENERIC)
        , tag = select ? 'select>' : 'table>'
        , child
      div.innerHTML = '<' + tag + html + '</' + tag
      child = $(tagName, div)
      if (child)
        el.appendChild(child)
    }
    return _mkdom
  })(IE_VERSION)

  function mkitem(expr, key, val) {
    var item = {}
    item[expr.key] = key
    if (expr.pos) item[expr.pos] = val
    return item
  }

  function unmountRedundant(items, tags) {
    var i = tags.length
      , j = items.length
    while (i > j) {
      var t = tags[--i]
      tags.splice(i, 1)
      t.unmount()
    }
  }

  function moveNestedTags(child, i) {
    Object.keys(child.tags)
      .forEach(function (tagName) {
        var tag = child.tags[tagName]
        if (isArray(tag))
          each(tag, function (t) {
            moveChildTag(t, tagName, i)
          })
        else
          moveChildTag(tag, tagName, i)
      })
  }

  function addVirtual(tag, src, target) {
    var el = tag._root
    tag._virts = []
    while (el) {
      var sib = el.nextSibling
      if (target)
        src.insertBefore(el, target._root)
      else
        src.appendChild(el)
      tag._virts.push(el)
      el = sib
    }
  }

  function moveVirtual(tag, src, target, len) {
    var el = tag._root
    for (var i = 0; i < len; i++) {
      var sib = el.nextSibling
      src.insertBefore(el, target._root)
      el = sib
    }
  }

  function _each(dom, parent, expr) {
    remAttr(dom, 'each')
    var mustReorder = typeof getAttr(dom, 'no-reorder') !== T_STRING || remAttr(dom, 'no-reorder')
      , tagName = getTagName(dom)
      , impl = __tagImpl[tagName] || {
        tmpl: dom.outerHTML
      }
      , useRoot = SPECIAL_TAGS_REGEX.test(tagName)
      , root = dom.parentNode
      , ref = document.createTextNode('')
      , child = getTag(dom)
      , isOption = /option/gi.test(tagName)
      , tags = []
      , oldItems = []
      , hasKeys, isVirtual = dom.tagName == 'VIRTUAL'
    expr = tmpl.loopKeys(expr)
    root.insertBefore(ref, dom)
    parent.one('before-mount', function () {
        dom.parentNode.removeChild(dom)
        if (root.stub) root = parent.root
      })
      .on('update', function () {
        var items = tmpl(expr.val, parent)
          , frag = document.createDocumentFragment()
        if (!isArray(items)) {
          hasKeys = items || false
          items = hasKeys ? Object.keys(items)
            .map(function (key) {
              return mkitem(expr, key, items[key])
            }) : []
        }
        each(items, function (item, i) {
          var _mustReorder = mustReorder && item instanceof Object
            , oldPos = oldItems.indexOf(item)
            , pos = ~oldPos && _mustReorder ? oldPos : i
            , tag = tags[pos]
          item = !hasKeys && expr.key ? mkitem(expr, item, i) : item
          if (!_mustReorder && !tag || _mustReorder && !~oldPos || !tag) {
            tag = new Tag(impl, {
              parent: parent
              , isLoop: true
              , hasImpl: !!__tagImpl[tagName]
              , root: useRoot ? root : dom.cloneNode()
              , item: item
            }, dom.innerHTML)
            tag.mount()
            if (isVirtual) tag._root = tag.root.firstChild
            if (i == tags.length) {
              if (isVirtual)
                addVirtual(tag, frag)
              else frag.appendChild(tag.root)
            } else {
              if (isVirtual)
                addVirtual(tag, root, tags[i])
              else root.insertBefore(tag.root, tags[i].root)
              oldItems.splice(i, 0, item)
            }
            tags.splice(i, 0, tag)
            pos = i
          } else tag.update(item)
          if (pos !== i && _mustReorder) {
            if (isVirtual)
              moveVirtual(tag, root, tags[i], dom.childNodes.length)
            else root.insertBefore(tag.root, tags[i].root)
            if (expr.pos)
              tag[expr.pos] = i
            tags.splice(i, 0, tags.splice(pos, 1)[0])
            oldItems.splice(i, 0, oldItems.splice(pos, 1)[0])
            if (!child) moveNestedTags(tag, i)
          }
          tag._item = item
          defineProperty(tag, '_parent', parent)
        })
        unmountRedundant(items, tags)
        if (isOption) root.appendChild(frag)
        else root.insertBefore(frag, ref)
        if (child) parent.tags[tagName] = tags
        oldItems = items.slice()
      })
  }

  function parseNamedElements(root, tag, childTags, forceParsingNamed) {
    walk(root, function (dom) {
      if (dom.nodeType == 1) {
        dom.isLoop = dom.isLoop || (dom.parentNode && dom.parentNode.isLoop || getAttr(dom, 'each')) ? 1 : 0
        if (childTags) {
          var child = getTag(dom)
          if (child && !dom.isLoop)
            childTags.push(initChildTag(child, {
              root: dom
              , parent: tag
            }, dom.innerHTML, tag))
        }
        if (!dom.isLoop || forceParsingNamed)
          setNamed(dom, tag, [])
      }
    })
  }

  function parseExpressions(root, tag, expressions) {
    function addExpr(dom, val, extra) {
      if (tmpl.hasExpr(val)) {
        var expr = {
          dom: dom
          , expr: val
        }
        expressions.push(extend(expr, extra))
      }
    }
    walk(root, function (dom) {
      var type = dom.nodeType
      if (type == 3 && dom.parentNode.tagName != 'STYLE') addExpr(dom, dom.nodeValue)
      if (type != 1) return
      var attr = getAttr(dom, 'each')
      if (attr) {
        _each(dom, tag, attr);
        return false
      }
      each(dom.attributes, function (attr) {
        var name = attr.name
          , bool = name.split('__')[1]
        addExpr(dom, attr.value, {
          attr: bool || name
          , bool: bool
        })
        if (bool) {
          remAttr(dom, name);
          return false
        }
      })
      if (getTag(dom)) return false
    })
  }

  function Tag(impl, conf, innerHTML) {
    var self = texthelp.RW4GC.riot.observable(this)
      , opts = inherit(conf.opts) || {}
      , dom = mkdom(impl.tmpl)
      , parent = conf.parent
      , isLoop = conf.isLoop
      , hasImpl = conf.hasImpl
      , item = cleanUpData(conf.item)
      , expressions = []
      , childTags = []
      , root = conf.root
      , fn = impl.fn
      , tagName = root.tagName.toLowerCase()
      , attr = {}
      , propsInSyncWithParent = []
    if (fn && root._tag) root._tag.unmount(true)
    this.isMounted = false
    root.isLoop = isLoop
    root._tag = this
    defineProperty(this, '_riot_id', ++__uid)
    extend(this, {
      parent: parent
      , root: root
      , opts: opts
      , tags: {}
    }, item)
    each(root.attributes, function (el) {
      var val = el.value
      if (tmpl.hasExpr(val)) attr[el.name] = val
    })
    if (dom.innerHTML && !/^(select|optgroup|table|tbody|tr|col(?:group)?)$/.test(tagName))
      dom.innerHTML = replaceYield(dom.innerHTML, innerHTML)

    function updateOpts() {
      var ctx = hasImpl && isLoop ? self : parent || self
      each(root.attributes, function (el) {
        opts[toCamel(el.name)] = tmpl(el.value, ctx)
      })
      each(Object.keys(attr), function (name) {
        opts[toCamel(name)] = tmpl(attr[name], ctx)
      })
    }

    function normalizeData(data) {
      for (var key in item) {
        if (typeof self[key] !== T_UNDEF && isWritable(self, key))
          self[key] = data[key]
      }
    }

    function inheritFromParent() {
      if (!self.parent || !isLoop) return
      each(Object.keys(self.parent), function (k) {
        var mustSync = !contains(RESERVED_WORDS_BLACKLIST, k) && contains(propsInSyncWithParent, k)
        if (typeof self[k] === T_UNDEF || mustSync) {
          if (!mustSync) propsInSyncWithParent.push(k)
          self[k] = self.parent[k]
        }
      })
    }
    defineProperty(this, 'update', function (data) {
      data = cleanUpData(data)
      inheritFromParent()
      if (data && typeof item === T_OBJECT) {
        normalizeData(data)
        item = data
      }
      extend(self, data)
      updateOpts()
      self.trigger('update', data)
      update(expressions, self)
      self.trigger('updated')
      return this
    })
    defineProperty(this, 'mixin', function () {
      each(arguments, function (mix) {
        mix = typeof mix === T_STRING ? texthelp.RW4GC.riot.mixin(mix) : mix
        each(Object.keys(mix), function (key) {
          if (key != 'init')
            self[key] = isFunction(mix[key]) ? mix[key].bind(self) : mix[key]
        })
        if (mix.init) mix.init.bind(self)()
      })
      return this
    })
    defineProperty(this, 'mount', function () {
      updateOpts()
      if (fn) fn.call(self, opts)
      parseExpressions(dom, self, expressions)
      toggle(true)
      if (impl.attrs || hasImpl) {
        walkAttributes(impl.attrs, function (k, v) {
          setAttr(root, k, v)
        })
        parseExpressions(self.root, self, expressions)
      }
      if (!self.parent || isLoop) self.update(item)
      self.trigger('before-mount')
      if (isLoop && !hasImpl) {
        self.root = root = dom.firstChild
      } else {
        while (dom.firstChild) root.appendChild(dom.firstChild)
        if (root.stub) self.root = root = parent.root
      }
      if (isLoop)
        parseNamedElements(self.root, self.parent, null, true)
      if (!self.parent || self.parent.isMounted) {
        self.isMounted = true
        self.trigger('mount')
      } else self.parent.one('mount', function () {
        if (!isInStub(self.root)) {
          self.parent.isMounted = self.isMounted = true
          self.trigger('mount')
        }
      })
    })
    defineProperty(this, 'unmount', function (keepRootTag) {
      var el = root
        , p = el.parentNode
        , ptag
      self.trigger('before-unmount')
      __virtualDom.splice(__virtualDom.indexOf(self), 1)
      if (this._virts) {
        each(this._virts, function (v) {
          v.parentNode.removeChild(v)
        })
      }
      if (p) {
        if (parent) {
          ptag = getImmediateCustomParentTag(parent)
          if (isArray(ptag.tags[tagName]))
            each(ptag.tags[tagName], function (tag, i) {
              if (tag._riot_id == self._riot_id)
                ptag.tags[tagName].splice(i, 1)
            })
          else
            ptag.tags[tagName] = undefined
        } else
          while (el.firstChild) el.removeChild(el.firstChild)
        if (!keepRootTag)
          p.removeChild(el)
        else
          remAttr(p, 'riot-tag')
      }
      self.trigger('unmount')
      toggle()
      self.off('*')
      self.isMounted = false
      root._tag = null
    })

    function toggle(isMount) {
      each(childTags, function (child) {
        child[isMount ? 'mount' : 'unmount']()
      })
      if (parent) {
        var evt = isMount ? 'on' : 'off'
        if (isLoop)
          parent[evt]('unmount', self.unmount)
        else
          parent[evt]('update', self.update)[evt]('unmount', self.unmount)
      }
    }
    parseNamedElements(dom, this, childTags)
  }

  function setEventHandler(name, handler, dom, tag) {
    dom[name] = function (e) {
      var ptag = tag._parent
        , item = tag._item
        , el
      if (!item)
        while (ptag && !item) {
          item = ptag._item
          ptag = ptag._parent
        }
      e = e || window.event
      if (isWritable(e, 'currentTarget')) e.currentTarget = dom
      if (isWritable(e, 'target')) e.target = e.srcElement
      if (isWritable(e, 'which')) e.which = e.charCode || e.keyCode
      e.item = item
      if (handler.call(tag, e) !== true && !/radio|check/.test(dom.type)) {
        if (e.preventDefault) e.preventDefault()
        e.returnValue = false
      }
      if (!e.preventUpdate) {
        el = item ? getImmediateCustomParentTag(ptag) : tag
        el.update()
      }
    }
  }

  function insertTo(root, node, before) {
    if (root) {
      root.insertBefore(before, node)
      root.removeChild(node)
    }
  }

  function update(expressions, tag) {
    each(expressions, function (expr, i) {
      var dom = expr.dom
        , attrName = expr.attr
        , value = tmpl(expr.expr, tag)
        , parent = expr.dom.parentNode
      if (expr.bool)
        value = value ? attrName : false
      else if (value == null)
        value = ''
      if (parent && parent.tagName == 'TEXTAREA') value = ('' + value)
        .replace(/riot-/g, '')
      if (expr.value === value) return
      expr.value = value
      if (!attrName) {
        dom.nodeValue = '' + value
        return
      }
      remAttr(dom, attrName)
      if (isFunction(value)) {
        setEventHandler(attrName, value, dom, tag)
      } else if (attrName == 'if') {
        var stub = expr.stub
          , add = function () {
            insertTo(stub.parentNode, stub, dom)
          }
          , remove = function () {
            insertTo(dom.parentNode, dom, stub)
          }
        if (value) {
          if (stub) {
            add()
            dom.inStub = false
            if (!isInStub(dom)) {
              walk(dom, function (el) {
                if (el._tag && !el._tag.isMounted) el._tag.isMounted = !!el._tag.trigger('mount')
              })
            }
          }
        } else {
          stub = expr.stub = stub || document.createTextNode('')
          if (dom.parentNode)
            remove()
          else(tag.parent || tag)
            .one('updated', remove)
          dom.inStub = true
        }
      } else if (/^(show|hide)$/.test(attrName)) {
        if (attrName == 'hide') value = !value
        dom.style.display = value ? '' : 'none'
      } else if (attrName == 'value') {
        dom.value = value
      } else if (startsWith(attrName, RIOT_PREFIX) && attrName != RIOT_TAG) {
        if (value)
          setAttr(dom, attrName.slice(RIOT_PREFIX.length), value)
      } else {
        if (expr.bool) {
          dom[attrName] = value
          if (!value) return
        }
        if (typeof value !== T_OBJECT) setAttr(dom, attrName, value)
      }
    })
  }

  function each(els, fn) {
    for (var i = 0, len = (els || [])
        .length, el; i < len; i++) {
      el = els[i]
      if (el != null && fn(el, i) === false) i--
    }
    return els
  }

  function isFunction(v) {
    return typeof v === T_FUNCTION || false
  }

  function remAttr(dom, name) {
    dom.removeAttribute(name)
  }

  function toCamel(string) {
    return string.replace(/(\-\w)/g, function (match) {
      return match.toUpperCase()
        .replace('-', '')
    })
  }

  function getAttr(dom, name) {
    return dom.getAttribute(name)
  }

  function setAttr(dom, name, val) {
    dom.setAttribute(name, val)
  }

  function getTag(dom) {
    return dom.tagName && __tagImpl[getAttr(dom, RIOT_TAG) || dom.tagName.toLowerCase()]
  }

  function addChildTag(tag, tagName, parent) {
    var cachedTag = parent.tags[tagName]
    if (cachedTag) {
      if (!isArray(cachedTag))
        if (cachedTag !== tag)
          parent.tags[tagName] = [cachedTag]
      if (!contains(parent.tags[tagName], tag))
        parent.tags[tagName].push(tag)
    } else {
      parent.tags[tagName] = tag
    }
  }

  function moveChildTag(tag, tagName, newPos) {
    var parent = tag.parent
      , tags
    if (!parent) return
    tags = parent.tags[tagName]
    if (isArray(tags))
      tags.splice(newPos, 0, tags.splice(tags.indexOf(tag), 1)[0])
    else addChildTag(tag, tagName, parent)
  }

  function initChildTag(child, opts, innerHTML, parent) {
    var tag = new Tag(child, opts, innerHTML)
      , tagName = getTagName(opts.root)
      , ptag = getImmediateCustomParentTag(parent)
    tag.parent = ptag
    tag._parent = parent
    addChildTag(tag, tagName, ptag)
    if (ptag !== parent)
      addChildTag(tag, tagName, parent)
    opts.root.innerHTML = ''
    return tag
  }

  function getImmediateCustomParentTag(tag) {
    var ptag = tag
    while (!getTag(ptag.root)) {
      if (!ptag.parent) break
      ptag = ptag.parent
    }
    return ptag
  }

  function defineProperty(el, key, value, options) {
    Object.defineProperty(el, key, extend({
      value: value
      , enumerable: false
      , writable: false
      , configurable: false
    }, options))
    return el
  }

  function getTagName(dom) {
    var child = getTag(dom)
      , namedTag = getAttr(dom, 'name')
      , tagName = namedTag && !tmpl.hasExpr(namedTag) ? namedTag : child ? child.name : dom.tagName.toLowerCase()
    return tagName
  }

  function extend(src) {
    var obj, args = arguments
    for (var i = 1; i < args.length; ++i) {
      if (obj = args[i]) {
        for (var key in obj) {
          if (isWritable(src, key))
            src[key] = obj[key]
        }
      }
    }
    return src
  }

  function contains(arr, item) {
    return ~arr.indexOf(item)
  }

  function isArray(a) {
    return Array.isArray(a) || a instanceof Array
  }

  function isWritable(obj, key) {
    var props = Object.getOwnPropertyDescriptor(obj, key)
    return typeof obj[key] === T_UNDEF || props && props.writable
  }

  function cleanUpData(data) {
    if (!(data instanceof Tag) && !(data && typeof data.trigger == T_FUNCTION)) return data
    var o = {}
    for (var key in data) {
      if (!contains(RESERVED_WORDS_BLACKLIST, key))
        o[key] = data[key]
    }
    return o
  }

  function walk(dom, fn) {
    if (dom) {
      if (fn(dom) === false) return
      else {
        dom = dom.firstChild
        while (dom) {
          walk(dom, fn)
          dom = dom.nextSibling
        }
      }
    }
  }

  function walkAttributes(html, fn) {
    var m, re = /([-\w]+) ?= ?(?:"([^"]*)|'([^']*)|({[^}]*}))/g
    while (m = re.exec(html)) {
      fn(m[1].toLowerCase(), m[2] || m[3] || m[4])
    }
  }

  function isInStub(dom) {
    while (dom) {
      if (dom.inStub) return true
      dom = dom.parentNode
    }
    return false
  }

  function mkEl(name) {
    return document.createElement(name)
  }

  function replaceYield(tmpl, innerHTML) {
    return tmpl.replace(/<yield\s*(?:\/>|>\s*<\/yield\s*>)/gi, innerHTML || '')
  }

  function $$(selector, ctx) {
    return (ctx || document)
      .querySelectorAll(selector)
  }

  function $(selector, ctx) {
    return (ctx || document)
      .querySelector(selector)
  }

  function inherit(parent) {
    function Child() {}
    Child.prototype = parent
    return new Child()
  }

  function getNamedKey(dom) {
    return getAttr(dom, 'id') || getAttr(dom, 'name')
  }

  function setNamed(dom, parent, keys) {
    var key = getNamedKey(dom)
      , add = function (value) {
        if (contains(keys, key)) return
        var isArr = isArray(value)
        if (!value)
          parent[key] = dom
        else if (!isArr || isArr && !contains(value, dom)) {
          if (isArr)
            value.push(dom)
          else
            parent[key] = [value, dom]
        }
      }
    if (!key) return
    if (tmpl.hasExpr(key))
      parent.one('updated', function () {
        key = getNamedKey(dom)
        add(parent[key])
      })
    else
      add(parent[key])
  }

  function startsWith(src, str) {
    return src.slice(0, str.length) === str
  }
  var injectStyle = (function () {
    if (!window) return
    var styleNode = mkEl('style')
      , placeholder = $('style[type=riot]')
    setAttr(styleNode, 'type', 'text/css')
    if (placeholder) {
      placeholder.parentNode.replaceChild(styleNode, placeholder)
      placeholder = null
    } else document.getElementsByTagName('head')[0].appendChild(styleNode)
    return styleNode.styleSheet ? function (css) {
      styleNode.styleSheet.cssText += css
    } : function (css) {
      styleNode.innerHTML += css
    }
  })()

  function mountTo(root, tagName, opts) {
    var tag = __tagImpl[tagName]
      , innerHTML = root._innerHTML = root._innerHTML || root.innerHTML
    root.innerHTML = ''
    if (tag && root) tag = new Tag(tag, {
      root: root
      , opts: opts
    }, innerHTML)
    if (tag && tag.mount) {
      tag.mount()
      if (!contains(__virtualDom, tag)) __virtualDom.push(tag)
    }
    return tag
  }
  texthelp.RW4GC.riot.util = {
    brackets: brackets
    , tmpl: tmpl
  }
  texthelp.RW4GC.riot.mixin = (function () {
    var mixins = {}
    return function (name, mixin) {
      if (!mixin) return mixins[name]
      mixins[name] = mixin
    }
  })()
  texthelp.RW4GC.riot.tag = function (name, html, css, attrs, fn) {
    if (isFunction(attrs)) {
      fn = attrs
      if (/^[\w\-]+\s?=/.test(css)) {
        attrs = css
        css = ''
      } else attrs = ''
    }
    if (css) {
      if (isFunction(css)) fn = css
      else if (injectStyle) injectStyle(css)
    }
    __tagImpl[name] = {
      name: name
      , tmpl: html
      , attrs: attrs
      , fn: fn
    }
    return name
  }
  texthelp.RW4GC.riot.tag2 = function (name, html, css, attrs, fn, bpair) {
    if (css && injectStyle) injectStyle(css)
    __tagImpl[name] = {
      name: name
      , tmpl: html
      , attrs: attrs
      , fn: fn
    }
    return name
  }
  texthelp.RW4GC.riot.mount = function (selector, tagName, opts) {
    var els, allTags, tags = []

    function addRiotTags(arr) {
      var list = ''
      each(arr, function (e) {
        list += ', *[' + RIOT_TAG + '="' + e.trim() + '"]'
      })
      return list
    }

    function selectAllTags() {
      var keys = Object.keys(__tagImpl)
      return keys + addRiotTags(keys)
    }

    function pushTags(root) {
      var last
      if (root.tagName) {
        if (tagName && (!(last = getAttr(root, RIOT_TAG)) || last != tagName))
          setAttr(root, RIOT_TAG, tagName)
        var tag = mountTo(root, tagName || root.getAttribute(RIOT_TAG) || root.tagName.toLowerCase(), opts)
        if (tag) tags.push(tag)
      } else if (root.length)
        each(root, pushTags)
    }
    if (typeof tagName === T_OBJECT) {
      opts = tagName
      tagName = 0
    }
    if (typeof selector === T_STRING) {
      if (selector === '*')
        selector = allTags = selectAllTags()
      else
        selector += addRiotTags(selector.split(','))
      els = selector ? $$(selector) : []
    } else
      els = selector
    if (tagName === '*') {
      tagName = allTags || selectAllTags()
      if (els.tagName)
        els = $$(tagName, els)
      else {
        var nodeList = []
        each(els, function (_el) {
          nodeList.push($$(tagName, _el))
        })
        els = nodeList
      }
      tagName = 0
    }
    if (els.tagName)
      pushTags(els)
    else
      each(els, pushTags)
    return tags
  }
  texthelp.RW4GC.riot.update = function () {
    return each(__virtualDom, function (tag) {
      tag.update()
    })
  }
  texthelp.RW4GC.riot.Tag = Tag
  var parsers = (function () {
    var _mods = {}

    function _try(name, req) {
      switch (name) {
      case 'coffee':
        req = 'CoffeeScript'
        break
      case 'es6':
        req = 'babel'
        break
      default:
        if (!req) req = name
        break
      }
      return _mods[name] = window[req]
    }

    function _req(name, req) {
      return name in _mods ? _mods[name] : _try(name, req)
    }
    var _html = {
      jade: function (html, opts) {
        return _req('jade')
          .render(html, extend({
            pretty: true
            , doctype: 'html'
          }, opts))
      }
    }
    var _css = {
      stylus: function (tag, css, opts) {
        var
          stylus = _req('stylus')
          , nib = _req('nib')
        return nib ? stylus(css)
          .use(nib())
          .import('nib')
          .render() : stylus.render(css)
      }
    }
    var _js = {
      none: function (js, opts) {
        return js
      }
      , livescript: function (js, opts) {
        return _req('livescript')
          .compile(js, extend({
            bare: true
            , header: false
          }, opts))
      }
      , typescript: function (js, opts) {
        return _req('typescript')(js, opts)
          .replace(/\r\n?/g, '\n')
      }
      , es6: function (js, opts) {
        return _req('es6')
          .transform(js, extend({
            blacklist: ['useStrict', 'strict', 'react']
            , sourceMaps: false
            , comments: false
          }, opts))
          .code
      }
      , babel: function (js, opts) {
        js = 'function __parser_babel_wrapper__(){' + js + '}'
        return _req('babel')
          .transform(js, extend({
            presets: ['es2015']
          }, opts))
          .code.replace(/["']use strict["'];[\r\n]+/, '')
          .slice(38, -2)
      }
      , coffee: function (js, opts) {
        return _req('coffee')
          .compile(js, extend({
            bare: true
          }, opts))
      }
    }
    _js.javascript = _js.none
    _js.coffeescript = _js.coffee
    return {
      html: _html
      , css: _css
      , js: _js
      , _req: _req
    }
  })()
  texthelp.RW4GC.riot.parsers = parsers
  var compile = (function () {
    var brackets = texthelp.RW4GC.riot.util.brackets

    function _regEx(str, opt) {
      return new RegExp(str, opt)
    }
    var
      BOOL_ATTRS = _regEx('^(?:disabled|checked|readonly|required|allowfullscreen|auto(?:focus|play)|' + 'compact|controls|default|formnovalidate|hidden|inert|ismap|itemscope|loop|' + 'multiple|muted|no(?:resize|shade|validate|wrap)?|open|reversed|seamless|' + 'selected|sortable|truespeed|typemustmatch)$')
      , RIOT_ATTRS = ['style', 'src', 'd']
      , VOID_TAGS = /^(?:input|img|br|wbr|hr|area|base|col|embed|keygen|link|meta|param|source|track)$/
      , HTML_ATTR = /\s*([-\w:\.\xA0-\xFF]+)\s*(?:=\s*('[^']+'|"[^"]+"|\S+))?/g
      , TRIM_TRAIL = /[ \t]+$/gm
      , _bp = null

    function q(s) {
      return "'" + (s ? s.replace(/\\/g, '\\\\')
        .replace(/'/g, "\\'")
        .replace(/\n/g, '\\n')
        .replace(/\r/g, '\\r') : '') + "'"
    }

    function mktag(name, html, css, attrs, js, pcex) {
      var
        c = ', '
        , s = '}' + (pcex.length ? ', ' + q(_bp[8]) : '') + ');'
      if (js && js.slice(-1) !== '\n') s = '\n' + s
      return 'texthelp.RW4GC.riot.tag2(\'' + name + "'" + c + q(html) + c + q(css) + c + q(attrs) + ', function(opts) {\n' + js + s
    }

    function extend(obj, props) {
      for (var prop in props) {
        if (props.hasOwnProperty(prop)) {
          obj[prop] = props[prop]
        }
      }
      return obj
    }

    function parseAttrs(str) {
      var
        list = []
        , match, k, v, DQ = '"'
      HTML_ATTR.lastIndex = 0
      while (match = HTML_ATTR.exec(str)) {
        k = match[1].toLowerCase()
        v = match[2]
        if (!v) {
          list.push(k)
        } else {
          if (v[0] !== DQ)
            v = DQ + (v[0] === "'" ? v.slice(1, -1) : v) + DQ
          if (k === 'type' && v.toLowerCase() === '"number"') {
            v = DQ + _bp[0] + "'number'" + _bp[1] + DQ
          } else if (/\u0001\d/.test(v)) {
            if (BOOL_ATTRS.test(k)) {
              k = '__' + k
            } else if (~RIOT_ATTRS.indexOf(k)) {
              k = 'riot-' + k
            }
          }
          list.push(k + '=' + v)
        }
      }
      return list.join(' ')
    }

    function splitHtml(html, opts, pcex) {
      if (html && _bp[4].test(html)) {
        var
          jsfn = opts.expr && (opts.parser || opts.type) ? compileJS : 0
          , list = brackets.split(html)
          , expr
        for (var i = 1; i < list.length; i += 2) {
          expr = list[i]
          if (expr[0] === '^')
            expr = expr.slice(1)
          else if (jsfn) {
            expr = jsfn(expr, opts)
            if (/;\s*$/.test(expr)) expr = expr.slice(0, expr.search(/;\s*$/))
          }
          list[i] = '\u0001' + (pcex.push(expr.replace(/[\r\n]+/g, ' ')
            .trim()) - 1) + _bp[1]
        }
        html = list.join('')
      }
      return html
    }

    function restoreExpr(html, pcex) {
      if (pcex.length) {
        html = html.replace(/\u0001(\d+)/g, function (_, d) {
          return _bp[0] + pcex[d].replace(/"/g, '&quot;')
        })
      }
      return html
    }
    var
      HTML_COMMENT = /<!--(?!>)[\S\s]*?-->/g
      , HTML_TAGS = /<([-\w]+)\s*([^"'\/>]*(?:(?:"[^"]*"|'[^']*'|\/[^>])[^'"\/>]*)*)(\/?)>/g

    function compileHTML(html, opts, pcex, intc) {
      if (!intc) {
        _bp = brackets.array(opts.brackets)
        html = html.replace(/\r\n?/g, '\n')
          .replace(HTML_COMMENT, '')
          .replace(TRIM_TRAIL, '')
      }
      if (!pcex) pcex = []
      html = splitHtml(html, opts, pcex)
        .replace(HTML_TAGS, function (_, name, attr, ends) {
          name = name.toLowerCase()
          ends = ends && !VOID_TAGS.test(name) ? '></' + name : ''
          if (attr) name += ' ' + parseAttrs(attr)
          return '<' + name + ends + '>'
        })
      if (!opts.whitespace) {
        var p = []
          , pre = /<pre(?:\s+[^'">]+(?:(?:"[^"]*"|'[^']*')[^'">]*)*|\s*)>[\s\S]*<\/pre\s*>/gi
        html = html.replace(pre, function (q) {
            return '\u0002' + (p.push(q) - 1) + '~'
          })
          .trim()
          .replace(/\s+/g, ' ')
        if (p.length)
          html = html.replace(/\u0002(\d+)~/g, function (q, n) {
            return p[n]
          })
      }
      if (opts.compact) html = html.replace(/> <([-\w\/])/g, '><$1')
      return restoreExpr(html, pcex)
    }
    var
      JS_RMCOMMS = _regEx('(' + brackets.S_QBLOCKS + ')|' + brackets.R_MLCOMMS.source + '|//[^\r\n]*', 'g')
      , JS_ES6SIGN = /^([ \t]*)([$_A-Za-z][$\w]*)\s*(\([^()]*\)\s*{)/m

    function riotjs(js) {
      var
        match, toes5, parts = []
        , pos
      js = js.replace(JS_RMCOMMS, function (m, q) {
        return q ? m : ' '
      })
      while (match = js.match(JS_ES6SIGN)) {
        parts.push(RegExp.leftContext)
        js = RegExp.rightContext
        pos = skipBlock(js)
        toes5 = !/^(?:if|while|for|switch|catch|function)$/.test(match[2])
        if (toes5)
          match[0] = match[1] + 'this.' + match[2] + ' = function' + match[3]
        parts.push(match[0], js.slice(0, pos))
        js = js.slice(pos)
        if (toes5 && !/^\s*.\s*bind\b/.test(js)) parts.push('.bind(this)')
      }
      return parts.length ? parts.join('') + js : js

      function skipBlock(str) {
        var
          re = _regEx('([{}])|' + brackets.S_QBLOCKS, 'g')
          , level = 1
          , match
        while (level && (match = re.exec(str))) {
          if (match[1])
            match[1] === '{' ? ++level : --level
        }
        return level ? str.length : re.lastIndex
      }
    }

    function compileJS(js, opts, type, parserOpts) {
      if (!js) return ''
      if (!type) type = opts.type
      var parser = opts.parser || (type ? parsers.js[type] : riotjs)
      if (!parser)
        throw new Error('JS parser not found: "' + type + '"')
      return parser(js, parserOpts)
        .replace(TRIM_TRAIL, '')
    }
    var CSS_SELECTOR = _regEx('(}|{|^)[ ;]*([^@ ;{}][^{}]*)(?={)|' + brackets.R_STRINGS.source, 'g')

    function scopedCSS(tag, style) {
      var scope = ':scope'
      return style.replace(CSS_SELECTOR, function (m, p1, p2) {
        if (!p2) return m
        p2 = p2.replace(/[^,]+/g, function (sel) {
          var s = sel.trim()
          if (s && s !== 'from' && s !== 'to' && s.slice(-1) !== '%') {
            if (s.indexOf(scope) < 0) s = scope + ' ' + s
            s = s.replace(scope, tag) + ',' +
              s.replace(scope, '[riot-tag="' + tag + '"]')
          }
          return sel.slice(-1) === ' ' ? s + ' ' : s
        })
        return p1 ? p1 + ' ' + p2 : p2
      })
    }

    function compileCSS(style, tag, type, scoped, opts) {
      if (type) {
        if (type === 'scoped-css') {
          scoped = true
        } else if (parsers.css[type]) {
          style = parsers.css[type](tag, style, opts)
        } else if (type !== 'css') {
          throw new Error('CSS parser not found: "' + type + '"')
        }
      }
      style = style.replace(brackets.R_MLCOMMS, '')
        .replace(/\s+/g, ' ')
        .trim()
      return scoped ? scopedCSS(tag, style) : style
    }
    var
      TYPE_ATTR = /\stype\s*=\s*(?:(['"])(.+?)\1|(\S+))/i
      , MISC_ATTR = /\s*=\s*("(?:\\[\S\s]|[^"\\]*)*"|'(?:\\[\S\s]|[^'\\]*)*'|\{[^}]+}|\S+)/.source

    function getType(str) {
      if (str) {
        var match = str.match(TYPE_ATTR)
        str = match && (match[2] || match[3])
      }
      return str ? str.replace('text/', '') : ''
    }

    function getAttr(str, name) {
      if (str) {
        var
          re = _regEx('\\s' + name + MISC_ATTR, 'i')
          , match = str.match(re)
        str = match && match[1]
        if (str)
          return /^['"]/.test(str) ? str.slice(1, -1) : str
      }
      return ''
    }

    // get the parser options from the options attribute
    function getParserOptions(attrs) {
      var opts = getAttr(attrs, 'options')
        // convert the string into a valid js object
      if (opts) opts = JSON.parse(opts)
      return opts
    }

    // Runs the custom or default parser on the received JavaScript code.
    // The CLI version can read code from the file system (experimental)
    function getCode(code, opts, attrs, url) {
      var type = getType(attrs)
        , parserOpts = getParserOptions(attrs)

      //#if READ_JS_SRC
      var src = getAttr(attrs, 'src')
      if (src && url) {
        var
          charset = getAttr(attrs, 'charset')
          , file = path.resolve(path.dirname(url), src)
        code = require('fs')
          .readFileSync(file, {
            encoding: charset || 'utf8'
          })
      }
      //#endif
      return compileJS(code, opts, type, parserOpts)
    }

    // Matches HTML tag ending a line. This regex still can be fooled by code as:
    // ```js
    // x <y && y >
    //  z
    // ```
    var END_TAGS = /\/>\n|^<(?:\/[\w\-]+\s*|[\w\-]+(?:\s+(?:[-\w:\xA0-\xFF][\S\s]*?)?)?)>\n/

    function splitBlocks(str) {
      var k, m

      /* istanbul ignore next: this if() can't be true,but just in case...*/
      if (str[str.length - 1] === '>')
        return [str, '']
      k = str.lastIndexOf('<')
      while (~k) {
        if (m = str.slice(k)
          .match(END_TAGS)) {
          k += m.index + m[0].length
          return [str.slice(0, k), str.slice(k)]
        }
        k = str.lastIndexOf('<', k - 1)
      }
      return ['', str]
    }

    function compileTemplate(lang, html, opts) {
      var parser = parsers.html[lang]
      if (!parser)
        throw new Error('Template parser not found: "' + lang + '"')
      return parser(html, opts)
    }
    var
      CUST_TAG = /^([ \t]*)<([-\w]+)(?:\s+([^'"\/>]+(?:(?:"[^"]*"|'[^']*'|\/[^>])[^'"\/>]*)*)|\s*)?(?:\/>|>[ \t]*\n?([\s\S]*)^\1<\/\2\s*>|>(.*)<\/\2\s*>)/gim
      , STYLE = /<style(\s+[^>]*)?>\n?([^<]*(?:<(?!\/style\s*>)[^<]*)*)<\/style\s*>/gi
      , SCRIPT = _regEx(STYLE.source.replace(/tyle/g, 'cript'), 'gi')

    function compile(src, opts, url) {
      var label, parts = []
      if (!opts) opts = {}
      _bp = brackets.array(opts.brackets)
      if (opts.template)
        src = compileTemplate(opts.template, src, opts.templateOptions)
      label = url ? '//src: ' + url + '\n' : ''
      src = label + src.replace(/\r\n?/g, '\n')
        .replace(CUST_TAG, function (_, indent, tagName, attribs, body, body2) {
          var
            jscode = ''
            , styles = ''
            , html = ''
            , pcex = []
          tagName = tagName.toLowerCase()
          attribs = !attribs ? '' : restoreExpr(parseAttrs(splitHtml(attribs, opts, pcex)), pcex)
          if (body2) body = body2
          if (body && (body = body.replace(HTML_COMMENT, '')) && /\S/.test(body)) {
            if (body2)
              html = compileHTML(body2, opts, pcex, 1)
            else {
              body = body.replace(_regEx('^' + indent, 'gm'), '')
              body = body.replace(STYLE, function (_, _attrs, _style) {
                var scoped = _attrs && /\sscoped(\s|=|$)/i.test(_attrs)
                  , csstype = getType(_attrs) || opts.style
                styles += (styles ? ' ' : '') +
                  compileCSS(_style, tagName, csstype, scoped, getParserOptions(_attrs))
                return ''
              })
              body = body.replace(SCRIPT, function (_, _attrs, _script) {
                jscode += (jscode ? '\n' : '') + getCode(_script, opts, _attrs)
                return ''
              })
              var blocks = splitBlocks(body.replace(TRIM_TRAIL, ''))
              body = blocks[0]
              if (body)
                html = compileHTML(body, opts, pcex, 1)
              body = blocks[1]
              if (/\S/.test(body))
                jscode += (jscode ? '\n' : '') + compileJS(body, opts)
            }
          }
          jscode = /\S/.test(jscode) ? jscode.replace(/\n{3,}/g, '\n\n') : ''
          if (opts.entities) {
            parts.push({
              tagName: tagName
              , html: html
              , css: styles
              , attribs: attribs
              , js: jscode
            })
            return ''
          }
          return mktag(tagName, html, styles, attribs, jscode, pcex)
        })
      return opts.entities ? parts : src
    }
    return compile
  })()
  texthelp.RW4GC.riot.compile = (function () {
    var
      doc = window.document
      , promise, ready

    function GET(url, fn, opts) {
      var req = new XMLHttpRequest()
      req.onreadystatechange = function () {
        if (req.readyState === 4 && (req.status === 200 || !req.status && req.responseText.length))
          fn(req.responseText, opts, url)
      }
      req.open('GET', url, true)
      req.send('')
    }

    function globalEval(js) {
      var
        node = doc.createElement('script')
        , root = doc.documentElement
      node.text = js
      root.appendChild(node)
      root.removeChild(node)
    }

    function compileScripts(fn, exopt) {
      var
        scripts = doc.querySelectorAll('script[type="riot/tag"]')
        , scriptsAmount = scripts.length

      function done() {
        promise.trigger('ready')
        ready = true
        if (fn) fn()
      }

      function compileTag(src, opts, url) {
        globalEval(compile(src, opts, url))
        if (!--scriptsAmount) done()
      }
      if (!scriptsAmount) done()
      else {
        for (var i = 0; i < scripts.length; ++i) {
          var
            script = scripts[i]
            , opts = {
              template: script.getAttribute('template')
            }
            , url = script.getAttribute('src')
          if (exopt) opts = extend(opts, exopt)
          url ? GET(url, compileTag, opts) : compileTag(script.innerHTML, opts)
        }
      }
    }
    return function (arg, fn, opts) {
      if (typeof arg === 'string') {
        if (typeof fn === 'object') {
          opts = fn
          fn = false
        }
        if (/^\s*</.test(arg)) {
          var js = compile(arg, opts)
          if (!fn) globalEval(js)
          return js
        }
        GET(arg, function (str) {
          var js = compile(str, opts, arg)
          globalEval(js)
          if (fn) fn(js, str)
        })
      } else {
        if (typeof arg === 'function') {
          opts = fn
          fn = arg
        } else {
          opts = arg
          fn = undefined
        }
        if (ready)
          return fn && fn()
        if (promise) {
          if (fn) promise.on('ready', fn)
        } else {
          promise = texthelp.RW4GC.riot.observable()
          compileScripts(fn, opts)
        }
      }
    }
  })()
  var mount = texthelp.RW4GC.riot.mount
  texthelp.RW4GC.riot.mount = function (a, b, c) {
    var ret
    texthelp.RW4GC.riot.compile(function () {
      ret = mount(a, b, c)
    })
    return ret
  }
  if (typeof exports === T_OBJECT)
    module.exports = riot
  else if (typeof define === 'function' && define.amd)
    define(function () {
      return (texthelp.RW4GC.riot.ver = riot)
    })
  else
    texthelp.RW4GC.riot.ver = riot
})
.apply(texthelp.RW4GC.riot, ["undefined" != typeof window ? window : void 0]);

var texthelp = texthelp || {};
texthelp.RW4GC = texthelp.RW4GC || {};
texthelp.RW4GC.toolbarstore = function (m) {
  var a = this;
  texthelp.RW4GC.riot.observable(this);
  this.toolbarEventHandler = m;
  this.prevSize = this.currentSize = 32;
  this.license = null;
  this.authenticated = this.showDefault = !1;
  this.m_currentVoice = this.m_currentLanguage = "";
  this.m_speed = 0;
  this.dialogSettingsLoadedCallback = this.toolbarSettingsLoadedCallback = null;
  this.on("resize_toolbarAction", function (a) {
    var b = {
      size: 32
    };
    "1" == a.size && (b.size = 24);
    "2" == a.size && (b.size = 32);
    "3" == a.size && (b.size = 48);
    this.currentSize !== b.size && (b.prevsize = this.currentSize, this.currentSize = b.size, texthelp.RW4GC.RiotControl.trigger("onresized_toolbar", b))
  });
  this.on("update_toolbarAction", function (a) {
    texthelp.RW4GC.RiotControl.trigger("onupdate_toolbar", {
      barConfig: a
      , size: self.currentSize
      , prevsize: self.prevSize
    })
  });
  this.on("resize_toolbarButtonsAction", function (a) {
    this.prevSize = this.currentSize = a.size;
    texthelp.RW4GC.RiotControl.trigger("onresize_toolbarButtons", a)
  });
  this.on("toogle_toolbar", function (c) {
    a.toolbarEventHandler.ontoogletoolbar(c)
  });
  this.on("th-button-click", function (c, b, e, d) {
    a.toolbarEventHandler["on" + c.toLowerCase()](d)
  });
  this.on("th-button-lostfocus", function (a, b, e, d) {
    texthelp.RW4GC.RiotControl.trigger("onHide_tooltip", b)
  });
  this.on("th-button-onfocus", function (a, b, e, d) {
    texthelp.RW4GC.RiotControl.trigger("onShow_tooltip", b)
  });
  this.on("th-initialised", function () {
    texthelp.RW4GC.RiotControl.trigger("onlang_changed");
    texthelp.RW4GC.RiotControl.trigger("onvoice_changed")
  });
  window.addEventListener("message", function (c) {
    if (void 0 != c.source && void 0 != c.data && c.source == window && "1757FROM_BGRW4G_FUNCTION" == c.data.type) a["on" + c.data.method](c.data.parameters)
  }, !1);
  this.on("save_Toolbar", function (a) {
    null != a && window.postMessage({
      type: "1757FROM_PAGERW4G"
      , key: "function"
      , method: "SaveBarSettings"
      , parameters: a
    }, "*")
  });
  this.on("toolbar_Opened", function () {
    var a = textHelp.webreaderapi.HelpersSingleton.getInst()
      .getAPI()
      .getParserName();
    void 0 == a && (a = "Unknown");
    var b = textHelp.webreaderapi.HelpersSingleton.getInst()
      .getLicense()
      , e = [];
    e.push(a);
    e.push(b);
    window.postMessage({
      type: "1757FROM_PAGERW4G"
      , key: "function"
      , method: "SendAppView"
      , parameters: e
    }, "*");
    e = [];
    e.push("toolbar down");
    e.push(b.Email);
    e.push(b.Email.split("@")[1]);
    window.postMessage({
      type: "1757FROM_PAGERW4G"
      , key: "function"
      , method: "SendEvent"
      , parameters: e
    }, "*");
    e = [];
    e.push(window.location.href);
    e.push(b.Email);
    e.push(b.Email.split("@")[1]);
    window.postMessage({
      type: "1757FROM_PAGERW4G"
      , key: "function"
      , method: "SendEvent"
      , parameters: e
    }, "*")
  });
  this.on("save_Dialogs", function (a) {
    null != a && window.postMessage({
      type: "1757FROM_PAGERW4G"
      , key: "function"
      , method: "SaveDialogSettings"
      , parameters: a
    }, "*")
  });
  this.on("load_Toolbar", function (c) {
    a.toolbarSettingsLoadedCallback = c;
    window.postMessage({
      type: "1757FROM_PAGERW4G"
      , key: "function"
      , method: "LoadBarSettings"
      , parameters: texthelp.RW4GC.defaultToolbar
    }, "*")
  });
  this.on("load_Dialogs", function (c) {
    a.dialogSettingsLoadedCallback = c;
    window.postMessage({
      type: "1757FROM_PAGERW4G"
      , key: "function"
      , method: "LoadDialogSettings"
      , parameters: texthelp.RW4GC.defaultDialogs
    }, "*")
  });
  this.on("authenticated", function (c) {
    a.license = c[0];
    a.showDefault = c[1];
    a.authenticated = !0;
    texthelp.RW4GC.RiotControl.trigger("settingsDialogOK")
  });
  this.onLoadBarSettings = function (a, b) {
    this.toolbarSettingsLoadedCallback(a.texthelpbar)
  };
  this.onLoadDialogSettings = function (a, b) {
    this.dialogSettingsLoadedCallback(a.texthelpdialogs)
  };
  this.onSettingsOK = function () {
    texthelp.RW4GC.RiotControl.trigger("settingsDialogOK");
    texthelp.RW4GC.riot.featurelist.unmount(!0);
    var a = textHelp.webreader.LocaleSingleton.getInst()
      .getLocale();
    a != this.m_currentLanguage && (texthelp.RW4GC.RiotControl.trigger("onlang_changed"), this.m_currentLanguage = a);
    a = textHelp.webreader.UserSettingsSingleton.getInst()
      .getUserSettings()
      .speechoptions.voice;
    a != this.m_currentVoice && (texthelp.RW4GC.RiotControl.trigger("onvoice_changed"), this.m_currentVoice = a);
    a = textHelp.webreader.UserSettingsSingleton.getInst()
      .getUserSettings()
      .speechoptions.speed;
    a != this.m_speed && (texthelp.RW4GC.RiotControl.trigger("onspeed_changed"), this.m_speed = a)
  };
  this.onSettingsCancel = function () {
    texthelp.RW4GC.RiotControl.trigger("settingsDialogCancel");
    texthelp.RW4GC.riot.featurelist.unmount(!0)
  };
  this.onSettingsShow = function () {
    this.m_currentLanguage = textHelp.webreader.LocaleSingleton.getInst()
      .getLocale();
    this.m_currentVoice = textHelp.webreader.UserSettingsSingleton.getInst()
      .getUserSettings()
      .speechoptions.voice;
    texthelp.RW4GC.riot.featurelist = texthelp.RW4GC.riot.mount("texthelp-featurelist", texthelp.RW4GC.currentToolbar)[0];
    texthelp.RW4GC.RiotControl.trigger("settingsDialogShow")
  };
  this.onFocusBar = function (a) {
    texthelp.RW4GC.RiotControl.trigger("onbar_focus", a)
  };
  this.onUILangChanged = function () {
    texthelp.RW4GC.RiotControl.trigger("ondialoglang_changed")
  };
  this.onSpeechStopped = function () {
    this.toolbarEventHandler.onspeechstopped()
  };
  this.onSpeech = function () {
    this.toolbarEventHandler.onspeech()
  };
  this.onSpeaking = function (a) {
    texthelp.RW4GC.RiotControl.trigger("onspeaking_changed", a)
  };
  this.onWordChanged = function (a) {
    texthelp.RW4GC.RiotControl.trigger("onword_changed", a)
  }
};
texthelp = texthelp || {};
texthelp.RW4GC = texthelp.RW4GC || {};
texthelp.RW4GC._RiotControlApi = ["on", "one", "off", "trigger"];
texthelp.RW4GC.RiotControl = {
  _stores: []
  , addStore: function (m) {
    this._stores.push(m)
  }
};
texthelp.RW4GC._RiotControlApi.forEach(function (m) {
  texthelp.RW4GC.RiotControl[m] = function () {
    var a = [].slice.call(arguments);
    this._stores.forEach(function (c) {
      c[m].apply(null, a)
    })
  }
});
texthelp = texthelp || {};
texthelp.RW4GC = texthelp.RW4GC || {};
texthelp.RW4GC.defaultToolbar = {
  size: 32
  , applicationName: "Read&Write for Google Chrome™"
  , left: {
    buttons: [{
      command: "prediction"
      , icon: "th-prediction-image"
      , tooltipid: "texthelp_toolbar_prediction"
      , tooltip: "Prediction"
      , show: !0
      , enabled: !0
    }, {
      command: "clicktospeak"
      , icon: "th-clicktospeak-image"
      , tooltipid: "texthelp_toolbar_clicktospeak"
      , tooltip: "Hover Speech"
      , show: !0
      , enabled: !0
    }, {
      command: "dictionary"
      , icon: "th-dictionary-image"
      , tooltipid: "texthelp_toolbar_dictionary"
      , tooltip: "Dictionary"
      , show: !0
      , enabled: !0
    }, {
      command: "picturedictionary"
      , icon: "th-picturedictionary-image"
      , tooltipid: "texthelp_toolbar_picturedictionary"
      , tooltip: "Picture Dictionary"
      , show: !0
      , enabled: !0
    }, {
      command: "play"
      , icon: "th-play-image"
      , tooltipid: "texthelp_toolbar_play"
      , tooltip: "Play"
      , show: !0
      , enabled: !0
    }, {
      command: "pause"
      , icon: "th-pause-image"
      , tooltipid: "texthelp_toolbar_pause"
      , tooltip: "Pause"
      , show: !0
      , enabled: !0
    }, {
      command: "stop"
      , icon: "th-stop-image"
      , tooltipid: "texthelp_toolbar_stop"
      , tooltip: "Stop"
      , show: !0
      , enabled: !0
    }, {
      command: "screenshotreader"
      , icon: "th-screenshotreader-image"
      , tooltipid: "texthelp_toolbar_screenshotreader"
      , tooltip: "Screenshot Reader"
      , show: !0
      , enabled: !0
    }, {
      command: "speechmaker"
      , icon: "th-speechmaker-image"
      , tooltipid: "texthelp_toolbar_speechmaker"
      , tooltip: "Speech Maker"
      , show: !0
      , enabled: !0
    }, {
      command: "factfinder"
      , icon: "th-factfinder-image"
      , tooltipid: "texthelp_toolbar_factfinder"
      , tooltip: "Fact Finder"
      , show: !1
      , enabled: !0
    }, {
      command: "screenmasking"
      , icon: "th-screenmasking-image"
      , tooltipid: "texthelp_toolbar_screenmasking"
      , tooltip: "Screen Masking"
      , show: !0
      , enabled: !0
    }, {
      command: "speechinput"
      , icon: "th-speechinput-image"
      , tooltipid: "texthelp_toolbar_speechinput"
      , tooltip: "Speech Input"
      , show: !0
      , enabled: !0
    }, {
      command: "translator"
      , icon: "th-translator-image"
      , tooltipid: "texthelp_toolbar_translator"
      , tooltip: "Translator"
      , show: !0
      , enabled: !0
    }, {
      command: "highlightblue"
      , icon: "th-highlightblue-image"
      , tooltipid: "texthelp_toolbar_highlightblue"
      , tooltip: "Highlight Blue"
      , show: !0
      , enabled: !0
    }, {
      command: "highlightpink"
      , icon: "th-highlightpink-image"
      , tooltipid: "texthelp_toolbar_highlightpink"
      , tooltip: "Highlight Pink"
      , show: !0
      , enabled: !0
    }, {
      command: "highlightyellow"
      , icon: "th-highlightyellow-image"
      , tooltipid: "texthelp_toolbar_highlightyellow"
      , tooltip: "Highlight Yellow"
      , show: !0
      , enabled: !0
    }, {
      command: "highlightgreen"
      , icon: "th-highlightgreen-image"
      , tooltipid: "texthelp_toolbar_highlightgreen"
      , tooltip: "Highlight Green"
      , show: !0
      , enabled: !0
    }, {
      command: "highlightclear"
      , icon: "th-highlightclear-image"
      , tooltipid: "texthelp_toolbar_highlightclear"
      , tooltip: "Clear Highlights"
      , show: !0
      , enabled: !0
    }, {
      command: "highlightscollect"
      , icon: "th-highlightscollect-image"
      , tooltipid: "texthelp_toolbar_highlightscollect"
      , tooltip: "Collect highlights"
      , show: !0
      , enabled: !0
    }, {
      command: "vocabtool"
      , icon: "th-vocabtool-image"
      , tooltipid: "texthelp_toolbar_vocabtool"
      , tooltip: "Vocabulary"
      , show: !0
      , enabled: !0
    }, {
      command: "voicenote"
      , icon: "th-voicenote-image"
      , tooltipid: "texthelp_toolbar_voicenote"
      , tooltip: "Voice Note"
      , show: !0
      , enabled: !0
    }, {
      command: "simplify"
      , icon: "th-simplify-image"
      , tooltipid: "texthelp_toolbar_simplify"
      , tooltip: "Simplify page"
      , show: !0
      , enabled: !0
    }, {
      command: "practicereadingaloud"
      , icon: "th-practicereadingaloud-image"
      , tooltipid: "texthelp_toolbar_practicereadingaloud"
      , tooltip: "Practice Reading Aloud"
      , show: !0
      , enabled: !0
    }, {
      command: "spacer"
      , icon: "th-spacer-image"
      , show: !0
      , tooltipid: "texthelp_toolbar_spacer"
      , tooltip: ""
      , enabled: !0
    }]
  }
  , right: {
    buttons: [{
      command: "settings"
      , icon: "th-settings-image"
      , right: "true"
      , tooltipid: "texthelp_toolbar_settings"
      , tooltip: "Settings"
      , show: !0
      , enabled: !0
      , disableswitch: !0
    }, {
      command: "help"
      , icon: "th-help-image"
      , right: "true"
      , tooltipid: "texthelp_toolbar_help"
      , tooltip: "Help"
      , show: !0
      , enabled: !0
    }, {
      command: "logo"
      , icon: "th-logo-image"
      , right: "true"
      , tooltipid: "texthelp_toolbar_logo"
      , tooltip: "www.texthelp.com"
      , show: !0
      , enabled: !0
    }]
  }
};
texthelp = texthelp || {};
texthelp.RW4GC = texthelp.RW4GC || {};
texthelp.RW4GC.defaultDialogs = {
  dictionaryDialog: {
    x: "20"
    , y: "20"
  }
  , pictureDialog: {
    x: "20"
    , y: "20"
  }
  , translatorDialog: {
    x: "20"
    , y: "20"
  }
};
texthelp.RW4GC.riot.tag2("texthelp-toolbarbutton", '<button class="texthelp-toolbarbutton thmdl-button thmdl-js-button thmdl-js-ripple-effect texthelp-image {this.opts.button.icon}" riot-style="height:{this.opts.size}px; width:{this.opts.size}px" th-tooltip-id={this.opts.button.tooltipid} th-tooltip="{this.opts.button.tooltip}"> <yield></yield> </button>', 'button.texthelp-toolbarbutton.thmdl-button.thmdl-js-button.thmdl-js-ripple-effect.texthelp-image{padding: 0px;margin:0px;border-radius:0;margin:0;background-size:24px 24px;min-width:24px;min-height:24px;background-repeat:no-repeat;transition:opacity .25s ease-in-out;float:left;}texthelp-toolbarbutton.thmdl-button--right{margin-left:auto;}button.texthelp-toolbarbutton.thmdl-button.thmdl-js-button:hover{opacity:.6}button.texthelp-toolbarbutton.thmdl-button.thmdl-js-button:not(.th-mouse-event):focus{outline:rgb(77, 144, 254) auto 5px}button.texthelp-toolbarbutton.thmdl-button.thmdl-js-button.enabled{background-color:#cfcfcf}button.texthelp-toolbarbutton.thmdl-button.thmdl-js-button.disabled{opacity:.3;border-bottom:0 solid #000}button.texthelp-toolbarbutton.thmdl-button.thmdl-js-button:hover:not(.th-spacer-image):not([disabled]):not(.enabled):after{content:"";position:absolute;width:50%;left:25%;top:0;border-top:3px solid #0DA0A0}button.texthelp-toolbarbutton.thmdl-button.thmdl-js-button.enabled:after{content:"";position:absolute;width:100%;left:0;bottom:0;border-bottom:3px solid #0DA0A0;border-top:none}button.texthelp-toolbarbutton.thmdl-button.thmdl-js-button.thmdl-js-ripple-effect.disabled:after{border-bottom:none}button.texthelp-toolbarbutton.thmdl-button.thmdl-button--right{float: right;}', "", function (m) {
  this._disabled = !1;
  this._activeElement = null;
  this.onToolbarButtons_resized = function (a) {
    var c = this;
    setTimeout(function () {
      c.root.firstElementChild.style.height = a.size + "px";
      c.root.firstElementChild.style.width = a.size + "px"
    }, 10)
  }.bind(this);
  texthelp.RW4GC.RiotControl.on("onresize_toolbarButtons", this.onToolbarButtons_resized);
  this.onKeyDown = function (a) {
    this.root.firstElementChild.classList.contains("th-mouse-event") && this.root.firstElementChild.classList.remove("th-mouse-event");
    if (13 == a.keyCode) {
      var c = this;
      setTimeout(function () {
        c._activeElement = document.activeElement;
        var b = document.createEvent("MouseEvents");
        b.initMouseEvent("mousedown", !0, !0);
        c.root.firstElementChild.dispatchEvent(b)
      }, 0);
      a.stopPropagation()
    }
  };
  this.onKeyUp = function (a) {
    this.root.firstElementChild.classList.contains("th-mouse-event") && this.root.firstElementChild.classList.remove("th-mouse-event");
    if (13 == a.keyCode) {
      var c = this;
      setTimeout(function () {
        var b = document.createEvent("MouseEvents");
        b.initMouseEvent("mouseup", !0, !0);
        c.root.firstElementChild.dispatchEvent(b);
        c.root.firstElementChild.focus()
      }, 0);
      a.stopPropagation()
    }
  };
  this.onMouseDown = function (a) {
    this.root.firstElementChild.classList.contains("th-mouse-event") || this.root.firstElementChild.classList.add("th-mouse-event")
  };
  this.onMouseUp = function (a) {};
  this.onFocus = function (a) {
    texthelp.RW4GC.RiotControl.trigger("th-button-onfocus", this.opts.button.command, this.root.firstElementChild, a, this._activeElement)
  };
  this.onBlur = function (a) {
    texthelp.RW4GC.RiotControl.trigger("th-button-lostfocus", this.opts.button.command, this.root.firstElementChild, a, this._activeElement)
  };
  this.on("mount", function () {
    var a = this;
    if (0 > texthelp.RW4GC.pageToolbar.supported.indexOf(this.opts.button.command) && "spacer" != this.opts.button.command) texthelp.RW4GC.featureMap[this.opts.button.command] = this.opts.button, this.root.firstChild.style.display = "none", this.root.firstElementChild.classList.contains("th-hidden") || this.root.firstElementChild.classList.add("th-hidden");
    else {
      void 0 != this.opts.button.right && (this.root.firstChild.className += " thmdl-button--right");
      this.opts.button.show || (this.root.firstChild.style.display = "none", this.root.firstElementChild.classList.contains("th-hidden") || this.root.firstElementChild.classList.add("th-hidden"));
      "spacer" != this.opts.button.command && this.opts.button.enabled || (this.root.firstElementChild.setAttribute("disabled", "true"), this.root.firstElementChild.style.minWidth = this.opts.size + "px", this._disabled = !0, this.root.firstElementChild.classList.contains("th-disabled") || this.root.firstElementChild.classList.add("th-disabled"));
      texthelp.RW4GC.featureMap[this.opts.button.command] = this.opts.button;
      this.root.firstElementChild.setAttribute("th-command", this.opts.button.command);
      var c = this.opts.size - 8;
      this.root.firstElementChild.style.backgroundSize = c + "px " + c + "px";
      this.root.firstElementChild.style.backgroundPosition = "4px 4px";
      this.root.firstElementChild.addEventListener("mousedown", function (b) {
        this._activeElement = document.activeElement
      }.bind(this));
      this.root.firstElementChild.addEventListener("click", function (b) {
        texthelp.RW4GC.RiotControl.trigger("th-button-click", this.opts.button.command, this.root.firstElementChild, b, this._activeElement)
      }.bind(this));
      this.root.addEventListener("keydown", function (b) {
        return a.onKeyDown(b)
      });
      this.root.addEventListener("keyup", function (b) {
        return a.onKeyUp(b)
      });
      this.root.addEventListener("mousedown", function (b) {
        return a.onMouseDown(b)
      });
      this.root.addEventListener("touchstart", function (b) {
        return a.onMouseDown(b)
      });
      this.root.addEventListener("mouseup", function (b) {
        return a.onMouseUp(b)
      });
      this.root.firstElementChild.addEventListener("focus", function (b) {
        return a.onFocus(b)
      });
      this.root.firstElementChild.addEventListener("blur", function (b) {
        return a.onBlur(b)
      });
      this.root.firstElementChild.addEventListener("mouseover", function (b) {
        texthelp.RW4GC.RiotControl.trigger("th-button-onfocus", this.opts.button.command, this.root.firstElementChild, b, this._activeElement)
      }.bind(this));
      this.root.firstElementChild.addEventListener("mouseout", function (b) {
        texthelp.RW4GC.RiotControl.trigger("th-button-lostfocus", this.opts.button.command, this.root.firstElementChild, b, this._activeElement)
      }.bind(this))
    }
  })
}, "{ }");
texthelp.RW4GC.riot.tag2("texthelp-toolbar", '<th-header class="th-RW4GC-toolbar th-draggable thmdl-shadow--4dp"id=th-RW4GC-toolbar><th-dragging id=th-toolbar-drag-area></th-dragging><th-toolbarbuttons class=th-toolbar-buttons><th-toolbar-buttons id=th-toobar-button-set-left><texthelp-toolbarbutton button={button} each="{button in opts.left.buttons}"size={parent.opts.size}></texthelp-toolbarbutton></th-toolbar-buttons><th-msg class=th-msg></th-msg><th-toolbar-buttons id=th-toobar-button-set-right><texthelp-toolbarbutton button={button} each="{button in opts.right.buttons}"size={parent.opts.size}></texthelp-toolbarbutton><yield></yield></th-toolbar-buttons></th-toolbarbuttons><th-usebutton class=th-usebutton><th-maskouter class="texthelp-image th-logo-image th-maskouter"><th-arrowdropdown class=arrowdropdown></th-maskouter></th-usebutton></th-header>', "[riot-tag=texthelp-toolbar] th-header.th-RW4GC-toolbar,texthelp-toolbar th-header.th-RW4GC-toolbar{box-sizing:border-box;flex-direction:column;min-width:32px;background-color:#f5f5f5;display:flex;position:fixed;z-index:2147483639;top:0;left:0;border:1px solid #A09BC3;border-radius:2px;width: auto;height: auto;padding:0px;}[riot-tag=texthelp-toolbar] th-dragging#th-toolbar-drag-area{height:21px}[riot-tag=texthelp-toolbar] th-toolbar-buttons#th-toobar-button-set-left{flex-direction:row}th-dragging#th-toolbar-drag-area a{color:#9F5DFF;padding-left:10px;}th-dragging#th-toolbar-drag-area a:hover{text-decoration:underline}button.texthelp-toolbarbutton.thmdl-button.thmdl-js-button[disabled]{opacity:.2} th-header.th-RW4GC-toolbar,texthelp-toolbar th-header.th-RW4GC-toolbar.docked-top{width: 100%;border-radius: 0;padding-left: 20px;padding-right: 20px;border-top-width: 0px;}th-header.th-RW4GC-toolbar,texthelp-toolbar th-header.th-RW4GC-toolbar.docked-top th-dragging#th-toolbar-drag-area{display:none} .th-usebutton{display:none}th-maskouter.th-maskouter.texthelp-image.th-logo-image{border-radius: 0px 0px 2px 2px;box-shadow: 0 6px 5px 0 rgba(0, 0, 0, 0.0), 0 4px 10px 0 rgba(0, 0, 0, 0.12), 0 6px 4px -1px rgba(0, 0, 0, 0.2);background-color:#f5f5f5;z-index:2147483640;position:fixed;left:70%;width:28px;height:28px;background-size:24px 24px;background-position:1px 1px;background-repeat:no-repeat;border-bottom: 1px solid #A09BC3;border-left: 1px solid #A09BC3;border-right: 1px solid #A09BC3;}th-arrowdropdown.arrowdropdown{width:0;height:0;border-left:6px solid transparent;border-right:6px solid transparent;border-top:6px solid #77729A;margin-top:28px;margin-left:8px;position:fixed}th-toolbar-buttons#th-toobar-button-set-right {float: right;}th-header#th-RW4GC-toolbar.docked-top{transition-duration:.1s;transition-property:transform}", "", function (m) {
  this._prevSize = this._size = 0;
  this._interactElem = null;
  this._barHideSize = -33;
  this._visibleButtonElems = [];
  this._lastKeyIsCTRL = !1;
  this.onStartB = this.onEndB = this.onMoveB = this._lastActiveElement = null;
  this.onKeyDown = function (a) {
    if (40 === a.keyCode && this._lastKeyIsCTRL) return this._lastKeyIsCTRL = !1, null !== this._lastActiveElement && (document.activeElement.blur(), this._lastActiveElement.focus(), a.preventDefault(), a.stopPropagation()), !1;
    this._lastKeyIsCTRL = !1;
    for (var c = -1, b = 0; b < this._visibleButtonElems.length; b++) this._visibleButtonElems[b] === a.target && (c = b, b = this._visibleButtonElems.length);
    if (!(0 > c)) {
      if (39 == a.keyCode) {
        a.preventDefault();
        if (c == this._visibleButtonElems.length - 1) return !1;
        this._visibleButtonElems[c + 1].focus();
        return !1
      }
      if (37 == a.keyCode) {
        a.preventDefault();
        if (0 == c) return !1;
        this._visibleButtonElems[c - 1].focus();
        return !1
      }
    }
  };
  this.onKeyUp = function (a) {
    console.log(a.keyCode);
    17 == a.keyCode && (this._lastKeyIsCTRL = !0)
  };
  this.onToggleBar = function (a) {
    if (texthelp.RW4GC.thToolbarStoreInstance.authenticated) texthelp.RW4GC.currentToolbar.toggled = !texthelp.RW4GC.currentToolbar.toggled, this.showBar(texthelp.RW4GC.currentToolbar.toggled), texthelp.RW4GC.RiotControl.trigger("save_Toolbar", texthelp.RW4GC.currentToolbar), texthelp.RW4GC.currentToolbar.toggled && texthelp.RW4GC.RiotControl.trigger("toogle_toolbar", c);
    else {
      texthelp.RW4GC.currentToolbar.toggled = !1;
      var c = {
        show: texthelp.RW4GC.currentToolbar.toggled
      };
      texthelp.RW4GC.RiotControl.trigger("toogle_toolbar", c)
    }
  };
  this.onToolbar_resized = function (a) {
    this._size = a.size;
    this._prevSize = a.prevsize
  }.bind(this);
  texthelp.RW4GC.RiotControl.on("onresized_toolbar", this.onToolbar_resized);
  this.onToolbar_updated = function (a) {
    this.opts = a;
    this.opts.size = a.prevsize;
    this._size = a.size;
    this._prevSize = a.prevsize;
    this.update()
  }.bind(this);
  texthelp.RW4GC.RiotControl.on("onupdate_toolbar", this.onToolbar_updated);
  this.showBar = function (a) {
    var c = !0
      , b = document.getElementById("th-RW4GC-toolbar");
    if (null != b) {
      if ("none" == b.style.display || 0 > parseInt(b.getAttribute("data-y"))) c = !1;
      c != a && (b = document.getElementById("th-RW4GC-toolbar"), null != b && (a ? (b.setAttribute("data-y", 0), b.style.webkitTransform = b.style.transform = "translate(0px, 0px)", texthelp.RW4GC.RiotControl.trigger("toolbar_Opened")) : (b.setAttribute("data-y", this._barHideSize), b.style.webkitTransform = b.style.transform = "translate(0px, " + this._barHideSize + "px)")))
    }
  };
  this.onToolbar_focus = function (a) {
    a.classList.contains("texthelp-toolbarbutton") || (null !== a && void 0 !== a && (this._lastActiveElement = a), "docked-top" === texthelp.RW4GC.pageToolbar.dock && (texthelp.RW4GC.currentToolbar.toggled = !0, this.showBar(texthelp.RW4GC.currentToolbar.toggled)), this._visibleButtonElems[0].focus())
  }.bind(this);
  texthelp.RW4GC.RiotControl.on("onbar_focus", this.onToolbar_focus);
  this.onAuthenticated = function (a) {
    texthelp.RW4GC.thToolbarStoreInstance.authenticated = !0;
    a[0].interactive && (texthelp.RW4GC.currentToolbar.toggled = !0);
    this.showBar(texthelp.RW4GC.currentToolbar.toggled)
  }.bind(this);
  texthelp.RW4GC.RiotControl.on("authenticated", this.onAuthenticated);
  this.onLang_Changed = function () {
    for (var a = textHelp.webreader.LocaleSingleton.getInst(), c = document.querySelectorAll(".texthelp-toolbarbutton"), b = 0; b < c.length; b++) {
      var e = c[b].getAttribute("th-tooltip-id");
      c[b].setAttribute("th-tooltip", a.getLocaleString(e))
    }
  }.bind(this);
  texthelp.RW4GC.RiotControl.on("onlang_changed", this.onLang_Changed);
  this.on("updated", function () {
    this._size != this._prevSize && (texthelp.RW4GC.RiotControl.trigger("resize_toolbarButtonsAction", {
      size: this._size
      , prevsize: this._prevSize
    }), texthelp.RW4GC.MDL.componentHandler.upgradeDom())
  });
  this.repositionBarOnScreen = function (a, c, b, e, d) {
    void 0 == d && (d = !0);
    var f = document.getElementById("th-RW4GC-toolbar");
    null != f && (a = (parseFloat(f.getAttribute("data-x")) || 0) + a, c = (parseFloat(f.getAttribute("data-y")) || 0) + c, void 0 != b && (8 > b || b > window.innerWidth - 24) && (texthelp.RW4GC.interact.stop(), f.style.opacity = 1, d = !1), void 0 != e && (8 > e || e > window.innerHeight - 24) && (texthelp.RW4GC.interact.stop(), f.style.opacity = 1, d = !1), 4 > a && (a = 4), 4 > c && (c = 4), a > window.innerWidth - f.clientWidth - 20 && (a = window.innerWidth - f.clientWidth - 20), c > window.innerHeight - f.clientHeight -
      20 && (c = window.innerHeight - f.clientHeight - 20), f.style.webkitTransform = f.style.transform = "translate(" + a + "px, " + c + "px)", d && (f.setAttribute("data-x", a), f.setAttribute("data-y", c), texthelp.RW4GC.currentToolbar.x = a, texthelp.RW4GC.currentToolbar.y = c))
  };
  this.on("unmount", function () {
    "docked-top" !== texthelp.RW4GC.pageToolbar.dock && (this._interactElem.ondragend = null, this._interactElem.ondragstart = null, this._interactElem.ondragmove = null)
  });
  this.on("all", function (a) {
    "mount" == a && (this.onLang_Changed(), this._visibleButtonElems = document.querySelectorAll(".texthelp-toolbarbutton:not(.th-hidden):not(.th-spacer-image):not(.th-disabled)"), texthelp.RW4GC.MDL.componentHandler.upgradeDom())
  });
  this.on("mount", function () {
    var a = this;
    void 0 == texthelp.RW4GC.featureMap && (texthelp.RW4GC.featureMap = {});
    void 0 == texthelp.RW4GC.currentToolbar.toggled && (texthelp.RW4GC.currentToolbar.toggled = !1);
    if ("docked-top" === texthelp.RW4GC.pageToolbar.dock) {
      var c = this
        , b = document.getElementById("th-RW4GC-toolbar");
      null != b && (b.classList.contains(texthelp.RW4GC.pageToolbar.dock) || b.classList.add(texthelp.RW4GC.pageToolbar.dock), texthelp.RW4GC.currentToolbar.toggled && texthelp.RW4GC.thToolbarStoreInstance.authenticated ? (b.setAttribute("data-y", 0), b.setAttribute("data-x", 0), b.style.webkitTransform = b.style.transform = "translate(0px, 0px)") : (b.setAttribute("data-y", this._barHideSize), b.setAttribute("data-x", 0), b.style.webkitTransform = b.style.transform = "translate(0px, " + this._barHideSize + "px)"), b = document.querySelector(".th-usebutton"), b.style.display = "block", b.addEventListener("mouseup", function (b) {
        return c.onToggleBar(b)
      }), this.root.addEventListener("keydown", function (b) {
        return c.onKeyDown(b)
      }), this.root.addEventListener("keyup", function (b) {
        return c.onKeyUp(b)
      }), this._visibleButtonElems = document.querySelectorAll(".texthelp-toolbarbutton:not(.th-hidden):not(.th-spacer-image)"))
    } else if (null == this._interactElem && (this.onMove = function (b) {
          this.repositionBarOnScreen(b.dx, b.dy, b.clientX, b.clientY)
        }, this.onStart = function (b) {
          b.target.style.opacity = .6;
          b = document.getElementById("texthelp-dictionary-frame");
          null != b && (document.getElementById("texthelp-dictionary-frame")
            .style.pointerEvents = "none");
          b = document.getElementById("texthelp-picture-dictionary-frame");
          null != b && (document.getElementById("texthelp-picture-dictionary-frame")
            .style.pointerEvents = "none");
          b = document.getElementById("texthelp-translator-frame");
          null != b && (document.getElementById("texthelp-translator-frame")
            .style.pointerEvents = "none")
        }, this.onEnd = function (b) {
          b.target.style.opacity = 1;
          b = document.getElementById("texthelp-dictionary-frame");
          null != b && (document.getElementById("texthelp-dictionary-frame")
            .style.pointerEvents = "");
          b = document.getElementById("texthelp-picture-dictionary-frame");
          null != b && (document.getElementById("texthelp-picture-dictionary-frame")
            .style.pointerEvents = "");
          b = document.getElementById("texthelp-translator-frame");
          null != b && (document.getElementById("texthelp-translator-frame")
            .style.pointerEvents = "");
          texthelp.RW4GC.RiotControl.trigger("save_Toolbar", texthelp.RW4GC.currentToolbar);
          this.onLang_Changed();
          texthelp.RW4GC.MDL.componentHandler.upgradeDom()
        }, this.getOffset = function (b) {
          for (var a = 0, e = 0; b && !isNaN(b.offsetLeft) && !isNaN(b.offsetTop);) a += b.offsetLeft - b.scrollLeft, e += b.offsetTop - b.scrollTop, b = b.offsetParent;
          return {
            y: e
            , x: a
          }
        }, this.onMoveB = this.onMove.bind(this), this.onEndB = this.onEnd.bind(this), this.onStartB = this.onStart.bind(this), this._interactElem = texthelp.RW4GC.interact(".th-draggable")
        .draggable({
          inertia: !1
          , autoScroll: !1
          , onmove: this.onMoveB
          , onend: this.onEndB
          , onstart: this.onStartB
          , restriction: "parent"
          , endOnly: !0
        })
        .allowFrom("th-dragging#th-toolbar-drag-area")), this.root.addEventListener("keydown", function (b) {
        return a.onKeyDown(b)
      }), this.root.addEventListener("keyup", function (b) {
        return a.onKeyUp(b)
      }), window.addEventListener("resize", function (b) {
        a.repositionBarOnScreen(0, 0, 0, 0, !1)
      }), b = document.getElementById("th-RW4GC-toolbar"), null != b && (null == b.getAttribute("data-x") || null == b.getAttribute("data-y"))) {
      var e = window.getComputedStyle(b, null)
        .getPropertyValue("min-width")
        , e = parseInt(e.substring(0, e.length - 2))
        , d = (m.left.buttons.length + m.right.buttons.length) * m.size;
      d < e && (d = e);
      e = window.innerWidth - d - 40;
      d = 20;
      void 0 != texthelp.RW4GC.currentToolbar.x && void 0 != texthelp.RW4GC.currentToolbar.y ? (e = texthelp.RW4GC.currentToolbar.x, d = texthelp.RW4GC.currentToolbar.y) : (texthelp.RW4GC.currentToolbar.x = e, texthelp.RW4GC.currentToolbar.y = d);
      e > window.innerWidth - 60 && (e = window.innerWidth - 60);
      d > window.innerHeight - b.clientHeight - 20 && (d = window.innerHeight - b.clientHeight - 20);
      b.style.webkitTransform = b.style.transform = "translate(" + e + "px, " + d + "px)";
      b.setAttribute("data-x", e);
      b.setAttribute("data-y", d);
      b = document.getElementById("th-toolbar-drag-area");
      null != b && (b.innerHTML = void 0 == texthelp.RW4GC.trialMessage ? this.opts.applicationName : this.opts.applicationName + texthelp.RW4GC.trialMessage)
    }
  })
}, "{ }");
texthelp.RW4GC.riot.tag2("texthelp-tooltip", '<th-tooltip class="thTooltip thTooltipHide" style="left: -100px; top: -100px; "> <th-content class="thTooltipContentId"></th-content> <th-arrow class="thTooltipArrow thTooltipArrowup" style="left: 20px; "><th-arrowafter class="thTooltipArrowimplAfter"> </th-arrowafter> </th-arrow></th-tooltip>', '[riot-tag=texthelp-tooltip] .thTooltip,.thTooltipArrow .thTooltipArrowimplAfter{display:block;position:absolute}.thTooltipArrow .thTooltipArrowimplAfter{border:5px solid}.thTooltipArrowdown .thTooltipArrowimplBefore{border-color:#fff transparent;left:-6px}.thTooltipArrowdown .thTooltipArrowimplAfter,.thTooltipArrowup .thTooltipArrowimplAfter{border-color:#2A2A2A transparent}.thTooltipArrowup .thTooltipArrowimplAfter{border-top-width:0;top:-4px;margin-left:5px;}.thTooltipArrowup{top:-5px}.thTooltip{background-color:#2A2A2A;border:1px solid #fff;color:#fff;display:block;opacity:1;padding:7px 9px;position:fixed;pointer-events:none;-webkit-transition:visibility 0,opacity .13s ease-in;-moz-transition:visibility 0,opacity .13s ease-in;-ms-transition:visibility 0,opacity .13s ease-in;-o-transition:visibility 0,opacity .13s ease-in;transition:visibility 0,opacity .13s ease-in;visibility:visible;z-index:2147483641;font-family:"Open Sans",sans-serif;font-weight:400;font-size:14px}.thTooltipHide{opacity:0;-webkit-transition:visibility .13s,opacity .13s ease-out;-moz-transition:visibility .13s,opacity .13s ease-out;-ms-transition:visibility .13s,opacity .13s ease-out;-o-transition:visibility .13s,opacity .13s ease-out;transition:visibility .13s,opacity .13s ease-out;visibility:hidden}.thTooltipContentId{margin:auto;height:auto;width:auto}', "", function (m) {
  this.m_visible = !1;
  this.m_tooltipTimer = this.m_tooltipArrow = this.m_tooltipTextElement = this.m_currentElement = this.m_tooltipElement = null;
  this.m_tooltipTimerLength = 1E3;
  this.on("mount", function () {
    this.m_tooltipElement = this.root.firstChild;
    this.m_tooltipTextElement = this.m_tooltipElement.childNodes[0];
    this.m_tooltipArrow = this.m_tooltipElement.childNodes[1]
  });
  this.onShow_tooltip = function (a) {
    a !== this.m_currentElement && (this.m_currentElement = a, null != this.m_tooltipTimer && clearTimeout(this.m_tooltipTimer), this.m_tooltipTimer = setTimeout(function () {
      this.m_tooltipTextElement.textContent = this.m_currentElement.getAttribute("th-tooltip");
      this.m_tooltipArrow.style.left = this.m_currentElement.offsetWidth / 2 + this.m_currentElement.offsetLeft + "px";
      var a = this.m_currentElement.offsetLeft + parseInt(this.m_currentElement.offsetParent.getAttribute("data-x")) - 4 + "px"
        , b = this.m_currentElement.offsetTop + this.m_currentElement.offsetParent.offsetTop + this.m_currentElement.offsetHeight + 4 + parseInt(this.m_currentElement.offsetParent.getAttribute("data-y")) -
        4 + "px";
      this.m_tooltipElement.style.left = a;
      this.m_tooltipElement.style.top = b;
      textHelp.webreaderapi.HelpersSingleton.getInst()
        .removeClassName(this.m_tooltipElement, "thTooltipHide")
    }.bind(this), this.m_tooltipTimerLength))
  }.bind(this);
  texthelp.RW4GC.RiotControl.on("onShow_tooltip", this.onShow_tooltip);
  this.onHide_tooltip = function (a) {
    null != this.m_tooltipTimer && (clearTimeout(this.m_tooltipTimer), this.m_tooltipTimer = null);
    this.m_currentElement = null;
    0 > this.m_tooltipElement.className.indexOf("thTooltipHide") && (this.m_tooltipElement.className += " thTooltipHide")
  }.bind(this);
  texthelp.RW4GC.RiotControl.on("onHide_tooltip", this.onHide_tooltip)
}, "{ }");
texthelp.RW4GC.riot.tag2("texthelp-featurelist", '<div class=th-features-scroller><ul class=th-feature-list ><li each="{button in opts.left.buttons}" class="th-feature {button.tooltipid}" th-feature-id={button.tooltipid}><div class="texthelp-image {button.icon}"></div>{button.tooltip}<div class="texthelp-drag-image"></div><div class="th-switch th-switch-{button.command}"><label class="thmdl-switch thmdl-js-switch thmdl-js-ripple-effect"for=switch-th-{button.command}><input type=checkbox id=switch-th-{button.command} class=thmdl-switch__input><span class=thmdl-switch__label></span></label></div><li each="{button in opts.right.buttons}" class="th-feature {button.tooltipid}" th-feature-id={button.tooltipid}><div class="texthelp-image {button.icon}"></div>{button.tooltip}<div class="texthelp-drag-image"></div><div class="th-switch th-switch-{button.command}"><label class="thmdl-switch thmdl-js-switch thmdl-js-ripple-effect"for=switch-th-{button.command}><input type=checkbox id=switch-th-{button.command} class=thmdl-switch__input><span class=thmdl-switch__label></span></label></div></ul><yield></yield></div>', ":scope ul.th-feature-list{list-style-type:none}li.th-feature{vertical-align:middle;line-height:56px;border-top:1px solid #e5e5e5;overflow:hidden;font-size: 16px;}.texthelp-image{height:48px;width:48px;background-size:32px 32px;background-position:8px 8px;float:left;background-repeat:no-repeat}.texthelp-image{margin-right:15px;margin-left:15px}li.th-feature.ghost{box-shadow: 2px 2px 8px 2px rgba(0, 0, 0, 0.2);border: 1px solid rgba(0, 0, 0, 0.2); height: 52px;}.th-switch{float:right;padding-right:10px} li.th-feature:hover {cursor: move;}.texthelp-drag-image {height: 48px;width: 24px;background-size: 24px 24px;background-position: 2px 13px;float: right;background-repeat: no-repeat;opacity: 0.6;padding-right: 10px;}ul.th-feature-list{padding: 0px;padding-top: 0px;margin: 0px;}.th-features-scroller::-webkit-scrollbar-button:vertical:start{position:relative;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMDAnIGhlaWdodD0nMTAwJyA+IDxwb2x5Z29uIHBvaW50cz0nNTAsMCAwLDEwMCAxMDAsMTAwJyBmaWxsPScjODg4JyBzdHJva2U9JyMwMDAnIHN0cm9rZS13aWR0aD0nMScgLz4gPC9zdmc+);background-position:50% 50%;background-repeat:no-repeat;background-size:8px 8px}.th-features-scroller::-webkit-scrollbar-button:end:vertical{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMDAnIGhlaWdodD0nMTAwJyA+IDxwb2x5Z29uIHBvaW50cz0nMCwwIDUwLDEwMCAxMDAsMCcgZmlsbD0nIzg4OCcgc3Ryb2tlPScjMDAwJyBzdHJva2Utd2lkdGg9JzEnIC8+IDwvc3ZnPg==);background-position:50% 50%;background-repeat:no-repeat;background-size:8px 8px}.th-features-scroller::-webkit-scrollbar{width:12px;padding:0;margin:0;border:none}.th-features-scroller::-webkit-scrollbar-track{padding:0;margin:0;border:none}.th-features-scroller::-webkit-scrollbar-track-piece{padding:0;margin:0;border:none}.th-features-scroller::-webkit-scrollbar-track-piece:hover{padding:0;margin:0;border:none}.th-features-scroller::-webkit-scrollbar-thumb{border:none;background-color:rgba(0,0,0,0.3);}.th-features-scroller::-webkit-scrollbar-corner{background-color:#000;padding:0;margin:0;border:none}.th-features-scroller{overflow-y:scroll;height:340px;min-width:470px;border:1px solid lightgrey;}.th-features-scroller::-webkit-scrollbar-button{background-size:100%;height:12px;-webkit-box-shadow:inset 1px 1px 2px rgba(0,0,0,0.2)}", "", function (m) {
  this.m_lastBarJSON = this.m_newBarJSON = null;
  this.featureListToToolbarJSON = function (a) {
    var c = !1;
    this.m_newBarJSON = texthelp.RW4GC.currentToolbar;
    this.m_newBarJSON.left.buttons.length = 0;
    this.m_newBarJSON.right.buttons.length = 0;
    a = a.querySelectorAll(".th-feature");
    for (var b = 0; b < a.length; b++) {
      var e = {};
      e.command = a[b].getAttribute("th-feature-id")
        .substr(17);
      e.icon = "th-" + e.command + "-image";
      e.tooltipid = "texthelp_toolbar_" + e.command;
      null != a[b].children[2].firstChild && (-1 < a[b].children[2].firstChild.className.indexOf("is-checked") ? e.show = !0 : e.show = !1);
      e.enabled = texthelp.RW4GC.featureMap[e.command].enabled;
      e.disableswitch = texthelp.RW4GC.featureMap[e.command].disableswitch;
      c && 0 < e.command.length ? this.m_newBarJSON.right.buttons.push(e) : this.m_newBarJSON.left.buttons.push(e);
      "spacer" == e.command && (c = !0)
    }
    texthelp.RW4GC.riot.toolbar.unmount(!0);
    texthelp.RW4GC.riot.toolbar = texthelp.RW4GC.riot.mount("texthelp-toolbar", this.m_newBarJSON)[0]
  };
  this.sortable_ = function (a, c) {
    var b;
    [].slice.call(a.children)
      .forEach(function (b) {
        b.draggable = !0
      });
    this._onDragOver = function (e) {
      e.preventDefault();
      e.dataTransfer.dropEffect = "move";
      e = e.target;
      if (!e.classList.contains("th-feature"))
        for (;
          (e = e.parentElement) && !e.classList.contains("th-feature"););
      e && e !== b && "LI" == e.nodeName && (null == b.previousElementSibling ? a.insertBefore(e, b) : null == b.nextElementSibling ? a.insertBefore(b, e) : e == b.previousElementSibling ? a.insertBefore(b, e) : e == b.nextElementSibling && a.insertBefore(b, e.nextElementSibling))
    }.bind(this);
    this._onDragEnd = function (e) {
      e.preventDefault();
      b.classList.remove("ghost");
      a.removeEventListener("dragover", this._onDragOver, !1);
      a.removeEventListener("dragend", this._onDragEnd, !1);
      c(b)
    }.bind(this);
    this._onDragStart = function (e) {
      b = e.target;
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.setData("Text", b.textContent);
      a.addEventListener("dragover", this._onDragOver, !1);
      a.addEventListener("dragend", this._onDragEnd, !1);
      setTimeout(function () {
        b.classList.add("ghost")
      }, 0);
      var d = document.createElement("img");
      d.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
      e.dataTransfer.setDragImage(d, 0, 0)
    }.bind(this);
    a.addEventListener("dragstart", this._onDragStart, !1)
  };
  this._onChange = function (a) {
    this.featureListToToolbarJSON(this.root)
  }.bind(this);
  this._onMouseEnter = function (a) {
    a.target.className += " th-feature-hover"
  }.bind(this);
  this._onMouseLeave = function (a) {
    a.target.classList.remove("th-feature-hover")
  }.bind(this);
  this.on("mount", function () {
    this.sortable_(document.getElementsByClassName("th-feature-list")[0], function (b) {
      this.featureListToToolbarJSON(this.root)
    }.bind(this));
    texthelp.RW4GC.MDL.componentHandler.upgradeDom();
    for (var a = this.opts.left.buttons, c = 0; c < a.length; c++) {
      var b = document.querySelector(".th-switch.th-switch-" + a[c].command);
      null != b && (a[c].show && (b.firstChild.className += " is-checked", b.firstChild.firstChild.setAttribute("checked", ""), b.parentElement.addEventListener("mouseleave", this._onMouseLeave, !1), b.parentElement.addEventListener("mouseenter", this._onMouseEnter, !1)), a[c].disableswitch && (b = document.getElementById("switch-th-" + a[c].command), b.setAttribute("disabled", ""), b.parentElement.style.webkitFilter = "grayscale(100%)", b.parentElement.style.opacity = .4))
    }
    a = this.opts.right.buttons;
    for (c = 0; c < a.length; c++) b = document.querySelector(".th-switch.th-switch-" + a[c].command), null != b && (a[c].show && (b.firstChild.className += " is-checked", b.firstChild.firstChild.setAttribute("checked", ""), b.parentElement.addEventListener("mouseleave", this._onMouseLeave, !1), b.parentElement.addEventListener("mouseenter", this._onMouseEnter, !1)), a[c].disableswitch && (b = document.getElementById("switch-th-" +
      a[c].command), b.setAttribute("disabled", ""), b.parentElement.style.webkitFilter = "grayscale(100%)", b.parentElement.style.opacity = .4));
    this.root.addEventListener("change", this._onChange, !1);
    this.onDialogLang_Changed()
  });
  this.onSettingsDialogOK = function () {
    null != this.m_newBarJSON && (texthelp.RW4GC.currentToolbar = JSON.parse(JSON.stringify(this.m_newBarJSON)), texthelp.RW4GC.RiotControl.trigger("save_Toolbar", texthelp.RW4GC.currentToolbar))
  }.bind(this);
  texthelp.RW4GC.RiotControl.on("settingsDialogOK", this.onSettingsDialogOK);
  this.onSettingsDialogCancel = function () {
    null != this.m_newBarJSON && (texthelp.RW4GC.currentToolbar = JSON.parse(JSON.stringify(this.m_lastBarJSON)), this.m_lastBarJSON = null, texthelp.RW4GC.riot.toolbar.unmount(!0), texthelp.RW4GC.riot.toolbar = texthelp.RW4GC.riot.mount("texthelp-toolbar", texthelp.RW4GC.currentToolbar)[0])
  }.bind(this);
  texthelp.RW4GC.RiotControl.on("settingsDialogCancel", this.onSettingsDialogCancel);
  this.onSettingsDialogShow = function () {
    this.m_lastBarJSON = JSON.parse(JSON.stringify(texthelp.RW4GC.currentToolbar));
    this.m_newBarJSON = null
  }.bind(this);
  texthelp.RW4GC.RiotControl.on("settingsDialogShow", this.onSettingsDialogShow);
  this.onDialogLang_Changed = function () {
    for (var a = document.querySelectorAll(".th-feature"), c = 0; c < a.length; c++) {
      var b = a[c].getAttribute("th-feature-id");
      a[c].childNodes[1].textContent = textHelp.webreader.LocaleSingleton.getInst()
        .getLocaleString(b)
    }
  }.bind(this);
  texthelp.RW4GC.RiotControl.on("ondialoglang_changed", this.onDialogLang_Changed)
}, "{ }");
texthelp.RW4GC.riot.tag2("texthelp-dictionary", '<th-header id="th-RW4GC-dictionary" class="th-RW4GC-dictionary th-draggable-dictionary thmdl-shadow--4dp"><th-dragging id="th-dictionary-drag-area" class="rwToolbarCaption">{this.title}</th-dragging><div id="rwCloseMeDict" class="rwDictCaptionClose" onclick={closeDialog}></div><div class="thVNload-dialog-bar"><div class="thVNbar-dialog"></div><div class="thVNbar-dialog"></div><div class="thVNbar-dialog"></div></div><iframe id="texthelp-dictionary-frame" height="250px"></iframe></th-header>', 'definition.stop{float:left;width:1.5em;height:1.5em;text-align:right;background:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjU2MHB4Ig0KCSBoZWlnaHQ9IjU2MHB4IiB2aWV3Qm94PSIwIDAgNTYwIDU2MCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTYwIDU2MDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGcgaWQ9IlN0b3AiPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiM0QTRBNEE7c3Ryb2tlOiM0QTRBNEE7c3Ryb2tlLXdpZHRoOjEwO3N0cm9rZS1taXRlcmxpbWl0OjEwOyIgZD0iTTUwNS4wNzUsNTI4LjQxMkg0Ny44NQ0KCQljLTkuOTAzLDAtMTcuOTMtOC4wMjctMTcuOTMtMTcuOTMxVjUzLjI1N2MwLTkuOTAzLDguMDI3LTE3LjkzLDE3LjkzLTE3LjkzaDQ1Ny4yMjVjOS45MDIsMCwxNy45Myw4LjAyNywxNy45MywxNy45M3Y0NTcuMjI0DQoJCUM1MjMuMDA1LDUyMC4zODUsNTE0Ljk3OCw1MjguNDEyLDUwNS4wNzUsNTI4LjQxMnoiLz4NCjwvZz4NCjxnIGlkPSJMYXllcl8xIj4NCjwvZz4NCjwvc3ZnPg0K) no-repeat top center;background-size:contain;background-repeat:no-repeat} .play{float:left;width:1.5em;height:1.5em;text-align:right;background:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjU2MHB4Ig0KCSBoZWlnaHQ9IjU2MHB4IiB2aWV3Qm94PSIwIDAgNTYwIDU2MCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTYwIDU2MDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGcgaWQ9IlBsYXkiPg0KCTxnPg0KCQk8cGF0aCBzdHlsZT0iZmlsbDojNEE0QTRBOyIgZD0iTTE3OS4wNDYsNDguNzE1Yy0xNy42NTctMTcuMzQzLTMyLjEwNC0xMS4yODMtMzIuMTA0LDEzLjQ2N3Y0NDAuMjMNCgkJCWMwLDI0Ljc1LDE0LjMxOSwzMC42ODEsMzEuODIsMTMuMThsMjAzLjg1NC0yMDMuODU0YzE3LjUtMTcuNTAxLDE3LjM3Mi00Ni4wMS0wLjI4NC02My4zNTRMMTc5LjA0Niw0OC43MTV6Ii8+DQoJCTxwYXRoIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiM0QTRBNEE7c3Ryb2tlLXdpZHRoOjEwO3N0cm9rZS1taXRlcmxpbWl0OjEwOyIgZD0iTTE3OS4wNDYsNDguNzE1DQoJCQljLTE3LjY1Ny0xNy4zNDMtMzIuMTA0LTExLjI4My0zMi4xMDQsMTMuNDY3djQ0MC4yM2MwLDI0Ljc1LDE0LjMxOSwzMC42ODEsMzEuODIsMTMuMThsMjAzLjg1NC0yMDMuODU0DQoJCQljMTcuNS0xNy41MDEsMTcuMzcyLTQ2LjAxLTAuMjg0LTYzLjM1NEwxNzkuMDQ2LDQ4LjcxNXoiLz4NCgk8L2c+DQo8L2c+DQo8ZyBpZD0iTGF5ZXJfMSI+DQo8L2c+DQo8L3N2Zz4NCg==) no-repeat top center;background-size:contain;background-repeat:no-repeat} .definition{margin-bottom:10px} texthelp-dictionary{font-family:"Open Sans",sans-serif;font-size:14px;line-height:24px;}[riot-tag=texthelp-dictionary] definitions{cursor:default;font-family:Open Sans,sans-serif;font-size:14px;color:#000;cursor:default;overflow:hidden} [riot-tag=texthelp-dictionary]  section{position:relative;width:inherit;height:inherit;overflow-y:scroll;height:130px;margin:auto;padding:0}.definition{margin-bottom:10px} .rwToolbarCaption{margin:0;width:100%;font-size:1.5em;background-color:#D6D6D6;color:#000;cursor:pointer;font-weight:600;padding:0 0;position:relative;_zoom:1;font-family:Open Sans,sans-serif;font-size:13px;line-height:2;text-indent:4px}[riot-tag=texthelp-dictionary] th-header.th-RW4GC-dictionary,texthelp-dictionary th-header.th-RW4GC-dictionary{box-sizing:border-box;flex-direction:column;min-width:32px;background-color:#ffffff;display:flex;position:fixed;z-index:2147483639;top:0;left:0;border:1px solid #A09BC3;border-radius:2px;width: auto;height: auto;padding:0px;  min-height: 270px;max-height: 300px;min-width: 300px;max-width: 400px;}[riot-tag=texthelp-dictionary] th-dragging#th-dictionary-drag-area{height:21px}th-dragging#th-dictionary-drag-area a{color:#9F5DFF}th-dragging#th-dictionary-drag-area a:hover{text-decoration:underline}th-header.th-RW4GC-dictionary,texthelp-dictionary th-header.th-RW4GC-dictionary.docked-top{width: 100%;border-radius: 0;padding-left: 20px;padding-right: 20px;border-top-width: 0px;}th-header.th-RW4GC-dictionary,texthelp-dictionary th-header.th-RW4GC-dictionary.docked-top th-dragging#th-dictionary-drag-area{display:none}.thdefinition{margin-left: 30px;}', "", function (m) {
  var a = this;
  this.html = "<div class='thVNload-dialog-bar'><div class='thVNbar-dialog'></div><div class='thVNbar-dialog'></div><div class='thVNbar-dialog'></div></div>";
  this.title = textHelp.webreader.LocaleSingleton.getInst()
    .getLocaleString("dictionary_dialog_heading");
  m = textHelp.webreader.UserSettingsSingleton.getInst()
    .getUserSettings();
  this.voice = m.speechoptions.voice;
  this.speed = m.speechoptions.speed;
  this.onLang_Changed = function () {
    this.title = textHelp.webreader.LocaleSingleton.getInst()
      .getLocaleString("dictionary_dialog_heading");
    this.update()
  }.bind(this);
  texthelp.RW4GC.RiotControl.on("onlang_changed", this.onLang_Changed);
  this.onVoice_Changed = function () {
    var b = document.getElementById("texthelp-dictionary-frame")
      , a = textHelp.webreader.UserSettingsSingleton.getInst()
      .getUserSettings()
      .speechoptions.voice;
    b.contentWindow.postMessage("voice:" + a, "*")
  }.bind(this);
  texthelp.RW4GC.RiotControl.on("onvoice_changed", this.onVoice_Changed);
  this.onSpeed_Changed = function () {
    var b = document.getElementById("texthelp-dictionary-frame")
      , a = textHelp.webreader.UserSettingsSingleton.getInst()
      .getUserSettings()
      .speechoptions.speed;
    b.contentWindow.postMessage("speed:" + a, "*")
  }.bind(this);
  texthelp.RW4GC.RiotControl.on("onspeed_changed", this.onSpeed_Changed);
  this.onWord_Changed = function (b) {
    document.getElementById("texthelp-dictionary-frame")
      .contentWindow.postMessage("stop:", "*");
    document.getElementsByClassName("thVNload-dialog-bar")[0].style.visibility = "visible";
    this.opts.word = b;
    this.rw_dictionary(b)
  }.bind(this);
  texthelp.RW4GC.RiotControl.on("onword_changed", this.onWord_Changed);
  var c = 0;
  this.AjaxRequest = function () {
    var b = ++c
      , a = null
      , d = null
      , f = null
      , l = !1
      , g = null
      , h = null
      , k = 0
      , n = !1;
    this.cancel = function () {
      thLog("Cancelling request " + b);
      n = !0
    };
    this.getCount = function () {
      return b
    };
    this.setTimeoutCallBack = function (b) {
      h = b
    };
    this.setErrorCallBack = function (b) {
      g = b
    };
    this.setTimeout = function (b) {
      k = b
    };
    this.callBack = function () {
      if (!(n || 4 > this.readyState)) {
        if (200 != this.status) {
          if (h) {
            h(b);
            return
          }
          if (g) {
            g(status);
            return
          }
        }
        if (l)
          if (null == f) d(this.responseXML);
          else d[f](this.responseXML);
        else if (null == f) d(this.responseText);
        else d[f](this.responseText)
      }
    };
    this.doPost = function (b, c, h, g, n) {
      d = h;
      f = g;
      l = n;
      a = new XMLHttpRequest;
      a.open("POST", b, !0);
      a.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
      a.onreadystatechange = this.callBack;
      a.send(c)
    };
    this.doGet = function (b, c, h, g, n) {
      d = h;
      f = g;
      l = n;
      a = new XMLHttpRequest;
      g_bFireFox && (a.timeout = k);
      a.open("GET", b, !0);
      a.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      a.onreadystatechange = this.callBack;
      a.send(c)
    }
  };
  this.getDictionaryPage = function (b) {
    var a = textHelp.webreader.ConfigurationSingleton.getInst()
      .getConfiguration()
      , d = textHelp.webreader.UserSettingsSingleton.getInst()
      .getUserSettings()
      , f = a.serversettings.dictionaryserver
      , a = a.serversettings.user
      , d = d.language.services;
    if ("fr" == d || "pt" == d || "es" == d) f += "HTML";
    f += "?json=";
    b = '{"u":"' + a + '","e":"WYn4Wx7Vf2","l":"' + d.replace("-", "_") + '", "w":"' + textHelp.webreaderapi.HelpersSingleton.getInst()
      .JSONEscape(b) + '"}';
    var d = new this.AjaxRequest
      , a = textHelp.webreaderapi.HelpersSingleton.getInst()
      .getLicense()
      , l = [];
    l.push("dictionary request timer");
    l.push(a.Email);
    l.push(a.Email.split("@")[1]);
    window.postMessage({
      type: "1757FROM_PAGERW4G"
      , key: "function"
      , method: "StartTiming"
      , parameters: l
    }, "*");
    d.doPost(f + b, "", this, "dictionaryLoad", !1)
  };
  this.dictionaryLoad = function (b) {
    var a = [];
    a.push("dictionary request timer");
    window.postMessage({
      type: "1757FROM_PAGERW4G"
      , key: "function"
      , method: "EndTiming"
      , parameters: a
    }, "*");
    null == b || 0 == b.length ? this.dictionaryReply("Error loading content.") : this.dictionaryReply(b)
  };
  this.dictionaryReply = function (b) {
    try {
      var a = {
        1: "Noun"
        , 2: "Verb"
        , 3: "Adjective"
        , 4: "Adverb"
        , 5: "Pronoun"
        , 6: "Preposition"
        , 7: "Prefix"
        , 8: "Article"
        , 9: "Conjunction"
        , 10: "Auxiliary verb"
        , 11: "None"
        , 12: "Interjection"
        , 13: "Abbreviation"
        , 14: "Determiner"
        , 15: "Exclamation"
        , 16: "Infinitive"
      };
      if (-1 < b.indexOf("result=")) {
        var d = b.substring(7);
        this.html = d = rw_replaceSearchPlaceholder(d)
      } else if (0 < b.length) {
        var f = JSON.parse(b);
        if (void 0 !== f.service && "DictionaryHTML_1" == f.service) this.dictionaryReplyHTML(f);
        else {
          if (1 > f.inflections.length) var l = '<div class="play" itemToPlay="rwDialogDictWordHeader"></div><div id="rwDialogDictWordHeader" class="rwDialogDictWordHeader">' +
            this.opts.word + "</div>"
            , l = l + ('<div class="play" itemToPlay="th-nomatch"></div><div id="th-nomatch" class="th-nomatch" data-trans-dictionaryDlg="dialog_definition_notfound">' + textHelp.webreader.LocaleSingleton.getInst()
              .getLocaleString("dialog_definition_notfound") + "</div></div>");
          else {
            for (var l = '<div class="play" itemToPlay="rwDialogDictWordHeader"></div><div id="rwDialogDictWordHeader" class="rwDialogDictWordHeader">' + f.word + "</div>", l = l + '<div class="rwDictPanel">', l = l + "<section>", d = b = 0, c = f.inflections, f = 0; f < c.length; f++)
              for (var h = c[f].definitions, k = 0; k < h.length; k++) {
                d++;
                var l = l + '<div class="definition">'
                  , n = "";
                0 < h[k].type.length && "11" !== h[k].type && (n = "<b>" + a[h[k].type] + ": </b>");
                l += '<div class="leadingSpace"></div><div class="play" itemToPlay="def' + d + '"></div><div class="leadingSpace"></div><div class="text thdefinition" id="def' + d + '">' + n + h[k].definition + "</div>";
                l += "</div>";
                b++;
                5 <= b && (k = h.length, f = c.length)
              }
            l += "</section></div>"
          }
          this.html = l;
          this.update()
        }
      }
    } catch (m) {
      thLogE(m)
    }
  };
  this.dictionaryReplyHTML = function (b) {
    var a = b.definitions;
    0 == a.length ? (a += '<div class="play" itemToPlay="rwDialogDictWordHeader"></div><div id="rwDialogDictWordHeader" class="rwDialogDictWordHeader">' + b.word + "</div>", a += '<div class="play" itemToPlay="th-nomatch"></div><div id="th-nomatch" class="th-nomatch" data-trans-dictionaryDlg="dialog_definition_notfound">' + textHelp.webreader.LocaleSingleton.getInst()
        .getLocaleString("dialog_definition_notfound") + "</div>") : a = '<div id="rwDictPanel" class="rwDictPanel"><section><div class="definition"><div class="play" itemToPlay="def1"></div><div class="text thdefinition" id="def1">' +
      a + "</div></section></div>";
    this.html = a;
    this.update()
  };
  this.rw_dictionary = function (b) {
    try {
      var a = textHelp.webreaderapi.HelpersSingleton.getInst()
        .getLicense()
        , d = [];
      d.push("dictionary lookup");
      d.push(a.Email);
      d.push(a.Email.split("@")[1]);
      window.postMessage({
        type: "1757FROM_PAGERW4G"
        , key: "function"
        , method: "SendEvent"
        , parameters: d
      }, "*");
      null != b && 0 < b.trim()
        .length ? this.getDictionaryPage(b) : (this.html = '<div class="play" itemToPlay="th-nomatch"></div><div  id="th-nomatch" class="th-nomatch">' + textHelp.webreader.LocaleSingleton.getInst()
          .getLocaleString("selection_no_word") + "</div>", this.update())
    } catch (f) {
      thLogE(f)
    }
  };
  this._prevSize = this._size = 0;
  this._interactElem = null;
  this._barShow = !1;
  this._barHideSize = -33;
  this._authenticated = !1;
  this.onStartB = this.onEndB = this.onMoveB = null;
  this.closeDialog = function () {
    texthelp.RW4GC.RiotControl.off("onword_changed", a.onWord_Changed);
    texthelp.RW4GC.riot.dictionary.unmount(!0)
  };
  this.repositionBarOnScreen = function (b, a, d, f, c) {
    void 0 == c && (c = !0);
    var g = document.getElementById("th-RW4GC-dictionary")
      , h = document.getElementById("th-dictionary-drag-area");
    null != g && (b = (parseFloat(g.getAttribute("data-x")) || 0) + b, a = (parseFloat(g.getAttribute("data-y")) || 0) + a, void 0 != d && (8 > d || d > window.innerWidth - 24) && (texthelp.RW4GC.interact.stop(), g.style.opacity = 1, c = !1), void 0 != f && (8 > f || f > window.innerHeight - 24) && (texthelp.RW4GC.interact.stop(), g.style.opacity = 1, c = !1), b < 60 - g.clientWidth && (b = 60 - g.clientWidth), 4 > a && (a = 4), b > window.innerWidth - 60 && (b = window.innerWidth - 60), a > window.innerHeight - h.clientHeight - 20 && (a = window.innerHeight - h.clientHeight - 20), g.style.webkitTransform = g.style.transform = "translate(" + b + "px, " + a + "px)", c && (g.setAttribute("data-x", b), g.setAttribute("data-y", a), void 0 == texthelp.RW4GC.currentDialogs && (texthelp.RW4GC.currentDialogs = {}), void 0 == texthelp.RW4GC.currentDialogs.dictionaryDialog && (texthelp.RW4GC.currentDialogs.dictionaryDialog = {}), texthelp.RW4GC.currentDialogs.dictionaryDialog = {
      x: b
      , y: a
    }))
  };
  this.on("unmount", function () {
    this._interactElem.ondragend = null;
    this._interactElem.ondragstart = null;
    this._interactElem.ondragmove = null
  });
  this.on("update", function () {
    var b = document.getElementById("texthelp-dictionary-frame")
      .contentWindow.document;
    b.location = textHelp.webreaderapi.HelpersSingleton.getInst()
      .getRootLocation();
    b.open();
    b.write('<style type="text/css">.th-nomatch{text-indent:5px;} .rwDialogDictWordHeader{font-weight:bold;font-family:"Open Sans",sans-serif;font-size:18px;margin-bottom:10px;margin-top:10px; padding-left: 12px; text-indent: 5px;} . .leadingSpace{width:10px;}.stop{float:left;width:1.5em;height:1.5em;text-align:right;background:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjU2MHB4Ig0KCSBoZWlnaHQ9IjU2MHB4IiB2aWV3Qm94PSIwIDAgNTYwIDU2MCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTYwIDU2MDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGcgaWQ9IlN0b3AiPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiM0QTRBNEE7c3Ryb2tlOiM0QTRBNEE7c3Ryb2tlLXdpZHRoOjEwO3N0cm9rZS1taXRlcmxpbWl0OjEwOyIgZD0iTTUwNS4wNzUsNTI4LjQxMkg0Ny44NQ0KCQljLTkuOTAzLDAtMTcuOTMtOC4wMjctMTcuOTMtMTcuOTMxVjUzLjI1N2MwLTkuOTAzLDguMDI3LTE3LjkzLDE3LjkzLTE3LjkzaDQ1Ny4yMjVjOS45MDIsMCwxNy45Myw4LjAyNywxNy45MywxNy45M3Y0NTcuMjI0DQoJCUM1MjMuMDA1LDUyMC4zODUsNTE0Ljk3OCw1MjguNDEyLDUwNS4wNzUsNTI4LjQxMnoiLz4NCjwvZz4NCjxnIGlkPSJMYXllcl8xIj4NCjwvZz4NCjwvc3ZnPg0K) no-repeat top center;background-size:contain;background-repeat:no-repeat}.play{float:left;width:1.5em;height:1.5em;text-align:right;background:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjU2MHB4Ig0KCSBoZWlnaHQ9IjU2MHB4IiB2aWV3Qm94PSIwIDAgNTYwIDU2MCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTYwIDU2MDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGcgaWQ9IlBsYXkiPg0KCTxnPg0KCQk8cGF0aCBzdHlsZT0iZmlsbDojNEE0QTRBOyIgZD0iTTE3OS4wNDYsNDguNzE1Yy0xNy42NTctMTcuMzQzLTMyLjEwNC0xMS4yODMtMzIuMTA0LDEzLjQ2N3Y0NDAuMjMNCgkJCWMwLDI0Ljc1LDE0LjMxOSwzMC42ODEsMzEuODIsMTMuMThsMjAzLjg1NC0yMDMuODU0YzE3LjUtMTcuNTAxLDE3LjM3Mi00Ni4wMS0wLjI4NC02My4zNTRMMTc5LjA0Niw0OC43MTV6Ii8+DQoJCTxwYXRoIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiM0QTRBNEE7c3Ryb2tlLXdpZHRoOjEwO3N0cm9rZS1taXRlcmxpbWl0OjEwOyIgZD0iTTE3OS4wNDYsNDguNzE1DQoJCQljLTE3LjY1Ny0xNy4zNDMtMzIuMTA0LTExLjI4My0zMi4xMDQsMTMuNDY3djQ0MC4yM2MwLDI0Ljc1LDE0LjMxOSwzMC42ODEsMzEuODIsMTMuMThsMjAzLjg1NC0yMDMuODU0DQoJCQljMTcuNS0xNy41MDEsMTcuMzcyLTQ2LjAxLTAuMjg0LTYzLjM1NEwxNzkuMDQ2LDQ4LjcxNXoiLz4NCgk8L2c+DQo8L2c+DQo8ZyBpZD0iTGF5ZXJfMSI+DQo8L2c+DQo8L3N2Zz4NCg==) no-repeat top center;background-size:contain;background-repeat:no-repeat} .definition{margin-bottom:10px; margin-left: 15px; } body{font-family:"Open Sans",sans-serif;font-size:14px;line-height:24px;}[riot-tag=texthelp-dictionary] definitions{cursor:default;font-family:Open Sans,sans-serif;font-size:14px;color:#000;cursor:default;overflow:hidden} [riot-tag=texthelp-dictionary]  section{position:relative;width:inherit;height:inherit;overflow-y:scroll;height:130px;margin:auto;padding:0}.definition{margin-bottom:10px} .rwToolbarCaption{margin:0;width:100%;font-size:1.5em;background-color:#D6D6D6;color:#000;cursor:pointer;font-weight:600;padding:0 0;position:relative;_zoom:1;font-family:Open Sans,sans-serif;font-size:13px;line-height:2.5;text-indent:4px}[riot-tag=texthelp-dictionary] th-header.th-RW4GC-dictionary,texthelp-dictionary th-header.th-RW4GC-dictionary{box-sizing:border-box;flex-direction:column;min-width:32px;background-color:#ffffff;display:flex;position:fixed;z-index:2147483639;top:0;left:0;border:1px solid #A09BC3;border-radius:2px;width: auto;height: auto;padding:0px;  min-height: 270px;max-height: 300px;min-width: 300px;max-width: 400px;}[riot-tag=texthelp-dictionary] th-dragging#th-dictionary-drag-area{height:21px}th-dragging#th-dictionary-drag-area a{color:#9F5DFF}th-dragging#th-dictionary-drag-area a:hover{text-decoration:underline}th-header.th-RW4GC-dictionary,texthelp-dictionary th-header.th-RW4GC-dictionary.docked-top{width: 100%;border-radius: 0;padding-left: 20px;padding-right: 20px;border-top-width: 0px;}th-header.th-RW4GC-dictionary,texthelp-dictionary th-header.th-RW4GC-dictionary.docked-top th-dragging#th-dictionary-drag-area{display:none}.thdefinition{margin-left:30px;}</style>' +
      this.html + "<span id='gdwr-placeHolder' style=\"font-family: Arial, Helvetica, sans-serif;\" ></span>");
    b.close();
    var a = b.createElement("script");
    a.text = 'eba_voice = "' + this.voice + '";eba_speed_value =' + this.speed + ";";
    b.getElementsByTagName("body")[0].appendChild(a);
    a = document.createElement("link");
    a.type = "text/css";
    a.rel = "stylesheet";
    a.href = "chrome-extension://inoeonmfapjbbkmdafoankkfajkcphgd/assets/dialog.css";
    var d = b.createElement("script");
    d.src = "chrome-extension://inoeonmfapjbbkmdafoankkfajkcphgd/v195/texthelpMain.js";
    b.createElement("script")
      .src = "chrome-extension://inoeonmfapjbbkmdafoankkfajkcphgd/textHelp_WebReader.js";
    var f = b.createElement("script");
    f.text = "var voice ='" + this.voice + "testing'; var classname = document.getElementsByClassName(\"play\");var myFunction = function() {if (this.classList.contains(\"play\")) {$rw_speakById(this.getAttribute('itemToPlay'));}else {$rw_event_stop();}};for (var i = 0; i < classname.length; i++) {classname[i].addEventListener('click', myFunction, false);}";
    d.onload = d.onreadystatechange = function () {
      if (!this.readyState || "loaded" == this.readyState || "complete" == this.readyState) {
        var b = document.getElementById("texthelp-dictionary-frame")
          .contentWindow.document
          , a = b.createElement("script");
        a.src = "chrome-extension://inoeonmfapjbbkmdafoankkfajkcphgd/assets/dialog.js";
        b.getElementsByTagName("body")[0].appendChild(a)
      }
    };
    b.getElementsByTagName("body")[0].appendChild(d);
    b.getElementsByTagName("body")[0].appendChild(f);
    b.getElementsByTagName("body")[0].appendChild(a)
  });
  this.on("updated", function () {
    this.root.getElementsByClassName("thVNload-dialog-bar")[0].style.visibility = "hidden";
    textHelp.thScreenMasking.screenmasking.toggleFrameEvents(!0)
  });
  this.on("mount", function () {
    var b = this;
    if (null == this._interactElem) {
      var a = this;
      this.onMove = function (b) {
        this.repositionBarOnScreen(b.dx, b.dy, b.clientX, b.clientY)
      };
      this.onStart = function (b) {
        b.target.style.opacity = .6;
        b = document.getElementById("texthelp-dictionary-frame");
        null != b && (document.getElementById("texthelp-dictionary-frame")
          .style.pointerEvents = "none");
        b = document.getElementById("texthelp-picture-dictionary-frame");
        null != b && (document.getElementById("texthelp-picture-dictionary-frame")
          .style.pointerEvents = "none");
        b = document.getElementById("texthelp-translator-frame");
        null != b && (document.getElementById("texthelp-translator-frame")
          .style.pointerEvents = "none")
      };
      this.onEnd = function (b) {
        this.root.firstElementChild.style.opacity = 1;
        b = document.getElementById("texthelp-dictionary-frame");
        null != b && (document.getElementById("texthelp-dictionary-frame")
          .style.pointerEvents = "");
        b = document.getElementById("texthelp-picture-dictionary-frame");
        null != b && (document.getElementById("texthelp-picture-dictionary-frame")
          .style.pointerEvents = "");
        b = document.getElementById("texthelp-translator-frame");
        null != b && (document.getElementById("texthelp-translator-frame")
          .style.pointerEvents = "");
        texthelp.RW4GC.RiotControl.trigger("save_Dialogs", texthelp.RW4GC.currentDialogs);
        texthelp.RW4GC.MDL.componentHandler.upgradeDom()
      };
      this.getOffset = function (b) {
        for (var a = 0, d = 0; b && !isNaN(b.offsetLeft) && !isNaN(b.offsetTop);) a += b.offsetLeft - b.scrollLeft, d += b.offsetTop -
          b.scrollTop, b = b.offsetParent;
        return {
          y: d
          , x: a
        }
      };
      this.onMoveB = this.onMove.bind(this);
      this.onEndB = this.onEnd.bind(this);
      this.onStartB = this.onStart.bind(this);
      document.getElementById("texthelp-dictionary-frame")
        .addEventListener("mouseenter", function (b) {
          a.onEndB(b);
          texthelp.RW4GC.interact.stop()
        });
      this._interactElem = texthelp.RW4GC.interact(".th-draggable-dictionary")
        .draggable({
          inertia: !1
          , autoScroll: !1
          , onmove: this.onMoveB
          , onend: this.onEndB
          , onstart: this.onStartB
          , restriction: "parent"
          , endOnly: !0
        })
        .allowFrom("th-dragging#th-dictionary-drag-area")
    }
    window.addEventListener("resize", function (a) {
      b.repositionBarOnScreen(0, 0, 0, 0, !1)
    });
    var d = document.getElementById("th-RW4GC-dictionary")
      , f = document.getElementById("th-dictionary-drag-area");
    if (null != d && (null == d.getAttribute("data-x") || null == d.getAttribute("data-y"))) {
      var c = window.getComputedStyle(d, null)
        .getPropertyValue("min-width")
        , c = parseInt(c.substring(0, c.length - 2))
        , g = d.clientWidth;
      g < c && (g = c);
      c = window.innerWidth - g - 40;
      g = 20;
      void 0 == texthelp.RW4GC.currentDialogs.dictionaryDialog && (texthelp.RW4GC.currentDialogs.dictionaryDialog = {
        x: 20
        , y: 20
      });
      void 0 != texthelp.RW4GC.currentDialogs.dictionaryDialog.x && void 0 != texthelp.RW4GC.currentDialogs.dictionaryDialog.y ? (c = texthelp.RW4GC.currentDialogs.dictionaryDialog.x, g = texthelp.RW4GC.currentDialogs.dictionaryDialog.y) : (texthelp.RW4GC.currentDialogs.dictionaryDialog.x = c, texthelp.RW4GC.currentDialogs.dictionaryDialog.y = g);
      c > window.innerWidth - 60 && (c = window.innerWidth - 60);
      g > window.innerHeight - f.clientHeight - 20 && (g = window.innerHeight - f.clientHeight - 20);
      d.style.webkitTransform = d.style.transform = "translate(" + c + "px, " + g + "px)";
      d.setAttribute("data-x", c);
      d.setAttribute("data-y", g)
    }
    this.rw_dictionary(this.opts.word);
    texthelp.RW4GC.MDL.componentHandler.upgradeDom()
  })
}, "{ }");
texthelp.RW4GC.riot.tag2("texthelp-picture-dictionary", '<th-header id="th-RW4GC-picture-dictionary" class="th-RW4GC-picture-dictionary th-draggable-picture-dictionary thmdl-shadow--4dp"><th-dragging id="th-picture-dictionary-drag-area" class="rwToolbarCaption">{this.title}</th-dragging><div id="rwCloseMeDict" class="rwDictCaptionClose" onclick={closeDialog}></div><div class="thVNload-dialog-bar-picture-dictionary"><div class="thVNbar-dialog"></div><div class="thVNbar-dialog"></div><div class="thVNbar-dialog"></div></div><iframe id="texthelp-picture-dictionary-frame" height="450px"></iframe> </th-header>', '.thVNload-dialog-bar-picture-dictionary{position:relative;width:100%;height:3px;background-color:#ED8507;top:0;left:0;}.thVNbar-dialog{content:"";display:inline;position:absolute;width:0;height:100%;left:50%;text-align:center}.thVNbar-dialog:nth-child(1){background-color:#9F5DFF;animation:thVNloading 3s linear infinite}.thVNbar-dialog:nth-child(2){background-color:#0DA0A0;animation:thVNloading 3s linear 1s infinite}.thVNbar-dialog:nth-child(3){background-color:#ED8507;animation:thVNloading 3s linear 2s infinite}@keyframes thVNloading{from{left:50%;width:0;z-index:100}33.3333%{left:0;width:100%;z-index:10}to{left:0;width:100%}}texthelp-picture-dictionary{font-family:"Open Sans",sans-serif;font-size:14px;line-height:24px;text-indent:20px; border-style: none !important;} th-RW4GC-picture-dictionary  h2{font-size:1.5em;font-weight:600;font-family:Open Sans,sans-serif;font-size:25px;line-height:5px;text-indent:20px; border-style: none !important;}.rwToolbarCaption{margin:0;width:100%;font-size:1.5em;background-color:#D6D6D6;color:#000;cursor:pointer;font-weight:600;padding:0 0;position:relative;_zoom:1;font-family:Open Sans,sans-serif;font-size:13px;line-height:2;text-indent:4px}[riot-tag=texthelp-picture-dictionary] th-header.th-RW4GC-picture-dictionary,texthelp-picture-dictionary th-header.th-RW4GC-picture-dictionary{box-sizing:border-box;flex-direction:column;min-width:32px;background-color:#ffffff;display:flex;position:fixed;z-index:2147483639;top:0;left:0;border:1px solid #A09BC3;border-radius:2px;width: auto;height: auto;padding:0px;  min-height: 300px;max-height: 556px;min-width: 170px;max-width: 170px;}[riot-tag=texthelp-picture-dictionary] th-dragging#th-picture-dictionary-drag-area{height:21px}th-dragging#th-picture-dictionary-drag-area a{color:#9F5DFF}th-dragging#th-picture-dictionary-drag-area a:hover{text-decoration:underline}th-header.th-RW4GC-picture-dictionary,texthelp-picture-dictionary th-header.th-RW4GC-picture-dictionary.docked-top{width: 100%;border-radius: 0;padding-left: 20px;padding-right: 20px;border-top-width: 0px;}th-header.th-RW4GC-picture-dictionary,texthelp-picture-dictionary th-header.th-RW4GC-picture-dictionary.docked-top th-dragging#th-picture-dictionary-drag-area{display:none}', "", function (m) {
  var a = this;
  this.html = "<div class='thVNload-dialog-bar-picture-dictionary'><div class='thVNbar-dialog'></div><div class='thVNbar-dialog'></div><div class='thVNbar-dialog'></div></div>";
  this.title = textHelp.webreader.LocaleSingleton.getInst()
    .getLocaleString("picture_dictionary_dialog_heading");
  m = textHelp.webreader.UserSettingsSingleton.getInst()
    .getUserSettings();
  this.voice = m.speechoptions.voice;
  this.speed = m.speechoptions.speed;
  this.onLang_Changed = function () {
    this.title = textHelp.webreader.LocaleSingleton.getInst()
      .getLocaleString("picture_dictionary_dialog_heading");
    this.update()
  }.bind(this);
  texthelp.RW4GC.RiotControl.on("onlang_changed", this.onLang_Changed);
  this.onWord_Changed = function (b) {
    document.getElementById("texthelp-picture-dictionary-frame")
      .contentWindow.postMessage("stop:", "*");
    document.getElementsByClassName("thVNload-dialog-bar-picture-dictionary")[0].style.visibility = "visible";
    this.opts.word = b;
    this.rw_PictureDictionary(b)
  }.bind(this);
  texthelp.RW4GC.RiotControl.on("onword_changed", this.onWord_Changed);
  this.onVoice_Changed = function () {
    var b = document.getElementById("texthelp-picture-dictionary-frame")
      , a = textHelp.webreader.UserSettingsSingleton.getInst()
      .getUserSettings()
      .speechoptions.voice;
    b.contentWindow.postMessage("voice:" + a, "*")
  }.bind(this);
  texthelp.RW4GC.RiotControl.on("onvoice_changed", this.onVoice_Changed);
  this.onSpeed_Changed = function () {
    var b = document.getElementById("texthelp-picture-dictionary-frame")
      , a = textHelp.webreader.UserSettingsSingleton.getInst()
      .getUserSettings()
      .speechoptions.speed;
    b.contentWindow.postMessage("speed:" + a, "*")
  }.bind(this);
  texthelp.RW4GC.RiotControl.on("onspeed_changed", this.onSpeed_Changed);
  var c = 0;
  this.AjaxRequest = function () {
    var b = ++c
      , a = null
      , d = null
      , f = null
      , l = !1
      , g = null
      , h = null
      , k = 0
      , n = !1;
    this.cancel = function () {
      thLog("Cancelling request " + b);
      n = !0
    };
    this.getCount = function () {
      return b
    };
    this.setTimeoutCallBack = function (b) {
      h = b
    };
    this.setErrorCallBack = function (b) {
      g = b
    };
    this.setTimeout = function (b) {
      k = b
    };
    this.callBack = function () {
      if (!(n || 4 > this.readyState)) {
        if (200 != this.status) {
          if (h) {
            h(b);
            return
          }
          if (g) {
            g(status);
            return
          }
        }
        if (l)
          if (null == f) d(this.responseXML);
          else d[f](this.responseXML);
        else if (null == f) d(this.responseText);
        else d[f](this.responseText)
      }
    };
    this.doPost = function (b, c, h, g, n) {
      d = h;
      f = g;
      l = n;
      a = new XMLHttpRequest;
      a.open("POST", b, !0);
      a.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
      a.onreadystatechange = this.callBack;
      a.send(c)
    };
    this.doGet = function (b, c, h, g, n) {
      d = h;
      f = g;
      l = n;
      a = new XMLHttpRequest;
      g_bFireFox && (a.timeout = k);
      a.open("GET", b, !0);
      a.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      a.onreadystatechange = this.callBack;
      a.send(c)
    }
  };
  this.getPictureDictionaryPage = function (b) {
    var a = textHelp.webreader.ConfigurationSingleton.getInst()
      .getConfiguration()
      , d = textHelp.webreader.UserSettingsSingleton.getInst()
      .getUserSettings()
      .language.services
      , f = a.serversettings.user
      , a = a.serversettings.picturedictionaryserver
      , a = a + "?json=";
    b = '{"u":"' + f + '", "e":"WYn4Wx7Vf2", "l":"' + d.replace("-", "_") + '", "w":"' + textHelp.webreaderapi.HelpersSingleton.getInst()
      .JSONEscape(b) + '"}';
    d = textHelp.webreaderapi.HelpersSingleton.getInst()
      .getLicense();
    f = [];
    f.push("picture dictionary request timer");
    f.push(d.Email);
    f.push(d.Email.split("@")[1]);
    window.postMessage({
      type: "1757FROM_PAGERW4G"
      , key: "function"
      , method: "StartTiming"
      , parameters: f
    }, "*");
    (new this.AjaxRequest)
    .doPost(a + b, "", this, "imagedictionaryLoad", !1)
  };
  this.imagedictionaryLoad = function (b) {
    var a = [];
    a.push("picture dictionary request timer");
    window.postMessage({
      type: "1757FROM_PAGERW4G"
      , key: "function"
      , method: "EndTiming"
      , parameters: a
    }, "*");
    a = JSON.parse(b);
    if ("0" !== a.status || 0 == a.symbols.length) b = '<div class="play" itemToPlay="rwPicDictWordHeader"></div><div id="rwPicDictWordHeader" class="rwPicDictWordHeader">' +
      (0 >= this.opts.word.trim()
        .length ? "undefined" : this.opts.word) + "</div>", b += '<div class="play" itemToPlay="th-nomatch"></div><div id="th-nomatch" class="th-nomatch" data-trans-dictionaryDlg="dialog_definition_notfound">' + textHelp.webreader.LocaleSingleton.getInst()
      .getLocaleString("dialog_definition_notfound") + "</div>";
    else {
      b = '<div class="play" itemToPlay="rwPicDictWordHeader"></div><div id="rwPicDictWordHeader" class="rwPicDictWordHeader">' + a.word + "</div>";
      b += '<div class="rwPicDictPanel">';
      for (var a = a.symbols, d = 0; d < a.length; d++) b += '<img class="point_symbol" src="' + a[d] + '" alt="">';
      b += "</div>"
    }
    this.html = b;
    this.update()
  };
  this.rw_PictureDictionary = function (b) {
    try {
      var a = textHelp.webreaderapi.HelpersSingleton.getInst()
        .getLicense()
        , d = [];
      d.push("picture dictionary lookup");
      d.push(a.Email);
      d.push(a.Email.split("@")[1]);
      window.postMessage({
        type: "1757FROM_PAGERW4G"
        , key: "function"
        , method: "SendEvent"
        , parameters: d
      }, "*");
      null != b && 0 < b.trim()
        .length ? this.getPictureDictionaryPage(b) : (this.html = '<div class="play" itemToPlay="th-nomatch"></div><div  id="th-nomatch" class="th-nomatch">' +
          textHelp.webreader.LocaleSingleton.getInst()
          .getLocaleString("selection_no_word") + "</div>", this.update())
    } catch (f) {
      thLogE(f)
    }
  };
  this._prevSize = this._size = 0;
  this._interactElem = null;
  this._barShow = !1;
  this._barHideSize = -33;
  this._authenticated = !1;
  this.onStartB = this.onEndB = this.onMoveB = null;
  this.closeDialog = function () {
    texthelp.RW4GC.RiotControl.off("onword_changed", a.onWord_Changed);
    texthelp.RW4GC.riot.pictureDictionary.unmount(!0)
  };
  this.repositionBarOnScreen = function (b, a, d, f, c) {
    void 0 == c && (c = !0);
    var g = document.getElementById("th-RW4GC-picture-dictionary")
      , h = document.getElementById("th-picture-dictionary-drag-area");
    null != g && (b = (parseFloat(g.getAttribute("data-x")) || 0) + b, a = (parseFloat(g.getAttribute("data-y")) || 0) + a, void 0 != d && (8 > d || d > window.innerWidth - 24) && (texthelp.RW4GC.interact.stop(), g.style.opacity = 1, c = !1), void 0 != f && (8 > f || f > window.innerHeight - 24) && (texthelp.RW4GC.interact.stop(), g.style.opacity = 1, c = !1), b < 60 - g.clientWidth && (b = 60 - g.clientWidth), 4 > a && (a = 4), b > window.innerWidth - 60 && (b = window.innerWidth -
      60), a > window.innerHeight - h.clientHeight - 20 && (a = window.innerHeight - h.clientHeight - 20), g.style.webkitTransform = g.style.transform = "translate(" + b + "px, " + a + "px)", c && (g.setAttribute("data-x", b), g.setAttribute("data-y", a), void 0 == texthelp.RW4GC.currentDialogs && (texthelp.RW4GC.currentDialogs = {}), void 0 == texthelp.RW4GC.currentDialogs.pictureDialog && (texthelp.RW4GC.currentDialogs.pictureDialog = {}), texthelp.RW4GC.currentDialogs.pictureDialog = {
      x: b
      , y: a
    }))
  };
  this.on("unmount", function () {
    this._interactElem.ondragend = null;
    this._interactElem.ondragstart = null;
    this._interactElem.ondragmove = null
  });
  this.on("update", function () {
    var a = document.getElementById("texthelp-picture-dictionary-frame")
      .contentWindow.document;
    a.location = textHelp.webreaderapi.HelpersSingleton.getInst()
      .getRootLocation();
    a.open();
    a.write('<style type="text/css">.th-nomatch{text-indent:5px;} img.point_symbol {display: block;margin-left: auto;margin-right: auto;padding-bottom: 15px;} .rwPicDictWordHeader{font-weight:bold;font-family:"Open Sans",sans-serif;font-size:18px;margin-bottom:10px;margin-top:10px; padding-left: 12px; text-indent: 5px;} . .leadingSpace{width:10px;}.stop{float:left;width:1.5em;height:1.5em;text-align:right;background:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjU2MHB4Ig0KCSBoZWlnaHQ9IjU2MHB4IiB2aWV3Qm94PSIwIDAgNTYwIDU2MCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTYwIDU2MDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGcgaWQ9IlN0b3AiPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiM0QTRBNEE7c3Ryb2tlOiM0QTRBNEE7c3Ryb2tlLXdpZHRoOjEwO3N0cm9rZS1taXRlcmxpbWl0OjEwOyIgZD0iTTUwNS4wNzUsNTI4LjQxMkg0Ny44NQ0KCQljLTkuOTAzLDAtMTcuOTMtOC4wMjctMTcuOTMtMTcuOTMxVjUzLjI1N2MwLTkuOTAzLDguMDI3LTE3LjkzLDE3LjkzLTE3LjkzaDQ1Ny4yMjVjOS45MDIsMCwxNy45Myw4LjAyNywxNy45MywxNy45M3Y0NTcuMjI0DQoJCUM1MjMuMDA1LDUyMC4zODUsNTE0Ljk3OCw1MjguNDEyLDUwNS4wNzUsNTI4LjQxMnoiLz4NCjwvZz4NCjxnIGlkPSJMYXllcl8xIj4NCjwvZz4NCjwvc3ZnPg0K) no-repeat top center;background-size:contain;background-repeat:no-repeat}.play{float:left;width:1.5em;height:1.5em;text-align:right;background:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjU2MHB4Ig0KCSBoZWlnaHQ9IjU2MHB4IiB2aWV3Qm94PSIwIDAgNTYwIDU2MCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTYwIDU2MDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGcgaWQ9IlBsYXkiPg0KCTxnPg0KCQk8cGF0aCBzdHlsZT0iZmlsbDojNEE0QTRBOyIgZD0iTTE3OS4wNDYsNDguNzE1Yy0xNy42NTctMTcuMzQzLTMyLjEwNC0xMS4yODMtMzIuMTA0LDEzLjQ2N3Y0NDAuMjMNCgkJCWMwLDI0Ljc1LDE0LjMxOSwzMC42ODEsMzEuODIsMTMuMThsMjAzLjg1NC0yMDMuODU0YzE3LjUtMTcuNTAxLDE3LjM3Mi00Ni4wMS0wLjI4NC02My4zNTRMMTc5LjA0Niw0OC43MTV6Ii8+DQoJCTxwYXRoIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiM0QTRBNEE7c3Ryb2tlLXdpZHRoOjEwO3N0cm9rZS1taXRlcmxpbWl0OjEwOyIgZD0iTTE3OS4wNDYsNDguNzE1DQoJCQljLTE3LjY1Ny0xNy4zNDMtMzIuMTA0LTExLjI4My0zMi4xMDQsMTMuNDY3djQ0MC4yM2MwLDI0Ljc1LDE0LjMxOSwzMC42ODEsMzEuODIsMTMuMThsMjAzLjg1NC0yMDMuODU0DQoJCQljMTcuNS0xNy41MDEsMTcuMzcyLTQ2LjAxLTAuMjg0LTYzLjM1NEwxNzkuMDQ2LDQ4LjcxNXoiLz4NCgk8L2c+DQo8L2c+DQo8ZyBpZD0iTGF5ZXJfMSI+DQo8L2c+DQo8L3N2Zz4NCg==) no-repeat top center;background-size:contain;background-repeat:no-repeat} .definition{margin-bottom:10px; margin-left: 15px; } body{font-family:"Open Sans",sans-serif;font-size:14px;line-height:24px;}[riot-tag=texthelp-dictionary] definitions{cursor:default;font-family:Open Sans,sans-serif;font-size:14px;color:#000;cursor:default;overflow:hidden} [riot-tag=texthelp-dictionary]  section{position:relative;width:inherit;height:inherit;overflow-y:scroll;height:130px;margin:auto;padding:0}.definition{margin-bottom:10px} .rwToolbarCaption{margin:0;width:100%;font-size:1.5em;background-color:#D6D6D6;color:#000;cursor:pointer;font-weight:600;padding:0 0;position:relative;_zoom:1;font-family:Open Sans,sans-serif;font-size:13px;line-height:2.5;text-indent:4px}[riot-tag=texthelp-dictionary] th-header.th-RW4GC-dictionary,texthelp-dictionary th-header.th-RW4GC-dictionary{box-sizing:border-box;flex-direction:column;min-width:32px;background-color:#ffffff;display:flex;position:fixed;z-index:2147483639;top:0;left:0;border:1px solid #A09BC3;border-radius:2px;width: auto;height: auto;padding:0px;  min-height: 300px;max-height: 556px;min-width: 170px;max-width: 170px;}[riot-tag=texthelp-dictionary] th-dragging#th-dictionary-drag-area{height:21px}th-dragging#th-dictionary-drag-area a{color:#9F5DFF}th-dragging#th-dictionary-drag-area a:hover{text-decoration:underline}th-header.th-RW4GC-dictionary,texthelp-dictionary th-header.th-RW4GC-dictionary.docked-top{width: 100%;border-radius: 0;padding-left: 20px;padding-right: 20px;border-top-width: 0px;}th-header.th-RW4GC-dictionary,texthelp-dictionary th-header.th-RW4GC-dictionary.docked-top th-dragging#th-dictionary-drag-area{display:none}.thdefinition{margin-left:30px;}</style>' +
      this.html + "<span id='gdwr-placeHolder' style=\"font-family: Arial, Helvetica, sans-serif;\" ></span>");
    a.close();
    var c = a.createElement("script");
    c.text = 'eba_voice = "' + this.voice + '";eba_speed_value =' + this.speed + ";";
    a.getElementsByTagName("body")[0].appendChild(c);
    c = a.createElement("script");
    c.src = "chrome-extension://inoeonmfapjbbkmdafoankkfajkcphgd/v195/texthelpMain.js";
    a.createElement("script")
      .src = "chrome-extension://inoeonmfapjbbkmdafoankkfajkcphgd/textHelp_WebReader.js";
    var d = a.createElement("script");
    d.text = "var voice ='" + this.voice + "testing'; var classname = document.getElementsByClassName(\"play\");var myFunction = function() {if (this.classList.contains(\"play\")) {$rw_speakById(this.getAttribute('itemToPlay'));}else {$rw_event_stop();}};for (var i = 0; i < classname.length; i++) {classname[i].addEventListener('click', myFunction, false);}";
    c.onload = c.onreadystatechange = function () {
      if (!this.readyState || "loaded" == this.readyState || "complete" == this.readyState) {
        var a = document.getElementById("texthelp-picture-dictionary-frame")
          .contentWindow.document
          , b = a.createElement("script");
        b.src = "chrome-extension://inoeonmfapjbbkmdafoankkfajkcphgd/assets/dialog.js";
        a.getElementsByTagName("body")[0].appendChild(b)
      }
    };
    a.getElementsByTagName("body")[0].appendChild(c);
    a.getElementsByTagName("body")[0].appendChild(d)
  });
  this.on("updated", function () {
    this.root.getElementsByClassName("thVNload-dialog-bar-picture-dictionary")[0].style.visibility = "hidden";
    textHelp.thScreenMasking.screenmasking.toggleFrameEvents(!0)
  });
  this.on("mount", function () {
    var a = this;
    if (null == this._interactElem) {
      var c = this;
      this.onMove = function (a) {
        this.repositionBarOnScreen(a.dx, a.dy, a.clientX, a.clientY)
      };
      this.onStart = function (a) {
        a.target.style.opacity = .6;
        a = document.getElementById("texthelp-dictionary-frame");
        null != a && (document.getElementById("texthelp-dictionary-frame")
          .style.pointerEvents = "none");
        a = document.getElementById("texthelp-picture-dictionary-frame");
        null != a && (document.getElementById("texthelp-picture-dictionary-frame")
          .style.pointerEvents = "none");
        a = document.getElementById("texthelp-translator-frame");
        null != a && (document.getElementById("texthelp-translator-frame")
          .style.pointerEvents = "none")
      };
      this.onEnd = function (a) {
        this.root.firstElementChild.style.opacity = 1;
        a = document.getElementById("texthelp-dictionary-frame");
        null != a && (document.getElementById("texthelp-dictionary-frame")
          .style.pointerEvents = "");
        a = document.getElementById("texthelp-picture-dictionary-frame");
        null != a && (document.getElementById("texthelp-picture-dictionary-frame")
          .style.pointerEvents = "");
        a = document.getElementById("texthelp-translator-frame");
        null != a && (document.getElementById("texthelp-translator-frame")
          .style.pointerEvents = "");
        texthelp.RW4GC.RiotControl.trigger("save_Dialogs", texthelp.RW4GC.currentDialogs);
        texthelp.RW4GC.MDL.componentHandler.upgradeDom()
      };
      this.getOffset = function (a) {
        for (var b = 0, d = 0; a && !isNaN(a.offsetLeft) && !isNaN(a.offsetTop);) b += a.offsetLeft - a.scrollLeft, d += a.offsetTop - a.scrollTop, a = a.offsetParent;
        return {
          y: d
          , x: b
        }
      };
      this.onMoveB = this.onMove.bind(this);
      this.onEndB = this.onEnd.bind(this);
      this.onStartB = this.onStart.bind(this);
      document.getElementById("texthelp-picture-dictionary-frame")
        .addEventListener("mouseenter", function (a) {
          c.onEndB(a);
          texthelp.RW4GC.interact.stop()
        });
      this._interactElem = texthelp.RW4GC.interact(".th-draggable-picture-dictionary")
        .draggable({
          inertia: !1
          , autoScroll: !1
          , onmove: this.onMoveB
          , onend: this.onEndB
          , onstart: this.onStartB
          , restriction: "parent"
          , endOnly: !0
        })
        .allowFrom("th-dragging#th-picture-dictionary-drag-area")
    }
    window.addEventListener("resize", function (d) {
      a.repositionBarOnScreen(0, 0, 0, 0, !1)
    });
    var d = document.getElementById("th-RW4GC-picture-dictionary")
      , f = document.getElementById("th-picture-dictionary-drag-area");
    if (null != d && (null == d.getAttribute("data-x") || null == d.getAttribute("data-y"))) {
      var l = window.getComputedStyle(d, null)
        .getPropertyValue("min-width")
        , l = parseInt(l.substring(0, l.length - 2))
        , g = d.clientWidth;
      g < l && (g = l);
      l = window.innerWidth - g - 40;
      g = 20;
      void 0 == texthelp.RW4GC.currentDialogs.pictureDialog && (texthelp.RW4GC.currentDialogs.pictureDialog = {
        x: 20
        , y: 20
      });
      void 0 != texthelp.RW4GC.currentDialogs.pictureDialog.x && void 0 != texthelp.RW4GC.currentDialogs.pictureDialog.y ? (l = texthelp.RW4GC.currentDialogs.pictureDialog.x, g = texthelp.RW4GC.currentDialogs.pictureDialog.y) : (texthelp.RW4GC.currentDialogs.pictureDialog.x = l, texthelp.RW4GC.currentDialogs.pictureDialog.y = g);
      l > window.innerWidth - 60 && (l = window.innerWidth - 60);
      g > window.innerHeight - f.clientHeight - 20 && (g = window.innerHeight - f.clientHeight - 20);
      d.style.webkitTransform = d.style.transform = "translate(" + l + "px, " + g + "px)";
      d.setAttribute("data-x", l);
      d.setAttribute("data-y", g)
    }
    this.rw_PictureDictionary(this.opts.word);
    texthelp.RW4GC.MDL.componentHandler.upgradeDom()
  })
}, "{ }");
texthelp.RW4GC.riot.tag2("texthelp-translator-data", " <span></span>{this.root.innerHTML = opts.content}", "", "", "", function (m) {});
texthelp.RW4GC.riot.tag2("texthelp-translator", '<th-header id="th-RW4GC-translator" class="th-RW4GC-translator th-draggable-translator thmdl-shadow--4dp"><th-dragging id="th-translator-drag-area" class="rwToolbarCaption">{this.title}</th-dragging><div id="rwCloseMeDict" class="rwDictCaptionClose" onclick={closeDialog}></div><div class="thVNload-dialog-bar"><div class="thVNbar-dialog"></div><div class="thVNbar-dialog"></div><div class="thVNbar-dialog"></div></div><iframe id="texthelp-translator-frame" height="250px"></iframe></th-header>', '.rwDictCaptionClose{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAAzUlEQVQ4ja3SzU5CQQwF4E+DP9wgia+vS+PWCCgkoiwIaGL0ma4LLklvMwMsbNLNnNP29Ez5pxjgEa8YHuA1mOMe5xF4QNvlW6VJg4/Au4vgewDajtgcKG7xEhsMsUyELca4wSZhE1xmiSOsE/Ebn+ltWVmxqiTmtDS5pOSnULzV9wXpK0KcFd5q3F7c4rcwfZ8bO1Or0rOJayeaOMZXIj7hws606TElq0SY4yrgpUOaxQbxlBe4LqzYpEG9Ux50TZ4rxbHJois+6VeOxh9V0F4GGpGv1gAAAABJRU5ErkJggg==) no-repeat center center;cursor:default;height:16px;position:absolute;right:4px;top:4px;width:16px;vertical-align:middle} img.point_symbol{display:block;margin-left:auto;margin-right:auto;padding-bottom:15px}.thVNload-dialog-bar{position:relative;width:100%;height:3px;background-color:#ED8507;top:0;left:0;}.thVNbar-dialog{content:"";display:inline;position:absolute;width:0;height:100%;left:50%;text-align:center}.thVNbar-dialog:nth-child(1){background-color:#9F5DFF;animation:thVNloading 3s linear infinite}.thVNbar-dialog:nth-child(2){background-color:#0DA0A0;animation:thVNloading 3s linear 1s infinite}.thVNbar-dialog:nth-child(3){background-color:#ED8507;animation:thVNloading 3s linear 2s infinite}@keyframes thVNloading{from{left:50%;width:0;z-index:100}33.3333%{left:0;width:100%;z-index:10}to{left:0;width:100%}}.rwDialogTranWordHeader{font-weight:bold;font-family:"Open Sans",sans-serif;font-size:18px;margin-bottom:10px;margin-top:10px; padding-left: 12px;}texthelp-translator{font-family:"Open Sans",sans-serif;font-size:14px;line-height:24px;}[riot-tag=texthelp-translator] definitions{cursor:default;font-family:Open Sans,sans-serif;font-size:14px;color:#000;cursor:default;overflow:hidden} definitions h2{font-size:1.5em;font-weight:600;font-family:Open Sans,sans-serif;font-size:25px;line-height:5px;text-indent:10px} [riot-tag=texthelp-translator]  section{position:relative;width:inherit;height:inherit;overflow-y:scroll;height:130px;margin:auto;padding:0}.definition{margin-bottom:10px} .rwToolbarCaption{margin:0;width:100%;font-size:1.5em;background-color:#D6D6D6;color:#000;cursor:pointer;font-weight:600;padding:0 0;position:relative;_zoom:1;font-family:Open Sans,sans-serif;font-size:13px;line-height:2;text-indent:4px}[riot-tag=texthelp-translator] th-header.th-RW4GC-translator,texthelp-translator th-header.th-RW4GC-translator{box-sizing:border-box;flex-direction:column;min-width:32px;background-color:#ffffff;display:flex;position:fixed;z-index:2147483639;top:0;left:0;border:1px solid #A09BC3;border-radius:2px;width: auto;height: auto;padding:0px;  min-height: 160px;max-height: 200px;min-width: 200px;max-width: 300px;}[riot-tag=texthelp-translator] th-dragging#th-translator-drag-area{height:21px}th-dragging#th-translator-drag-area a{color:#9F5DFF}th-dragging#th-translator-drag-area a:hover{text-decoration:underline}th-header.th-RW4GC-translator,texthelp-translator th-header.th-RW4GC-translator.docked-top{width: 100%;border-radius: 0;padding-left: 20px;padding-right: 20px;border-top-width: 0px;}th-header.th-RW4GC-translator,texthelp-translator th-header.th-RW4GC-translator.docked-top th-dragging#th-translator-drag-area{display:none}.thdefinition{margin-left:30px;}', "", function (m) {
  function a(a) {
    return "en_US" == a || "en-US" == a || "ENGLISH_US" == a ? "en-US" : "en-GB" == a || "en_GB" == a || "ENGLISH_GB" == a ? "en-GB" : "FRENCH" == a || "fr" == a || "FRAN" == a.substr(0, 4) ? "fr" : "PORTUGUESE" == a || "pt" == a ? "pt" : "PORT" == a.substr(0, 4) || "pt-BR" == a || "pt_BR" == a ? "pt-BR" : "MALAYSIAN" == a || "ms" == a ? "ms" : "SPANISH" == a || "es" == a || "ESPA" == a.substr(0, 4) ? "es" : "en"
  }
  var c = this;
  this.title = textHelp.webreader.LocaleSingleton.getInst()
    .getLocaleString("translator_dialog_heading");
  this.html = "<div class='thVNload-dialog-bar'><div class='thVNbar-dialog'></div><div class='thVNbar-dialog'></div><div class='thVNbar-dialog'></div></div>";
  var b = textHelp.webreader.UserSettingsSingleton.getInst()
    .getUserSettings();
  this.voice = b.speechoptions.voice;
  this.speed = b.speechoptions.speed;
  p_strSource = "ENGLISH_US";
  p_strDest = "FRANÇAIS";
  strSource = "ENGLISH_US";
  strTarget = "FRANÇAIS";
  this.onLang_Changed = function () {
    this.title = textHelp.webreader.LocaleSingleton.getInst()
      .getLocaleString("translator_dialog_heading");
    this.update()
  }.bind(this);
  texthelp.RW4GC.RiotControl.on("onlang_changed", this.onLang_Changed);
  this.onWord_Changed = function (a) {
    a = textHelp.webreaderapi.HelpersSingleton.getInst()
      .trimPunctuation(a);
    document.getElementById("texthelp-translator-frame")
      .contentWindow.postMessage("stop:", "*");
    this.root.getElementsByClassName("thVNload-dialog-bar")[0].style.visibility = "visible";
    this.opts.word = a;
    this.rw_translate(a)
  }.bind(this);
  texthelp.RW4GC.RiotControl.on("onword_changed", this.onWord_Changed);
  this.onVoice_Changed = function () {
    var a = document.getElementById("texthelp-translator-frame")
      , b = textHelp.webreader.UserSettingsSingleton.getInst()
      .getUserSettings()
      .speechoptions.voice;
    a.contentWindow.postMessage("voice:" + b, "*")
  }.bind(this);
  texthelp.RW4GC.RiotControl.on("onvoice_changed", this.onVoice_Changed);
  this.onSpeed_Changed = function () {
    var a = document.getElementById("texthelp-translator-frame")
      , b = textHelp.webreader.UserSettingsSingleton.getInst()
      .getUserSettings()
      .speechoptions.speed;
    a.contentWindow.postMessage("speed:" + b, "*")
  }.bind(this);
  texthelp.RW4GC.RiotControl.on("onspeed_changed", this.onSpeed_Changed);
  this.onStopSpeech = function () {}.bind(this);
  texthelp.RW4GC.RiotControl.on("onStopSpeech", this.onStopSpeech);
  var e = 0;
  this.AjaxRequest = function () {
    var a = ++e
      , b = null
      , c = null
      , g = null
      , h = !1
      , k = null
      , n = null
      , m = 0
      , p = !1;
    this.cancel = function () {
      thLog("Cancelling request " + a);
      p = !0
    };
    this.getCount = function () {
      return a
    };
    this.setTimeoutCallBack = function (a) {
      n = a
    };
    this.setErrorCallBack = function (a) {
      k = a
    };
    this.setTimeout = function (a) {
      m = a
    };
    this.callBack = function () {
      if (!(p || 4 > this.readyState)) {
        if (200 != this.status) {
          if (n) {
            n(a);
            return
          }
          if (k) {
            k(status);
            return
          }
        }
        if (h)
          if (null == g) c(this.responseXML);
          else c[g](this.responseXML);
        else if (null == g) c(this.responseText);
        else c[g](this.responseText)
      }
    };
    this.doPost = function (a, d, e, n, k) {
      c = e;
      g = n;
      h = k;
      b = new XMLHttpRequest;
      b.open("POST", a, !0);
      b.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
      b.onreadystatechange = this.callBack;
      b.send(d)
    };
    this.doGet = function (a, d, e, n, k) {
      c = e;
      g = n;
      h = k;
      b = new XMLHttpRequest;
      g_bFireFox && (b.timeout = m);
      b.open("GET", a, !0);
      b.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      b.onreadystatechange = this.callBack;
      b.send(d)
    }
  };
  this.rw_event_trans = function () {
    try {
      var a;
      passedInText = a = textHelp.webreaderapi.HelpersSingleton.getInst()
        .trimPunctuation(this.opts.word);
      this.rw_singleWordTranslate(a)
    } catch (b) {
      thLogE(b)
    }
  };
  this.rw_paragraphTranslate = function (a) {
    0 < a.length ? this.getTranslationParagraph(a, strSource, strTarget) : this.rw_transReply('<div class="rwTranWordHeader">No valid text selected</div>')
  };
  this.rw_singleWordTranslate = function (a) {
    0 < a.length ? this.getTranslationGenericPage(a, strSource, strTarget) : this.rw_translate("")
  };
  this.rw_translate = function (a, b, c) {
    try {
      if (null != c && 0 < c.length) this.getTranslationGenericPage(c, a, b);
      else {
        var e = '<div class="rwTranWordHeader">' + textHelp.webreader.LocaleSingleton.getInst()
          .getLocaleString("selection_no_word") + "</div>";
        this.rw_transReply(e)
      }
    } catch (h) {
      thLogE(h)
    }
  };
  this.rw_transReply = function (c) {
    try {
      var f = "";
      if ("string" == typeof c && 0 < c.length) {
        var e = JSON.parse(c)
          , f = '<div class="rwTransPanel">'
          , f = f + ('<div class="play" itemToPlay="rwDialogTranWordHeader"></div><div id="rwDialogTranWordHeader" class="rwDialogTranWordHeader"  >' +
            e.text + "</div>");
        if ("ms" !== g_thToLang && "false" == e.confirmed || "0" !== e.status) {
          this.html = f += '<div class="play" itemToPlay="th-nomatch"></div><div  id="th-nomatch" class="th-nomatch">' + textHelp.webreader.LocaleSingleton.getInst()
            .getLocaleString("dialog_definition_notfound") + "</div></div>";
          this.update();
          return
        }
        var f = f + "<section>"
          , g = e.translations;
        for (c = 0; c < g.length; c++) toLang = a(b.translator.translang), f += '<div class="definition">', f += '<div class="leadingSpace"></div><div class="play" itemToPlay="tran' +
          c + '"></div><div class="TrailingSpace"></div><div lang="' + toLang + '"class="text thdefinition" id="tran' + c + '">' + e.translations[c].word + "</div>", f += "</div>";
        f += "</section></div>"
      } else f = '<div class="play" itemToPlay="th-nomatch"></div><div  id="th-nomatch" class="th-nomatch">' + textHelp.webreader.LocaleSingleton.getInst()
        .getLocaleString("selection_no_word") + "</div>";
      this.html = f;
      this.update()
    } catch (h) {
      thLogE(h)
    }
  };
  this.getTranslationGenericPage = function (a, b, c) {
    this.rw_translateImpl(a, b, c, !1, this)
  };
  this.rw_translateImpl = function (b, c, e, g, h) {
    c = textHelp.webreader.UserSettingsSingleton.getInst()
      .getUserSettings();
    e = c.translator.translang;
    fromLang = a(c.language.services);
    toLang = a(e);
    2 < toLang.length && (toLang = toLang.substr(0, 2));
    g_thToLang = toLang;
    e = "1";
    "ms" == toLang && (e = "2");
    c = 'json={"u":"rwforgdocs","e":"WYn4Wx7Vf2",';
    c += '"l":"' + fromLang.substring(0, 2) + '",';
    c += '"d":"' + toLang.substring(0, 2) + '",';
    c += '"r":"' + e + '",';
    c += '"t":"' + textHelp.webreaderapi.HelpersSingleton.getInst()
      .JSONEscape(b) + '"';
    c += "}";
    b = textHelp.webreaderapi.HelpersSingleton.getInst()
      .getLicense();
    e = [];
    e.push("translator request timer");
    e.push(b.Email);
    e.push(b.Email.split("@")[1]);
    window.postMessage({
      type: "1757FROM_PAGERW4G"
      , key: "function"
      , method: "StartTiming"
      , parameters: e
    }, "*");
    (new this.AjaxRequest)
    .doPost("https://rwgoogle-webservices-4.texthelp.com/v1.11.0/translation?" + c, "", this, "translationLoad", !1)
  };
  this.translationLoad = function (a) {
    var b = [];
    b.push("translator request timer");
    window.postMessage({
      type: "1757FROM_PAGERW4G"
      , key: "function"
      , method: "EndTiming"
      , parameters: b
    }, "*");
    null == a || 0 == a.length ? this.rw_transReply("Error loading content.") : (-1 < a.indexOf("<b>No match was found for this word.</b>") && (a = a.replace("<b>No match was found for this word.</b>", '<div class="play" itemToPlay="th-nomatch"></div><div  id="th-nomatch" class="th-nomatch">SNo match was found for this word</div>')), this.rw_transReply(a))
  };
  this.rw_translate = function (a) {
    try {
      var b = textHelp.webreaderapi.HelpersSingleton.getInst()
        .getLicense()
        , c = [];
      c.push("translator lookup");
      c.push(b.Email);
      c.push(b.Email.split("@")[1]);
      window.postMessage({
        type: "1757FROM_PAGERW4G"
        , key: "function"
        , method: "SendEvent"
        , parameters: c
      }, "*");
      null != a && 0 < a.trim()
        .length ? this.rw_event_trans() : (this.html = '<div class="play" itemToPlay="th-nomatch"></div><div  id="th-nomatch" class="th-nomatch">' + textHelp.webreader.LocaleSingleton.getInst()
          .getLocaleString("selection_no_word") + "</div>", this.update())
    } catch (e) {
      thLogE(e)
    }
  };
  this._prevSize = this._size = 0;
  this._interactElem = null;
  this._barShow = !1;
  this._barHideSize = -33;
  this._authenticated = !1;
  this.onStartB = this.onEndB = this.onMoveB = null;
  this.closeDialog = function () {
    texthelp.RW4GC.RiotControl.off("onword_changed", c.onWord_Changed);
    texthelp.RW4GC.riot.translator.unmount(!0)
  };
  this.repositionBarOnScreen = function (a, b, c, e, h) {
    void 0 == h && (h = !0);
    var k = document.getElementById("th-RW4GC-translator")
      , n = document.getElementById("th-translator-drag-area");
    null != k && (a = (parseFloat(k.getAttribute("data-x")) || 0) + a, b = (parseFloat(k.getAttribute("data-y")) || 0) + b, void 0 != c && (8 > c || c > window.innerWidth - 24) && (texthelp.RW4GC.interact.stop(), k.style.opacity = 1, h = !1), void 0 != e && (8 > e || e > window.innerHeight - 24) && (texthelp.RW4GC.interact.stop(), k.style.opacity = 1, h = !1), a < 60 - k.clientWidth && (a = 60 - k.clientWidth), 4 > b && (b = 4), a > window.innerWidth - 60 && (a = window.innerWidth - 60), b > window.innerHeight - n.clientHeight - 20 && (b = window.innerHeight - n.clientHeight - 20), k.style.webkitTransform = k.style.transform = "translate(" + a + "px, " + b + "px)", h && (k.setAttribute("data-x", a), k.setAttribute("data-y", b), void 0 == texthelp.RW4GC.currentDialogs && (texthelp.RW4GC.currentDialogs = {}), void 0 == texthelp.RW4GC.currentDialogs.translatorDialog && (texthelp.RW4GC.currentDialogs.translatorDialog = {}), texthelp.RW4GC.currentDialogs.translatorDialog = {
      x: a
      , y: b
    }))
  };
  this.on("unmount", function () {
    this._interactElem.ondragend = null;
    this._interactElem.ondragstart = null;
    this._interactElem.ondragmove = null
  });
  this.on("update", function () {
    var a = document.getElementById("texthelp-translator-frame")
      .contentWindow.document;
    a.open();
    a.write('<style type="text/css">body{font-family: "Open Sans",sans-serif;font-size: 14px;line-height: 24px;} .th-nomatch{text-indent:5px;} .leadingSpace{float:left;width:20px;}.TrailingSpace{float:left;width:10px;}.stop{float:left;width:1.5em;height:1.5em;text-align:right;background:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjU2MHB4Ig0KCSBoZWlnaHQ9IjU2MHB4IiB2aWV3Qm94PSIwIDAgNTYwIDU2MCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTYwIDU2MDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGcgaWQ9IlN0b3AiPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiM0QTRBNEE7c3Ryb2tlOiM0QTRBNEE7c3Ryb2tlLXdpZHRoOjEwO3N0cm9rZS1taXRlcmxpbWl0OjEwOyIgZD0iTTUwNS4wNzUsNTI4LjQxMkg0Ny44NQ0KCQljLTkuOTAzLDAtMTcuOTMtOC4wMjctMTcuOTMtMTcuOTMxVjUzLjI1N2MwLTkuOTAzLDguMDI3LTE3LjkzLDE3LjkzLTE3LjkzaDQ1Ny4yMjVjOS45MDIsMCwxNy45Myw4LjAyNywxNy45MywxNy45M3Y0NTcuMjI0DQoJCUM1MjMuMDA1LDUyMC4zODUsNTE0Ljk3OCw1MjguNDEyLDUwNS4wNzUsNTI4LjQxMnoiLz4NCjwvZz4NCjxnIGlkPSJMYXllcl8xIj4NCjwvZz4NCjwvc3ZnPg0K) no-repeat top center;background-size:contain;background-repeat:no-repeat} .play{float:left;width:1.5em;height:1.5em;text-align:right;background:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjU2MHB4Ig0KCSBoZWlnaHQ9IjU2MHB4IiB2aWV3Qm94PSIwIDAgNTYwIDU2MCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTYwIDU2MDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGcgaWQ9IlBsYXkiPg0KCTxnPg0KCQk8cGF0aCBzdHlsZT0iZmlsbDojNEE0QTRBOyIgZD0iTTE3OS4wNDYsNDguNzE1Yy0xNy42NTctMTcuMzQzLTMyLjEwNC0xMS4yODMtMzIuMTA0LDEzLjQ2N3Y0NDAuMjMNCgkJCWMwLDI0Ljc1LDE0LjMxOSwzMC42ODEsMzEuODIsMTMuMThsMjAzLjg1NC0yMDMuODU0YzE3LjUtMTcuNTAxLDE3LjM3Mi00Ni4wMS0wLjI4NC02My4zNTRMMTc5LjA0Niw0OC43MTV6Ii8+DQoJCTxwYXRoIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiM0QTRBNEE7c3Ryb2tlLXdpZHRoOjEwO3N0cm9rZS1taXRlcmxpbWl0OjEwOyIgZD0iTTE3OS4wNDYsNDguNzE1DQoJCQljLTE3LjY1Ny0xNy4zNDMtMzIuMTA0LTExLjI4My0zMi4xMDQsMTMuNDY3djQ0MC4yM2MwLDI0Ljc1LDE0LjMxOSwzMC42ODEsMzEuODIsMTMuMThsMjAzLjg1NC0yMDMuODU0DQoJCQljMTcuNS0xNy41MDEsMTcuMzcyLTQ2LjAxLTAuMjg0LTYzLjM1NEwxNzkuMDQ2LDQ4LjcxNXoiLz4NCgk8L2c+DQo8L2c+DQo8ZyBpZD0iTGF5ZXJfMSI+DQo8L2c+DQo8L3N2Zz4NCg==) no-repeat top center;background-size:contain;background-repeat:no-repeat} .rwDictCaptionClose{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAAzUlEQVQ4ja3SzU5CQQwF4E+DP9wgia+vS+PWCCgkoiwIaGL0ma4LLklvMwMsbNLNnNP29Ez5pxjgEa8YHuA1mOMe5xF4QNvlW6VJg4/Au4vgewDajtgcKG7xEhsMsUyELca4wSZhE1xmiSOsE/Ebn+ltWVmxqiTmtDS5pOSnULzV9wXpK0KcFd5q3F7c4rcwfZ8bO1Or0rOJayeaOMZXIj7hws606TElq0SY4yrgpUOaxQbxlBe4LqzYpEG9Ux50TZ4rxbHJois+6VeOxh9V0F4GGpGv1gAAAABJRU5ErkJggg==) no-repeat center center;cursor:default;height:16px;position:absolute;right:4px;top:4px;width:16px;vertical-align:middle} img.point_symbol{display:block;margin-left:auto;margin-right:auto;padding-bottom:15px}.thVNload-dialog-bar{position:relative;width:100%;height:3px;background-color:#ED8507;top:0;left:0;}.thVNbar-dialog{content:"";display:inline;position:absolute;width:0;height:100%;left:50%;text-align:center}.thVNbar-dialog:nth-child(1){background-color:#9F5DFF;animation:thVNloading 3s linear infinite}.thVNbar-dialog:nth-child(2){background-color:#0DA0A0;animation:thVNloading 3s linear 1s infinite}.thVNbar-dialog:nth-child(3){background-color:#ED8507;animation:thVNloading 3s linear 2s infinite}@keyframes thVNloading{from{left:50%;width:0;z-index:100}33.3333%{left:0;width:100%;z-index:10}to{left:0;width:100%}}.rwDialogTranWordHeader{font-weight:bold;font-family:"Open Sans",sans-serif;font-size:18px;margin-bottom:15px;margin-top:10px; padding-left: 20px; text-indent:5px;}texthelp-translator{font-family:"Open Sans",sans-serif;font-size:14px;line-height:24px;}[riot-tag=texthelp-translator] definitions{cursor:default;font-family:Open Sans,sans-serif;font-size:14px;color:#000;cursor:default;overflow:hidden} definitions h2{font-size:1.5em;font-weight:600;font-family:Open Sans,sans-serif;font-size:25px;line-height:5px;text-indent:10px} [riot-tag=texthelp-translator]  section{position:relative;width:inherit;height:inherit;overflow-y:scroll;height:130px;margin:auto;padding:0}.definition{margin-bottom:10px; margin-left: 15px;} .rwToolbarCaption{margin:0;width:100%;font-size:1.5em;background-color:#D6D6D6;color:#000;cursor:pointer;font-weight:600;padding:0 0;position:relative;_zoom:1;font-family:Open Sans,sans-serif;font-size:13px;line-height:2;text-indent:4px}[riot-tag=texthelp-translator] th-header.th-RW4GC-translator,texthelp-translator th-header.th-RW4GC-translator{box-sizing:border-box;flex-direction:column;min-width:32px;background-color:#ffffff;display:flex;position:fixed;z-index:2147483639;top:0;left:0;border:1px solid #A09BC3;border-radius:2px;width: auto;height: auto;padding:0px;  min-height: 160px;max-height: 200px;min-width: 200px;max-width: 300px;}[riot-tag=texthelp-translator] th-dragging#th-translator-drag-area{height:21px}th-dragging#th-translator-drag-area a{color:#9F5DFF}th-dragging#th-translator-drag-area a:hover{text-decoration:underline}th-header.th-RW4GC-translator,texthelp-translator th-header.th-RW4GC-translator.docked-top{width: 100%;border-radius: 0;padding-left: 20px;padding-right: 20px;border-top-width: 0px;}th-header.th-RW4GC-translator,texthelp-translator th-header.th-RW4GC-translator.docked-top th-dragging#th-translator-drag-area{display:none}.thdefinition{margin-left:30px;}</style>' +
      this.html + "<span id='gdwr-placeHolder'></span>");
    a.close();
    var b = a.createElement("script");
    b.text = 'eba_voice = "' + this.voice + '";eba_speed_value =' + this.speed + ";";
    a.getElementsByTagName("body")[0].appendChild(b);
    b = a.createElement("script");
    b.src = "chrome-extension://inoeonmfapjbbkmdafoankkfajkcphgd/v195/texthelpMain.js";
    a.createElement("script")
      .src = "chrome-extension://inoeonmfapjbbkmdafoankkfajkcphgd/textHelp_WebReader.js";
    b.onload = b.onreadystatechange = function () {
      if (!this.readyState || "loaded" == this.readyState || "complete" == this.readyState) {
        var a = document.getElementById("texthelp-translator-frame")
          .contentWindow.document
          , b = a.createElement("script");
        b.src = "chrome-extension://inoeonmfapjbbkmdafoankkfajkcphgd/assets/dialog.js";
        var c = a.createElement("script");
        c.text = "var classname = document.getElementsByClassName(\"play\");var myFunction = function() {if (this.classList.contains(\"play\")) {$rw_speakById(this.getAttribute('itemToPlay'));}else {$rw_stopSpeech();}};for (var i = 0; i < classname.length; i++) {classname[i].addEventListener('click', myFunction, false);}";
        a.getElementsByTagName("body")[0].appendChild(b);
        a.getElementsByTagName("body")[0].appendChild(c)
      }
    };
    a.getElementsByTagName("body")[0].appendChild(b)
  });
  this.on("updated", function () {
    this.root.getElementsByClassName("thVNload-dialog-bar")[0].style.visibility = "hidden";
    textHelp.thScreenMasking.screenmasking.toggleFrameEvents(!0)
  });
  this.on("mount", function () {
    var a = this;
    if (null == this._interactElem) {
      var b = this;
      this.onMove = function (a) {
        this.repositionBarOnScreen(a.dx, a.dy, a.clientX, a.clientY)
      };
      this.onStart = function (a) {
        a.target.style.opacity = .6;
        a = document.getElementById("texthelp-dictionary-frame");
        null != a && (document.getElementById("texthelp-dictionary-frame")
          .style.pointerEvents = "none");
        a = document.getElementById("texthelp-picture-dictionary-frame");
        null != a && (document.getElementById("texthelp-picture-dictionary-frame")
          .style.pointerEvents = "none");
        a = document.getElementById("texthelp-translator-frame");
        null != a && (document.getElementById("texthelp-translator-frame")
          .style.pointerEvents = "none")
      };
      this.onEnd = function (a) {
        this.root.firstElementChild.style.opacity = 1;
        a = document.getElementById("texthelp-dictionary-frame");
        null != a && (document.getElementById("texthelp-dictionary-frame")
          .style.pointerEvents = "");
        a = document.getElementById("texthelp-picture-dictionary-frame");
        null != a && (document.getElementById("texthelp-picture-dictionary-frame")
          .style.pointerEvents = "");
        a = document.getElementById("texthelp-translator-frame");
        null != a && (document.getElementById("texthelp-translator-frame")
          .style.pointerEvents = "");
        texthelp.RW4GC.RiotControl.trigger("save_Dialogs", texthelp.RW4GC.currentDialogs);
        texthelp.RW4GC.MDL.componentHandler.upgradeDom()
      };
      this.getOffset = function (a) {
        for (var b = 0, c = 0; a && !isNaN(a.offsetLeft) && !isNaN(a.offsetTop);) b += a.offsetLeft - a.scrollLeft, c += a.offsetTop - a.scrollTop, a = a.offsetParent;
        return {
          y: c
          , x: b
        }
      };
      this.onMoveB = this.onMove.bind(this);
      this.onEndB = this.onEnd.bind(this);
      this.onStartB = this.onStart.bind(this);
      document.getElementById("texthelp-translator-frame")
        .addEventListener("mouseenter", function (a) {
          b.onEndB(a);
          texthelp.RW4GC.interact.stop()
        });
      this._interactElem = texthelp.RW4GC.interact(".th-draggable-translator")
        .draggable({
          inertia: !1
          , autoScroll: !1
          , onmove: this.onMoveB
          , onend: this.onEndB
          , onstart: this.onStartB
          , restriction: "parent"
          , endOnly: !0
        })
        .allowFrom("th-dragging#th-translator-drag-area")
    }
    window.addEventListener("resize", function (b) {
      a.repositionBarOnScreen(0, 0, 0, 0, !1)
    });
    var c = document.getElementById("th-RW4GC-translator")
      , e = document.getElementById("th-translator-drag-area");
    if (null != c && (null == c.getAttribute("data-x") || null == c.getAttribute("data-y"))) {
      var h = window.getComputedStyle(c, null)
        .getPropertyValue("min-width")
        , h = parseInt(h.substring(0, h.length - 2))
        , k = c.clientWidth;
      k < h && (k = h);
      h = window.innerWidth - k - 40;
      k = 20;
      void 0 == texthelp.RW4GC.currentDialogs.translatorDialog && (texthelp.RW4GC.currentDialogs.translatorDialog = {
        x: 20
        , y: 20
      });
      void 0 != texthelp.RW4GC.currentDialogs.translatorDialog.x && void 0 != texthelp.RW4GC.currentDialogs.translatorDialog.y ? (h = texthelp.RW4GC.currentDialogs.translatorDialog.x, k = texthelp.RW4GC.currentDialogs.translatorDialog.y) : (texthelp.RW4GC.currentDialogs.translatorDialog.x = h, texthelp.RW4GC.currentDialogs.translatorDialog.y = k);
      h > window.innerWidth - 60 && (h = window.innerWidth - 60);
      k > window.innerHeight - e.clientHeight - 20 && (k = window.innerHeight - e.clientHeight - 20);
      c.style.webkitTransform = c.style.transform = "translate(" + h + "px, " + k + "px)";
      c.setAttribute("data-x", h);
      c.setAttribute("data-y", k)
    }
    this.rw_translate(this.opts.word);
    texthelp.RW4GC.MDL.componentHandler.upgradeDom()
  })
}, "{ }");
texthelp = texthelp || {};
texthelp.RW4GC = texthelp.RW4GC || {};
texthelp.RW4GC.docsToolbarEventHandler = function (m) {
  this.m_webReader = m;
  this.m_predictionState = !1;
  this.m_license = this.m_oauthID = null;
  this.clickToSpeakOn = !1;
  this.m_recognition = null;
  this.m_speechInputState = !1;
  this.disableButton = function (a, c) {
    var b = document.getElementsByClassName("th-" + a + "-image")[0];
    null != b && (c ? b.classList.contains("disabled") || (b.classList.add("disabled"), b.setAttribute("disabled", "true")) : 0 == texthelp.RW4GC.featureMap[a].enabled || b.classList.contains("thdisabled") || (b.classList.contains("disabled") && b.classList.remove("disabled"), b.removeAttribute("disabled")))
  };
  this.ontoogletoolbar = function (a) {
    window.postMessage({
      method: "thStopScreenShotReaderSpeech"
      , type: "1757FROM_PAGERW4G"
      , payload: {
        ChromeExtId: "enfolipbjmnmleonhhebhalojdpcpdoo"
      }
    }, "*");
    this.m_oauthID = textHelp.webreaderapi.EventBusSingleton.getInst()
      .subscribe("onGetOAuthToken", this.onGetOAuthToken, this);
    window.postMessage({
      method: "getOAuthToken"
      , type: "1757FROM_PAGERW4G"
    }, "*")
  };
  this.onGetOAuthToken = function (a) {
    try {
      if (textHelp.webreaderapi.EventBusSingleton.getInst()
        .unsubscribe(this.m_oauthID), void 0 !== a.Email) {
        var c = a.Email.split("@")[1];
        window.postMessage({
          method: "GAE"
          , type: "1757FROM_PAGERW4G"
          , payload: {
            category: a.Email
            , action: "authenticatedLUI"
            , label: c
          }
        }, "*");
        this.m_authenticateEventID = textHelp.webreaderapi.EventBusSingleton.getInst()
          .subscribe("onAuthenticate", this.onAuthenticate, this);
        window.postMessage({
          method: "authenticate"
          , type: "1757FROM_PAGERW4G"
          , payload: ""
        }, "*")
      }
    } catch (b) {
      textHelp.webreaderapi.HelpersSingleton.getInst()
        .logError(b)
    }
  };
  this.onAuthenticate = function (a) {
    try {
      textHelp.webreaderapi.EventBusSingleton.getInst()
        .unsubscribe(this.m_authenticateEventID);
      this.m_authenticateEventID = null;
      if (-1 < a.indexOf("thGDOCSAuthenticated()")) this.m_authenticated = !0, a = [], a.push(textHelp.webreaderapi.HelpersSingleton.getInst()
        .getLicense()), a.push(!1);
      else {
        this.m_authenticated = !1;
        this.m_authenticatedresponse = a;
        textHelp.webreaderapi.HelpersSingleton.getInst()
          .bind(this, this.onAuthentication);
        var c = !1;
        null == window.texthelp.RW4GC.thToolbarStoreInstance.license ? -1 < a.indexOf("www.googleapis.com") && (c = !0) : "Google" == window.texthelp.RW4GC.thToolbarStoreInstance.license.lType && (c = !0);
        if (c) {
          var b = window.location.href.split("https://docs.google.com/document/");
          1 < b.length && 1 < b[1].split("/edit")
            .length && textHelp.webreaderapi.EventBusSingleton.getInst()
            .publish("onShowDocsOAuthDialog", a)
        }
        a = [];
        a.push(textHelp.webreaderapi.HelpersSingleton.getInst()
          .getLicense());
        a.push(textHelp.webreader.UserSettingsSingleton.getInst()
          .getUserSettings()
          .bar.visible)
      }
      texthelp.RW4GC.RiotControl.trigger("authenticated", a)
    } catch (e) {
      textHelp.webreaderapi.HelpersSingleton.getInst()
        .logError(e)
    }
  };
  this.onAuthentication = function (a, c) {
    try {
      null !== this.m_authenticateDialog && (this.m_authenticateDialog.clearDialog(), this.m_authenticateDialog.hide())
    } catch (b) {
      textHelp.webreaderapi.HelpersSingleton.getInst()
        .logError(b)
    }
  };
  this.onEventAna = function (a) {
    null === this.m_license && (this.m_license = textHelp.webreaderapi.HelpersSingleton.getInst()
      .getLicense());
    var c = [];
    c.push(a);
    c.push(this.m_license.Email);
    c.push(this.m_license.Email.split("@")[1]);
    window.postMessage({
      type: "1757FROM_PAGERW4G"
      , key: "function"
      , method: "SendEvent"
      , parameters: c
    }, "*")
  };
  this.onplay = function (a) {
    document.getElementById("th-RW4GC-dictionary");
    document.getElementById("th-RW4GC-picture-dictionary");
    document.getElementById("th-RW4GC-translator");
    textHelp.webreaderapi.EventBusSingleton.getInst()
      .publish("onPlay", []);
    this.onEventAna("play clicked")
  };
  this.onstop = function (a) {
    textHelp.webreaderapi.EventBusSingleton.getInst()
      .publish("onStop", []);
    this.clickToSpeakOn || this.setSpeechState(!1);
    this.onEventAna("stop clicked")
  };
  this.onpause = function (a) {
    textHelp.webreaderapi.EventBusSingleton.getInst()
      .publish("onPause", []);
    this.onEventAna("pause clicked")
  };
  this.onpicturedictionary = function (a) {
    textHelp.webreaderapi.EventBusSingleton.getInst()
      .publish("onPictureDictionary", []);
    this.onEventAna("picture dictionary clicked")
  };
  this.ondictionary = function (a) {
    textHelp.webreaderapi.EventBusSingleton.getInst()
      .publish("onDictionary", []);
    this.onEventAna("dictionary clicked")
  };
  this.ontranslator = function (a) {
    textHelp.webreaderapi.EventBusSingleton.getInst()
      .publish("onTranslator", []);
    this.onEventAna("translator clicked")
  };
  this.onscreenshotreader = function (a) {
    textHelp.webreaderapi.EventBusSingleton.getInst()
      .publish("onScreenshotReader", []);
    this.onEventAna("screenshot reader clicked")
  };
  this.onspeechinput = function (a) {
    a = textHelp.webreaderapi.HelpersSingleton.getInst()
      .getAPI()
      .getBarConfigFromParser();
    if (void 0 !== a.custom && void 0 !== a.custom.screenshotreadertoogle && !a.custom.screenshotreadertoogle) return textHelp.webreaderapi.EventBusSingleton.getInst()
      .publish("onSpeechInput", []), this.onEventAna("speech input clicked"), "";
    this.m_speechInputState = !this.m_speechInputState;
    a = document.getElementsByClassName("th-speechinput-image")[0];
    this.m_speechInputState ? (textHelp.webreaderapi.HelpersSingleton.getInst()
      .addClassName(a, "enabled"), this.onEventAna("speech input clicked on"), null == this.m_recognition && (this.m_recognition = new webkitSpeechRecognition, this.m_recognition.continuous = !0, this.m_recognition.interimResults = !1, a = textHelp.webreader.UserSettingsSingleton.getInst()
        .getUserSettings()
        .language.services, this.m_recognition.lang = textHelp.webreaderapi.HelpersSingleton.getInst()
        .toLang(a), this.m_recognition.onstart = function (a) {}, this.m_recognition.onresult = function (a) {
          a = a.results;
          var b = [];
          b.push(a[a.length - 1][0].transcript + " ");
          textHelp.webreaderapi.EventBusSingleton.getInst()
            .publish("onWRInsertTextAtCaret", b)
        }, this.m_recognition.onerror = function (a) {}, this.m_recognition.onend = function (a) {}), this.m_recognition.start()) : (textHelp.webreaderapi.HelpersSingleton.getInst()
      .removeClassName(a, "enabled"), this.onEventAna("speech input clicked off"), this.m_recognition.stop(), this.m_recognition = null)
  };
  this.onfactfinder = function (a) {
    textHelp.webreaderapi.EventBusSingleton.getInst()
      .publish("onFactFinder", []);
    this.onEventAna("fact finder clicked")
  };
  this.onhighlightblue = function (a) {
    textHelp.webreaderapi.EventBusSingleton.getInst()
      .publish("onBlueHighlighter", []);
    this.onEventAna("blue highlighter clicked")
  };
  this.onhighlightpink = function (a) {
    textHelp.webreaderapi.EventBusSingleton.getInst()
      .publish("onPinkHighlighter", []);
    this.onEventAna("pink highlighter clicked")
  };
  this.onhighlightyellow = function (a) {
    textHelp.webreaderapi.EventBusSingleton.getInst()
      .publish("onYellowHighlighter", []);
    this.onEventAna("yellow highlighter clicked")
  };
  this.onhighlightgreen = function (a) {
    textHelp.webreaderapi.EventBusSingleton.getInst()
      .publish("onGreenHighlighter", []);
    this.onEventAna("green highlighter clicked")
  };
  this.onhighlightclear = function (a) {
    textHelp.webreaderapi.EventBusSingleton.getInst()
      .publish("onClear", []);
    this.onEventAna("clear highlights clicked")
  };
  this.onhighlightscollect = function (a) {
    textHelp.webreaderapi.EventBusSingleton.getInst()
      .publish("onCollectStudySkills", []);
    this.onEventAna("collect highlights clicked")
  };
  this.onvocabtool = function (a) {
    textHelp.webreaderapi.EventBusSingleton.getInst()
      .publish("onVocabTool", []);
    this.onEventAna("vocab tool clicked")
  };
  this.onvoicenote = function (a) {
    textHelp.webreaderapi.EventBusSingleton.getInst()
      .publish("onVoiceNotes", []);
    this.onEventAna("voice notes clicked")
  };
  this.onsimplify = function (a) {
    textHelp.webreaderapi.EventBusSingleton.getInst()
      .publish("onSimplify", []);
    this.onEventAna("simplify clicked")
  };
  this.onprediction = function (a) {
    a.focus();
    this.m_predictionState = !this.m_predictionState;
    a = [];
    a.push(this.m_predictionState);
    var c = document.getElementsByClassName("th-prediction-image")[0];
    null != c && (textHelp.webreaderapi.EventBusSingleton.getInst()
      .publish("onWRPredictionStateChanged", a), this.m_predictionState ? (c.classList.contains("enabled") || c.classList.add("enabled"), this.onEventAna("prediction clicked on")) : (textHelp.webreaderapi.EventBusSingleton.getInst()
        .publish("onClosePredictionWindow", []), c.classList.contains("enabled") && c.classList.remove("enabled"), this.onEventAna("prediction clicked off")))
  };
  this.onclicktospeak = function (a) {
    this.clickToSpeakOn = !this.clickToSpeakOn;
    a = [];
    a.push(this.clickToSpeakOn);
    textHelp.webreaderapi.EventBusSingleton.getInst()
      .publish("onclicktospeak", a);
    a = document.getElementsByClassName("th-clicktospeak-image")[0];
    null != a && (this.clickToSpeakOn ? (this.setSpeechState(!0), a.classList.contains("enabled") || a.classList.add("enabled"), this.onEventAna("click to speak clicked on")) : (this.setSpeechState(!1), textHelp.webreaderapi.EventBusSingleton.getInst()
      .publish("onClosePredictionWindow", []), a.classList.contains("enabled") && a.classList.remove("enabled"), this.onEventAna("click to speak clicked off")))
  };
  this.setSpeechState = function (a) {
    this.disableButton("prediction", a);
    this.disableButton("dictionary", a);
    this.disableButton("picturedictionary", a);
    this.disableButton("play", a);
    this.disableButton("screenshotreader", a);
    this.disableButton("speechmaker", a);
    this.disableButton("factfinder", a);
    this.disableButton("speechinput", a);
    this.disableButton("translator", a);
    this.disableButton("speechinput", a);
    this.disableButton("highlightblue", a);
    this.disableButton("highlightpink", a);
    this.disableButton("highlightyellow", a);
    this.disableButton("highlightgreen", a);
    this.disableButton("highlightclear", a);
    this.disableButton("highlightscollect", a);
    this.disableButton("vocabtool", a);
    this.disableButton("simplify", a);
    this.disableButton("voicenote", a);
    this.disableButton("screenmasking", a);
    this.disableButton("practicereadingaloud", a);
    textHelp.webreaderapi.EventBusSingleton.getInst()
      .publish("onSpeechStateChanged", [a])
  };
  this.setSpeechMakerState = function (a) {
    this.disableButton("speechmaker", a)
  };
  this.onsettings = function (a) {
    this.onEventAna("settings clicked");
    this.setSpeechState(!1);
    window.postMessage({
      method: "thStopScreenShotReaderSpeech"
      , type: "1757FROM_PAGERW4G"
      , payload: {
        ChromeExtId: "enfolipbjmnmleonhhebhalojdpcpdoo"
      }
    }, "*");
    textHelp.webreaderapi.SettingsSingleton.getInst()
      .getOptionsDialog()
      .showDialog(textHelp.webreaderapi.SettingsSingleton.getInst()
        .getVoices())
  };
  this.onhelp = function (a) {
    this.onEventAna("help clicked");
    this.setSpeechState(!1);
    textHelp.webreaderapi.EventBusSingleton.getInst()
      .publish("onHelp", [])
  };
  this.onlogo = function (a) {
    this.onEventAna("logo clicked");
    this.setSpeechState(!1);
    textHelp.webreaderapi.EventBusSingleton.getInst()
      .publish("onLogo", [])
  };
  this.onspeechmaker = function (a) {
    textHelp.webreaderapi.EventBusSingleton.getInst()
      .publish("onWRSpeechMaker", []);
    this.onEventAna("speech maker clicked")
  };
  this.onpracticereadingaloud = function (a) {
    textHelp.webreaderapi.EventBusSingleton.getInst()
      .publish("onPracticeReadingAloud", []);
    this.onEventAna("Practice Reading Aloud clicked")
  };
  this.onscreenmasking = function (a) {
    this.setSpeechState(!1);
    textHelp.webreaderapi.EventBusSingleton.getInst()
      .publish("onScreenMasking", []);
    a.focus();
    this.onEventAna("screen mask clicked")
  };
  this.onspeechstopped = function () {
    this.setSpeechState(!1)
  };
  this.onspeech = function () {
    this.setSpeechState(!0)
  }
};
