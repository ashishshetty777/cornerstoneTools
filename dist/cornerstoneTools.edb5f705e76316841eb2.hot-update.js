/*! cornerstone-tools - 3.0.1 - 2019-10-15 | (c) 2017 Chris Hafey | https://github.com/cornerstonejs/cornerstoneTools */
webpackHotUpdate("cornerstoneTools",{

/***/ "./tools/base/BaseBrushTool.js":
/*!*************************************!*\
  !*** ./tools/base/BaseBrushTool.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "../node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _BaseTool_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./BaseTool.js */ "./tools/base/BaseTool.js");
/* harmony import */ var _events_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../events.js */ "./events.js");
/* harmony import */ var _externalModules_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../externalModules.js */ "./externalModules.js");
/* harmony import */ var _store_isToolActive_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../store/isToolActive.js */ "./store/isToolActive.js");
/* harmony import */ var _store_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../store/index.js */ "./store/index.js");
/* harmony import */ var _util_segmentation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../util/segmentation */ "./util/segmentation/index.js");













var _getModule = Object(_store_index_js__WEBPACK_IMPORTED_MODULE_10__["getModule"])('segmentation'),
    configuration = _getModule.configuration,
    getters = _getModule.getters,
    setters = _getModule.setters;
/**
 * @abstract
 * @memberof Tools.Base
 * @classdesc Abstract class for tools which manipulate the mask data to be displayed on
 * the cornerstone canvas.
 * @extends Tools.Base.BaseTool
 */


