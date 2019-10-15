/*! cornerstone-tools - 3.0.1 - 2019-10-15 | (c) 2017 Chris Hafey | https://github.com/cornerstonejs/cornerstoneTools */
webpackHotUpdate("cornerstoneTools",{

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
          });
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
    meansss: roiMeanStdDev.mean || 0,
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

/***/ })

})
//# sourceMappingURL=cornerstoneTools.191fcf370a21e43c453f.hot-update.js.map