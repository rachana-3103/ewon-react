import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Children, isValidElement } from "react";
import L from "leaflet";
import { MapContainer, TileLayer } from "react-leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { MapBoxAccessKey } from "@doar/shared/data";
import { StyledMap } from "./style";
var DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
});
L.Marker.prototype.options.icon = DefaultIcon;
var LeafletMap = function (_a) {
    var width = _a.width, height = _a.height, lat = _a.lat, lng = _a.lng, zoom = _a.zoom, scrollWheelZoom = _a.scrollWheelZoom, children = _a.children;
    var RenderChild = Children.map(children, function (el) {
        if (!isValidElement(el))
            return el;
        var child = el;
        if (child !== null) {
            var childType = child.type;
            var name_1 = childType.displayName || childType.name;
            if (name_1 === "LeafletMarker") {
                return _jsx(child.type, __assign({ lat: lat, lng: lng }, child.props));
            }
            if (name_1 === "LeafletCircle") {
                return _jsx(child.type, __assign({ lat: lat, lng: lng }, child.props));
            }
        }
        return null;
    });
    return (_jsx(StyledMap, __assign({ width: width, height: height }, { children: _jsxs(MapContainer, __assign({ center: [lat, lng], zoom: zoom, scrollWheelZoom: scrollWheelZoom }, { children: [_jsx(TileLayer, { attribution: '\u00A9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors', url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", accessToken: MapBoxAccessKey }), RenderChild] })) })));
};
LeafletMap.defaultProps = {
    lat: 51.505,
    lng: -0.09,
    zoom: 13,
    scrollWheelZoom: false,
    width: "100%",
    height: "400px",
};
export default LeafletMap;
