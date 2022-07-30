import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import classnames from "classnames";
import { StyledBadge } from "./style";
var Badge = function (_a) {
    var color = _a.color, variant = _a.variant, shape = _a.shape, pill = _a.pill, children = _a.children, className = _a.className, restProps = __rest(_a, ["color", "variant", "shape", "pill", "children", "className"]);
    return (_jsx(StyledBadge, __assign({ "$color": color, "$variant": variant, "$shape": shape, "$pill": pill, className: classnames(className, "badge") }, restProps, { children: children }), void 0));
};
Badge.defaultProps = {
    color: "primary",
    variant: "contained",
    shape: "rounded",
};
export default Badge;
