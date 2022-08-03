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
import clsx from "clsx";
import { StyledTableResponsive, StyledTable } from "./style";
var Table = function (_a) {
    var children = _a.children, className = _a.className, theadColor = _a.theadColor, striped = _a.striped, bordered = _a.bordered, hover = _a.hover, compact = _a.compact, color = _a.color, borderless = _a.borderless, restProps = __rest(_a, ["children", "className", "theadColor", "striped", "bordered", "hover", "compact", "color", "borderless"]);
    return (_jsx(StyledTableResponsive, { children: _jsx(StyledTable, __assign({ className: clsx(className), "$theadColor": theadColor, "$striped": striped, "$bordered": bordered, "$hover": hover, "$compact": compact, "$color": color, "$borderless": borderless }, restProps, { children: children })) }));
};
export default Table;
//# sourceMappingURL=table.js.map