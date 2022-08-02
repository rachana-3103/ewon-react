import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { Children, isValidElement } from "react";
import { GoogleMap as GoogleMapComponent, useJsApiLoader, } from "@react-google-maps/api";
import { MapKey } from "@doar/shared/data";
import { StyledMap } from "./style";
var GoogleMap = function (_a) {
    var width = _a.width, height = _a.height, lat = _a.lat, lng = _a.lng, zoom = _a.zoom, children = _a.children;
    var _b = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: MapKey,
    }), isLoaded = _b.isLoaded, loadError = _b.loadError;
    if (loadError) {
        return _jsx("div", { children: "Map cannot be loaded right now, sorry." });
    }
    var RenderChild = Children.map(children, function (el) {
        if (!isValidElement(el))
            return el;
        var child = el;
        if (child !== null) {
            var childType = child.type;
            var name_1 = childType.displayName || childType.name;
            if (name_1 === "GoogleMapMarker") {
                return _jsx(child.type, __assign({ lat: lat, lng: lng }, child.props));
            }
        }
        return null;
    });
    return isLoaded ? (_jsx(StyledMap, __assign({ width: width, height: height }, { children: _jsx(GoogleMapComponent, __assign({ mapContainerStyle: { width: "100%", height: "100%" }, center: { lat: lat, lng: lng }, zoom: zoom }, { children: RenderChild })) }))) : (_jsx("div", { children: "Map is loading." }));
};
GoogleMap.defaultProps = {
    width: "100%",
    height: "400px",
    lat: -3.745,
    lng: -38.523,
    zoom: 12,
};
export default GoogleMap;
