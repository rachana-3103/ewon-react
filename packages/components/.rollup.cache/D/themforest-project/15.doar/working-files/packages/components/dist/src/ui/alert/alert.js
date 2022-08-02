import { __assign, __read } from "tslib";
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
