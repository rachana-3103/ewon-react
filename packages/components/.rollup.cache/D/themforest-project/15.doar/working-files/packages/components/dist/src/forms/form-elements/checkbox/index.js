import { __assign, __rest } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
import classnames from "classnames";
import { StyledCheckbox, StyledCheckboxLabel } from "./style";
import { StyledBoxWrap } from "../style";
import Feedback from "../feedback";
var Checkbox = forwardRef(function (_a, ref) {
    var className = _a.className, disabled = _a.disabled, feedbackText = _a.feedbackText, id = _a.id, name = _a.name, label = _a.label, state = _a.state, checked = _a.checked, onChange = _a.onChange, onClick = _a.onClick, onBlur = _a.onBlur, value = _a.value, restProps = __rest(_a, ["className", "disabled", "feedbackText", "id", "name", "label", "state", "checked", "onChange", "onClick", "onBlur", "value"]);
    return (_jsxs(StyledBoxWrap, __assign({ className: classnames(className, "custom-checkbox") }, restProps, { children: [_jsx(StyledCheckbox, { type: "checkbox", disabled: disabled, id: id, name: name, checked: checked, onChange: onChange, onClick: onClick, onBlur: onBlur, value: value, ref: ref }), _jsx(StyledCheckboxLabel, __assign({ htmlFor: id }, { children: label })), feedbackText && (_jsx(Feedback, __assign({ state: state }, { children: feedbackText })))] })));
});
Checkbox.displayName = "Checkbox";
export default Checkbox;
