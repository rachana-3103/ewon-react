import { jsx as _jsx } from "react/jsx-runtime";
import { Circle } from "react-leaflet";
var LeafletCircle = function (_a) {
    var lat = _a.lat, lng = _a.lng, radius = _a.radius, stroke = _a.stroke, color = _a.color, weight = _a.weight, opacity = _a.opacity, lineCap = _a.lineCap, lineJoin = _a.lineJoin, dashArray = _a.dashArray, dashOffset = _a.dashOffset, fill = _a.fill, fillColor = _a.fillColor, fillOpacity = _a.fillOpacity, fillRule = _a.fillRule;
    var fillBlueOptions = {
        stroke: stroke,
        color: color,
        weight: weight,
        opacity: opacity,
        lineCap: lineCap,
        lineJoin: lineJoin,
        dashArray: dashArray,
        dashOffset: dashOffset,
        fill: fill,
        fillColor: fillColor,
        fillOpacity: fillOpacity,
        fillRule: fillRule,
    };
    return (_jsx(Circle, { center: [lat, lng], radius: radius, pathOptions: fillBlueOptions }));
};
LeafletCircle.defaultProps = {
    radius: 200,
    stroke: true,
    color: "red",
    weight: 2,
    opacity: 1,
    lineCap: "inherit",
    lineJoin: "inherit",
    fill: true,
    fillColor: "blue",
    fillOpacity: 0.8,
    fillRule: "inherit",
};
export default LeafletCircle;
//# sourceMappingURL=circle.js.map