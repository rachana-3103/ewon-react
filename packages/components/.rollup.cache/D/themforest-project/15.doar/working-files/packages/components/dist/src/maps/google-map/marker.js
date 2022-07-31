import { jsx as _jsx } from "react/jsx-runtime";
import { Marker as MarkerComponent } from "@react-google-maps/api";
var GoogleMapMarker = function (_a) {
    var lat = _a.lat, lng = _a.lng;
    return _jsx(MarkerComponent, { position: { lat: lat, lng: lng } }, void 0);
};
export default GoogleMapMarker;
