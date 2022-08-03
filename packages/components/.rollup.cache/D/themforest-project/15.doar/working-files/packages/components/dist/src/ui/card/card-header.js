import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import classnames from "clsx";
import { StyledCardHeader } from "./style";
var CardHeader = function (_a) {
    var children = _a.children, className = _a.className, variant = _a.variant, restProps = __rest(_a, ["children", "className", "variant"]);
    return (_jsx(StyledCardHeader, __assign({ className: classnames(className, "card-header"), "$variant": variant }, restProps, { children: children })));
};
export default CardHeader;
