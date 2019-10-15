/*! cornerstone-tools - 3.0.1 - 2019-10-15 | (c) 2017 Chris Hafey | https://github.com/cornerstonejs/cornerstoneTools */
webpackHotUpdate("cornerstoneTools",{

/***/ "./tools/annotation/LengthTool.js":
/*!****************************************!*\
  !*** ./tools/annotation/LengthTool.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LengthTool; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _externalModules_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../externalModules.js */ "./externalModules.js");
/* harmony import */ var _base_BaseAnnotationTool_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../base/BaseAnnotationTool.js */ "./tools/base/BaseAnnotationTool.js");
/* harmony import */ var _stateManagement_toolState_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../stateManagement/toolState.js */ "./stateManagement/toolState.js");
/* harmony import */ var _stateManagement_toolStyle_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../stateManagement/toolStyle.js */ "./stateManagement/toolStyle.js");
/* harmony import */ var _stateManagement_toolColors_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../stateManagement/toolColors.js */ "./stateManagement/toolColors.js");
/* harmony import */ var _drawing_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../drawing/index.js */ "./drawing/index.js");
/* harmony import */ var _drawing_drawLinkedTextBox_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../drawing/drawLinkedTextBox.js */ "./drawing/drawLinkedTextBox.js");
/* harmony import */ var _drawing_drawHandles_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../../drawing/drawHandles.js */ "./drawing/drawHandles.js");
/* harmony import */ var _util_lineSegDistance_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../../util/lineSegDistance.js */ "./util/lineSegDistance.js");
/* harmony import */ var _cursors_index_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../cursors/index.js */ "./tools/cursors/index.js");
/* harmony import */ var _util_logger_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../util/logger.js */ "./util/logger.js");






 // State



 // Drawing







var logger = Object(_util_logger_js__WEBPACK_IMPORTED_MODULE_15__["getLogger"])('tools:annotation:LengthTool');
/**
 * @public
 * @class LengthTool
 * @memberof Tools.Annotation
 * @classdesc Tool for measuring distances.
 * @extends Tools.Base.BaseAnnotationTool
 */

