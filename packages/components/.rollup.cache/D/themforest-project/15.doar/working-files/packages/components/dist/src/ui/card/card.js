import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import classnames from "classnames";
import { StyledCard } from "./style";
var Card = function (_a) {
    var children = _a.children, className = _a.className, color = _a.color, restProps = __rest(_a, ["children", "className", "color"]);
    return (_jsx(StyledCard, __assign({ className: classnames(className, "card") }, restProps, { "$color": color }, { children: children })));
};
export default Card;
