/*! cornerstone-tools - 3.0.1 - 2019-10-15 | (c) 2017 Chris Hafey | https://github.com/cornerstonejs/cornerstoneTools */
webpackHotUpdate("cornerstoneTools",{

/***/ "./drawing/drawEllipse.js":
/*!********************************!*\
  !*** ./drawing/drawEllipse.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _externalModules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../externalModules.js */ "./externalModules.js");
/* harmony import */ var _path_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./path.js */ "./drawing/path.js");
/* harmony import */ var _util_pointProjector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/pointProjector.js */ "./util/pointProjector.js");



/**
 * Draw an ellipse within the bounding box defined by `corner1` and `corner2`.
 * @public
 * @method drawEllipse
 * @memberof Drawing
 *
 * @param {CanvasRenderingContext2D} context - Target context
 * @param {HTMLElement} element - The DOM Element to draw on
 * @param {Object} corner1 - `{ x, y }` in either pixel or canvas coordinates.
 * @param {Object} corner2 - `{ x, y }` in either pixel or canvas coordinates.
 * @param {Object} options - See {@link path}
 * @param {String} [coordSystem='pixel'] - Can be "pixel" (default) or "canvas". The coordinate
 *     system of the points passed in to the function. If "pixel" then cornerstone.pixelToCanvas
 *     is used to transform the points from pixel to canvas coordinates.
 * @param {Number} initialRotation - Ellipse initial rotation
 * @returns {undefined}
 */

/* harmony default export */ __webpack_exports__["default"] = (function (context, element, corner1, corner2, options) {
  var coordSystem = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 'pixel';
  var initialRotation = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0.0;

  if (coordSystem === 'pixel') {
    corner1 = _externalModules_js__WEBPACK_IMPORTED_MODULE_0__["default"].cornerstone.pixelToCanvas(element, corner1);
    corner2 = _externalModules_js__WEBPACK_IMPORTED_MODULE_0__["default"].cornerstone.pixelToCanvas(element, corner2);
  }

  var viewport = _externalModules_js__WEBPACK_IMPORTED_MODULE_0__["default"].cornerstone.getViewport(element); // Calculate the center of the image

  var width = element.clientWidth,
      height = element.clientHeight;
  var scale = viewport.scale,
      translation = viewport.translation;
  var rotation = viewport.rotation - initialRotation;
  var centerPoint = {
    x: width / 2 + translation.x * scale,
    y: height / 2 + translation.y * scale
  };

  if (Math.abs(rotation) > 0.05) {
    corner1 = Object(_util_pointProjector_js__WEBPACK_IMPORTED_MODULE_2__["rotatePoint"])(corner1, centerPoint, -rotation);
    corner2 = Object(_util_pointProjector_js__WEBPACK_IMPORTED_MODULE_2__["rotatePoint"])(corner2, centerPoint, -rotation);
  }

  var w = Math.abs(corner1.x - corner2.x);
  var h = Math.abs(corner1.y - corner2.y);
  var xMin = Math.min(corner1.x, corner2.x);
  var yMin = Math.min(corner1.y, corner2.y);
  var center = {
    x: xMin + w / 2,
    y: yMin + h / 2
  };

  if (Math.abs(rotation) > 0.05) {
    center = Object(_util_pointProjector_js__WEBPACK_IMPORTED_MODULE_2__["rotatePoint"])(center, centerPoint, rotation);
  }

  var angle = rotation * Math.PI / 180;
  Object(_path_js__WEBPACK_IMPORTED_MODULE_1__["default"])(context, options, function (context) {
    context.ellipse(center.x, center.y, w / 2, h / 2, angle, 0, 2 * Math.PI);
    context.closePath();
  });
});

/***/ }),

/***/ "./drawing/drawRect.js":
/*!*****************************!*\
  !*** ./drawing/drawRect.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _externalModules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../externalModules.js */ "./externalModules.js");
/* harmony import */ var _path_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./path.js */ "./drawing/path.js");
/* harmony import */ var _util_pointProjector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/pointProjector.js */ "./util/pointProjector.js");



/**
 * Draw a rectangle defined by `corner1` and `corner2`.
 * @public
 * @method drawRect
 * @memberof Drawing
 *
 * @param {CanvasRenderingContext2D} context - Target context
 * @param {HTMLElement} element - The DOM Element to draw on
 * @param {Object} corner1 - `{ x, y }` in either pixel or canvas coordinates.
 * @param {Object} corner2 - `{ x, y }` in either pixel or canvas coordinates.
 * @param {Object} options - See {@link path}
 * @param {String} [coordSystem='pixel'] - Can be "pixel" (default) or "canvas". The coordinate
 *     system of the points passed in to the function. If "pixel" then cornerstone.pixelToCanvas
 *     is used to transform the points from pixel to canvas coordinates.
 * @param {Number} initialRotation - Rectangle initial rotation
 * @returns {undefined}
 */

/* harmony default export */ __webpack_exports__["default"] = (function (context, element, corner1, corner2, options) {
  var coordSystem = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 'pixel';
  var initialRotation = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0.0;

  if (coordSystem === 'pixel') {
    var cornerstone = _externalModules_js__WEBPACK_IMPORTED_MODULE_0__["default"].cornerstone;
    corner1 = cornerstone.pixelToCanvas(element, corner1);
    corner2 = cornerstone.pixelToCanvas(element, corner2);
  }

  var viewport = _externalModules_js__WEBPACK_IMPORTED_MODULE_0__["default"].cornerstone.getViewport(element); // Calculate the center of the image

  var width = element.clientWidth,
      height = element.clientHeight;
  var scale = viewport.scale,
      translation = viewport.translation;
  var rotation = viewport.rotation - initialRotation;
  var centerPoint = {
    x: width / 2 + translation.x * scale,
    y: height / 2 + translation.y * scale
  };

  if (Math.abs(rotation) > 0.05) {
    corner1 = Object(_util_pointProjector_js__WEBPACK_IMPORTED_MODULE_2__["rotatePoint"])(corner1, centerPoint, -rotation);
    corner2 = Object(_util_pointProjector_js__WEBPACK_IMPORTED_MODULE_2__["rotatePoint"])(corner2, centerPoint, -rotation);
  }

  var w = Math.abs(corner1.x - corner2.x);
  var h = Math.abs(corner1.y - corner2.y);
  corner1 = {
    x: Math.min(corner1.x, corner2.x),
    y: Math.min(corner1.y, corner2.y)
  };
  corner2 = {
    x: corner1.x + w,
    y: corner1.y + h
  };
  var corner3 = {
    x: corner1.x + w,
    y: corner1.y
  };
  var corner4 = {
    x: corner1.x,
    y: corner1.y + h
  };

  if (Math.abs(rotation) > 0.05) {
    corner1 = Object(_util_pointProjector_js__WEBPACK_IMPORTED_MODULE_2__["rotatePoint"])(corner1, centerPoint, rotation);
    corner2 = Object(_util_pointProjector_js__WEBPACK_IMPORTED_MODULE_2__["rotatePoint"])(corner2, centerPoint, rotation);
    corner3 = Object(_util_pointProjector_js__WEBPACK_IMPORTED_MODULE_2__["rotatePoint"])(corner3, centerPoint, rotation);
    corner4 = Object(_util_pointProjector_js__WEBPACK_IMPORTED_MODULE_2__["rotatePoint"])(corner4, centerPoint, rotation);
  }

  Object(_path_js__WEBPACK_IMPORTED_MODULE_1__["default"])(context, options, function (context) {
    context.moveTo(corner1.x, corner1.y);
    context.lineTo(corner3.x, corner3.y);
    context.moveTo(corner3.x, corner3.y);
    context.lineTo(corner2.x, corner2.y);
    context.moveTo(corner2.x, corner2.y);
    context.lineTo(corner4.x, corner4.y);
    context.moveTo(corner4.x, corner4.y);
    context.lineTo(corner1.x, corner1.y);
  });
});

/***/ }),

/***/ "./tools/annotation/EllipticalRoiTool.js":
/*!***********************************************!*\
  !*** ./tools/annotation/EllipticalRoiTool.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EllipticalRoiTool; });
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
/* harmony import */ var _util_calculateSUV_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../util/calculateSUV.js */ "./util/calculateSUV.js");
/* harmony import */ var _util_ellipse_index_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../../util/ellipse/index.js */ "./util/ellipse/index.js");
/* harmony import */ var _util_numbersWithCommas_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../../util/numbersWithCommas.js */ "./util/numbersWithCommas.js");
/* harmony import */ var _util_throttle_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./../../util/throttle.js */ "./util/throttle.js");
/* harmony import */ var _cursors_index_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../cursors/index.js */ "./tools/cursors/index.js");
/* harmony import */ var _util_logger_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../util/logger.js */ "./util/logger.js");






 // State



 // Drawing

 // Util







var logger = Object(_util_logger_js__WEBPACK_IMPORTED_MODULE_16__["getLogger"])('tools:annotation:EllipticalRoiTool');
/**
 * @public
 * @class EllipticalRoiTool
 * @memberof Tools.Annotation
 * @classdesc Tool for drawing elliptical regions of interest, and measuring
 * the statistics of the enclosed pixels.
 * @extends Tools.Base.BaseAnnotationTool
 */

