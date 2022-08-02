import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import classnames from "classnames";
import { StyledLabel } from "./style";
var Label = function (_a) {
    var children = _a.children, htmlFor = _a.htmlFor, className = _a.className, rest = __rest(_a, ["children", "htmlFor", "className"]);
    return (_jsx(StyledLabel, __assign({ htmlFor: htmlFor, className: classnames(className, "label") }, rest, { children: children })));
};
export default Label;
