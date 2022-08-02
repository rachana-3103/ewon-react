import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { StyledRow } from "./style";
var Row = function (_a) {
    var className = _a.className, gutters = _a.gutters, noGutter = _a.noGutter, props = __rest(_a, ["className", "gutters", "noGutter"]);
    return (_jsx(StyledRow, __assign({ "$gutters": gutters, "$noGutter": noGutter, className: className }, props)));
};
export default Row;
