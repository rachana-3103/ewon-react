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
import { StyledListGroupItem } from "./style";
var ListGroupItem = function (_a) {
    var as = _a.as, className = _a.className, children = _a.children, active = _a.active, disabled = _a.disabled, action = _a.action, href = _a.href, flush = _a.flush, horizontal = _a.horizontal, restProps = __rest(_a, ["as", "className", "children", "active", "disabled", "action", "href", "flush", "horizontal"]);
    return (_jsx(StyledListGroupItem, __assign({ as: as, className: classnames(className, "list-group-item"), "$active": active, "$disabled": disabled, "$action": action, href: href, "$flush": flush, "$horizontal": horizontal }, restProps, { children: children })));
};
ListGroupItem.displayName = "ListGroupItem";
export default ListGroupItem;
//# sourceMappingURL=list-group-item.js.map