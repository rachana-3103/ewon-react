import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import classname from "classnames";
import { StyledInputGroupWrap } from "./style";
var InputGroupAddon = function (_a) {
    var children = _a.children, _b = _a.dir, dir = _b === void 0 ? "append" : _b, className = _a.className, rest = __rest(_a, ["children", "dir", "className"]);
    return (_jsx(StyledInputGroupWrap, __assign({ className: classname(className, "input-group-" + dir), "$dir": dir }, rest, { children: children }), void 0));
};
export default InputGroupAddon;