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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import classnames from "classnames";
import { StyledBreadcrumbItem } from "./style";
var BreadcrumbItem = function (_a) {
    var children = _a.children, path = _a.path, active = _a.active, className = _a.className;
    return (_jsxs(StyledBreadcrumbItem, __assign({ className: classnames(className, "breadcrumb-item", active && "active"), "$active": active, "aria-current": active && "page" }, { children: [active && children, !active && path && _jsx(Link, __assign({ to: path }, { children: children }))] })));
};
export default BreadcrumbItem;
//# sourceMappingURL=item.js.map