var EllipticalRoiTool =
/*#__PURE__*/
function (_BaseAnnotationTool) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(EllipticalRoiTool, _BaseAnnotationTool);

  function EllipticalRoiTool() {
    var _this;

    var configuration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, EllipticalRoiTool);

    var defaultConfig = {
      name: 'EllipticalRoi',
      supportedInteractionTypes: ['Mouse', 'Touch'],
      configuration: {// showMinMax: false,
        // showHounsfieldUnits: true,
      },
      svgCursor: _cursors_index_js__WEBPACK_IMPORTED_MODULE_15__["ellipticalRoiCursor"]
    };
    var initialConfiguration = Object.assign(defaultConfig, configuration);
    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(EllipticalRoiTool).call(this, initialConfiguration));
    _this.initialConfiguration = initialConfiguration;
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(EllipticalRoiTool, [{
    key: "createNewMeasurement",
    value: function createNewMeasurement(eventData) {
      var goodEventData = eventData && eventData.currentPoints && eventData.currentPoints.image;

      if (!goodEventData) {
        logger.error("required eventData not supplied to tool ".concat(this.name, "'s createNewMeasurement"));
        return;
      }

      return {
        visible: true,
        active: true,
        color: undefined,
        invalidated: true,
        handles: {
          start: {
            x: eventData.currentPoints.image.x,
            y: eventData.currentPoints.image.y,
            highlight: true,
            active: false
          },
          end: {
            x: eventData.currentPoints.image.x,
            y: eventData.currentPoints.image.y,
            highlight: true,
            active: true
          },
          initialRotation: eventData.viewport.rotation,
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
  }, {
    key: "pointNearTool",
    value: function pointNearTool(element, data, coords, interactionType) {
      var hasStartAndEndHandles = data && data.handles && data.handles.start && data.handles.end;
      var validParameters = hasStartAndEndHandles;

      if (!validParameters) {
        logger.warn("invalid parameters supplied to tool ".concat(this.name, "'s pointNearTool"));
      }

      if (!validParameters || data.visible === false) {
        return false;
      }

      var distance = interactionType === 'mouse' ? 15 : 25;
      var startCanvas = _externalModules_js__WEBPACK_IMPORTED_MODULE_5__["default"].cornerstone.pixelToCanvas(element, data.handles.start);
      var endCanvas = _externalModules_js__WEBPACK_IMPORTED_MODULE_5__["default"].cornerstone.pixelToCanvas(element, data.handles.end);
      var minorEllipse = {
        left: Math.min(startCanvas.x, endCanvas.x) + distance / 2,
        top: Math.min(startCanvas.y, endCanvas.y) + distance / 2,
        width: Math.abs(startCanvas.x - endCanvas.x) - distance,
        height: Math.abs(startCanvas.y - endCanvas.y) - distance
      };
      var majorEllipse = {
        left: Math.min(startCanvas.x, endCanvas.x) - distance / 2,
        top: Math.min(startCanvas.y, endCanvas.y) - distance / 2,
        width: Math.abs(startCanvas.x - endCanvas.x) + distance,
        height: Math.abs(startCanvas.y - endCanvas.y) + distance
      };
      var pointInMinorEllipse = Object(_util_ellipse_index_js__WEBPACK_IMPORTED_MODULE_12__["pointInEllipse"])(minorEllipse, coords);
      var pointInMajorEllipse = Object(_util_ellipse_index_js__WEBPACK_IMPORTED_MODULE_12__["pointInEllipse"])(majorEllipse, coords);

      if (pointInMajorEllipse && !pointInMinorEllipse) {
        return true;
      }

      return false;
    }
  }, {
    key: "renderToolData",
    value: function renderToolData(evt) {
      var _this2 = this;

      var toolData = Object(_stateManagement_toolState_js__WEBPACK_IMPORTED_MODULE_7__["getToolState"])(evt.currentTarget, this.name);

      if (!toolData) {
        return;
      }

      var eventData = evt.detail;
      var image = eventData.image,
          element = eventData.element;
      var lineWidth = _stateManagement_toolStyle_js__WEBPACK_IMPORTED_MODULE_8__["default"].getToolWidth();
      var _this$configuration = this.configuration,
          handleRadius = _this$configuration.handleRadius,
          drawHandlesOnHover = _this$configuration.drawHandlesOnHover;
      var context = Object(_drawing_index_js__WEBPACK_IMPORTED_MODULE_10__["getNewContext"])(eventData.canvasContext.canvas); // Meta

      var seriesModule = _externalModules_js__WEBPACK_IMPORTED_MODULE_5__["default"].cornerstone.metaData.get('generalSeriesModule', image.imageId) || {};
      var imagePlane = _externalModules_js__WEBPACK_IMPORTED_MODULE_5__["default"].cornerstone.metaData.get('imagePlaneModule', image.imageId); // Pixel Spacing

      var modality = seriesModule.modality;
      var hasPixelSpacing = imagePlane && imagePlane.rowPixelSpacing && imagePlane.columnPixelSpacing;
      imagePlane = imagePlane || {};
      var pixelSpacing = {
        rowPixelSpacing: imagePlane.rowPixelSpacing || 1,
        columnPixelSpacing: imagePlane.columnPixelSpacing || 1
      };
      Object(_drawing_index_js__WEBPACK_IMPORTED_MODULE_10__["draw"])(context, function (context) {
        // If we have tool data for this element - iterate over each set and draw it
        for (var i = 0; i < toolData.data.length; i++) {
          var data = toolData.data[i];

          if (data.visible === false) {
            continue;
          } // Configure


          var color = _stateManagement_toolColors_js__WEBPACK_IMPORTED_MODULE_9__["default"].getColorIfActive(data);
          var handleOptions = {
            color: color,
            handleRadius: handleRadius,
            drawHandlesIfActive: drawHandlesOnHover
          };
          Object(_drawing_index_js__WEBPACK_IMPORTED_MODULE_10__["setShadow"])(context, _this2.configuration); // Draw

          Object(_drawing_index_js__WEBPACK_IMPORTED_MODULE_10__["drawEllipse"])(context, element, data.handles.start, data.handles.end, {
            color: color
          }, 'pixel', data.handles.initialRotation);
          Object(_drawing_index_js__WEBPACK_IMPORTED_MODULE_10__["drawHandles"])(context, eventData, data.handles, handleOptions); // Update textbox stats

          if (data.invalidated === true) {
            if (data.cachedStats) {
              _throttledUpdateCachedStats(image, element, data, modality, pixelSpacing);
            } else {
              _updateCachedStats(image, element, data, modality, pixelSpacing);
            }
          } // Default to textbox on right side of ROI


          if (!data.handles.textBox.hasMoved) {
            data.handles.textBox.x = Math.max(data.handles.start.x, data.handles.end.x);
            data.handles.textBox.y = (data.handles.start.y + data.handles.end.y) / 2;
          }

          var textBoxAnchorPoints = function textBoxAnchorPoints(handles) {
            return _findTextBoxAnchorPoints(handles.start, handles.end);
          };

          var textBoxContent = _createTextBoxContent(context, image.color, data.cachedStats, modality, hasPixelSpacing, _this2.configuration);

          Object(_drawing_index_js__WEBPACK_IMPORTED_MODULE_10__["drawLinkedTextBox"])(context, element, data.handles.textBox, textBoxContent, data.handles, textBoxAnchorPoints, color, lineWidth, 0, true);
        }
      });
    }
  }]);

  return EllipticalRoiTool;
}(_base_BaseAnnotationTool_js__WEBPACK_IMPORTED_MODULE_6__["default"]);
/**
 *
 */




var _throttledUpdateCachedStats = Object(_util_throttle_js__WEBPACK_IMPORTED_MODULE_14__["default"])(_updateCachedStats, 110);
/**
 *
 *
 * @param {*} image
 * @param {*} element
 * @param {*} data
 * @param {string} modality
 * @param {*} pixelSpacing
 * @returns {void}
 */


function _updateCachedStats(image, element, data, modality, pixelSpacing) {
  var stats = _calculateStats(image, element, data.handles, modality, pixelSpacing);

  data.cachedStats = stats;
  data.invalidated = false;
}
/**
 *
 *
 * @param {*} startHandle
 * @param {*} endHandle
 * @returns {Array.<{x: number, y: number}>}
 */


function _findTextBoxAnchorPoints(startHandle, endHandle) {
  var _getEllipseImageCoord = _getEllipseImageCoordinates(startHandle, endHandle),
      left = _getEllipseImageCoord.left,
      top = _getEllipseImageCoord.top,
      width = _getEllipseImageCoord.width,
      height = _getEllipseImageCoord.height;

  return [{
    // Top middle point of ellipse
    x: left + width / 2,
    y: top
  }, {
    // Left middle point of ellipse
    x: left,
    y: top + height / 2
  }, {
    // Bottom middle point of ellipse
    x: left + width / 2,
    y: top + height
  }, {
    // Right middle point of ellipse
    x: left + width,
    y: top + height / 2
  }];
}
/**
 *
 *
 * @param {*} context
 * @param {*} isColorImage
 * @param {*} { area, mean, stdDev, min, max, meanStdDevSUV }
 * @param {*} modality
 * @param {*} hasPixelSpacing
 * @param {*} [options={}] - { showMinMax, showHounsfieldUnits }
 * @returns {string[]}
 */


function _createTextBoxContent(context, isColorImage) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      area = _ref.area,
      mean = _ref.mean,
      stdDev = _ref.stdDev,
      min = _ref.min,
      max = _ref.max,
      meanStdDevSUV = _ref.meanStdDevSUV;

  var modality = arguments.length > 3 ? arguments[3] : undefined;
  var hasPixelSpacing = arguments.length > 4 ? arguments[4] : undefined;
  var options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
  var showMinMax = options.showMinMax || false;
  var showHounsfieldUnits = options.showHounsfieldUnits !== false;
  var textLines = []; // Don't display mean/standardDev for color images

  var otherLines = [];

  if (!isColorImage) {
    var hasStandardUptakeValues = meanStdDevSUV && meanStdDevSUV.mean !== 0;
    var suffix = modality === 'CT' && showHounsfieldUnits ? ' HU' : '';
    var meanString = "Mean: ".concat(Object(_util_numbersWithCommas_js__WEBPACK_IMPORTED_MODULE_13__["default"])(mean.toFixed(2))).concat(suffix);
    var stdDevString = "Std Dev: ".concat(Object(_util_numbersWithCommas_js__WEBPACK_IMPORTED_MODULE_13__["default"])(stdDev.toFixed(2))).concat(suffix); // If this image has SUV values to display, concatenate them to the text line

    if (hasStandardUptakeValues) {
      var SUVtext = ' SUV: ';
      var meanSuvString = "".concat(SUVtext).concat(Object(_util_numbersWithCommas_js__WEBPACK_IMPORTED_MODULE_13__["default"])(meanStdDevSUV.mean.toFixed(2)));
      var stdDevSuvString = "".concat(SUVtext).concat(Object(_util_numbersWithCommas_js__WEBPACK_IMPORTED_MODULE_13__["default"])(meanStdDevSUV.stdDev.toFixed(2)));
      var targetStringLength = Math.floor(context.measureText("".concat(stdDevString, "     ")).width);

      while (context.measureText(meanString).width < targetStringLength) {
        meanString += ' ';
      }

      otherLines.push("".concat(meanString).concat(meanSuvString));
      otherLines.push("".concat(stdDevString, "     ").concat(stdDevSuvString));
    } else {
      otherLines.push("".concat(meanString, "     ").concat(stdDevString));
    }

    if (showMinMax) {
      var minString = "Min: ".concat(min).concat(suffix);
      var maxString = "Max: ".concat(max).concat(suffix);

      var _targetStringLength = hasStandardUptakeValues ? Math.floor(context.measureText("".concat(stdDevString, "     ")).width) : Math.floor(context.measureText("".concat(meanString, "     ")).width);

      while (context.measureText(minString).width < _targetStringLength) {
        minString += ' ';
      }

      otherLines.push("".concat(minString).concat(maxString));
    }
  }

  textLines.push(_formatArea(area, hasPixelSpacing));
  otherLines.forEach(function (x) {
    return textLines.push(x);
  });
  return textLines;
}
/**
 *
 *
 * @param {*} area
 * @param {*} hasPixelSpacing
 * @returns {string} The formatted label for showing area
 */


function _formatArea(area, hasPixelSpacing) {
  // This uses Char code 178 for a superscript 2
  var suffix = hasPixelSpacing ? " mm".concat(String.fromCharCode(178)) : " px".concat(String.fromCharCode(178));
  return "Area: ".concat(Object(_util_numbersWithCommas_js__WEBPACK_IMPORTED_MODULE_13__["default"])(area.toFixed(2))).concat(suffix);
}
/**
 *
 *
 * @param {*} image
 * @param {*} element
 * @param {*} handles
 * @param {*} modality
 * @param {*} pixelSpacing
 * @returns {Object} The Stats object
 */


function _calculateStats(image, element, handles, modality, pixelSpacing) {
  // Retrieve the bounds of the ellipse in image coordinates
  var ellipseCoordinates = _getEllipseImageCoordinates(handles.start, handles.end); // Retrieve the array of pixels that the ellipse bounds cover


  var pixels = _externalModules_js__WEBPACK_IMPORTED_MODULE_5__["default"].cornerstone.getPixels(element, ellipseCoordinates.left, ellipseCoordinates.top, ellipseCoordinates.width, ellipseCoordinates.height); // Calculate the mean & standard deviation from the pixels and the ellipse details.

  var ellipseMeanStdDev = Object(_util_ellipse_index_js__WEBPACK_IMPORTED_MODULE_12__["calculateEllipseStatistics"])(pixels, ellipseCoordinates);
  var meanStdDevSUV;

  if (modality === 'PT') {
    meanStdDevSUV = {
      mean: Object(_util_calculateSUV_js__WEBPACK_IMPORTED_MODULE_11__["default"])(image, ellipseMeanStdDev.mean, true) || 0,
      stdDev: Object(_util_calculateSUV_js__WEBPACK_IMPORTED_MODULE_11__["default"])(image, ellipseMeanStdDev.stdDev, true) || 0
    };
  } // Calculate the image area from the ellipse dimensions and pixel spacing


  var area = Math.PI * (ellipseCoordinates.width * (pixelSpacing.columnPixelSpacing || 1) / 2) * (ellipseCoordinates.height * (pixelSpacing.rowPixelSpacing || 1) / 2);
  return {
    area: area || 0,
    count: ellipseMeanStdDev.count || 0,
    mean: ellipseMeanStdDev.mean || 0,
    variance: ellipseMeanStdDev.variance || 0,
    stdDev: ellipseMeanStdDev.stdDev || 0,
    min: ellipseMeanStdDev.min || 0,
    max: ellipseMeanStdDev.max || 0,
    meanStdDevSUV: meanStdDevSUV
  };
}
/**
 * Retrieve the bounds of the ellipse in image coordinates
 *
 * @param {*} startHandle
 * @param {*} endHandle
 * @returns {{ left: number, top: number, width: number, height: number }}
 */


function _getEllipseImageCoordinates(startHandle, endHandle) {
  return {
    left: Math.round(Math.min(startHandle.x, endHandle.x)),
    top: Math.round(Math.min(startHandle.y, endHandle.y)),
    width: Math.round(Math.abs(startHandle.x - endHandle.x)),
    height: Math.round(Math.abs(startHandle.y - endHandle.y))
  };
}

/***/ }),

/***/ "./tools/annotation/FreehandMouseTool.js":
/*!***********************************************!*\
  !*** ./tools/annotation/FreehandMouseTool.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FreehandMouseTool; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "../node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "../node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _events_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../events.js */ "./events.js");
/* harmony import */ var _externalModules_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../externalModules.js */ "./externalModules.js");
/* harmony import */ var _base_BaseAnnotationTool_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../base/BaseAnnotationTool.js */ "./tools/base/BaseAnnotationTool.js");
/* harmony import */ var _stateManagement_toolState_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../stateManagement/toolState.js */ "./stateManagement/toolState.js");
/* harmony import */ var _stateManagement_toolStyle_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../stateManagement/toolStyle.js */ "./stateManagement/toolStyle.js");
/* harmony import */ var _stateManagement_toolColors_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../../stateManagement/toolColors.js */ "./stateManagement/toolColors.js");
/* harmony import */ var _store_index_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../store/index.js */ "./store/index.js");
/* harmony import */ var _util_findAndMoveHelpers_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../util/findAndMoveHelpers.js */ "./util/findAndMoveHelpers.js");
/* harmony import */ var _util_pointInsideBoundingBox_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../util/pointInsideBoundingBox.js */ "./util/pointInsideBoundingBox.js");
/* harmony import */ var _util_calculateSUV_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../util/calculateSUV.js */ "./util/calculateSUV.js");
/* harmony import */ var _util_numbersWithCommas_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../util/numbersWithCommas.js */ "./util/numbersWithCommas.js");
/* harmony import */ var _drawing_index_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../drawing/index.js */ "./drawing/index.js");
/* harmony import */ var _drawing_drawLinkedTextBox_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../drawing/drawLinkedTextBox.js */ "./drawing/drawLinkedTextBox.js");
/* harmony import */ var _drawing_drawHandles_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../drawing/drawHandles.js */ "./drawing/drawHandles.js");
/* harmony import */ var _util_clip_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../util/clip.js */ "./util/clip.js");
/* harmony import */ var _store_setToolCursor_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../store/setToolCursor.js */ "./store/setToolCursor.js");
/* harmony import */ var _cursors_index_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../cursors/index.js */ "./tools/cursors/index.js");
/* harmony import */ var _util_freehand_index_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../util/freehand/index.js */ "./util/freehand/index.js");
/* harmony import */ var _util_logger_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../util/logger.js */ "./util/logger.js");









 // State




 // Manipulators

 // Implementation Logic



 // Drawing









var logger = Object(_util_logger_js__WEBPACK_IMPORTED_MODULE_25__["getLogger"])('tools:annotation:FreehandMouseTool');
var insertOrDelete = _util_freehand_index_js__WEBPACK_IMPORTED_MODULE_24__["default"].insertOrDelete,
    freehandArea = _util_freehand_index_js__WEBPACK_IMPORTED_MODULE_24__["default"].freehandArea,
    calculateFreehandStatistics = _util_freehand_index_js__WEBPACK_IMPORTED_MODULE_24__["default"].calculateFreehandStatistics,
    freehandIntersect = _util_freehand_index_js__WEBPACK_IMPORTED_MODULE_24__["default"].freehandIntersect,
    FreehandHandleData = _util_freehand_index_js__WEBPACK_IMPORTED_MODULE_24__["default"].FreehandHandleData;
/**
 * @public
 * @class FreehandMouseTool
 * @memberof Tools.Annotation
 * @classdesc Tool for drawing arbitrary polygonal regions of interest, and
 * measuring the statistics of the enclosed pixels.
 * @extends Tools.Base.BaseAnnotationTool
 */

