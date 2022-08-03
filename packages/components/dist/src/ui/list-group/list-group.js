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
import { Children, isValidElement } from "react";
import classnames from "clsx";
import { StyledListGroup } from "./style";
var ListGroup = function (_a) {
    var as = _a.as, className = _a.className, children = _a.children, flush = _a.flush, horizontal = _a.horizontal, restProps = __rest(_a, ["as", "className", "children", "flush", "horizontal"]);
    var RenderChild = Children.map(children, function (el) {
        if (!isValidElement(el))
            return el;
        var child = el;
        if (child !== null) {
            var childType = child.type;
            var name_1 = childType.displayName || childType.name;
            if (name_1 === "ListGroupItem") {
                return (_jsx(child.type, __assign({}, child.props, { flush: flush, horizontal: horizontal })));
            }
        }
        return child;
    });
    return (_jsx(StyledListGroup, __assign({ as: as, className: classnames(className, "list-group"), "$horizontal": horizontal }, restProps, { children: RenderChild })));
};
export default ListGroup;
//# sourceMappingURL=list-group.js.map