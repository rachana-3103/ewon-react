import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import Button from "../button/button";
var DropdownToggle = function (props) {
    var children = props.children, restProps = __rest(props, ["children"]);
    return _jsx(Button, __assign({}, restProps, { children: children }));
};
DropdownToggle.defaultProps = {
    label: "DropdownToggle",
    className: "dropdown-toggle",
};
DropdownToggle.displayName = "DropdownToggle";
export default DropdownToggle;
