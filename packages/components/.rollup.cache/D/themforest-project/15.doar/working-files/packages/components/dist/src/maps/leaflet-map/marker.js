import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { Marker as MarkerComponent } from "react-leaflet";
var LeafletMarker = function (_a) {
    var lat = _a.lat, lng = _a.lng, children = _a.children;
    return _jsx(MarkerComponent, __assign({ position: [lat, lng] }, { children: children }), void 0);
};
export default LeafletMarker;
