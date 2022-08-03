import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import classnames from "clsx";
import { StyledBreadcrumbItem } from "./style";
var BreadcrumbItem = function (_a) {
    var children = _a.children, path = _a.path, active = _a.active, className = _a.className;
    return (_jsxs(StyledBreadcrumbItem, __assign({ className: classnames(className, "breadcrumb-item", active && "active"), "$active": active, "aria-current": active && "page" }, { children: [active && children, !active && path && _jsx(Link, __assign({ to: path }, { children: children }))] })));
};
export default BreadcrumbItem;
