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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { VectorMap as VectorMapComponent } from "@south-paw/react-vector-maps";
import worldLowRes from "@doar/shared/data/maps/world-low-res.json";
import { StyledMap } from "./style";
var VectorMap = function (_a) {
    var width = _a.width, height = _a.height, backgroundColor = _a.backgroundColor, borderColor = _a.borderColor, color = _a.color, checkedLayers = _a.checkedLayers, selectedColor = _a.selectedColor, tooltip = _a.tooltip, _b = _a.data, data = _b === void 0 ? worldLowRes : _b;
    var _c = __read(useState([]), 2), selected = _c[0], setSelected = _c[1];
    var _d = __read(useState(), 2), tooltipeName = _d[0], setTooltipeName = _d[1];
    var _e = __read(useState(false), 2), isTooltipVisible = _e[0], setIsTooltipVisible = _e[1];
    var _f = __read(useState(0), 2), tooltipY = _f[0], setTooltipY = _f[1];
    var _g = __read(useState(0), 2), tooltipX = _g[0], setTooltipX = _g[1];
    var onClick = function (e) {
        var _a;
        var target = e.target;
        var id = (_a = target.attributes) === null || _a === void 0 ? void 0 : _a.id.value;
        if (selected.includes(id)) {
            setSelected(selected.filter(function (sid) { return sid !== id; }));
        }
        else {
            setSelected(__spreadArray(__spreadArray([], __read(selected), false), [id], false));
        }
    };
    var onMouseOver = function (e) {
        var _a;
        var target = e.target;
        var name = (_a = target.attributes) === null || _a === void 0 ? void 0 : _a.name.value;
        setTooltipeName(name);
        setIsTooltipVisible(true);
    };
    var onMouseMove = function (e) {
        setTooltipY(e.clientY - 20);
        setTooltipX(e.clientX - 10);
    };
    var onMouseOut = function () {
        setTooltipeName("");
        setIsTooltipVisible(false);
    };
    useEffect(function () {
        if (!checkedLayers)
            return;
        setSelected(__spreadArray([], __read(checkedLayers), false));
    }, [checkedLayers]);
    return (_jsxs(StyledMap, __assign({ width: width, height: height, "$bg": backgroundColor, "$bdc": borderColor, "$color": color, "$slColor": selectedColor, className: "vector-map" }, { children: [_jsx(VectorMapComponent, __assign({}, data, { checkedLayers: selected, layerProps: { onClick: onClick, onMouseOver: onMouseOver, onMouseOut: onMouseOut, onMouseMove: onMouseMove } })), tooltip && isTooltipVisible && (_jsx("div", __assign({ className: "tooltip", style: { top: tooltipY, left: tooltipX } }, { children: tooltipeName })))] })));
};
VectorMap.defaultProps = {
    backgroundColor: "transparent",
    borderColor: "#fff",
    color: "#8392a5",
    selectedColor: "rgba(56, 43, 168, 1)",
    width: "90%",
    height: "500px",
    tooltip: false,
};
export default VectorMap;
//# sourceMappingURL=vector-map.js.map