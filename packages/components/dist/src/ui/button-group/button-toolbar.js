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
import classnames from "classnames";
import { StyledButtonToolbar } from "./style";
var ButtonToolbar = function (_a) {
    var children = _a.children, className = _a.className, label = _a.label;
    return (_jsx(StyledButtonToolbar, __assign({ role: "toolbar", className: classnames(className, "btn-toolbar"), "aria-label": label }, { children: children })));
};
ButtonToolbar.defaultProps = {
    label: "button toolbar",
};
export default ButtonToolbar;
//# sourceMappingURL=button-toolbar.js.map