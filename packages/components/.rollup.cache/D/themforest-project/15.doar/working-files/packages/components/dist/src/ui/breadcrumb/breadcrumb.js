import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import classnames from "classnames";
import { StyledNav, StyledBreadcrumb } from "./style";
export var Breadcrumb = function (_a) {
    var children = _a.children, className = _a.className, as = _a.as, restProps = __rest(_a, ["children", "className", "as"]);
    return (_jsx(StyledNav, __assign({ "aria-label": "breadcrumb", as: as }, { children: _jsx(StyledBreadcrumb, __assign({ className: classnames(className, "breadcrumb") }, restProps, { children: children }), void 0) }), void 0));
};
export default Breadcrumb;