var BaseBrushTool =
/*#__PURE__*/
function (_BaseTool) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(BaseBrushTool, _BaseTool);

  function BaseBrushTool(props) {
    var _this;

    var defaultProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, BaseBrushTool);

    if (!defaultProps.configuration) {
      defaultProps.configuration = {
        alwaysEraseOnClick: false
      };
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(BaseBrushTool).call(this, props, defaultProps));
    _this.updateOnMouseMove = true;
    _this.hideDefaultCursor = true;
    _this._drawing = false;
    _this._drawingMouseUpCallback = _this._drawingMouseUpCallback.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    return _this;
  } // ===================================================================
  // Abstract Methods - Must be implemented.
  // ===================================================================

  /**
   * Helper function for rendering the brush.
   *
   * @abstract
   * @param {Object} evt - The event.
   * @returns {void}
   */
  // eslint-disable-next-line no-unused-vars


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(BaseBrushTool, [{
    key: "renderBrush",
    value: function renderBrush(evt) {
      throw new Error("Method renderBrush not implemented for ".concat(this.name, "."));
    }
    /**
     * Paints the data to the labelmap.
     *
     * @protected
     * @abstract
     * @param  {Object} evt The event.
     * @returns {void}
     */
    // eslint-disable-next-line no-unused-vars

  }, {
    key: "_paint",
    value: function _paint(evt) {
      throw new Error("Method _paint not implemented for ".concat(this.name, "."));
    } // ===================================================================
    // Virtual Methods - Have default behavior but may be overriden.
    // ===================================================================

    /**
     * Event handler for MOUSE_DRAG event.
     *
     * @override
     * @abstract
     * @event
     * @param {Object} evt - The event.
     */

  }, {
    key: "mouseDragCallback",
    value: function mouseDragCallback(evt) {
      var currentPoints = evt.detail.currentPoints;
      this._lastImageCoords = currentPoints.image; // Safety measure incase _startPainting is overridden and doesn't always
      // start a paint.

      if (this._drawing) {
        this._paint(evt);
      }
    }
    /**
     * Event handler for MOUSE_DOWN event.
     *
     * @override
     * @abstract
     * @event
     * @param {Object} evt - The event.
     */

  }, {
    key: "preMouseDownCallback",
    value: function preMouseDownCallback(evt) {
      var eventData = evt.detail;
      var element = eventData.element,
          currentPoints = eventData.currentPoints;

      this._startPainting(evt);

      this._lastImageCoords = currentPoints.image;
      this._drawing = true;

      this._startListeningForMouseUp(element);

      this._paint(evt);

      return true;
    }
    /**
     * Initialise painting with BaseBrushTool.
     *
     * @abstract
     * @event
     * @param {Object} evt - The event.
     * @returns {void}
     */

  }, {
    key: "_startPainting",
    value: function _startPainting(evt) {
      var eventData = evt.detail;
      var element = eventData.element;

      var _getters$labelmap2D = getters.labelmap2D(element),
          labelmap2D = _getters$labelmap2D.labelmap2D,
          labelmap3D = _getters$labelmap2D.labelmap3D,
          currentImageIdIndex = _getters$labelmap2D.currentImageIdIndex,
          activeLabelmapIndex = _getters$labelmap2D.activeLabelmapIndex;

      var shouldErase = this._isCtrlDown(eventData) || this.configuration.alwaysEraseOnClick;
      this.paintEventData = {
        labelmap2D: labelmap2D,
        labelmap3D: labelmap3D,
        currentImageIdIndex: currentImageIdIndex,
        activeLabelmapIndex: activeLabelmapIndex,
        shouldErase: shouldErase
      };

      if (configuration.storeHistory) {
        var previousPixelData = labelmap2D.pixelData.slice();
        this.paintEventData.previousPixelData = previousPixelData;
      }
    }
    /**
     * End painting with BaseBrushTool.
     *
     * @abstract
     * @event
     * @param {Object} evt - The event.
     * @returns {void}
     */

  }, {
    key: "_endPainting",
    value: function _endPainting(evt) {
      var _this$paintEventData = this.paintEventData,
          labelmap2D = _this$paintEventData.labelmap2D,
          currentImageIdIndex = _this$paintEventData.currentImageIdIndex; // Grab the labels on the slice.

      var segmentSet = new Set(labelmap2D.pixelData);
      var iterator = segmentSet.values();
      var segmentsOnLabelmap = [];
      var done = false;

      while (!done) {
        var next = iterator.next();
        done = next.done;

        if (!done) {
          segmentsOnLabelmap.push(next.value);
        }
      }

      labelmap2D.segmentsOnLabelmap = segmentsOnLabelmap;

      if (configuration.storeHistory) {
        var previousPixelData = this.paintEventData.previousPixelData;
        var newPixelData = labelmap2D.pixelData;
        var operation = {
          imageIdIndex: currentImageIdIndex,
          diff: Object(_util_segmentation__WEBPACK_IMPORTED_MODULE_11__["getDiffBetweenPixelData"])(previousPixelData, newPixelData)
        };
        setters.pushState(this.element, [operation]);
      }
    } // ===================================================================
    // Implementation interface
    // ===================================================================

    /**
     * Event handler for MOUSE_MOVE event.
     *
     * @override
     * @abstract
     * @event
     * @param {Object} evt - The event.
     */

  }, {
    key: "mouseMoveCallback",
    value: function mouseMoveCallback(evt) {
      var currentPoints = evt.detail.currentPoints;
      this._lastImageCoords = currentPoints.image;
    }
    /**
     * Used to redraw the tool's cursor per render.
     *
     * @override
     * @param {Object} evt - The event.
     */

  }, {
    key: "renderToolData",
    value: function renderToolData(evt) {
      var eventData = evt.detail;
      var element = eventData.element; // Only brush needs to render.

      if (Object(_store_isToolActive_js__WEBPACK_IMPORTED_MODULE_9__["default"])(element, this.name)) {
        // Call the hover event for the brush
        this.renderBrush(evt);
      }
    }
    /**
     * Event handler for switching mode to passive.
     *
     * @override
     * @event
     * @param {Object} evt - The event.
     */
    // eslint-disable-next-line no-unused-vars

  }, {
    key: "passiveCallback",
    value: function passiveCallback(evt) {
      try {
        _externalModules_js__WEBPACK_IMPORTED_MODULE_8__["default"].cornerstone.updateImage(this.element);
      } catch (error) {
        // It is possible that the image has not been loaded
        // when this is called.
        return;
      }
    }
    /**
     * Event handler for MOUSE_UP during the drawing event loop.
     *
     * @protected
     * @event
     * @param {Object} evt - The event.
     * @returns {void}
     */

  }, {
    key: "_drawingMouseUpCallback",
    value: function _drawingMouseUpCallback(evt) {
      var eventData = evt.detail;
      var element = eventData.element;

      this._endPainting(evt);

      this._drawing = false;
      this._mouseUpRender = true;

      this._stopListeningForMouseUp(element);
    }
  }, {
    key: "newImageCallback",
    value: function newImageCallback(evt) {
      if (this._drawing) {
        // End painting on one slice and start on another.
        this._endPainting(evt);

        this._startPainting(evt);
      }
    }
    /**
     * Adds modify loop event listeners.
     *
     * @protected
     * @param {Object} element - The viewport element to add event listeners to.
     * @modifies {element}
     * @returns {void}
     */

  }, {
    key: "_startListeningForMouseUp",
    value: function _startListeningForMouseUp(element) {
      element.removeEventListener(_events_js__WEBPACK_IMPORTED_MODULE_7__["default"].MOUSE_UP, this._drawingMouseUpCallback);
      element.removeEventListener(_events_js__WEBPACK_IMPORTED_MODULE_7__["default"].MOUSE_CLICK, this._drawingMouseUpCallback);
      element.addEventListener(_events_js__WEBPACK_IMPORTED_MODULE_7__["default"].MOUSE_UP, this._drawingMouseUpCallback);
      element.addEventListener(_events_js__WEBPACK_IMPORTED_MODULE_7__["default"].MOUSE_CLICK, this._drawingMouseUpCallback);
      _externalModules_js__WEBPACK_IMPORTED_MODULE_8__["default"].cornerstone.updateImage(element);
    }
    /**
     * Adds modify loop event listeners.
     *
     * @protected
     * @param {Object} element - The viewport element to add event listeners to.
     * @modifies {element}
     * @returns {void}
     */

  }, {
    key: "_stopListeningForMouseUp",
    value: function _stopListeningForMouseUp(element) {
      element.removeEventListener(_events_js__WEBPACK_IMPORTED_MODULE_7__["default"].MOUSE_UP, this._drawingMouseUpCallback);
      element.removeEventListener(_events_js__WEBPACK_IMPORTED_MODULE_7__["default"].MOUSE_CLICK, this._drawingMouseUpCallback);
      _externalModules_js__WEBPACK_IMPORTED_MODULE_8__["default"].cornerstone.updateImage(element);
    } // ===================================================================
    // Brush API. This is effectively a wrapper around the store.
    // ===================================================================

    /**
     * Increases the brush size
     *
     * @public
     * @api
     * @returns {void}
     */

  }, {
    key: "increaseBrushSize",
    value: function increaseBrushSize() {
      var oldRadius = configuration.radius;
      var newRadius = Math.floor(oldRadius * 1.2); // If e.g. only 2 pixels big. Math.floor(2*1.2) = 2.
      // Hence, have minimum increment of 1 pixel.

      if (newRadius === oldRadius) {
        newRadius += 1;
      }

      setters.radius(newRadius);
    }
    /**
     * Decreases the brush size
     *
     * @public
     * @api
     * @returns {void}
     */

  }, {
    key: "decreaseBrushSize",
    value: function decreaseBrushSize() {
      var oldRadius = configuration.radius;
      var newRadius = Math.floor(oldRadius * 0.8);
      setters.radius(newRadius);
    }
  }, {
    key: "_isCtrlDown",
    value: function _isCtrlDown(eventData) {
      return eventData.event && eventData.event.ctrlKey || eventData.ctrlKey;
    }
  }]);

  return BaseBrushTool;
}(_BaseTool_js__WEBPACK_IMPORTED_MODULE_6__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (BaseBrushTool);

/***/ }),

