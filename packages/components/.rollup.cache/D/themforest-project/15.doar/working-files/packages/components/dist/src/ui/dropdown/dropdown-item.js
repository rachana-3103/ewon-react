import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import classnames from "classnames";
import { StyledDropItem } from "./style";
var DropdownItem = function (_a) {
    var children = _a.children, path = _a.path, className = _a.className, active = _a.active;
    return (_jsx(StyledDropItem, __assign({ active: active, path: path, className: classnames(className, "dropdown-item") }, { children: children })));
};
export default DropdownItem;
