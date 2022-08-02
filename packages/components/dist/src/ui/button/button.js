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
/* eslint-disable react/button-has-type */
import classnames from "classnames";
import { StyledButton, StyledAnchor, StyledLink } from "./style";
var Button = function (_a) {
    var children = _a.children, type = _a.type, variant = _a.variant, color = _a.color, size = _a.size, shape = _a.shape, fullwidth = _a.fullwidth, active = _a.active, disabled = _a.disabled, iconButton = _a.iconButton, hasIcon = _a.hasIcon, label = _a.label, onClick = _a.onClick, className = _a.className, path = _a.path, iconPosition = _a.iconPosition, iconSize = _a.iconSize, iconSpace = _a.iconSpace, uppercase = _a.uppercase, restProps = __rest(_a, ["children", "type", "variant", "color", "size", "shape", "fullwidth", "active", "disabled", "iconButton", "hasIcon", "label", "onClick", "className", "path", "iconPosition", "iconSize", "iconSpace", "uppercase"]);
    if (path) {
        var internal = /^\/(?!\/)/.test(path);
        var isHash = path === null || path === void 0 ? void 0 : path.startsWith("#");
        if (internal) {
            return (_jsx(StyledLink, __assign({ "$color": color, "$variant": variant, "$size": size, "$shape": shape, "$fullwidth": fullwidth, "$active": active, disabled: disabled, "$iconButton": iconButton, "$hasIcon": hasIcon, "$iconPosition": iconPosition, "$iconSize": iconSize, "$iconSpace": iconSpace, "$uppercase": uppercase, "aria-label": label, onClick: onClick, className: classnames(className, "btn"), to: path }, restProps, { children: children })));
        }
        if (isHash) {
            return (_jsx(StyledAnchor, __assign({ "$color": color, "$variant": variant, "$size": size, "$shape": shape, "$fullwidth": fullwidth, "$active": active, disabled: disabled, "$iconButton": iconButton, "$hasIcon": hasIcon, "$iconPosition": iconPosition, "$iconSize": iconSize, "$iconSpace": iconSpace, "$uppercase": uppercase, "aria-label": label, onClick: onClick, className: classnames(className, "btn"), href: path }, restProps, { children: children })));
        }
        return (_jsx(StyledAnchor, __assign({ "$color": color, "$variant": variant, "$size": size, "$shape": shape, "$fullwidth": fullwidth, "$active": active, disabled: disabled, "$iconButton": iconButton, "$hasIcon": hasIcon, "$iconPosition": iconPosition, "$iconSize": iconSize, "$iconSpace": iconSpace, "$uppercase": uppercase, "aria-label": label, onClick: onClick, className: classnames(className, "btn"), href: path }, restProps, { children: children })));
    }
    return (_jsx(StyledButton, __assign({ "$color": color, "$variant": variant, "$size": size, "$shape": shape, "$fullwidth": fullwidth, type: type, "$active": active, disabled: disabled, "$iconButton": iconButton, "$hasIcon": hasIcon, "$iconPosition": iconPosition, "$iconSize": iconSize, "$iconSpace": iconSpace, "$uppercase": uppercase, "aria-label": label, onClick: onClick, className: classnames(className, "btn") }, restProps, { children: children })));
};
Button.defaultProps = {
    type: "button",
    variant: "contained",
    color: "primary",
    size: "md",
    shape: "rounded",
    fullwidth: false,
    active: false,
    disabled: false,
    iconButton: false,
    iconPosition: "left",
    iconSize: "sm",
};
Button.displayName = "Button";
export default Button;
//# sourceMappingURL=button.js.map