import { __read } from "tslib";
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