var FreehandMouseTool =
/*#__PURE__*/
function (_BaseAnnotationTool) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(FreehandMouseTool, _BaseAnnotationTool);

  function FreehandMouseTool() {
    var _this;

    var configuration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, FreehandMouseTool);

    var defaultConfig = {
      name: 'FreehandMouse',
      supportedInteractionTypes: ['Mouse', 'Touch'],
      configuration: defaultFreehandConfiguration(),
      svgCursor: _cursors_index_js__WEBPACK_IMPORTED_MODULE_23__["freehandMouseCursor"]
    };
    var initialConfiguration = Object.assign(defaultConfig, configuration);
    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(FreehandMouseTool).call(this, initialConfiguration));
    _this.initialConfiguration = initialConfiguration;
    _this.isMultiPartTool = true;
    _this._drawing = false;
    _this._dragging = false;
    _this._modifying = false; // Create bound callback functions for private event loops

    _this._drawingMouseDownCallback = _this._drawingMouseDownCallback.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    _this._drawingMouseMoveCallback = _this._drawingMouseMoveCallback.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    _this._drawingMouseDragCallback = _this._drawingMouseDragCallback.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    _this._drawingMouseUpCallback = _this._drawingMouseUpCallback.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    _this._drawingMouseDoubleClickCallback = _this._drawingMouseDoubleClickCallback.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    _this._editMouseUpCallback = _this._editMouseUpCallback.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    _this._editMouseDragCallback = _this._editMouseDragCallback.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    _this._drawingTouchStartCallback = _this._drawingTouchStartCallback.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    _this._drawingTouchDragCallback = _this._drawingTouchDragCallback.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    _this._drawingDoubleTapClickCallback = _this._drawingDoubleTapClickCallback.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    _this._editTouchDragCallback = _this._editTouchDragCallback.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(FreehandMouseTool, [{
    key: "createNewMeasurement",
    value: function createNewMeasurement(eventData) {
      var goodEventData = eventData && eventData.currentPoints && eventData.currentPoints.image;

      if (!goodEventData) {
        logger.error("required eventData not supplied to tool ".concat(this.name, "'s createNewMeasurement"));
        return;
      }

      var measurementData = {
        visible: true,
        active: true,
        invalidated: true,
        color: undefined,
        handles: {
          points: []
        }
      };
      measurementData.handles.textBox = {
        active: false,
        hasMoved: false,
        movesIndependently: false,
        drawnIndependently: true,
        allowedOutsideImage: true,
        hasBoundingBox: true
      };
      return measurementData;
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
      var validParameters = data && data.handles && data.handles.points;

      if (!validParameters) {
        throw new Error("invalid parameters supplied to tool ".concat(this.name, "'s pointNearTool"));
      }

      if (!validParameters || data.visible === false) {
        return false;
      }

      var isPointNearTool = this._pointNearHandle(element, data, coords);

      if (isPointNearTool !== undefined) {
        return true;
      }

      return false;
    }
    /**
     * @param {*} element
     * @param {*} data
     * @param {*} coords
     * @returns {number} the distance in px from the provided coordinates to the
     * closest rendered portion of the annotation. -1 if the distance cannot be
     * calculated.
     */

  }, {
    key: "distanceFromPoint",
    value: function distanceFromPoint(element, data, coords) {
      var distance = Infinity;

      for (var i = 0; i < data.handles.points.length; i++) {
        var distanceI = _externalModules_js__WEBPACK_IMPORTED_MODULE_8__["default"].cornerstoneMath.point.distance(data.handles.points[i], coords);
        distance = Math.min(distance, distanceI);
      } // If an error caused distance not to be calculated, return -1.


      if (distance === Infinity) {
        return -1;
      }

      return distance;
    }
    /**
     * @param {*} element
     * @param {*} data
     * @param {*} coords
     * @returns {number} the distance in canvas units from the provided coordinates to the
     * closest rendered portion of the annotation. -1 if the distance cannot be
     * calculated.
     */

  }, {
    key: "distanceFromPointCanvas",
    value: function distanceFromPointCanvas(element, data, coords) {
      var distance = Infinity;

      if (!data) {
        return -1;
      }

      var canvasCoords = _externalModules_js__WEBPACK_IMPORTED_MODULE_8__["default"].cornerstone.pixelToCanvas(element, coords);
      var points = data.handles.points;

      for (var i = 0; i < points.length; i++) {
        var handleCanvas = _externalModules_js__WEBPACK_IMPORTED_MODULE_8__["default"].cornerstone.pixelToCanvas(element, points[i]);
        var distanceI = _externalModules_js__WEBPACK_IMPORTED_MODULE_8__["default"].cornerstoneMath.point.distance(handleCanvas, canvasCoords);
        distance = Math.min(distance, distanceI);
      } // If an error caused distance not to be calculated, return -1.


      if (distance === Infinity) {
        return -1;
      }

      return distance;
    }
    /**
     *
     *
     * @param {*} evt
     * @returns {undefined}
     */

  }, {
    key: "renderToolData",
    value: function renderToolData(evt) {
      var _this2 = this;

      var eventData = evt.detail; // If we have no toolState for this element, return immediately as there is nothing to do

      var toolState = Object(_stateManagement_toolState_js__WEBPACK_IMPORTED_MODULE_10__["getToolState"])(evt.currentTarget, this.name);

      if (!toolState) {
        return;
      }

      var image = eventData.image,
          element = eventData.element;
      var config = this.configuration;
      var seriesModule = _externalModules_js__WEBPACK_IMPORTED_MODULE_8__["default"].cornerstone.metaData.get('generalSeriesModule', image.imageId);
      var modality = seriesModule ? seriesModule.modality : null; // We have tool data for this element - iterate over each one and draw it

      var context = Object(_drawing_index_js__WEBPACK_IMPORTED_MODULE_18__["getNewContext"])(eventData.canvasContext.canvas);
      var lineWidth = _stateManagement_toolStyle_js__WEBPACK_IMPORTED_MODULE_11__["default"].getToolWidth();

      var _loop = function _loop(i) {
        var data = toolState.data[i];

        if (data.visible === false) {
          return "continue";
        }

        Object(_drawing_index_js__WEBPACK_IMPORTED_MODULE_18__["draw"])(context, function (context) {
          var color = _stateManagement_toolColors_js__WEBPACK_IMPORTED_MODULE_12__["default"].getColorIfActive(data);
          var fillColor;

          if (data.active) {
            if (data.handles.invalidHandlePlacement) {
              color = config.invalidColor;
              fillColor = config.invalidColor;
            } else {
              color = _stateManagement_toolColors_js__WEBPACK_IMPORTED_MODULE_12__["default"].getColorIfActive(data);
              fillColor = _stateManagement_toolColors_js__WEBPACK_IMPORTED_MODULE_12__["default"].getFillColor();
            }
          } else {
            fillColor = _stateManagement_toolColors_js__WEBPACK_IMPORTED_MODULE_12__["default"].getToolColor();
          }

          if (data.handles.points.length) {
            for (var j = 0; j < data.handles.points.length; j++) {
              var lines = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(data.handles.points[j].lines);

              var points = data.handles.points;

              if (j === points.length - 1 && !data.polyBoundingBox) {
                // If it's still being actively drawn, keep the last line to
                // The mouse location
                lines.push(config.mouseLocation.handles.start);
              }

              Object(_drawing_index_js__WEBPACK_IMPORTED_MODULE_18__["drawJoinedLines"])(context, eventData.element, data.handles.points[j], lines, {
                color: color
              });
            }
          } // Draw handles


          var options = {
            color: color,
            fill: fillColor
          };

          if (config.alwaysShowHandles || data.active && data.polyBoundingBox) {
            // Render all handles
            options.handleRadius = config.activeHandleRadius;
            Object(_drawing_drawHandles_js__WEBPACK_IMPORTED_MODULE_20__["default"])(context, eventData, data.handles.points, options);
          }

          if (data.canComplete) {
            // Draw large handle at the origin if can complete drawing
            options.handleRadius = config.completeHandleRadius;
            var handle = data.handles.points[0];
            Object(_drawing_drawHandles_js__WEBPACK_IMPORTED_MODULE_20__["default"])(context, eventData, [handle], options);
          }

          if (data.active && !data.polyBoundingBox) {
            // Draw handle at origin and at mouse if actively drawing
            options.handleRadius = config.activeHandleRadius;
            Object(_drawing_drawHandles_js__WEBPACK_IMPORTED_MODULE_20__["default"])(context, eventData, config.mouseLocation.handles, options);
            var firstHandle = data.handles.points[0];
            Object(_drawing_drawHandles_js__WEBPACK_IMPORTED_MODULE_20__["default"])(context, eventData, [firstHandle], options);
          } // Define variables for the area and mean/standard deviation


          var area, meanStdDev, meanStdDevSUV; // Perform a check to see if the tool has been invalidated. This is to prevent
          // Unnecessary re-calculation of the area, mean, and standard deviation if the
          // Image is re-rendered but the tool has not moved (e.g. during a zoom)

          if (data.invalidated === false) {
            // If the data is not invalidated, retrieve it from the toolState
            meanStdDev = data.meanStdDev;
            meanStdDevSUV = data.meanStdDevSUV;
            area = data.area;
          } else if (!data.active) {
            var _points = data.handles.points; // If the data has been invalidated, and the tool is not currently active,
            // We need to calculate it again.
            // Retrieve the bounds of the ROI in image coordinates

            var bounds = {
              left: _points[0].x,
              right: _points[0].x,
              bottom: _points[0].y,
              top: _points[0].x
            };

            for (var _i = 0; _i < _points.length; _i++) {
              bounds.left = Math.min(bounds.left, _points[_i].x);
              bounds.right = Math.max(bounds.right, _points[_i].x);
              bounds.bottom = Math.min(bounds.bottom, _points[_i].y);
              bounds.top = Math.max(bounds.top, _points[_i].y);
            }

            var polyBoundingBox = {
              left: bounds.left,
              top: bounds.bottom,
              width: Math.abs(bounds.right - bounds.left),
              height: Math.abs(bounds.top - bounds.bottom)
            }; // Store the bounding box information for the text box

            data.polyBoundingBox = polyBoundingBox; // First, make sure this is not a color image, since no mean / standard
            // Deviation will be calculated for color images.

            if (!image.color) {
              // Retrieve the array of pixels that the ROI bounds cover
              var pixels = _externalModules_js__WEBPACK_IMPORTED_MODULE_8__["default"].cornerstone.getPixels(element, polyBoundingBox.left, polyBoundingBox.top, polyBoundingBox.width, polyBoundingBox.height); // Calculate the mean & standard deviation from the pixels and the object shape

              meanStdDev = calculateFreehandStatistics.call(_this2, pixels, polyBoundingBox, data.handles.points);

              if (modality === 'PT') {
                // If the image is from a PET scan, use the DICOM tags to
                // Calculate the SUV from the mean and standard deviation.
                // Note that because we are using modality pixel values from getPixels, and
                // The calculateSUV routine also rescales to modality pixel values, we are first
                // Returning the values to storedPixel values before calcuating SUV with them.
                // TODO: Clean this up? Should we add an option to not scale in calculateSUV?
                meanStdDevSUV = {
                  mean: Object(_util_calculateSUV_js__WEBPACK_IMPORTED_MODULE_16__["default"])(image, (meanStdDev.mean - image.intercept) / image.slope),
                  stdDev: Object(_util_calculateSUV_js__WEBPACK_IMPORTED_MODULE_16__["default"])(image, (meanStdDev.stdDev - image.intercept) / image.slope)
                };
              } // If the mean and standard deviation values are sane, store them for later retrieval


              if (meanStdDev && !isNaN(meanStdDev.mean)) {
                data.meanStdDev = meanStdDev;
                data.meanStdDevSUV = meanStdDevSUV;
              }
            } // Retrieve the pixel spacing values, and if they are not
            // Real non-zero values, set them to 1


            var columnPixelSpacing = image.columnPixelSpacing || 1;
            var rowPixelSpacing = image.rowPixelSpacing || 1;
            var scaling = columnPixelSpacing * rowPixelSpacing;
            area = freehandArea(data.handles.points, scaling); // If the area value is sane, store it for later retrieval

            if (!isNaN(area)) {
              data.area = area;
            } // Set the invalidated flag to false so that this data won't automatically be recalculated


            data.invalidated = false;
          } // Only render text if polygon ROI has been completed and freehand 'shiftKey' mode was not used:


          if (data.polyBoundingBox && !data.handles.textBox.freehand) {
            // If the textbox has not been moved by the user, it should be displayed on the right-most
            // Side of the tool.
            if (!data.handles.textBox.hasMoved) {
              // Find the rightmost side of the polyBoundingBox at its vertical center, and place the textbox here
              // Note that this calculates it in image coordinates
              data.handles.textBox.x = data.polyBoundingBox.left + data.polyBoundingBox.width;
              data.handles.textBox.y = data.polyBoundingBox.top + data.polyBoundingBox.height / 2;
            }

            var text = textBoxText.call(_this2, data);
            Object(_drawing_drawLinkedTextBox_js__WEBPACK_IMPORTED_MODULE_19__["default"])(context, element, data.handles.textBox, text, data.handles.points, textBoxAnchorPoints, color, lineWidth, 0, true);
          }
        });
      };

      for (var i = 0; i < toolState.data.length; i++) {
        var _ret = _loop(i);

        if (_ret === "continue") continue;
      }

      function textBoxText(data) {
        var meanStdDev = data.meanStdDev,
            meanStdDevSUV = data.meanStdDevSUV,
            area = data.area; // Define an array to store the rows of text for the textbox

        var textLines = []; // If the mean and standard deviation values are present, display them

        if (meanStdDev && meanStdDev.mean !== undefined) {
          // If the modality is CT, add HU to denote Hounsfield Units
          var moSuffix = '';

          if (modality === 'CT') {
            moSuffix = ' HU';
          } // Create a line of text to display the mean and any units that were specified (i.e. HU)


          var meanText = "Mean: ".concat(Object(_util_numbersWithCommas_js__WEBPACK_IMPORTED_MODULE_17__["default"])(meanStdDev.mean.toFixed(2))).concat(moSuffix); // Create a line of text to display the standard deviation and any units that were specified (i.e. HU)

          var stdDevText = "StdDev: ".concat(Object(_util_numbersWithCommas_js__WEBPACK_IMPORTED_MODULE_17__["default"])(meanStdDev.stdDev.toFixed(2))).concat(moSuffix); // If this image has SUV values to display, concatenate them to the text line

          if (meanStdDevSUV && meanStdDevSUV.mean !== undefined) {
            var SUVtext = ' SUV: ';
            meanText += SUVtext + Object(_util_numbersWithCommas_js__WEBPACK_IMPORTED_MODULE_17__["default"])(meanStdDevSUV.mean.toFixed(2));
            stdDevText += SUVtext + Object(_util_numbersWithCommas_js__WEBPACK_IMPORTED_MODULE_17__["default"])(meanStdDevSUV.stdDev.toFixed(2));
          } // Add these text lines to the array to be displayed in the textbox


          textLines.push(meanText);
          textLines.push(stdDevText);
        } // If the area is a sane value, display it


        if (area) {
          // Determine the area suffix based on the pixel spacing in the image.
          // If pixel spacing is present, use millimeters. Otherwise, use pixels.
          // This uses Char code 178 for a superscript 2
          var suffix = " mm".concat(String.fromCharCode(178));

          if (!image.rowPixelSpacing || !image.columnPixelSpacing) {
            suffix = " pixels".concat(String.fromCharCode(178));
          } // Create a line of text to display the area and its units


          var areaText = "Area: ".concat(Object(_util_numbersWithCommas_js__WEBPACK_IMPORTED_MODULE_17__["default"])(area.toFixed(2))).concat(suffix); // Add this text line to the array to be displayed in the textbox

          textLines.push(areaText);
        }

        return textLines;
      }

      function textBoxAnchorPoints(handles) {
        return handles;
      }
    }
  }, {
    key: "addNewMeasurement",
    value: function addNewMeasurement(evt) {
      var eventData = evt.detail;

      this._startDrawing(evt);

      this._addPoint(eventData);

      preventPropagation(evt);
    }
  }, {
    key: "preMouseDownCallback",
    value: function preMouseDownCallback(evt) {
      var eventData = evt.detail;

      var nearby = this._pointNearHandleAllTools(eventData);

      if (eventData.event.ctrlKey) {
        if (nearby !== undefined && nearby.handleNearby.hasBoundingBox) {// Ctrl + clicked textBox, do nothing but still consume event.
        } else {
          insertOrDelete.call(this, evt, nearby);
        }

        preventPropagation(evt);
        return true;
      }

      return false;
    }
  }, {
    key: "handleSelectedCallback",
    value: function handleSelectedCallback(evt, toolData, handle) {
      var interactionType = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'mouse';
      var eventData = evt.detail;
      var element = eventData.element;
      var toolState = Object(_stateManagement_toolState_js__WEBPACK_IMPORTED_MODULE_10__["getToolState"])(eventData.element, this.name);

      if (handle.hasBoundingBox) {
        // Use default move handler.
        Object(_util_findAndMoveHelpers_js__WEBPACK_IMPORTED_MODULE_14__["moveHandleNearImagePoint"])(evt, this, toolData, handle, interactionType);
        return;
      }

      var config = this.configuration;
      config.dragOrigin = {
        x: handle.x,
        y: handle.y
      }; // Iterating over handles of all toolData instances to find the indices of the selected handle

      for (var toolIndex = 0; toolIndex < toolState.data.length; toolIndex++) {
        var points = toolState.data[toolIndex].handles.points;

        for (var p = 0; p < points.length; p++) {
          if (points[p] === handle) {
            config.currentHandle = p;
            config.currentTool = toolIndex;
          }
        }
      }

      this._modifying = true;

      this._activateModify(element); // Interupt eventDispatchers


      preventPropagation(evt);
    }
    /**
     * Event handler for MOUSE_MOVE during drawing event loop.
     *
     * @event
     * @param {Object} evt - The event.
     * @returns {undefined}
     */

  }, {
    key: "_drawingMouseMoveCallback",
    value: function _drawingMouseMoveCallback(evt) {
      var eventData = evt.detail;
      var element = eventData.element;
      var toolState = Object(_stateManagement_toolState_js__WEBPACK_IMPORTED_MODULE_10__["getToolState"])(eventData.element, this.name);
      var config = this.configuration;
      var currentTool = config.currentTool;
      var data = toolState.data[currentTool];
      var coords = eventData.currentPoints.canvas; // Set the mouseLocation handle

      this._getMouseLocation(eventData);

      this._checkInvalidHandleLocation(data, eventData); // Mouse move -> Polygon Mode


      var handleNearby = this._pointNearHandle(element, data, coords);

      var points = data.handles.points; // If there is a handle nearby to snap to
      // (and it's not the actual mouse handle)

      if (handleNearby !== undefined && !handleNearby.hasBoundingBox && handleNearby < points.length - 1) {
        config.mouseLocation.handles.start.x = points[handleNearby].x;
        config.mouseLocation.handles.start.y = points[handleNearby].y;
      } // Force onImageRendered


      _externalModules_js__WEBPACK_IMPORTED_MODULE_8__["default"].cornerstone.updateImage(eventData.element);
    }
    /**
     * Event handler for MOUSE_DRAG during drawing event loop.
     *
     * @event
     * @param {Object} evt - The event.
     * @returns {undefined}
     */

  }, {
    key: "_drawingMouseDragCallback",
    value: function _drawingMouseDragCallback(evt) {
      if (!this.options.mouseButtonMask.includes(evt.detail.buttons)) {
        return;
      }

      this._drawingDrag(evt);
    }
    /**
     * Event handler for TOUCH_DRAG during drawing event loop.
     *
     * @event
     * @param {Object} evt - The event.
     * @returns {undefined}
     */

  }, {
    key: "_drawingTouchDragCallback",
    value: function _drawingTouchDragCallback(evt) {
      this._drawingDrag(evt);
    }
  }, {
    key: "_drawingDrag",
    value: function _drawingDrag(evt) {
      var eventData = evt.detail;
      var toolState = Object(_stateManagement_toolState_js__WEBPACK_IMPORTED_MODULE_10__["getToolState"])(eventData.element, this.name);
      var config = this.configuration;
      var currentTool = config.currentTool;
      var data = toolState.data[currentTool]; // Set the mouseLocation handle

      this._getMouseLocation(eventData);

      this._checkInvalidHandleLocation(data, eventData);

      this._addPointPencilMode(eventData, data.handles.points);

      this._dragging = true; // Force onImageRendered

      _externalModules_js__WEBPACK_IMPORTED_MODULE_8__["default"].cornerstone.updateImage(eventData.element);
    }
    /**
     * Event handler for MOUSE_UP during drawing event loop.
     *
     * @event
     * @param {Object} evt - The event.
     * @returns {undefined}
     */

  }, {
    key: "_drawingMouseUpCallback",
    value: function _drawingMouseUpCallback(evt) {
      var eventData = evt.detail;

      if (!this._dragging) {
        return;
      }

      this._dragging = false;
      var element = eventData.element;
      var config = this.configuration;
      var currentTool = config.currentTool;
      var toolState = Object(_stateManagement_toolState_js__WEBPACK_IMPORTED_MODULE_10__["getToolState"])(eventData.element, this.name);
      var data = toolState.data[currentTool];

      if (!freehandIntersect.end(data.handles.points) && data.canComplete) {
        var lastHandlePlaced = config.currentHandle;

        this._endDrawing(element, lastHandlePlaced);
      }

      preventPropagation(evt);
      return;
    }
    /**
     * Event handler for MOUSE_DOWN during drawing event loop.
     *
     * @event
     * @param {Object} evt - The event.
     * @returns {undefined}
     */

  }, {
    key: "_drawingMouseDownCallback",
    value: function _drawingMouseDownCallback(evt) {
      var eventData = evt.detail;

      if (!this.options.mouseButtonMask.includes(eventData.buttons)) {
        return;
      }

      var element = eventData.element;
      var coords = eventData.currentPoints.canvas;
      var config = this.configuration;
      var currentTool = config.currentTool;
      var toolState = Object(_stateManagement_toolState_js__WEBPACK_IMPORTED_MODULE_10__["getToolState"])(eventData.element, this.name);
      var data = toolState.data[currentTool];

      var handleNearby = this._pointNearHandle(element, data, coords);

      if (!freehandIntersect.end(data.handles.points) && data.canComplete) {
        var lastHandlePlaced = config.currentHandle;

        this._endDrawing(element, lastHandlePlaced);
      } else if (handleNearby === undefined) {
        this._addPoint(eventData);
      }

      preventPropagation(evt);
      return;
    }
    /**
     * Event handler for TOUCH_START during drawing event loop.
     *
     * @event
     * @param {Object} evt - The event.
     * @returns {undefined}
     */

  }, {
    key: "_drawingTouchStartCallback",
    value: function _drawingTouchStartCallback(evt) {
      var eventData = evt.detail;
      var element = eventData.element;
      var coords = eventData.currentPoints.canvas;
      var config = this.configuration;
      var currentTool = config.currentTool;
      var toolState = Object(_stateManagement_toolState_js__WEBPACK_IMPORTED_MODULE_10__["getToolState"])(eventData.element, this.name);
      var data = toolState.data[currentTool];

      var handleNearby = this._pointNearHandle(element, data, coords);

      if (!freehandIntersect.end(data.handles.points) && data.canComplete) {
        var lastHandlePlaced = config.currentHandle;

        this._endDrawing(element, lastHandlePlaced);
      } else if (handleNearby === undefined) {
        this._addPoint(eventData);
      }

      preventPropagation(evt);
      return;
    }
    /** Ends the active drawing loop and completes the polygon.
     *
     * @public
     * @param {Object} element - The element on which the roi is being drawn.
     * @returns {null}
     */

  }, {
    key: "completeDrawing",
    value: function completeDrawing(element) {
      if (!this._drawing) {
        return;
      }

      var toolState = Object(_stateManagement_toolState_js__WEBPACK_IMPORTED_MODULE_10__["getToolState"])(element, this.name);
      var config = this.configuration;
      var data = toolState.data[config.currentTool];

      if (!freehandIntersect.end(data.handles.points) && data.handles.points.length >= 2) {
        var lastHandlePlaced = config.currentHandle;
        data.polyBoundingBox = {};

        this._endDrawing(element, lastHandlePlaced);
      }
    }
    /**
     * Event handler for MOUSE_DOUBLE_CLICK during drawing event loop.
     *
     * @event
     * @param {Object} evt - The event.
     * @returns {undefined}
     */

  }, {
    key: "_drawingMouseDoubleClickCallback",
    value: function _drawingMouseDoubleClickCallback(evt) {
      var eventData = evt.detail;
      this.completeDrawing(eventData.element);
      preventPropagation(evt);
    }
    /**
     * Event handler for DOUBLE_TAP during drawing event loop.
     *
     * @event
     * @param {Object} evt - The event.
     * @returns {undefined}
     */

  }, {
    key: "_drawingDoubleTapClickCallback",
    value: function _drawingDoubleTapClickCallback(evt) {
      var eventData = evt.detail;
      this.completeDrawing(eventData.element);
      preventPropagation(evt);
    }
    /**
     * Event handler for MOUSE_DRAG during handle drag event loop.
     *
     * @event
     * @param {Object} evt - The event.
     * @returns {undefined}
     */

  }, {
    key: "_editMouseDragCallback",
    value: function _editMouseDragCallback(evt) {
      var eventData = evt.detail;

      if (!this.options.mouseButtonMask.includes(eventData.buttons)) {
        return;
      }

      var toolState = Object(_stateManagement_toolState_js__WEBPACK_IMPORTED_MODULE_10__["getToolState"])(eventData.element, this.name);
      var config = this.configuration;
      var data = toolState.data[config.currentTool];
      var currentHandle = config.currentHandle;
      var points = data.handles.points;
      var handleIndex = -1; // Set the mouseLocation handle

      this._getMouseLocation(eventData);

      data.handles.invalidHandlePlacement = freehandIntersect.modify(points, currentHandle);
      data.active = true;
      data.highlight = true;
      points[currentHandle].x = config.mouseLocation.handles.start.x;
      points[currentHandle].y = config.mouseLocation.handles.start.y;
      handleIndex = this._getPrevHandleIndex(currentHandle, points);

      if (currentHandle >= 0) {
        var lastLineIndex = points[handleIndex].lines.length - 1;
        var lastLine = points[handleIndex].lines[lastLineIndex];
        lastLine.x = config.mouseLocation.handles.start.x;
        lastLine.y = config.mouseLocation.handles.start.y;
      } // Update the image


      _externalModules_js__WEBPACK_IMPORTED_MODULE_8__["default"].cornerstone.updateImage(eventData.element);
    }
    /**
     * Event handler for TOUCH_DRAG during handle drag event loop.
     *
     * @event
     * @param {Object} evt - The event.
     */

  }, {
    key: "_editTouchDragCallback",
    value: function _editTouchDragCallback(evt) {
      var eventData = evt.detail;
      var toolState = Object(_stateManagement_toolState_js__WEBPACK_IMPORTED_MODULE_10__["getToolState"])(eventData.element, this.name);
      var config = this.configuration;
      var data = toolState.data[config.currentTool];
      var currentHandle = config.currentHandle;
      var points = data.handles.points;
      var handleIndex = -1; // Set the mouseLocation handle

      this._getMouseLocation(eventData);

      data.handles.invalidHandlePlacement = freehandIntersect.modify(points, currentHandle);
      data.active = true;
      data.highlight = true;
      points[currentHandle].x = config.mouseLocation.handles.start.x;
      points[currentHandle].y = config.mouseLocation.handles.start.y;
      handleIndex = this._getPrevHandleIndex(currentHandle, points);

      if (currentHandle >= 0) {
        var lastLineIndex = points[handleIndex].lines.length - 1;
        var lastLine = points[handleIndex].lines[lastLineIndex];
        lastLine.x = config.mouseLocation.handles.start.x;
        lastLine.y = config.mouseLocation.handles.start.y;
      } // Update the image


      _externalModules_js__WEBPACK_IMPORTED_MODULE_8__["default"].cornerstone.updateImage(eventData.element);
    }
    /**
     * Returns the previous handle to the current one.
     * @param {Number} currentHandle - the current handle index
     * @param {Array} points - the handles Array of the freehand data
     * @returns {Number} - The index of the previos handle
     */

  }, {
    key: "_getPrevHandleIndex",
    value: function _getPrevHandleIndex(currentHandle, points) {
      if (currentHandle === 0) {
        return points.length - 1;
      }

      return currentHandle - 1;
    }
    /**
     * Event handler for MOUSE_UP during handle drag event loop.
     *
     * @private
     * @param {Object} evt - The event.
     * @returns {undefined}
     */

  }, {
    key: "_editMouseUpCallback",
    value: function _editMouseUpCallback(evt) {
      var eventData = evt.detail;
      var element = eventData.element;
      var toolState = Object(_stateManagement_toolState_js__WEBPACK_IMPORTED_MODULE_10__["getToolState"])(eventData.element, this.name);

      this._deactivateModify(element);

      this._dropHandle(eventData, toolState);

      this._endDrawing(element);

      _externalModules_js__WEBPACK_IMPORTED_MODULE_8__["default"].cornerstone.updateImage(eventData.element);
    }
    /**
     * Places a handle of the freehand tool if the new location is valid.
     * If the new location is invalid the handle snaps back to its previous position.
     *
     * @private
     * @param {Object} eventData - Data object associated with the event.
     * @param {Object} toolState - The data associated with the freehand tool.
     * @modifies {toolState}
     * @returns {undefined}
     */

  }, {
    key: "_dropHandle",
    value: function _dropHandle(eventData, toolState) {
      var config = this.configuration;
      var currentTool = config.currentTool;
      var handles = toolState.data[currentTool].handles;
      var points = handles.points; // Don't allow the line being modified to intersect other lines

      if (handles.invalidHandlePlacement) {
        var currentHandle = config.currentHandle;
        var currentHandleData = points[currentHandle];
        var previousHandleData;

        if (currentHandle === 0) {
          var lastHandleID = points.length - 1;
          previousHandleData = points[lastHandleID];
        } else {
          previousHandleData = points[currentHandle - 1];
        } // Snap back to previous position


        currentHandleData.x = config.dragOrigin.x;
        currentHandleData.y = config.dragOrigin.y;
        previousHandleData.lines[0] = currentHandleData;
        handles.invalidHandlePlacement = false;
      }
    }
    /**
     * Begining of drawing loop when tool is active and a click event happens far
     * from existing handles.
     *
     * @private
     * @param {Object} evt - The event.
     * @returns {undefined}
     */

  }, {
    key: "_startDrawing",
    value: function _startDrawing(evt) {
      var eventData = evt.detail;
      var measurementData = this.createNewMeasurement(eventData);
      var element = eventData.element;
      var config = this.configuration;
      this._referencedElement = element;
      var interactionType;

      if (evt.type === _events_js__WEBPACK_IMPORTED_MODULE_7__["default"].MOUSE_DOWN_ACTIVATE) {
        interactionType = 'Mouse';
      } else if (evt.type === _events_js__WEBPACK_IMPORTED_MODULE_7__["default"].TOUCH_START_ACTIVE) {
        interactionType = 'Touch';
      }

      this._activateDraw(element, interactionType);

      this._getMouseLocation(eventData);

      Object(_stateManagement_toolState_js__WEBPACK_IMPORTED_MODULE_10__["addToolState"])(eventData.element, this.name, measurementData);
      var toolState = Object(_stateManagement_toolState_js__WEBPACK_IMPORTED_MODULE_10__["getToolState"])(eventData.element, this.name);
      config.currentTool = toolState.data.length - 1;
      this._activeDrawingToolReference = toolState.data[config.currentTool];
    }
    /**
     * Adds a point on mouse click in polygon mode.
     *
     * @private
     * @param {Object} eventData - data object associated with an event.
     * @returns {undefined}
     */

  }, {
    key: "_addPoint",
    value: function _addPoint(eventData) {
      var toolState = Object(_stateManagement_toolState_js__WEBPACK_IMPORTED_MODULE_10__["getToolState"])(eventData.element, this.name); // Get the toolState from the last-drawn polygon

      var config = this.configuration;
      var data = toolState.data[config.currentTool];

      if (data.handles.invalidHandlePlacement) {
        return;
      }

      var newHandleData = new FreehandHandleData(eventData.currentPoints.image); // If this is not the first handle

      if (data.handles.points.length) {
        // Add the line from the current handle to the new handle
        data.handles.points[config.currentHandle - 1].lines.push(eventData.currentPoints.image);
      } // Add the new handle


      data.handles.points.push(newHandleData); // Increment the current handle value

      config.currentHandle += 1; // Force onImageRendered to fire

      _externalModules_js__WEBPACK_IMPORTED_MODULE_8__["default"].cornerstone.updateImage(eventData.element);
      this.fireModifiedEvent(eventData.element, data);
    }
    /**
     * If in pencilMode, check the mouse position is farther than the minimum
     * distance between points, then add a point.
     *
     * @private
     * @param {Object} eventData - Data object associated with an event.
     * @param {Object} points - Data object associated with the tool.
     * @returns {undefined}
     */

  }, {
    key: "_addPointPencilMode",
    value: function _addPointPencilMode(eventData, points) {
      var _this3 = this;

      var config = this.configuration;
      var element = eventData.element;
      var mousePoint = config.mouseLocation.handles.start;

      var handleFurtherThanMinimumSpacing = function handleFurtherThanMinimumSpacing(handle) {
        return _this3._isDistanceLargerThanSpacing(element, handle, mousePoint);
      };

      if (points.every(handleFurtherThanMinimumSpacing)) {
        this._addPoint(eventData);
      }
    }
    /**
     * Ends the active drawing loop and completes the polygon.
     *
     * @private
     * @param {Object} element - The element on which the roi is being drawn.
     * @param {Object} handleNearby - the handle nearest to the mouse cursor.
     * @returns {undefined}
     */

  }, {
    key: "_endDrawing",
    value: function _endDrawing(element, handleNearby) {
      var toolState = Object(_stateManagement_toolState_js__WEBPACK_IMPORTED_MODULE_10__["getToolState"])(element, this.name);
      var config = this.configuration;
      var data = toolState.data[config.currentTool];
      data.active = false;
      data.highlight = false;
      data.handles.invalidHandlePlacement = false; // Connect the end handle to the origin handle

      if (handleNearby !== undefined) {
        var points = data.handles.points;
        points[config.currentHandle - 1].lines.push(points[0]);
      }

      if (this._modifying) {
        this._modifying = false;
        data.invalidated = true;
      } // Reset the current handle


      config.currentHandle = 0;
      config.currentTool = -1;
      data.canComplete = false;

      if (this._drawing) {
        this._deactivateDraw(element);
      }

      _externalModules_js__WEBPACK_IMPORTED_MODULE_8__["default"].cornerstone.updateImage(element);
      this.fireModifiedEvent(element, data);
    }
    /**
     * Returns a handle of a particular tool if it is close to the mouse cursor
     *
     * @private
     * @param {Object} element - The element on which the roi is being drawn.
     * @param {Object} data      Data object associated with the tool.
     * @param {*} coords
     * @returns {Number|Object|Boolean}
     */

  }, {
    key: "_pointNearHandle",
    value: function _pointNearHandle(element, data, coords) {
      if (data.handles === undefined || data.handles.points === undefined) {
        return;
      }

      if (data.visible === false) {
        return;
      }

      for (var i = 0; i < data.handles.points.length; i++) {
        var handleCanvas = _externalModules_js__WEBPACK_IMPORTED_MODULE_8__["default"].cornerstone.pixelToCanvas(element, data.handles.points[i]);

        if (_externalModules_js__WEBPACK_IMPORTED_MODULE_8__["default"].cornerstoneMath.point.distance(handleCanvas, coords) < 6) {
          return i;
        }
      } // Check to see if mouse in bounding box of textbox


      if (data.handles.textBox) {
        if (Object(_util_pointInsideBoundingBox_js__WEBPACK_IMPORTED_MODULE_15__["default"])(data.handles.textBox, coords)) {
          return data.handles.textBox;
        }
      }
    }
    /**
     * Returns a handle if it is close to the mouse cursor (all tools)
     *
     * @private
     * @param {Object} eventData - data object associated with an event.
     * @returns {Object}
     */

  }, {
    key: "_pointNearHandleAllTools",
    value: function _pointNearHandleAllTools(eventData) {
      var element = eventData.element;
      var coords = eventData.currentPoints.canvas;
      var toolState = Object(_stateManagement_toolState_js__WEBPACK_IMPORTED_MODULE_10__["getToolState"])(element, this.name);

      if (!toolState) {
        return;
      }

      var handleNearby;

      for (var toolIndex = 0; toolIndex < toolState.data.length; toolIndex++) {
        handleNearby = this._pointNearHandle(element, toolState.data[toolIndex], coords);

        if (handleNearby !== undefined) {
          return {
            handleNearby: handleNearby,
            toolIndex: toolIndex
          };
        }
      }
    }
    /**
     * Gets the current mouse location and stores it in the configuration object.
     *
     * @private
     * @param {Object} eventData The data assoicated with the event.
     * @returns {undefined}
     */

  }, {
    key: "_getMouseLocation",
    value: function _getMouseLocation(eventData) {
      // Set the mouseLocation handle
      var config = this.configuration;
      config.mouseLocation.handles.start.x = eventData.currentPoints.image.x;
      config.mouseLocation.handles.start.y = eventData.currentPoints.image.y;
      Object(_util_clip_js__WEBPACK_IMPORTED_MODULE_21__["clipToBox"])(config.mouseLocation.handles.start, eventData.image);
    }
    /**
     * Returns true if the proposed location of a new handle is invalid.
     *
     * @private
     * @param {Object} data      Data object associated with the tool.
     * @param {Object} eventData The data assoicated with the event.
     * @returns {Boolean}
     */

  }, {
    key: "_checkInvalidHandleLocation",
    value: function _checkInvalidHandleLocation(data, eventData) {
      if (data.handles.points.length < 2) {
        return true;
      }

      var invalidHandlePlacement;

      if (this._dragging) {
        invalidHandlePlacement = this._checkHandlesPencilMode(data, eventData);
      } else {
        invalidHandlePlacement = this._checkHandlesPolygonMode(data, eventData);
      }

      data.handles.invalidHandlePlacement = invalidHandlePlacement;
    }
    /**
     * Returns true if the proposed location of a new handle is invalid (in polygon mode).
     *
     * @private
     *
     * @param {Object} data - data object associated with the tool.
     * @param {Object} eventData The data assoicated with the event.
     * @returns {Boolean}
     */

  }, {
    key: "_checkHandlesPolygonMode",
    value: function _checkHandlesPolygonMode(data, eventData) {
      var config = this.configuration;
      var element = eventData.element;
      var mousePoint = config.mouseLocation.handles.start;
      var points = data.handles.points;
      var invalidHandlePlacement = false;
      data.canComplete = false;

      var mouseAtOriginHandle = this._isDistanceSmallerThanCompleteSpacingCanvas(element, points[0], mousePoint);

      if (mouseAtOriginHandle && !freehandIntersect.end(points) && points.length > 2) {
        data.canComplete = true;
        invalidHandlePlacement = false;
      } else {
        invalidHandlePlacement = freehandIntersect.newHandle(mousePoint, points);
      }

      return invalidHandlePlacement;
    }
    /**
     * Returns true if the proposed location of a new handle is invalid (in pencilMode).
     *
     * @private
     * @param {Object} data - data object associated with the tool.
     * @param {Object} eventData The data associated with the event.
     * @returns {Boolean}
     */

  }, {
    key: "_checkHandlesPencilMode",
    value: function _checkHandlesPencilMode(data, eventData) {
      var config = this.configuration;
      var mousePoint = config.mouseLocation.handles.start;
      var points = data.handles.points;
      var invalidHandlePlacement = freehandIntersect.newHandle(mousePoint, points);

      if (invalidHandlePlacement === false) {
        invalidHandlePlacement = this._invalidHandlePencilMode(data, eventData);
      }

      return invalidHandlePlacement;
    }
    /**
     * Returns true if the mouse position is far enough from previous points (in pencilMode).
     *
     * @private
     * @param {Object} data - data object associated with the tool.
     * @param {Object} eventData The data associated with the event.
     * @returns {Boolean}
     */

  }, {
    key: "_invalidHandlePencilMode",
    value: function _invalidHandlePencilMode(data, eventData) {
      var config = this.configuration;
      var element = eventData.element;
      var mousePoint = config.mouseLocation.handles.start;
      var points = data.handles.points;

      var mouseAtOriginHandle = this._isDistanceSmallerThanCompleteSpacingCanvas(element, points[0], mousePoint);

      if (mouseAtOriginHandle) {
        data.canComplete = true;
        return false;
      }

      data.canComplete = false; // Compare with all other handles appart from the last one

      for (var i = 1; i < points.length - 1; i++) {
        if (this._isDistanceSmallerThanSpacing(element, points[i], mousePoint)) {
          return true;
        }
      }

      return false;
    }
    /**
     * Returns true if two points are closer than this.configuration.spacing.
     *
     * @private
     * @param  {Object} element     The element on which the roi is being drawn.
     * @param  {Object} p1          The first point, in pixel space.
     * @param  {Object} p2          The second point, in pixel space.
     * @returns {boolean}            True if the distance is smaller than the
     *                              allowed canvas spacing.
     */

  }, {
    key: "_isDistanceSmallerThanCompleteSpacingCanvas",
    value: function _isDistanceSmallerThanCompleteSpacingCanvas(element, p1, p2) {
      var p1Canvas = _externalModules_js__WEBPACK_IMPORTED_MODULE_8__["default"].cornerstone.pixelToCanvas(element, p1);
      var p2Canvas = _externalModules_js__WEBPACK_IMPORTED_MODULE_8__["default"].cornerstone.pixelToCanvas(element, p2);
      var completeHandleRadius;

      if (this._drawingInteractionType === 'Mouse') {
        completeHandleRadius = this.configuration.completeHandleRadius;
      } else if (this._drawingInteractionType === 'Touch') {
        completeHandleRadius = this.configuration.completeHandleRadiusTouch;
      }

      return this._compareDistanceToSpacing(element, p1Canvas, p2Canvas, '<', completeHandleRadius);
    }
    /**
     * Returns true if two points are closer than this.configuration.spacing.
     *
     * @private
     * @param  {Object} element     The element on which the roi is being drawn.
     * @param  {Object} p1          The first point, in pixel space.
     * @param  {Object} p2          The second point, in pixel space.
     * @returns {boolean}            True if the distance is smaller than the
     *                              allowed canvas spacing.
     */

  }, {
    key: "_isDistanceSmallerThanSpacing",
    value: function _isDistanceSmallerThanSpacing(element, p1, p2) {
      return this._compareDistanceToSpacing(element, p1, p2, '<');
    }
    /**
     * Returns true if two points are farther than this.configuration.spacing.
     *
     * @private
     * @param  {Object} element     The element on which the roi is being drawn.
     * @param  {Object} p1          The first point, in pixel space.
     * @param  {Object} p2          The second point, in pixel space.
     * @returns {boolean}            True if the distance is smaller than the
     *                              allowed canvas spacing.
     */

  }, {
    key: "_isDistanceLargerThanSpacing",
    value: function _isDistanceLargerThanSpacing(element, p1, p2) {
      return this._compareDistanceToSpacing(element, p1, p2, '>');
    }
    /**
     * Compares the distance between two points to this.configuration.spacing.
     *
     * @private
     * @param  {Object} element     The element on which the roi is being drawn.
     * @param  {Object} p1          The first point, in pixel space.
     * @param  {Object} p2          The second point, in pixel space.
     * @param  {string} comparison  The comparison to make.
     * @param  {number} spacing     The allowed canvas spacing
     * @returns {boolean}           True if the distance is smaller than the
     *                              allowed canvas spacing.
     */

  }, {
    key: "_compareDistanceToSpacing",
    value: function _compareDistanceToSpacing(element, p1, p2) {
      var comparison = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '>';
      var spacing = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : this.configuration.spacing;

      if (comparison === '>') {
        return _externalModules_js__WEBPACK_IMPORTED_MODULE_8__["default"].cornerstoneMath.point.distance(p1, p2) > spacing;
      }

      return _externalModules_js__WEBPACK_IMPORTED_MODULE_8__["default"].cornerstoneMath.point.distance(p1, p2) < spacing;
    }
    /**
     * Adds drawing loop event listeners.
     *
     * @private
     * @param {Object} element - The viewport element to add event listeners to.
     * @param {string} interactionType - The interactionType used for the loop.
     * @modifies {element}
     * @returns {undefined}
     */

  }, {
    key: "_activateDraw",
    value: function _activateDraw(element) {
      var interactionType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Mouse';
      this._drawing = true;
      this._drawingInteractionType = interactionType;
      _store_index_js__WEBPACK_IMPORTED_MODULE_13__["state"].isMultiPartToolActive = true;
      Object(_store_setToolCursor_js__WEBPACK_IMPORTED_MODULE_22__["hideToolCursor"])(this.element); // Polygonal Mode

      element.addEventListener(_events_js__WEBPACK_IMPORTED_MODULE_7__["default"].MOUSE_DOWN, this._drawingMouseDownCallback);
      element.addEventListener(_events_js__WEBPACK_IMPORTED_MODULE_7__["default"].MOUSE_MOVE, this._drawingMouseMoveCallback);
      element.addEventListener(_events_js__WEBPACK_IMPORTED_MODULE_7__["default"].MOUSE_DOUBLE_CLICK, this._drawingMouseDoubleClickCallback); // Drag/Pencil Mode

      element.addEventListener(_events_js__WEBPACK_IMPORTED_MODULE_7__["default"].MOUSE_DRAG, this._drawingMouseDragCallback);
      element.addEventListener(_events_js__WEBPACK_IMPORTED_MODULE_7__["default"].MOUSE_UP, this._drawingMouseUpCallback); // Touch

      element.addEventListener(_events_js__WEBPACK_IMPORTED_MODULE_7__["default"].TOUCH_START, this._drawingMouseMoveCallback);
      element.addEventListener(_events_js__WEBPACK_IMPORTED_MODULE_7__["default"].TOUCH_START, this._drawingTouchStartCallback);
      element.addEventListener(_events_js__WEBPACK_IMPORTED_MODULE_7__["default"].TOUCH_DRAG, this._drawingTouchDragCallback);
      element.addEventListener(_events_js__WEBPACK_IMPORTED_MODULE_7__["default"].TOUCH_END, this._drawingMouseUpCallback);
      element.addEventListener(_events_js__WEBPACK_IMPORTED_MODULE_7__["default"].DOUBLE_TAP, this._drawingDoubleTapClickCallback);
      _externalModules_js__WEBPACK_IMPORTED_MODULE_8__["default"].cornerstone.updateImage(element);
    }
    /**
     * Removes drawing loop event listeners.
     *
     * @private
     * @param {Object} element - The viewport element to add event listeners to.
     * @modifies {element}
     * @returns {undefined}
     */

  }, {
    key: "_deactivateDraw",
    value: function _deactivateDraw(element) {
      this._drawing = false;
      _store_index_js__WEBPACK_IMPORTED_MODULE_13__["state"].isMultiPartToolActive = false;
      this._activeDrawingToolReference = null;
      this._drawingInteractionType = null;
      Object(_store_setToolCursor_js__WEBPACK_IMPORTED_MODULE_22__["setToolCursor"])(this.element, this.svgCursor);
      element.removeEventListener(_events_js__WEBPACK_IMPORTED_MODULE_7__["default"].MOUSE_DOWN, this._drawingMouseDownCallback);
      element.removeEventListener(_events_js__WEBPACK_IMPORTED_MODULE_7__["default"].MOUSE_MOVE, this._drawingMouseMoveCallback);
      element.removeEventListener(_events_js__WEBPACK_IMPORTED_MODULE_7__["default"].MOUSE_DOUBLE_CLICK, this._drawingMouseDoubleClickCallback);
      element.removeEventListener(_events_js__WEBPACK_IMPORTED_MODULE_7__["default"].MOUSE_DRAG, this._drawingMouseDragCallback);
      element.removeEventListener(_events_js__WEBPACK_IMPORTED_MODULE_7__["default"].MOUSE_UP, this._drawingMouseUpCallback); // Touch

      element.removeEventListener(_events_js__WEBPACK_IMPORTED_MODULE_7__["default"].TOUCH_START, this._drawingTouchStartCallback);
      element.removeEventListener(_events_js__WEBPACK_IMPORTED_MODULE_7__["default"].TOUCH_DRAG, this._drawingTouchDragCallback);
      element.removeEventListener(_events_js__WEBPACK_IMPORTED_MODULE_7__["default"].TOUCH_START, this._drawingMouseMoveCallback);
      element.removeEventListener(_events_js__WEBPACK_IMPORTED_MODULE_7__["default"].TOUCH_END, this._drawingMouseUpCallback);
      _externalModules_js__WEBPACK_IMPORTED_MODULE_8__["default"].cornerstone.updateImage(element);
    }
    /**
     * Adds modify loop event listeners.
     *
     * @private
     * @param {Object} element - The viewport element to add event listeners to.
     * @modifies {element}
     * @returns {undefined}
     */

  }, {
    key: "_activateModify",
    value: function _activateModify(element) {
      _store_index_js__WEBPACK_IMPORTED_MODULE_13__["state"].isToolLocked = true;
      element.addEventListener(_events_js__WEBPACK_IMPORTED_MODULE_7__["default"].MOUSE_UP, this._editMouseUpCallback);
      element.addEventListener(_events_js__WEBPACK_IMPORTED_MODULE_7__["default"].MOUSE_DRAG, this._editMouseDragCallback);
      element.addEventListener(_events_js__WEBPACK_IMPORTED_MODULE_7__["default"].MOUSE_CLICK, this._editMouseUpCallback);
      element.addEventListener(_events_js__WEBPACK_IMPORTED_MODULE_7__["default"].TOUCH_END, this._editMouseUpCallback);
      element.addEventListener(_events_js__WEBPACK_IMPORTED_MODULE_7__["default"].TOUCH_DRAG, this._editTouchDragCallback);
      _externalModules_js__WEBPACK_IMPORTED_MODULE_8__["default"].cornerstone.updateImage(element);
    }
    /**
     * Removes modify loop event listeners.
     *
     * @private
     * @param {Object} element - The viewport element to add event listeners to.
     * @modifies {element}
     * @returns {undefined}
     */

  }, {
    key: "_deactivateModify",
    value: function _deactivateModify(element) {
      _store_index_js__WEBPACK_IMPORTED_MODULE_13__["state"].isToolLocked = false;
      element.removeEventListener(_events_js__WEBPACK_IMPORTED_MODULE_7__["default"].MOUSE_UP, this._editMouseUpCallback);
      element.removeEventListener(_events_js__WEBPACK_IMPORTED_MODULE_7__["default"].MOUSE_DRAG, this._editMouseDragCallback);
      element.removeEventListener(_events_js__WEBPACK_IMPORTED_MODULE_7__["default"].MOUSE_CLICK, this._editMouseUpCallback);
      element.removeEventListener(_events_js__WEBPACK_IMPORTED_MODULE_7__["default"].TOUCH_END, this._editMouseUpCallback);
      element.removeEventListener(_events_js__WEBPACK_IMPORTED_MODULE_7__["default"].TOUCH_DRAG, this._editTouchDragCallback);
      _externalModules_js__WEBPACK_IMPORTED_MODULE_8__["default"].cornerstone.updateImage(element);
    }
  }, {
    key: "passiveCallback",
    value: function passiveCallback(element) {
      this._closeToolIfDrawing(element);
    }
  }, {
    key: "enabledCallback",
    value: function enabledCallback(element) {
      this._closeToolIfDrawing(element);
    }
  }, {
    key: "disabledCallback",
    value: function disabledCallback(element) {
      this._closeToolIfDrawing(element);
    }
  }, {
    key: "_closeToolIfDrawing",
    value: function _closeToolIfDrawing(element) {
      if (this._drawing) {
        // Actively drawing but changed mode.
        var config = this.configuration;
        var lastHandlePlaced = config.currentHandle;

        this._endDrawing(element, lastHandlePlaced);

        _externalModules_js__WEBPACK_IMPORTED_MODULE_8__["default"].cornerstone.updateImage(element);
      }
    }
    /**
     * Fire cornerstonetoolsmeasurementmodified event on provided element
     * @param {any} element which freehand data has been modified
     * @param {any} data the measurment data
     */

  }, {
    key: "fireModifiedEvent",
    value: function fireModifiedEvent(element, data) {
      var modifiedEventData = {
        toolName: this.name,
        element: element,
        measurementData: data
      };
      _externalModules_js__WEBPACK_IMPORTED_MODULE_8__["default"].cornerstone.triggerEvent(element, _events_js__WEBPACK_IMPORTED_MODULE_7__["default"].MEASUREMENT_MODIFIED, modifiedEventData);
    } // ===================================================================
    // Public Configuration API. .
    // ===================================================================

  }, {
    key: "cancelDrawing",

    /**
     * Ends the active drawing loop and removes the polygon.
     *
     * @public
     * @param {Object} element - The element on which the roi is being drawn.
     * @returns {null}
     */
    value: function cancelDrawing(element) {
      if (!this._drawing) {
        return;
      }

      var toolState = Object(_stateManagement_toolState_js__WEBPACK_IMPORTED_MODULE_10__["getToolState"])(element, this.name);
      var config = this.configuration;
      var data = toolState.data[config.currentTool];
      data.active = false;
      data.highlight = false;
      data.handles.invalidHandlePlacement = false; // Reset the current handle

      config.currentHandle = 0;
      config.currentTool = -1;
      data.canComplete = false;
      Object(_stateManagement_toolState_js__WEBPACK_IMPORTED_MODULE_10__["removeToolState"])(element, this.name, data);

      this._deactivateDraw(element);

      _externalModules_js__WEBPACK_IMPORTED_MODULE_8__["default"].cornerstone.updateImage(element);
    }
    /**
     * newImageCallback - new image event handler.
     *
     * @public
     * @param  {Object} evt The event.
     * @returns {null}
     */

  }, {
    key: "newImageCallback",
    value: function newImageCallback(evt) {
      var config = this.configuration;

      if (!(this._drawing && this._activeDrawingToolReference)) {
        return;
      } // Actively drawing but scrolled to different image.


      var element = evt.detail.element;
      var data = this._activeDrawingToolReference;
      data.active = false;
      data.highlight = false;
      data.handles.invalidHandlePlacement = false; // Connect the end handle to the origin handle

      var points = data.handles.points;
      points[config.currentHandle - 1].lines.push(points[0]); // Reset the current handle

      config.currentHandle = 0;
      config.currentTool = -1;
      data.canComplete = false;

      this._deactivateDraw(element);

      _externalModules_js__WEBPACK_IMPORTED_MODULE_8__["default"].cornerstone.updateImage(element);
    }
  }, {
    key: "spacing",
    get: function get() {
      return this.configuration.spacing;
    },
    set: function set(value) {
      if (typeof value !== 'number') {
        throw new Error('Attempting to set freehand spacing to a value other than a number.');
      }

      this.configuration.spacing = value;
      _externalModules_js__WEBPACK_IMPORTED_MODULE_8__["default"].cornerstone.updateImage(this.element);
    }
  }, {
    key: "activeHandleRadius",
    get: function get() {
      return this.configuration.activeHandleRadius;
    },
    set: function set(value) {
      if (typeof value !== 'number') {
        throw new Error('Attempting to set freehand activeHandleRadius to a value other than a number.');
      }

      this.configuration.activeHandleRadius = value;
      _externalModules_js__WEBPACK_IMPORTED_MODULE_8__["default"].cornerstone.updateImage(this.element);
    }
  }, {
    key: "completeHandleRadius",
    get: function get() {
      return this.configuration.completeHandleRadius;
    },
    set: function set(value) {
      if (typeof value !== 'number') {
        throw new Error('Attempting to set freehand completeHandleRadius to a value other than a number.');
      }

      this.configuration.completeHandleRadius = value;
      _externalModules_js__WEBPACK_IMPORTED_MODULE_8__["default"].cornerstone.updateImage(this.element);
    }
  }, {
    key: "alwaysShowHandles",
    get: function get() {
      return this.configuration.alwaysShowHandles;
    },
    set: function set(value) {
      if (typeof value !== 'boolean') {
        throw new Error('Attempting to set freehand alwaysShowHandles to a value other than a boolean.');
      }

      this.configuration.alwaysShowHandles = value;
      _externalModules_js__WEBPACK_IMPORTED_MODULE_8__["default"].cornerstone.updateImage(this.element);
    }
  }, {
    key: "invalidColor",
    get: function get() {
      return this.configuration.invalidColor;
    },
    set: function set(value) {
      /*
        It'd be easy to check if the color was e.g. a valid rgba color. However
        it'd be difficult to check if the color was a named CSS color without
        bloating the library, so we don't. If the canvas can't intepret the color
        it'll show up grey.
      */
      this.configuration.invalidColor = value;
      _externalModules_js__WEBPACK_IMPORTED_MODULE_8__["default"].cornerstone.updateImage(this.element);
    }
  }]);

  return FreehandMouseTool;
}(_base_BaseAnnotationTool_js__WEBPACK_IMPORTED_MODULE_9__["default"]);