/***/ "./util/debugLib/common.js":
/*!*********************************!*\
  !*** ./util/debugLib/common.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "../node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */
function setup(env) {
  createDebug.debug = createDebug;
  createDebug.default = createDebug;
  createDebug.coerce = coerce;
  createDebug.disable = disable;
  createDebug.enable = enable;
  createDebug.enabled = enabled;
  createDebug.humanize = __webpack_require__(/*! ms */ "../node_modules/ms/index.js");
  Object.keys(env).forEach(function (key) {
    createDebug[key] = env[key];
  });
  /**
   * Active `debug` instances.
   */

  createDebug.instances = [];
  /**
   * The currently active debug mode names, and names to skip.
   */

  createDebug.names = [];
  createDebug.skips = [];
  /**
   * Map of special "%n" handling functions, for the debug "format" argument.
   *
   * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
   */

  createDebug.formatters = {};
  /**
   * Selects a color for a debug namespace
   * @param {String} namespace The namespace string for the for the debug instance to be colored
   * @returns {Number|String} An ANSI color code for the given namespace
   * @api private
   */

  function selectColor(namespace) {
    var hash = 0;

    for (var i = 0; i < namespace.length; i++) {
      hash = (hash << 5) - hash + namespace.charCodeAt(i);
      hash |= 0; // Convert to 32bit integer
    }

    return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
  }

  createDebug.selectColor = selectColor;
  /**
   * Create a debugger with the given `namespace`.
   *
   * @param {String} namespace
   * @returns {Function}
   * @api public
   */

  function createDebug(namespace) {
    var prevTime;

    function debug() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      // Disabled?
      if (!debug.enabled) {
        return;
      }

      var self = debug; // Set `diff` timestamp

      var curr = Number(new Date());
      var ms = curr - (prevTime || curr);
      self.diff = ms;
      self.prev = prevTime;
      self.curr = curr;
      prevTime = curr;
      args[0] = createDebug.coerce(args[0]);

      if (typeof args[0] !== 'string') {
        // Anything else let's inspect with %O
        args.unshift('%O');
      } // Apply any `formatters` transformations


      var index = 0;
      args[0] = args[0].replace(/%([a-zA-Z%])/g, function (match, format) {
        // If we encounter an escaped % then don't increase the array index
        if (match === '%%') {
          return match;
        }

        index++;
        var formatter = createDebug.formatters[format];

        if (typeof formatter === 'function') {
          var val = args[index];
          match = formatter.call(self, val); // Now we need to remove `args[index]` since it's inlined in the `format`

          args.splice(index, 1);
          index--;
        }

        return match;
      }); // Apply env-specific formatting (colors, etc.)

      createDebug.formatArgs.call(self, args);
      var logFn = self.log || createDebug.log;
      logFn.apply(self, args);
    }

    debug.namespace = namespace;
    debug.enabled = createDebug.enabled(namespace);
    debug.useColors = createDebug.useColors();
    debug.color = selectColor(namespace);
    debug.destroy = destroy;
    debug.extend = extend; // Debug.formatArgs = formatArgs;
    // debug.rawLog = rawLog;
    // env-specific initialization logic for debug instances

    if (typeof createDebug.init === 'function') {
      createDebug.init(debug);
    }

    createDebug.instances.push(debug);
    return debug;
  }

  function destroy() {
    var index = createDebug.instances.indexOf(this);

    if (index !== -1) {
      createDebug.instances.splice(index, 1);
      return true;
    }

    return false;
  }

  function extend(namespace, delimiter) {
    var newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
    newDebug.log = this.log;
    return newDebug;
  }
  /**
   * Enables a debug mode by namespaces. This can include modes
   * separated by a colon and wildcards.
   *
   * @param {String} namespaces
   * @api public
   */


  function enable(namespaces) {
    createDebug.save(namespaces);
    createDebug.names = [];
    createDebug.skips = [];
    var i;
    var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
    var len = split.length;

    for (i = 0; i < len; i++) {
      if (!split[i]) {
        // Ignore empty strings
        continue;
      }

      namespaces = split[i].replace(/\*/g, '.*?');

      if (namespaces[0] === '-') {
        createDebug.skips.push(new RegExp("^".concat(namespaces.substr(1), "$")));
      } else {
        createDebug.names.push(new RegExp("^".concat(namespaces, "$")));
      }
    }

    for (i = 0; i < createDebug.instances.length; i++) {
      var instance = createDebug.instances[i];
      instance.enabled = createDebug.enabled(instance.namespace);
    }
  }
  /**
   * Disable debug output.
   *
   * @returns {String} namespaces
   * @api public
   */


  function disable() {
    var namespaces = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(createDebug.names.map(toNamespace)), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(createDebug.skips.map(toNamespace).map(function (namespace) {
      return "-".concat(namespace);
    }))).join(',');
    createDebug.enable('');
    return namespaces;
  }
  /**
   * Returns true if the given mode name is enabled, false otherwise.
   *
   * @param {String} name
   * @returns {Boolean}
   * @api public
   */


  function enabled(name) {
    if (name[name.length - 1] === '*') {
      return true;
    }

    var i;
    var len;

    for (i = 0, len = createDebug.skips.length; i < len; i++) {
      if (createDebug.skips[i].test(name)) {
        return false;
      }
    }

    for (i = 0, len = createDebug.names.length; i < len; i++) {
      if (createDebug.names[i].test(name)) {
        return true;
      }
    }

    return false;
  }
  /**
   * Convert regexp to namespace
   *
   * @param {RegExp} regxep
   * @returns {String} namespace
   * @api private
   */


  function toNamespace(regexp) {
    return regexp.toString().substring(2, regexp.toString().length - 2).replace(/\.\*\?$/, '*');
  }
  /**
   * Coerce `val`.
   *
   * @param {Mixed} val
   * @returns {Mixed}
   * @api private
   */


  function coerce(val) {
    if (val instanceof Error) {
      return val.stack || val.message;
    }

    return val;
  }

  createDebug.enable(createDebug.load());
  return createDebug;
}

