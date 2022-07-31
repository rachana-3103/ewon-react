import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Sparklines, SparklinesLine, SparklinesSpots } from "react-sparklines";
var SparklinesLines = function (_a) {
    var data = _a.data, limit = _a.limit, width = _a.width, height = _a.height, svgWidth = _a.svgWidth, svgHeight = _a.svgHeight, preserveAspectRatio = _a.preserveAspectRatio, margin = _a.margin, min = _a.min, max = _a.max, style = _a.style, color = _a.color, lineStyle = _a.lineStyle, onMouseMove = _a.onMouseMove, hasSpot = _a.hasSpot, spotSize = _a.spotSize, spotStyle = _a.spotStyle, spotColors = _a.spotColors;
    return (_jsxs(Sparklines, __assign({ data: data, limit: limit, width: width, height: height, svgWidth: svgWidth, svgHeight: svgHeight, preserveAspectRatio: preserveAspectRatio, margin: margin, min: min, max: max, style: style }, { children: [_jsx(SparklinesLine, { color: color, style: lineStyle, onMouseMove: onMouseMove }, void 0),
            hasSpot ? (_jsx(SparklinesSpots, { size: spotSize, style: spotStyle, spotColors: spotColors }, void 0)) : (_jsx(SparklinesSpots, { size: 0 }, void 0))] }), void 0));
};
export default SparklinesLines;
