import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import classnames from "classnames";
import { StyledGroup } from "./style";
var FormGroup = function (_a) {
    var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
    return (_jsx(StyledGroup, __assign({ className: classnames(className, "form-group") }, rest, { children: children })));
};
export default FormGroup;
