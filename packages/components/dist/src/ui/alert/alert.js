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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { StyledAlert } from "./style";
var Alert = function (_a) {
    var children = _a.children, variant = _a.variant, color = _a.color, solid = _a.solid, hasLink = _a.hasLink, isDismissible = _a.isDismissible, hasIcon = _a.hasIcon;
    var _b = __read(useState(false), 2), show = _b[0], setShow = _b[1];
    var dismissHandler = function () {
        setShow(true);
    };
    if (!show) {
        return (_jsxs(StyledAlert, __assign({ "$variant": variant, "$color": color, "$solid": solid, "$hasLink": hasLink, "$isDismissible": isDismissible, "$hasIcon": hasIcon, role: "alert" }, { children: [children, isDismissible && (_jsx("button", __assign({ type: "button", className: "close", "data-dismiss": "alert", "aria-label": "Close", onClick: dismissHandler }, { children: _jsx("span", __assign({ "aria-hidden": "true" }, { children: "\u00D7" })) })))] })));
    }
    return null;
};
Alert.defaultProps = {
    variant: "contained",
    color: "primary",
    solid: false,
    hasLink: false,
    isDismissible: false,
    hasIcon: false,
};
export default Alert;
//# sourceMappingURL=alert.js.map