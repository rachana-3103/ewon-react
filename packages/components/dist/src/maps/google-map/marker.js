var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
import { useEffect, useState } from "react";
var Marker = function (options) {
    var _a = __read(useState(), 2), marker = _a[0], setMarker = _a[1];
    useEffect(function () {
        if (!marker) {
            setMarker(new google.maps.Marker());
        }
        // remove marker from map on unmount
        return function () {
            if (marker) {
                marker.setMap(null);
            }
        };
    }, [marker]);
    useEffect(function () {
        if (marker) {
            marker.setOptions(options);
        }
    }, [marker, options]);
    return null;
};
export default Marker;
//# sourceMappingURL=marker.js.map