import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import classnames from "clsx";
import { StyledNavLink } from "./style";
var NavLink = function (_a) {
    var children = _a.children, className = _a.className, path = _a.path, active = _a.active, onClick = _a.onClick, customStyle = _a.customStyle, iconPosition = _a.iconPosition, iconDistance = _a.iconDistance, rel = _a.rel, label = _a.label, target = _a.target, rest = __rest(_a, ["children", "className", "path", "active", "onClick", "customStyle", "iconPosition", "iconDistance", "rel", "label", "target"]);
    return (_jsx(StyledNavLink, __assign({ className: classnames(className, "nav-link", active && "active"), path: path, "$active": active, onClick: onClick, "$customStyle": customStyle, "$iconPosition": iconPosition, "$iconDistance": iconDistance, rel: rel, target: target, "aria-label": label }, rest, { children: children })));
};
NavLink.defaultProps = {
    iconPosition: "left",
    iconDistance: "7px",
};
NavLink.displayName = "NavLink";
export default NavLink;