function defaultFreehandConfiguration() {
  return {
    mouseLocation: {
      handles: {
        start: {
          highlight: true,
          active: true
        }
      }
    },
    spacing: 1,
    activeHandleRadius: 3,
    completeHandleRadius: 6,
    completeHandleRadiusTouch: 28,
    alwaysShowHandles: false,
    invalidColor: 'crimson',
    currentHandle: 0,
    currentTool: -1
  };
}

function preventPropagation(evt) {
  evt.stopImmediatePropagation();
  evt.stopPropagation();
  evt.preventDefault();
}

/***/ }),

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
          var text = textBoxText(data, rowPixelSpacing, colPixelSpacing);
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



/***/ }),

/***/ "./tools/annotation/RectangleRoiTool.js":
/*!**********************************************!*\
  !*** ./tools/annotation/RectangleRoiTool.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RectangleRoiTool; });
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
/* harmony import */ var _util_calculateSUV_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../util/calculateSUV.js */ "./util/calculateSUV.js");
/* harmony import */ var _util_numbersWithCommas_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../../util/numbersWithCommas.js */ "./util/numbersWithCommas.js");
/* harmony import */ var _util_throttle_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../../util/throttle.js */ "./util/throttle.js");
/* harmony import */ var _cursors_index_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../cursors/index.js */ "./tools/cursors/index.js");
/* harmony import */ var _util_logger_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../util/logger.js */ "./util/logger.js");






 // State



 // Drawing

 // Util