var LengthTool =
/*#__PURE__*/
function (_BaseAnnotationTool) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(LengthTool, _BaseAnnotationTool);

  function LengthTool() {
    var _this;

    var configuration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, LengthTool);

    var defaultConfig = {
      name: 'Length',
      supportedInteractionTypes: ['Mouse', 'Touch'],
      svgCursor: _cursors_index_js__WEBPACK_IMPORTED_MODULE_14__["lengthCursor"]
    };
    var initialConfiguration = Object.assign(defaultConfig, configuration);
    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(LengthTool).call(this, initialConfiguration));
    _this.initialConfiguration = initialConfiguration;
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(LengthTool, [{
    key: "createNewMeasurement",
    value: function createNewMeasurement(eventData) {
      var goodEventData = eventData && eventData.currentPoints && eventData.currentPoints.image;

      if (!goodEventData) {
        logger.error("required eventData not supplied to tool ".concat(this.name, "'s createNewMeasurement"));
        return;
      }

      var _eventData$currentPoi = eventData.currentPoints.image,
          x = _eventData$currentPoi.x,
          y = _eventData$currentPoi.y;
      return {
        visible: true,
        active: true,
        color: undefined,
        handles: {
          start: {
            x: x,
            y: y,
            highlight: true,
            active: false
          },
          end: {
            x: x,
            y: y,
            highlight: true,
            active: true
          },
          textBox: {
            active: false,
            hasMoved: false,
            movesIndependently: false,
            drawnIndependently: true,
            allowedOutsideImage: true,
            hasBoundingBox: true
          }
        }
      };
    }
    /**
     *
     *
     * @param {*} element
     * @param {*} data
     * @param {*} coords
     * @returns {Boolean}
     */

  }, {
    key: "pointNearTool",
    value: function pointNearTool(element, data, coords) {
      var hasStartAndEndHandles = data && data.handles && data.handles.start && data.handles.end;
      var validParameters = hasStartAndEndHandles;

      if (!validParameters) {
        logger.warn("invalid parameters supplied to tool ".concat(this.name, "'s pointNearTool"));
        return false;
      }

      if (data.visible === false) {
        return false;
      }

      return Object(_util_lineSegDistance_js__WEBPACK_IMPORTED_MODULE_13__["default"])(element, data.handles.start, data.handles.end, coords) < 25;
    }
  }, {
    key: "renderToolData",
    value: function renderToolData(evt) {
      var _this2 = this;

      var eventData = evt.detail;
      var _this$configuration = this.configuration,
          handleRadius = _this$configuration.handleRadius,
          drawHandlesOnHover = _this$configuration.drawHandlesOnHover;
      var toolData = Object(_stateManagement_toolState_js__WEBPACK_IMPORTED_MODULE_7__["getToolState"])(evt.currentTarget, this.name);

      if (!toolData) {
        return;
      } // We have tool data for this element - iterate over each one and draw it


      var context = Object(_drawing_index_js__WEBPACK_IMPORTED_MODULE_10__["getNewContext"])(eventData.canvasContext.canvas);
      var image = eventData.image,
          element = eventData.element;
      var lineWidth = _stateManagement_toolStyle_js__WEBPACK_IMPORTED_MODULE_8__["default"].getToolWidth();
      var imagePlane = _externalModules_js__WEBPACK_IMPORTED_MODULE_5__["default"].cornerstone.metaData.get('imagePlaneModule', image.imageId);
      var rowPixelSpacing;
      var colPixelSpacing;

      if (imagePlane) {
        rowPixelSpacing = imagePlane.rowPixelSpacing || imagePlane.rowImagePixelSpacing;
        colPixelSpacing = imagePlane.columnPixelSpacing || imagePlane.colImagePixelSpacing;
      } else {
        rowPixelSpacing = image.rowPixelSpacing;
        colPixelSpacing = image.columnPixelSpacing;
      }

      var _loop = function _loop(i) {
        var data = toolData.data[i];

        if (data.visible === false) {
          return "continue";
        }

        Object(_drawing_index_js__WEBPACK_IMPORTED_MODULE_10__["draw"])(context, function (context) {
          // Configurable shadow
          Object(_drawing_index_js__WEBPACK_IMPORTED_MODULE_10__["setShadow"])(context, _this2.configuration);
          var color = _stateManagement_toolColors_js__WEBPACK_IMPORTED_MODULE_9__["default"].getColorIfActive(data); // Draw the measurement line

          Object(_drawing_index_js__WEBPACK_IMPORTED_MODULE_10__["drawLine"])(context, element, data.handles.start, data.handles.end, {
            color: color
          }); // Draw the handles

          var handleOptions = {
            color: color,
            handleRadius: handleRadius,
            drawHandlesIfActive: drawHandlesOnHover
          };
          Object(_drawing_drawHandles_js__WEBPACK_IMPORTED_MODULE_12__["default"])(context, eventData, data.handles, handleOptions); // Set rowPixelSpacing and columnPixelSpacing to 1 if they are undefined (or zero)

          var dx = (data.handles.end.x - data.handles.start.x) * (colPixelSpacing || 1);
          var dy = (data.handles.end.y - data.handles.start.y) * (rowPixelSpacing || 1); // Calculate the length, and create the text variable with the millimeters or pixels suffix

          var length = Math.sqrt(dx * dx + dy * dy); // Store the length inside the tool for outside access

          data.length = length;

          if (!data.handles.textBox.hasMoved) {
            var coords = {
              x: Math.max(data.handles.start.x, data.handles.end.x)
            }; // Depending on which handle has the largest x-value,
            // Set the y-value for the text box

            if (coords.x === data.handles.start.x) {
              coords.y = data.handles.start.y;
            } else {
              coords.y = data.handles.end.y;
            }

            data.handles.textBox.x = coords.x;
            data.handles.textBox.y = coords.y;
          } // Move the textbox slightly to the right and upwards
          // So that it sits beside the length tool handle


          var xOffset = 10;
          var text = '';
          Object(_drawing_drawLinkedTextBox_js__WEBPACK_IMPORTED_MODULE_11__["default"])(context, element, data.handles.textBox, text, data.handles, textBoxAnchorPoints, color, lineWidth, xOffset, true);
        });
      };

      for (var i = 0; i < toolData.data.length; i++) {
        var _ret = _loop(i);

        if (_ret === "continue") continue;
      }

      function textBoxText(data, rowPixelSpacing, colPixelSpacing) {
        // Set the length text suffix depending on whether or not pixelSpacing is available
        var suffix = ' mm';

        if (!rowPixelSpacing || !colPixelSpacing) {
          suffix = ' pixels';
        }

        return "".concat(data.length.toFixed(2)).concat(suffix);
      }

      function textBoxAnchorPoints(handles) {
        var midpoint = {
          x: (handles.start.x + handles.end.x) / 2,
          y: (handles.start.y + handles.end.y) / 2
        };
        return [handles.start, midpoint, handles.end];
      }
    }
  }]);

  return LengthTool;
}(_base_BaseAnnotationTool_js__WEBPACK_IMPORTED_MODULE_6__["default"]);



/***/ })

})
//# sourceMappingURL=cornerstoneTools.483ba9e3a523077946a3.hot-update.js.map