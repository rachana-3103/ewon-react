import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import classnames from "clsx";
import { StyledCardColumns } from "./style";
var CardColumns = function (_a) {
    var children = _a.children, className = _a.className, restProps = __rest(_a, ["children", "className"]);
    return (_jsx(StyledCardColumns, __assign({ className: classnames(className, "card-columns") }, restProps, { children: children })));
};
export default CardColumns;