var logger = Object(_util_logger_js__WEBPACK_IMPORTED_MODULE_15__["getLogger"])('tools:annotation:RectangleRoiTool');
/**
 * @public
 * @class RectangleRoiTool
 * @memberof Tools.Annotation
 * @classdesc Tool for drawing rectangular regions of interest, and measuring
 * the statistics of the enclosed pixels.
 * @extends Tools.Base.BaseAnnotationTool
 */

var RectangleRoiTool =
/*#__PURE__*/
function (_BaseAnnotationTool) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(RectangleRoiTool, _BaseAnnotationTool);

  function RectangleRoiTool() {
    var _this;

    var configuration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, RectangleRoiTool);

    var defaultConfig = {
      name: 'RectangleRoi',
      supportedInteractionTypes: ['Mouse', 'Touch'],
      configuration: {// showMinMax: false,
        // showHounsfieldUnits: true
      },
      svgCursor: _cursors_index_js__WEBPACK_IMPORTED_MODULE_14__["rectangleRoiCursor"]
    };
    var initialConfiguration = Object.assign(defaultConfig, configuration);
    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(RectangleRoiTool).call(this, initialConfiguration));
    _this.initialConfiguration = initialConfiguration;
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(RectangleRoiTool, [{
    key: "createNewMeasurement",
    value: function createNewMeasurement(eventData) {
      var goodEventData = eventData && eventData.currentPoints && eventData.currentPoints.image;

      if (!goodEventData) {
        logger.error("required eventData not supplied to tool ".concat(this.name, "'s createNewMeasurement"));
        return;
      }

      return {
        visible: true,
        active: true,
        color: undefined,
        invalidated: true,
        handles: {
          start: {
            x: eventData.currentPoints.image.x,
            y: eventData.currentPoints.image.y,
            highlight: true,
            active: false
          },
          end: {
            x: eventData.currentPoints.image.x,
            y: eventData.currentPoints.image.y,
            highlight: true,
            active: true
          },
          initialRotation: eventData.viewport.rotation,
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
  }, {
    key: "pointNearTool",
    value: function pointNearTool(element, data, coords, interactionType) {
      var hasStartAndEndHandles = data && data.handles && data.handles.start && data.handles.end;
      var validParameters = hasStartAndEndHandles;

      if (!validParameters) {
        logger.warn("invalid parameters supplied to tool ".concat(this.name, "'s pointNearTool"));
      }

      if (!validParameters || data.visible === false) {
        return false;
      }

      var distance = interactionType === 'mouse' ? 15 : 25;
      var startCanvas = _externalModules_js__WEBPACK_IMPORTED_MODULE_5__["default"].cornerstone.pixelToCanvas(element, data.handles.start);
      var endCanvas = _externalModules_js__WEBPACK_IMPORTED_MODULE_5__["default"].cornerstone.pixelToCanvas(element, data.handles.end);
      var rect = {
        left: Math.min(startCanvas.x, endCanvas.x),
        top: Math.min(startCanvas.y, endCanvas.y),
        width: Math.abs(startCanvas.x - endCanvas.x),
        height: Math.abs(startCanvas.y - endCanvas.y)
      };
      var distanceToPoint = _externalModules_js__WEBPACK_IMPORTED_MODULE_5__["default"].cornerstoneMath.rect.distanceToPoint(rect, coords);
      return distanceToPoint < distance;
    }
  }, {
    key: "renderToolData",
    value: function renderToolData(evt) {
      var _this2 = this;

      var toolData = Object(_stateManagement_toolState_js__WEBPACK_IMPORTED_MODULE_7__["getToolState"])(evt.currentTarget, this.name);

      if (!toolData) {
        return;
      }

      var eventData = evt.detail;
      var image = eventData.image,
          element = eventData.element;
      var lineWidth = _stateManagement_toolStyle_js__WEBPACK_IMPORTED_MODULE_8__["default"].getToolWidth();
      var _this$configuration = this.configuration,
          handleRadius = _this$configuration.handleRadius,
          drawHandlesOnHover = _this$configuration.drawHandlesOnHover;
      var context = Object(_drawing_index_js__WEBPACK_IMPORTED_MODULE_10__["getNewContext"])(eventData.canvasContext.canvas); // Meta

      var seriesModule = _externalModules_js__WEBPACK_IMPORTED_MODULE_5__["default"].cornerstone.metaData.get('generalSeriesModule', image.imageId) || {};
      var imagePlane = _externalModules_js__WEBPACK_IMPORTED_MODULE_5__["default"].cornerstone.metaData.get('imagePlaneModule', image.imageId); // Pixel Spacing

      var modality = seriesModule.modality;
      var hasPixelSpacing = imagePlane && imagePlane.rowPixelSpacing && imagePlane.columnPixelSpacing;
      imagePlane = imagePlane || {};
      var pixelSpacing = {
        rowPixelSpacing: imagePlane.rowPixelSpacing || 1,
        columnPixelSpacing: imagePlane.columnPixelSpacing || 1
      };
      Object(_drawing_index_js__WEBPACK_IMPORTED_MODULE_10__["draw"])(context, function (context) {
        // If we have tool data for this element - iterate over each set and draw it
        for (var i = 0; i < toolData.data.length; i++) {
          var data = toolData.data[i];

          if (data.visible === false) {
            continue;
          } // Configure


          var color = _stateManagement_toolColors_js__WEBPACK_IMPORTED_MODULE_9__["default"].getColorIfActive(data);
          var handleOptions = {
            color: color,
            handleRadius: handleRadius,
            drawHandlesIfActive: drawHandlesOnHover
          };
          Object(_drawing_index_js__WEBPACK_IMPORTED_MODULE_10__["setShadow"])(context, _this2.configuration); // Draw

          Object(_drawing_index_js__WEBPACK_IMPORTED_MODULE_10__["drawRect"])(context, element, data.handles.start, data.handles.end, {
            color: color
          }, 'pixel', data.handles.initialRotation);
          Object(_drawing_index_js__WEBPACK_IMPORTED_MODULE_10__["drawHandles"])(context, eventData, data.handles, handleOptions); // Update textbox stats

          if (data.invalidated === true) {
            if (data.cachedStats) {
              _throttledUpdateCachedStats(image, element, data, modality, pixelSpacing);
            } else {
              _updateCachedStats(image, element, data, modality, pixelSpacing);
            }
          } // Default to textbox on right side of ROI


          if (!data.handles.textBox.hasMoved) {
            data.handles.textBox.x = Math.max(data.handles.start.x, data.handles.end.x);
            data.handles.textBox.y = (data.handles.start.y + data.handles.end.y) / 2;
          }

          var textBoxAnchorPoints = function textBoxAnchorPoints(handles) {
            return _findTextBoxAnchorPoints(handles.start, handles.end);
          };

          var textBoxContent = _createTextBoxContent(context, image.color, data.cachedStats, modality, hasPixelSpacing, _this2.configuration);

          Object(_drawing_index_js__WEBPACK_IMPORTED_MODULE_10__["drawLinkedTextBox"])(context, element, data.handles.textBox, textBoxContent, data.handles, textBoxAnchorPoints, color, lineWidth, 0, true);
        }
      });
    }
  }]);

  return RectangleRoiTool;
}(_base_BaseAnnotationTool_js__WEBPACK_IMPORTED_MODULE_6__["default"]);
/**
 *
 */




var _throttledUpdateCachedStats = Object(_util_throttle_js__WEBPACK_IMPORTED_MODULE_13__["default"])(_updateCachedStats, 110);
/**
 *
 *
 * @param {*} image
 * @param {*} element
 * @param {*} data
 * @param {string} modality
 * @param {*} pixelSpacing
 * @returns {void}
 */


function _updateCachedStats(image, element, data, modality, pixelSpacing) {
  var stats = _calculateStats(image, element, data.handles, modality, pixelSpacing);

  data.cachedStats = stats;
  data.invalidated = false;
}
/**
 * TODO: This is the same method (+ GetPixels) for the other ROIs
 * TODO: The pixel filtering is the unique bit
 *
 * @param {*} startHandle
 * @param {*} endHandle
 * @returns {{ left: number, top: number, width: number, height: number}}
 */


function _getRectangleImageCoordinates(startHandle, endHandle) {
  return {
    left: Math.min(startHandle.x, endHandle.x),
    top: Math.min(startHandle.y, endHandle.y),
    width: Math.abs(startHandle.x - endHandle.x),
    height: Math.abs(startHandle.y - endHandle.y)
  };
}
/**
 *
 *
 * @param {*} image
 * @param {*} element
 * @param {*} handles
 * @param {*} modality
 * @param {*} pixelSpacing
 * @returns {Object} The Stats object
 */


function _calculateStats(image, element, handles, modality, pixelSpacing) {
  // Retrieve the bounds of the rectangle in image coordinates
  var roiCoordinates = _getRectangleImageCoordinates(handles.start, handles.end); // Retrieve the array of pixels that the rectangle bounds cover


  var pixels = _externalModules_js__WEBPACK_IMPORTED_MODULE_5__["default"].cornerstone.getPixels(element, roiCoordinates.left, roiCoordinates.top, roiCoordinates.width, roiCoordinates.height); // Calculate the mean & standard deviation from the pixels and the rectangle details

  var roiMeanStdDev = _calculateRectangleStats(pixels, roiCoordinates);

  var meanStdDevSUV;

  if (modality === 'PT') {
    meanStdDevSUV = {
      mean: Object(_util_calculateSUV_js__WEBPACK_IMPORTED_MODULE_11__["default"])(image, roiMeanStdDev.mean, true) || 0,
      stdDev: Object(_util_calculateSUV_js__WEBPACK_IMPORTED_MODULE_11__["default"])(image, roiMeanStdDev.stdDev, true) || 0
    };
  } // Calculate the image area from the rectangle dimensions and pixel spacing


  var area = roiCoordinates.width * (pixelSpacing.columnPixelSpacing || 1) * (roiCoordinates.height * (pixelSpacing.rowPixelSpacing || 1));
  return {
    area: area || 0,
    count: roiMeanStdDev.count || 0,
    mean: roiMeanStdDev.mean || 0,
    variance: roiMeanStdDev.variance || 0,
    stdDev: roiMeanStdDev.stdDev || 0,
    min: roiMeanStdDev.min || 0,
    max: roiMeanStdDev.max || 0,
    meanStdDevSUV: meanStdDevSUV
  };
}
/**
 *
 *
 * @param {*} sp
 * @param {*} rectangle
 * @returns {{ count, number, mean: number,  variance: number,  stdDev: number,  min: number,  max: number }}
 */


function _calculateRectangleStats(sp, rectangle) {
  var sum = 0;
  var sumSquared = 0;
  var count = 0;
  var index = 0;
  var min = sp ? sp[0] : null;
  var max = sp ? sp[0] : null;

  for (var y = rectangle.top; y < rectangle.top + rectangle.height; y++) {
    for (var x = rectangle.left; x < rectangle.left + rectangle.width; x++) {
      sum += sp[index];
      sumSquared += sp[index] * sp[index];
      min = Math.min(min, sp[index]);
      max = Math.max(max, sp[index]);
      count++; // TODO: Wouldn't this just be sp.length?

      index++;
    }
  }

  if (count === 0) {
    return {
      count: count,
      mean: 0.0,
      variance: 0.0,
      stdDev: 0.0,
      min: 0.0,
      max: 0.0
    };
  }

  var mean = sum / count;
  var variance = sumSquared / count - mean * mean;
  return {
    count: count,
    mean: mean,
    variance: variance,
    stdDev: Math.sqrt(variance),
    min: min,
    max: max
  };
}
/**
 *
 *
 * @param {*} startHandle
 * @param {*} endHandle
 * @returns {Array.<{x: number, y: number}>}
 */


function _findTextBoxAnchorPoints(startHandle, endHandle) {
  var _getRectangleImageCoo = _getRectangleImageCoordinates(startHandle, endHandle),
      left = _getRectangleImageCoo.left,
      top = _getRectangleImageCoo.top,
      width = _getRectangleImageCoo.width,
      height = _getRectangleImageCoo.height;

  return [{
    // Top middle point of rectangle
    x: left + width / 2,
    y: top
  }, {
    // Left middle point of rectangle
    x: left,
    y: top + height / 2
  }, {
    // Bottom middle point of rectangle
    x: left + width / 2,
    y: top + height
  }, {
    // Right middle point of rectangle
    x: left + width,
    y: top + height / 2
  }];
}
/**
 *
 *
 * @param {*} area
 * @param {*} hasPixelSpacing
 * @returns {string} The formatted label for showing area
 */


function _formatArea(area, hasPixelSpacing) {
  // This uses Char code 178 for a superscript 2
  var suffix = hasPixelSpacing ? " mm".concat(String.fromCharCode(178)) : " px".concat(String.fromCharCode(178));
  return "Area: ".concat(Object(_util_numbersWithCommas_js__WEBPACK_IMPORTED_MODULE_12__["default"])(area.toFixed(2))).concat(suffix);
}
/**
 * TODO: This is identical to EllipticalROI's same fn
 * TODO: We may want to make this a utility for ROIs with these values?
 *
 * @param {*} context
 * @param {*} isColorImage
 * @param {*} { area, mean, stdDev, min, max, meanStdDevSUV }
 * @param {*} modality
 * @param {*} hasPixelSpacing
 * @param {*} [options={}]
 * @returns {string[]}
 */


function _createTextBoxContent(context, isColorImage, _ref, modality, hasPixelSpacing) {
  var area = _ref.area,
      mean = _ref.mean,
      stdDev = _ref.stdDev,
      min = _ref.min,
      max = _ref.max,
      meanStdDevSUV = _ref.meanStdDevSUV;
  var options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
  var showMinMax = options.showMinMax || false;
  var showHounsfieldUnits = options.showHounsfieldUnits !== false;
  var textLines = [];
  var otherLines = [];

  if (!isColorImage) {
    var hasStandardUptakeValues = meanStdDevSUV && meanStdDevSUV.mean !== 0;
    var suffix = modality === 'CT' && showHounsfieldUnits ? ' HU' : '';
    var meanString = "Mean: ".concat(Object(_util_numbersWithCommas_js__WEBPACK_IMPORTED_MODULE_12__["default"])(mean.toFixed(2))).concat(suffix);
    var stdDevString = "Std Dev: ".concat(Object(_util_numbersWithCommas_js__WEBPACK_IMPORTED_MODULE_12__["default"])(stdDev.toFixed(2))).concat(suffix); // If this image has SUV values to display, concatenate them to the text line

    if (hasStandardUptakeValues) {
      var SUVtext = ' SUV: ';
      var meanSuvString = "".concat(SUVtext).concat(Object(_util_numbersWithCommas_js__WEBPACK_IMPORTED_MODULE_12__["default"])(meanStdDevSUV.mean.toFixed(2)));
      var stdDevSuvString = "".concat(SUVtext).concat(Object(_util_numbersWithCommas_js__WEBPACK_IMPORTED_MODULE_12__["default"])(meanStdDevSUV.stdDev.toFixed(2)));
      var targetStringLength = Math.floor(context.measureText("".concat(stdDevString, "     ")).width);

      while (context.measureText(meanString).width < targetStringLength) {
        meanString += ' ';
      }

      otherLines.push("".concat(meanString).concat(meanSuvString));
      otherLines.push("".concat(stdDevString, "     ").concat(stdDevSuvString));
    } else {
      otherLines.push("".concat(meanString, "     ").concat(stdDevString));
    }

    if (showMinMax) {
      var minString = "Min: ".concat(min).concat(suffix);
      var maxString = "Max: ".concat(max).concat(suffix);

      var _targetStringLength = hasStandardUptakeValues ? Math.floor(context.measureText("".concat(stdDevString, "     ")).width) : Math.floor(context.measureText("".concat(meanString, "     ")).width);

      while (context.measureText(minString).width < _targetStringLength) {
        minString += ' ';
      }

      otherLines.push("".concat(minString).concat(maxString));
    }
  }

  textLines.push(_formatArea(area, hasPixelSpacing));
  otherLines.forEach(function (x) {
    return textLines.push(x);
  });
  return textLines;
}

/***/ }),

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
/* harmony import */ var _externalModules_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../externalModules.js */ "./externalModules.js");
/* harmony import */ var _events_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../events.js */ "./events.js");
/* harmony import */ var _BaseTool_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./BaseTool.js */ "./tools/base/BaseTool.js");
/* harmony import */ var _store_isToolActive_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../store/isToolActive.js */ "./store/isToolActive.js");
/* harmony import */ var _store_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../store/index.js */ "./store/index.js");
/* harmony import */ var _stateManagement_toolState_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../stateManagement/toolState.js */ "./stateManagement/toolState.js");
/* harmony import */ var _stateManagement_imageIdSpecificStateManager_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../stateManagement/imageIdSpecificStateManager.js */ "./stateManagement/imageIdSpecificStateManager.js");













