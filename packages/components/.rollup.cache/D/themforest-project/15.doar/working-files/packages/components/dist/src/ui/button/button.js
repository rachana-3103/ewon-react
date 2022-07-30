import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import classnames from "classnames";
import { StyledButton, StyledAnchor, StyledLink } from "./style";
var Button = function (_a) {
    var children = _a.children, type = _a.type, variant = _a.variant, color = _a.color, size = _a.size, shape = _a.shape, fullwidth = _a.fullwidth, active = _a.active, disabled = _a.disabled, iconButton = _a.iconButton, hasIcon = _a.hasIcon, label = _a.label, onClick = _a.onClick, className = _a.className, path = _a.path, iconPosition = _a.iconPosition, iconSize = _a.iconSize, iconSpace = _a.iconSpace, uppercase = _a.uppercase, restProps = __rest(_a, ["children", "type", "variant", "color", "size", "shape", "fullwidth", "active", "disabled", "iconButton", "hasIcon", "label", "onClick", "className", "path", "iconPosition", "iconSize", "iconSpace", "uppercase"]);
    if (path) {
        var internal = /^\/(?!\/)/.test(path);
        var isHash = path === null || path === void 0 ? void 0 : path.startsWith("#");
        if (internal) {
            return (_jsx(StyledLink, __assign({ "$color": color, "$variant": variant, "$size": size, "$shape": shape, "$fullwidth": fullwidth, "$active": active, disabled: disabled, "$iconButton": iconButton, "$hasIcon": hasIcon, "$iconPosition": iconPosition, "$iconSize": iconSize, "$iconSpace": iconSpace, "$uppercase": uppercase, "aria-label": label, onClick: onClick, className: classnames(className, "btn"), to: path }, restProps, { children: children }), void 0));
        }
        if (isHash) {
            return (_jsx(StyledAnchor, __assign({ "$color": color, "$variant": variant, "$size": size, "$shape": shape, "$fullwidth": fullwidth, "$active": active, disabled: disabled, "$iconButton": iconButton, "$hasIcon": hasIcon, "$iconPosition": iconPosition, "$iconSize": iconSize, "$iconSpace": iconSpace, "$uppercase": uppercase, "aria-label": label, onClick: onClick, className: classnames(className, "btn"), href: path }, restProps, { children: children }), void 0));
        }
        return (_jsx(StyledAnchor, __assign({ "$color": color, "$variant": variant, "$size": size, "$shape": shape, "$fullwidth": fullwidth, "$active": active, disabled: disabled, "$iconButton": iconButton, "$hasIcon": hasIcon, "$iconPosition": iconPosition, "$iconSize": iconSize, "$iconSpace": iconSpace, "$uppercase": uppercase, "aria-label": label, onClick: onClick, className: classnames(className, "btn"), href: path }, restProps, { children: children }), void 0));
    }
    return (_jsx(StyledButton, __assign({ "$color": color, "$variant": variant, "$size": size, "$shape": shape, "$fullwidth": fullwidth, type: type, "$active": active, disabled: disabled, "$iconButton": iconButton, "$hasIcon": hasIcon, "$iconPosition": iconPosition, "$iconSize": iconSize, "$iconSpace": iconSpace, "$uppercase": uppercase, "aria-label": label, onClick: onClick, className: classnames(className, "btn") }, restProps, { children: children }), void 0));
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
