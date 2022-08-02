import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import classname from "classnames";
import { StyledInputGroup } from "./style";
var InputGroup = function (_a) {
    var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
    return (_jsx(StyledInputGroup, __assign({ className: classname(className, "input-group") }, rest, { children: children })));
};
export default InputGroup;