var _store$modules$brush = _store_index_js__WEBPACK_IMPORTED_MODULE_10__["default"].modules.brush,
    state = _store$modules$brush.state,
    setters = _store$modules$brush.setters;
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

  function BaseBrushTool(_ref) {
    var _this;

    var name = _ref.name,
        strategies = _ref.strategies,
        defaultStrategy = _ref.defaultStrategy,
        configuration = _ref.configuration,
        supportedInteractionTypes = _ref.supportedInteractionTypes,
        mixins = _ref.mixins,
        svgCursor = _ref.svgCursor;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, BaseBrushTool);

    configuration.referencedToolData = 'brush';
    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(BaseBrushTool).call(this, {
      name: name,
      strategies: strategies,
      defaultStrategy: defaultStrategy,
      configuration: configuration,
      supportedInteractionTypes: supportedInteractionTypes,
      mixins: mixins,
      svgCursor: svgCursor
    }));
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
     * Paints the data to the canvas.
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
     * @event
     * @param {Object} evt - The event.
     */

  }, {
    key: "mouseDragCallback",
    value: function mouseDragCallback(evt) {
      this._startPainting(evt);
    }
    /**
     * Event handler for MOUSE_DOWN event.
     *
     * @override
     * @event
     * @param {Object} evt - The event.
     */

  }, {
    key: "preMouseDownCallback",
    value: function preMouseDownCallback(evt) {
      this._startPainting(evt);

      return true;
    }
    /**
     * Initialise painting with baseBrushTool
     *
     * @protected
     * @event
     * @param {Object} evt - The event.
     * @returns {void}
     */

  }, {
    key: "_startPainting",
    value: function _startPainting(evt) {
      var eventData = evt.detail;
      var element = eventData.element;

      this._paint(evt);

      this._drawing = true;

      this._startListeningForMouseUp(element);

      this._lastImageCoords = eventData.currentPoints.image;
    }
    /**
     * Event handler for MOUSE_MOVE event.
     *
     * @override
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
     * Event handler for switching mode to passive;
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
        _externalModules_js__WEBPACK_IMPORTED_MODULE_6__["default"].cornerstone.updateImage(this.element);
      } catch (error) {
        // It is possible that the image has not been loaded
        // when this is called.
        return;
      }
    }
    /**
     * Used to redraw the tool's annotation data per render.
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
    } // ===================================================================
    // Implementation interface
    // ===================================================================

    /**
     * Get the draw color (segmentation) of the tool.
     *
     * @protected
     * @param  {Number} drawId The id of the color (segmentation) to switch to.
     * @returns {string} The brush color in rgba format
     */

  }, {
    key: "_getBrushColor",
    value: function _getBrushColor(drawId) {
      var colormap = _externalModules_js__WEBPACK_IMPORTED_MODULE_6__["default"].cornerstone.colors.getColormap(state.colorMapId);
      var colorArray = colormap.getColor(drawId);

      if (this._drawing) {
        return "rgba(".concat(colorArray[[0]], ", ").concat(colorArray[[1]], ", ").concat(colorArray[[2]], ", 1.0 )");
      }

      return "rgba(".concat(colorArray[[0]], ", ").concat(colorArray[[1]], ", ").concat(colorArray[[2]], ", 0.8 )");
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
      this._drawing = false;
      this._mouseUpRender = true;

      this._stopListeningForMouseUp(element);
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
      _externalModules_js__WEBPACK_IMPORTED_MODULE_6__["default"].cornerstone.updateImage(element);
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
      _externalModules_js__WEBPACK_IMPORTED_MODULE_6__["default"].cornerstone.updateImage(element);
    } // ===================================================================
    // Segmentation API. This is effectively a wrapper around the store.
    // ===================================================================

    /**
     * Switches to the next segmentation color.
     *
     * @public
     * @api
     * @returns {void}
     */

  }, {
    key: "nextSegmentation",
    value: function nextSegmentation() {
      var numberOfColors = this.constructor.getNumberOfColors();
      var drawId = state.drawColorId + 1;

      if (drawId === numberOfColors) {
        drawId = 0;
      }

      state.drawColorId = drawId;
    }
    /**
     * Switches to the previous segmentation color.
     *
     * @public
     * @api
     * @returns {void}
     */

  }, {
    key: "previousSegmentation",
    value: function previousSegmentation() {
      var numberOfColors = this.constructor.getNumberOfColors();
      var drawId = state.drawColorId - 1;

      if (drawId < 0) {
        drawId = numberOfColors - 1;
      }

      state.drawColorId = drawId;
    }
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
      var oldRadius = state.radius;
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
      var oldRadius = state.radius;
      var newRadius = Math.floor(oldRadius * 0.8);
      setters.radius(newRadius);
    }
    /**
     * Displays a segmentation on the element.
     *
     * @public
     * @api
     * @param  {Number} segIndex        The index of the segmentation.
     * @returns {void}
     */

  }, {
    key: "showSegmentationOnElement",
    value: function showSegmentationOnElement(segIndex) {
      var enabledElement = this._getEnabledElement();

      var enabledElementUID = enabledElement.uuid;
      setters.brushVisibilityForElement(enabledElementUID, segIndex, true);
      _externalModules_js__WEBPACK_IMPORTED_MODULE_6__["default"].cornerstone.updateImage(enabledElement.element);
    }
    /**
     * Hides a segmentation on an element.
     *
     * @public
     * @api
     * @param  {Number} segIndex        The index of the segmentation.
     * @returns {void}
     */

  }, {
    key: "hideSegmentationOnElement",
    value: function hideSegmentationOnElement(segIndex) {
      var enabledElement = this._getEnabledElement();

      var enabledElementUID = enabledElement.uuid;
      setters.brushVisibilityForElement(enabledElementUID, segIndex, false);
      _externalModules_js__WEBPACK_IMPORTED_MODULE_6__["default"].cornerstone.updateImage(enabledElement.element);
    }
    /**
     * Displays all segmentations on an element.
     *
     * @public
     * @api
     * @returns {void}
     */

  }, {
    key: "showAllSegmentationsOnElement",
    value: function showAllSegmentationsOnElement() {
      var enabledElement = this._getEnabledElement();

      var enabledElementUID = enabledElement.uuid;
      var colormap = _externalModules_js__WEBPACK_IMPORTED_MODULE_6__["default"].cornerstone.colors.getColormap(state.colorMapId);
      var numberOfColors = colormap.getNumberOfColors();

      for (var segIndex = 0; segIndex < numberOfColors; segIndex++) {
        setters.brushVisibilityForElement(enabledElementUID, segIndex, true);
      }

      _externalModules_js__WEBPACK_IMPORTED_MODULE_6__["default"].cornerstone.updateImage(enabledElement.element);
    }
    /**
     * Hides all segmentations on an element.
     *
     * @public
     * @api
     * @returns {void}
     */

  }, {
    key: "hideAllSegmentationsOnElement",
    value: function hideAllSegmentationsOnElement() {
      var enabledElement = this._getEnabledElement();

      var enabledElementUID = enabledElement.uuid;
      var colormap = _externalModules_js__WEBPACK_IMPORTED_MODULE_6__["default"].cornerstone.colors.getColormap(state.colorMapId);
      var numberOfColors = colormap.getNumberOfColors();

      for (var segIndex = 0; segIndex < numberOfColors; segIndex++) {
        setters.brushVisibilityForElement(enabledElementUID, segIndex, false);
      }

      _externalModules_js__WEBPACK_IMPORTED_MODULE_6__["default"].cornerstone.updateImage(enabledElement.element);
    }
    /**
     * Returns the number of colors in the colormap.
     *
     * @static
     * @public
     * @api
     * @returns {Number} The number of colors in the color map.
     */

  }, {
    key: "_getEnabledElement",
    value: function _getEnabledElement() {
      return _externalModules_js__WEBPACK_IMPORTED_MODULE_6__["default"].cornerstone.getEnabledElement(this.element);
    }
    /**
     * Returns the toolData type assoicated with this type of tool.
     *
     * @static
     * @public
     * @returns {String} The number of colors in the color map.
     */

  }, {
    key: "alpha",
    get: function get() {
      return state.alpha;
    },
    set: function set(value) {
      var enabledElement = this._getEnabledElement();

      state.alpha = value;
      _externalModules_js__WEBPACK_IMPORTED_MODULE_6__["default"].cornerstone.updateImage(enabledElement.element);
    }
  }, {
    key: "hiddenButActiveAlpha",
    get: function get() {
      return state.hiddenButActiveAlpha;
    },
    set: function set(value) {
      var enabledElement = this._getEnabledElement();

      state.hiddenButActiveAlpha = value;
      _externalModules_js__WEBPACK_IMPORTED_MODULE_6__["default"].cornerstone.updateImage(enabledElement.element);
    }
  }], [{
    key: "getNumberOfColors",
    value: function getNumberOfColors() {
      var colormap = _externalModules_js__WEBPACK_IMPORTED_MODULE_6__["default"].cornerstone.colors.getColormap(state.colorMapId);
      return colormap.getNumberOfColors();
    }
  }, {
    key: "getReferencedToolDataName",
    value: function getReferencedToolDataName() {
      return 'brush';
    }
    /**
     * Invalidate all the brush data.
     *
     * @static
     * @public
     * @param {string} enabledElementUID - This identifier for the enabled element.
     * @returns {void}
     */

  }, {
    key: "invalidateBrushOnEnabledElement",
    value: function invalidateBrushOnEnabledElement(enabledElementUID) {
      /** WIP **/
      var element = _store_index_js__WEBPACK_IMPORTED_MODULE_10__["default"].getters.enabledElementByUID(enabledElementUID);
      var stackToolState = Object(_stateManagement_toolState_js__WEBPACK_IMPORTED_MODULE_11__["getToolState"])(element, 'stack');

      if (!stackToolState) {
        return;
      }

      var imageIds = stackToolState.data[0].imageIds;
      var toolState = _stateManagement_imageIdSpecificStateManager_js__WEBPACK_IMPORTED_MODULE_12__["globalImageIdSpecificToolStateManager"].saveToolState();

      for (var i = 0; i < imageIds.length; i++) {
        var imageId = imageIds[i];

        if (toolState[imageId] && toolState[imageId].brush) {
          var brushData = toolState[imageId].brush.data;

          for (var j = 0; j < brushData.length; j++) {
            if (brushData[j].pixelData) {
              brushData[j].invalidated = true;
            }
          }
        }
      }

      _externalModules_js__WEBPACK_IMPORTED_MODULE_6__["default"].cornerstone.updateImage(element, true);
    }
    /**
     * Returns a datacube for the segmentation.
     *
     * @static
     * @param {string} enabledElementUID - This identifier for the enabled element.
     * @returns {type}  description
     */

  }, {
    key: "getDataAsVolume",
    value: function getDataAsVolume(enabledElementUID) {
      /** WIP **/
      var element = _store_index_js__WEBPACK_IMPORTED_MODULE_10__["default"].getters.enabledElementByUID(enabledElementUID);
      var stackToolState = Object(_stateManagement_toolState_js__WEBPACK_IMPORTED_MODULE_11__["getToolState"])(element, 'stack');

      if (!stackToolState) {
        return;
      }

      var imageIds = stackToolState.data[0].imageIds;
      var enabledElement = _externalModules_js__WEBPACK_IMPORTED_MODULE_6__["default"].cornerstone.getEnabledElement(element);
      var image = enabledElement.image;
      var dim = {
        xy: image.columns * image.rows,
        z: image.rows,
        xyz: image.columns * image.rows * imageIds.length
      };
      var toolState = _stateManagement_imageIdSpecificStateManager_js__WEBPACK_IMPORTED_MODULE_12__["globalImageIdSpecificToolStateManager"].saveToolState();
      var buffer = new ArrayBuffer(dim.xyz);
      var uint8View = new Uint8Array(buffer);

      for (var i = 0; i < imageIds.length; i++) {
        var imageId = imageIds[i]; // TODO -> Workout HTF we will do this for multiple colors etc.

        if (toolState[imageId] && toolState[imageId].brush && toolState[imageId].brush.data[0].pixelData) {// ADD brush data to the location of that slice.
        }
      }
    }
  }]);

  return BaseBrushTool;
}(_BaseTool_js__WEBPACK_IMPORTED_MODULE_8__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (BaseBrushTool);

/***/ }),

