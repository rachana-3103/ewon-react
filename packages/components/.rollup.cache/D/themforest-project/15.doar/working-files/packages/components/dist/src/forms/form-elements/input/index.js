import { __assign, __rest } from "tslib";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
import classnames from "classnames";
import { StyledInput } from "./style";
import Feedback from "../feedback";
var Input = forwardRef(function (_a, ref) {
    var className = _a.className, type = _a.type, disabled = _a.disabled, state = _a.state, feedbackText = _a.feedbackText, id = _a.id, name = _a.name, onChange = _a.onChange, onClick = _a.onClick, onBlur = _a.onBlur, value = _a.value, readonly = _a.readonly, showState = _a.showState, showErrorOnly = _a.showErrorOnly, width = _a.width, height = _a.height, customStyle = _a.customStyle, restProps = __rest(_a, ["className", "type", "disabled", "state", "feedbackText", "id", "name", "onChange", "onClick", "onBlur", "value", "readonly", "showState", "showErrorOnly", "width", "height", "customStyle"]);
    return (_jsxs(_Fragment, { children: [_jsx(StyledInput, __assign({ type: type, disabled: disabled, ref: ref, className: classnames(className, "form-control"), id: id, name: name, onChange: onChange, onClick: onClick, onBlur: onBlur, value: value, readOnly: readonly, "$state": state, "$showState": showState, "$showErrorOnly": showErrorOnly, "$width": width, "$height": height, "$customStyle": customStyle }, restProps)), feedbackText && showState && (_jsx(Feedback, __assign({ state: state, showState: showState, showErrorOnly: showErrorOnly }, { children: feedbackText })))] }));
});
Input.displayName = "Input";
Input.defaultProps = {
    type: "text",
    showErrorOnly: true,
};
export default Input;