/* harmony default export */ __webpack_exports__["default"] = (setup);

/***/ }),

/***/ "./util/debugLib/index.js":
/*!********************************!*\
  !*** ./util/debugLib/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./util/debugLib/common.js");
/* eslint-env browser */

/**
 * This is the web browser implementation of `debug()`.
 */

var storage = localstorage();
var debugLib = {
  formatArgs: formatArgs,
  save: save,
  load: load,
  useColors: useColors,
  storage: storage
};
/**
 * Colors.
 */

debugLib.colors = ['#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC', '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF', '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC', '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF', '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC', '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033', '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366', '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933', '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC', '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF', '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'];
/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */
// eslint-disable-next-line complexity

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
    return true;
  } // Internet Explorer and Edge do not support colors.


  if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
    return false;
  } // Is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632


  return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
  typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
  // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}
/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */


function formatArgs(args) {
  args[0] = "".concat((this.useColors ? '%c' : '') + this.namespace + (this.useColors ? ' %c' : ' ') + args[0] + (this.useColors ? '%c ' : ' '), "+").concat(debugLib.humanize(this.diff));

  if (!this.useColors) {
    return;
  }

  var c = "color: ".concat(this.color);
  args.splice(1, 0, c, 'color: inherit'); // The final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into

  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function (match) {
    if (match === '%%') {
      return;
    }

    index++;

    if (match === '%c') {
      // We only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });
  args.splice(lastC, 0, c);
}
/**
 * Invokes `console.debug()` when available.
 * No-op when `console.debug` is not a "function".
 * If `console.debug` is not available, falls back
 * to `console.log`.
 *
 * @api public
 */


debugLib.log = console.debug || console.log || function () {};
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */


function save(namespaces) {
  try {
    if (namespaces) {
      debugLib.storage.setItem('debug', namespaces);
    } else {
      debugLib.storage.removeItem('debug');
    }
  } catch (error) {// Swallow
    // XXX (@Qix-) should we be logging these?
  }
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */


function load() {
  var r;

  try {
    r = debugLib.storage.getItem('debug');
  } catch (error) {
    console.warn(error);
  } // Swallow
  // XXX (@Qix-) should we be logging these?
  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG


  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}
/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */


function localstorage() {
  try {
    // TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
    // The Browser also has localStorage in the global context.
    return localStorage;
  } catch (error) {// Swallow
    // XXX (@Qix-) should we be logging these?
  }
}

var setupDebug = Object(_common_js__WEBPACK_IMPORTED_MODULE_0__["default"])(debugLib);
var formatters = setupDebug.formatters;
/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

formatters.j = function (v) {
  try {
    return JSON.stringify(v);
  } catch (error) {
    return "[UnexpectedJSONParseError]: ".concat(error.message);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (setupDebug);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/process/browser.js */ "../node_modules/process/browser.js")))

/***/ })

})
//# sourceMappingURL=cornerstoneTools.edb5f705e76316841eb2.hot-update.js.map