/***/ "./util/pointProjector.js":
/*!********************************!*\
  !*** ./util/pointProjector.js ***!
  \********************************/
/*! exports provided: projectPatientPointToImagePlane, imagePointToPatientPoint, planePlaneIntersection, rotatePoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectPatientPointToImagePlane", function() { return projectPatientPointToImagePlane; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imagePointToPatientPoint", function() { return imagePointToPatientPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "planePlaneIntersection", function() { return planePlaneIntersection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotatePoint", function() { return rotatePoint; });
/* harmony import */ var _externalModules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../externalModules.js */ "./externalModules.js");
/* harmony import */ var _util_convertToVector3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/convertToVector3.js */ "./util/convertToVector3.js");


/**
 * Projects a patient point to an image point
 * @export @public @method
 * @name projectPatientPointToImagePlane
 *
 * @param  {Object} patientPoint The patient point.
 * @param  {Object} imagePlane   The image plane used for projection.
 * @returns {Object}              The projected coordinates.
 */

function projectPatientPointToImagePlane(patientPoint, imagePlane) {
  var rowCosines = Object(_util_convertToVector3_js__WEBPACK_IMPORTED_MODULE_1__["default"])(imagePlane.rowCosines);
  var columnCosines = Object(_util_convertToVector3_js__WEBPACK_IMPORTED_MODULE_1__["default"])(imagePlane.columnCosines);
  var imagePositionPatient = Object(_util_convertToVector3_js__WEBPACK_IMPORTED_MODULE_1__["default"])(imagePlane.imagePositionPatient);
  var point = patientPoint.clone().sub(imagePositionPatient);
  var x = rowCosines.dot(point) / imagePlane.columnPixelSpacing;
  var y = columnCosines.dot(point) / imagePlane.rowPixelSpacing;
  return {
    x: x,
    y: y
  };
} //

