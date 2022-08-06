/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from "react";
import { createCustomEqual, deepEqual } from "fast-equals";
import { isLatLngLiteral } from "@googlemaps/typescript-guards";
var deepCompareEqualsForMaps = createCustomEqual(function () { return ({
    areObjectsEqual: function (a, b) {
        if (isLatLngLiteral(a) ||
            a instanceof google.maps.LatLng ||
            isLatLngLiteral(b) ||
            b instanceof google.maps.LatLng) {
            return new google.maps.LatLng(a).equals(new google.maps.LatLng(b));
        }
        return deepEqual(a, b);
    },
}); });
function useDeepCompareMemoize(value) {
    var ref = useRef();
    if (!deepCompareEqualsForMaps(value, ref.current)) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        ref.current = value;
    }
    return ref.current;
}
export function useDeepCompareEffectForMaps(callback, dependencies) {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(callback, dependencies.map(useDeepCompareMemoize));
}
//# sourceMappingURL=utils.js.map