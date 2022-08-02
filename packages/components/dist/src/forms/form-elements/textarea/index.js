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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
import classnames from "classnames";
import { StyledTextarea } from "./style";
import Feedback from "../feedback";
var Textarea = forwardRef(function (_a, ref) {
    var className = _a.className, rows = _a.rows, disabled = _a.disabled, state = _a.state, feedbackText = _a.feedbackText, id = _a.id, name = _a.name, placeholder = _a.placeholder, value = _a.value, showState = _a.showState, showErrorOnly = _a.showErrorOnly, onChange = _a.onChange, onClick = _a.onClick, onBlur = _a.onBlur, width = _a.width, height = _a.height, customStyle = _a.customStyle, restProps = __rest(_a, ["className", "rows", "disabled", "state", "feedbackText", "id", "name", "placeholder", "value", "showState", "showErrorOnly", "onChange", "onClick", "onBlur", "width", "height", "customStyle"]);
    return (_jsxs(_Fragment, { children: [_jsx(StyledTextarea, __assign({ disabled: disabled, className: classnames(className, "form-control"), rows: rows, id: id, name: name, placeholder: placeholder, value: value, ref: ref, onChange: onChange, onClick: onClick, onBlur: onBlur, "$state": state, "$showState": showState, "$showErrorOnly": showErrorOnly, "$width": width, "$height": height, "$customStyle": customStyle }, restProps)), feedbackText && showState && (_jsx(Feedback, __assign({ state: state, showState: showState, showErrorOnly: showErrorOnly }, { children: feedbackText })))] }));
});
Textarea.displayName = "Textarea";
Textarea.defaultProps = {
    rows: 2,
    showErrorOnly: true,
};
export default Textarea;
//# sourceMappingURL=index.js.map