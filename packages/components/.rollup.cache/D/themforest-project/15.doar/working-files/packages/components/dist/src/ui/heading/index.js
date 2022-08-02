import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { StyledHeading } from "./style";
var Heading = forwardRef(function (_a, ref) {
    var as = _a.as, className = _a.className, tt = _a.tt, children = _a.children, restProps = __rest(_a, ["as", "className", "tt", "children"]);
    return (_jsx(StyledHeading, __assign({ as: as, className: className, "$tt": tt, ref: ref }, restProps, { children: children })));
});
Heading.displayName = "Heading";
export default Heading;
