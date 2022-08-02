import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import classname from "classnames";
import { StyledInputGroupText } from "./style";
export var InputGroupText = function (_a) {
    var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
    return (_jsx(StyledInputGroupText, __assign({ className: classname(className, "input-group-text") }, rest, { children: children })));
};
export default InputGroupText;
