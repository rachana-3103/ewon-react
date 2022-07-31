import { __assign, __rest } from "tslib";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
import classnames from "classnames";
import { StyledTextarea } from "./style";
import Feedback from "../feedback";
var Textarea = forwardRef(function (_a, ref) {
    var className = _a.className, rows = _a.rows, disabled = _a.disabled, state = _a.state, feedbackText = _a.feedbackText, id = _a.id, name = _a.name, placeholder = _a.placeholder, value = _a.value, showState = _a.showState, showErrorOnly = _a.showErrorOnly, onChange = _a.onChange, onClick = _a.onClick, onBlur = _a.onBlur, width = _a.width, height = _a.height, customStyle = _a.customStyle, restProps = __rest(_a, ["className", "rows", "disabled", "state", "feedbackText", "id", "name", "placeholder", "value", "showState", "showErrorOnly", "onChange", "onClick", "onBlur", "width", "height", "customStyle"]);
    return (_jsxs(_Fragment, { children: [_jsx(StyledTextarea, __assign({ disabled: disabled, className: classnames(className, "form-control"), rows: rows, id: id, name: name, placeholder: placeholder, value: value, ref: ref, onChange: onChange, onClick: onClick, onBlur: onBlur, "$state": state, "$showState": showState, "$showErrorOnly": showErrorOnly, "$width": width, "$height": height, "$customStyle": customStyle }, restProps), void 0),
            feedbackText && showState && (_jsx(Feedback, __assign({ state: state, showState: showState, showErrorOnly: showErrorOnly }, { children: feedbackText }), void 0))] }, void 0));
});
Textarea.displayName = "Textarea";
Textarea.defaultProps = {
    rows: 2,
    showErrorOnly: true,
};
export default Textarea;
