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
import classnames from "clsx";
import { StyledBadge } from "./style";
var Badge = function (_a) {
    var color = _a.color, variant = _a.variant, shape = _a.shape, pill = _a.pill, children = _a.children, className = _a.className, restProps = __rest(_a, ["color", "variant", "shape", "pill", "children", "className"]);
    return (_jsx(StyledBadge, __assign({ "$color": color, "$variant": variant, "$shape": shape, "$pill": pill, className: classnames(className, "badge") }, restProps, { children: children })));
};
Badge.defaultProps = {
    color: "primary",
    variant: "contained",
    shape: "rounded",
};
export default Badge;
//# sourceMappingURL=badge.js.map