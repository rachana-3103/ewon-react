import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import classNames from "classnames";
import { StyledTableResponsive, StyledTable } from "./style";
var Table = function (_a) {
    var children = _a.children, className = _a.className, theadColor = _a.theadColor, striped = _a.striped, bordered = _a.bordered, hover = _a.hover, compact = _a.compact, color = _a.color, borderless = _a.borderless, restProps = __rest(_a, ["children", "className", "theadColor", "striped", "bordered", "hover", "compact", "color", "borderless"]);
    return (_jsx(StyledTableResponsive, { children: _jsx(StyledTable, __assign({ className: classNames(className), "$theadColor": theadColor, "$striped": striped, "$bordered": bordered, "$hover": hover, "$compact": compact, "$color": color, "$borderless": borderless }, restProps, { children: children })) }));
};
export default Table;
