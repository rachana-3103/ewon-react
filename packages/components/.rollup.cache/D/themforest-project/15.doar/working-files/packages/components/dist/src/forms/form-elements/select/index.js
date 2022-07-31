import { __assign, __rest } from "tslib";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
import classnames from "classnames";
import { StyledSelect } from "./style";
import Feedback from "../feedback";
var Select = forwardRef(function (_a, ref) {
    var className = _a.className, disabled = _a.disabled, state = _a.state, feedbackText = _a.feedbackText, id = _a.id, name = _a.name, value = _a.value, onChange = _a.onChange, onBlur = _a.onBlur, onClick = _a.onClick, children = _a.children, showState = _a.showState, showErrorOnly = _a.showErrorOnly, width = _a.width, height = _a.height, customStyle = _a.customStyle, restProps = __rest(_a, ["className", "disabled", "state", "feedbackText", "id", "name", "value", "onChange", "onBlur", "onClick", "children", "showState", "showErrorOnly", "width", "height", "customStyle"]);
    return (_jsxs(_Fragment, { children: [_jsx(StyledSelect, __assign({ className: classnames(className, "custom-select"), ref: ref, id: id, name: name, value: value, onChange: onChange, onClick: onClick, onBlur: onBlur, "$state": state, "$showState": showState, "$showErrorOnly": showErrorOnly, "$width": width, "$height": height, "$customStyle": customStyle }, restProps, { children: children }), void 0),
            feedbackText && showState && (_jsx(Feedback, __assign({ state: state, showState: showState, showErrorOnly: showErrorOnly }, { children: feedbackText }), void 0))] }, void 0));
});
Select.displayName = "Select";
Select.defaultProps = {
    showErrorOnly: true,
};
export default Select;
