import { __assign } from "tslib";
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
