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
import classnames from "classnames";
import { StyledNavLink } from "./style";
export var NavLink = function (_a) {
    var children = _a.children, className = _a.className, path = _a.path, active = _a.active, onClick = _a.onClick, customStyle = _a.customStyle, iconPosition = _a.iconPosition, iconDistance = _a.iconDistance, rel = _a.rel, label = _a.label, target = _a.target, rest = __rest(_a, ["children", "className", "path", "active", "onClick", "customStyle", "iconPosition", "iconDistance", "rel", "label", "target"]);
    return (_jsx(StyledNavLink, __assign({ className: classnames(className, "nav-link", active && "active"), path: path, "$active": active, onClick: onClick, "$customStyle": customStyle, "$iconPosition": iconPosition, "$iconDistance": iconDistance, rel: rel, target: target, "aria-label": label }, rest, { children: children })));
};
NavLink.defaultProps = {
    iconPosition: "left",
    iconDistance: "7px",
};
NavLink.displayName = "NavLink";
export default NavLink;
//# sourceMappingURL=nav-link.js.map