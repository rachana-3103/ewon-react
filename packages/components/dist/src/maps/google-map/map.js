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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Children, cloneElement, isValidElement, useEffect, useRef, useState, } from "react";
import { useDeepCompareEffectForMaps } from "./utils";
var Map = function (_a) {
    var children = _a.children, onClick = _a.onClick, options = __rest(_a, ["children", "onClick"]);
    var ref = useRef(null);
    var _b = __read(useState(), 2), map = _b[0], setMap = _b[1];
    useEffect(function () {
        if (ref.current && !map) {
            setMap(new window.google.maps.Map(ref.current, {}));
        }
    }, [ref, map]);
    // because React does not do deep comparisons, a custom hook is used
    // see discussion in https://github.com/googlemaps/js-samples/issues/946
    useDeepCompareEffectForMaps(function () {
        if (map) {
            map.setOptions(options);
        }
    }, [map, options]);
    useEffect(function () {
        if (map) {
            ["click", "idle"].forEach(function (eventName) {
                return google.maps.event.clearListeners(map, eventName);
            });
            if (onClick) {
                map.addListener("click", onClick);
            }
        }
    }, [map, onClick]);
    return (_jsxs(_Fragment, { children: [_jsx("div", { ref: ref, style: { width: "100%", height: "100%" } }), " ", Children.map(children, function (child) {
                if (isValidElement(child)) {
                    // set the map prop on the child component
                    return cloneElement(child, { map: map });
                }
                return null;
            })] }));
};
export default Map;
//# sourceMappingURL=map.js.map