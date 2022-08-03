var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import classnames from "clsx";
import { StyledDropItem } from "./style";
var DropdownItem = function (_a) {
    var children = _a.children, path = _a.path, className = _a.className, active = _a.active;
    return (_jsx(StyledDropItem, __assign({ active: active, path: path, className: classnames(className, "dropdown-item") }, { children: children })));
};
export default DropdownItem;
//# sourceMappingURL=dropdown-item.js.map