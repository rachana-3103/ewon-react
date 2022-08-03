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
import { StyledNav } from "./style";
var Nav = function (_a) {
    var children = _a.children, className = _a.className, pills = _a.pills, align = _a.align, vertical = _a.vertical, fill = _a.fill, customStyle = _a.customStyle, rest = __rest(_a, ["children", "className", "pills", "align", "vertical", "fill", "customStyle"]);
    var RenderChild = Children.map(children, function (el) {
        if (!isValidElement(el))
            return el;
        var child = el;
        if (child !== null) {
            var childType = child.type;
            var name_1 = childType.displayName || childType.name;
            if (name_1 === "NavLink") {
                return (_jsx(child.type, __assign({}, child.props, { customStyle: customStyle })));
            }
        }
        return _jsx(child.type, __assign({}, child.props));
    });
    return (_jsx(StyledNav, __assign({ className: classnames(className, "nav"), "$pills": pills, "$align": align, "$vertical": vertical, "$fill": fill, "$customStyle": customStyle }, rest, { children: RenderChild })));
};
export default Nav;
//# sourceMappingURL=nav.js.map