/**
 * Projects an image point to a patient point
 * @export @public @method
 * @name imagePointToPatientPoint
 *
 * @param  {Object} imagePoint   The image point.
 * @param  {Object} imagePlane   The image plane used for projection.
 * @returns {Object}              The projected coordinates.
 */

function imagePointToPatientPoint(imagePoint, imagePlane) {
  var rowCosines = Object(_util_convertToVector3_js__WEBPACK_IMPORTED_MODULE_1__["default"])(imagePlane.rowCosines);
  var columnCosines = Object(_util_convertToVector3_js__WEBPACK_IMPORTED_MODULE_1__["default"])(imagePlane.columnCosines);
  var imagePositionPatient = Object(_util_convertToVector3_js__WEBPACK_IMPORTED_MODULE_1__["default"])(imagePlane.imagePositionPatient);
  var x = rowCosines.clone().multiplyScalar(imagePoint.x);
  x.multiplyScalar(imagePlane.columnPixelSpacing);
  var y = columnCosines.clone().multiplyScalar(imagePoint.y);
  y.multiplyScalar(imagePlane.rowPixelSpacing);
  var patientPoint = x.add(y);
  patientPoint.add(imagePositionPatient);
  return patientPoint;
}
/**
 * Returns a rectangle from the imagePlane.
 * @export @public @method
 * @name getRectangleFromImagePlane
 *
 * @param  {Object} imagePlane The imagePlane.
 * @returns {Object} The rect.
 */

function getRectangleFromImagePlane(imagePlane) {
  // Get the points
  var topLeft = imagePointToPatientPoint({
    x: 0,
    y: 0
  }, imagePlane);
  var topRight = imagePointToPatientPoint({
    x: imagePlane.columns,
    y: 0
  }, imagePlane);
  var bottomLeft = imagePointToPatientPoint({
    x: 0,
    y: imagePlane.rows
  }, imagePlane);
  var bottomRight = imagePointToPatientPoint({
    x: imagePlane.columns,
    y: imagePlane.rows
  }, imagePlane); // Get each side as a vector

  var rect = {
    top: new _externalModules_js__WEBPACK_IMPORTED_MODULE_0__["default"].cornerstoneMath.Line3(topLeft, topRight),
    left: new _externalModules_js__WEBPACK_IMPORTED_MODULE_0__["default"].cornerstoneMath.Line3(topLeft, bottomLeft),
    right: new _externalModules_js__WEBPACK_IMPORTED_MODULE_0__["default"].cornerstoneMath.Line3(topRight, bottomRight),
    bottom: new _externalModules_js__WEBPACK_IMPORTED_MODULE_0__["default"].cornerstoneMath.Line3(bottomLeft, bottomRight)
  };
  return rect;
}
/**
 * Gets all the intersections of a line with a rect.
 * @private
 * @method
 * @name lineRectangleIntersection
 *
 * @param  {Object} line The line to check.
 * @param  {Object} rect The rect being intersected.
 * @returns {Object[]} An array of the intersections.
 */


function lineRectangleIntersection(line, rect) {
  var intersections = [];
  Object.keys(rect).forEach(function (side) {
    var segment = rect[side];
    var intersection = line.intersectLine(segment);

    if (intersection) {
      intersections.push(intersection);
    }
  });
  return intersections;
}
/**
 * Gets the line of intersection between two planes in patient space.
 * @export @public @method
 * @name planePlaneIntersection
 *
 * @param  {Object} targetImagePlane    The target plane.
 * @param  {Object} referenceImagePlane The reference plane
 * @returns {Object}                   The intersections.
 */


function planePlaneIntersection(targetImagePlane, referenceImagePlane) {
  var targetRowCosines = Object(_util_convertToVector3_js__WEBPACK_IMPORTED_MODULE_1__["default"])(targetImagePlane.rowCosines);
  var targetColumnCosines = Object(_util_convertToVector3_js__WEBPACK_IMPORTED_MODULE_1__["default"])(targetImagePlane.columnCosines);
  var targetImagePositionPatient = Object(_util_convertToVector3_js__WEBPACK_IMPORTED_MODULE_1__["default"])(targetImagePlane.imagePositionPatient);
  var referenceRowCosines = Object(_util_convertToVector3_js__WEBPACK_IMPORTED_MODULE_1__["default"])(referenceImagePlane.rowCosines);
  var referenceColumnCosines = Object(_util_convertToVector3_js__WEBPACK_IMPORTED_MODULE_1__["default"])(referenceImagePlane.columnCosines);
  var referenceImagePositionPatient = Object(_util_convertToVector3_js__WEBPACK_IMPORTED_MODULE_1__["default"])(referenceImagePlane.imagePositionPatient); // First, get the normals of each image plane

  var targetNormal = targetRowCosines.clone().cross(targetColumnCosines);
  var targetPlane = new _externalModules_js__WEBPACK_IMPORTED_MODULE_0__["default"].cornerstoneMath.Plane();
  targetPlane.setFromNormalAndCoplanarPoint(targetNormal, targetImagePositionPatient);
  var referenceNormal = referenceRowCosines.clone().cross(referenceColumnCosines);
  var referencePlane = new _externalModules_js__WEBPACK_IMPORTED_MODULE_0__["default"].cornerstoneMath.Plane();
  referencePlane.setFromNormalAndCoplanarPoint(referenceNormal, referenceImagePositionPatient);
  var originDirection = referencePlane.clone().intersectPlane(targetPlane);
  var origin = originDirection.origin;
  var direction = originDirection.direction; // Calculate the longest possible length in the reference image plane (the length of the diagonal)

  var bottomRight = imagePointToPatientPoint({
    x: referenceImagePlane.columns,
    y: referenceImagePlane.rows
  }, referenceImagePlane);
  var distance = referenceImagePositionPatient.distanceTo(bottomRight); // Use this distance to bound the ray intersecting the two planes

  var line = new _externalModules_js__WEBPACK_IMPORTED_MODULE_0__["default"].cornerstoneMath.Line3();
  line.start = origin;
  line.end = origin.clone().add(direction.multiplyScalar(distance)); // Find the intersections between this line and the reference image plane's four sides

  var rect = getRectangleFromImagePlane(referenceImagePlane);
  var intersections = lineRectangleIntersection(line, rect); // Return the intersections between this line and the reference image plane's sides
  // In order to draw the reference line from the target image.

  if (intersections.length !== 2) {
    return;
  }

  return {
    start: intersections[0],
    end: intersections[1]
  };
}
/**
 * Translate a point using a rotation angle.
 * @export @public @method
 * @name rotatePoint
 *
 * @param {Object} point - `{ x, y }` in either pixel or canvas coordinates.
 * @param {Object} center - `{ x, y }` in either pixel or canvas coordinates.
 * @param {Number} angle - angle in degrees
 * @returns {Object} - `{ x, y }` new point translated
 */

function rotatePoint(point, center, angle) {
  var angleRadians = angle * (Math.PI / 180); // Convert to radians

  var rotatedX = Math.cos(angleRadians) * (point.x - center.x) - Math.sin(angleRadians) * (point.y - center.y) + center.x;
  var rotatedY = Math.sin(angleRadians) * (point.x - center.x) + Math.cos(angleRadians) * (point.y - center.y) + center.y;
  return {
    x: rotatedX,
    y: rotatedY
  };
}

/***/ })

})
//# sourceMappingURL=cornerstoneTools.6852ffc96d2f8a5f9aa0.hot-update.js.map