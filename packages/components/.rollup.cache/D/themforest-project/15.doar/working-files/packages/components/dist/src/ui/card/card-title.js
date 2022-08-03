import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import classnames from "clsx";
import { StyledCardHeading } from "./style";
var CardTitle = function (_a) {
    var children = _a.children, className = _a.className, as = _a.as, restProps = __rest(_a, ["children", "className", "as"]);
    return (_jsx(StyledCardHeading, __assign({ as: as, className: classnames(className, "card-title") }, restProps, { children: children })));
};
export default CardTitle;
