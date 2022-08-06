var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import { Wrapper } from "@googlemaps/react-wrapper";
import Map from "./map";
import Marker from "./marker";
import { StyledMap } from "./style";
var render = function (status) {
    return _jsx("h1", { children: status });
};
var MyMap = function (_a) {
    var width = _a.width, height = _a.height, marker = _a.marker, options = __rest(_a, ["width", "height", "marker"]);
    return (_jsx(StyledMap, __assign({ width: width, height: height }, { children: _jsx(Wrapper, __assign({ apiKey: "AIzaSyB3mMuvl8IUlviRZiizBiX7uhsdIqunx94", render: render }, { children: _jsx(Map, __assign({}, options, { children: marker && _jsx(Marker, { position: options.center }) })) })) })));
};
MyMap.defaultProps = {
    center: { lat: -3.745, lng: -38.523 },
    width: "100%",
    height: "400px",
    zoom: 12,
};
export default MyMap;
//# sourceMappingURL=google-map.js.map