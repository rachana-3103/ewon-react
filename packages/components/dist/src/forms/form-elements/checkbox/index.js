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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
import classnames from "clsx";
import { StyledCheckbox, StyledCheckboxLabel } from "./style";
import { StyledBoxWrap } from "../style";
import Feedback from "../feedback";
var Checkbox = forwardRef(function (_a, ref) {
    var className = _a.className, disabled = _a.disabled, feedbackText = _a.feedbackText, id = _a.id, name = _a.name, label = _a.label, state = _a.state, checked = _a.checked, onChange = _a.onChange, onClick = _a.onClick, onBlur = _a.onBlur, value = _a.value, restProps = __rest(_a, ["className", "disabled", "feedbackText", "id", "name", "label", "state", "checked", "onChange", "onClick", "onBlur", "value"]);
    return (_jsxs(StyledBoxWrap, __assign({ className: classnames(className, "custom-checkbox") }, restProps, { children: [_jsx(StyledCheckbox, { type: "checkbox", disabled: disabled, id: id, name: name, checked: checked, onChange: onChange, onClick: onClick, onBlur: onBlur, value: value, ref: ref }), _jsx(StyledCheckboxLabel, __assign({ htmlFor: id }, { children: label })), feedbackText && (_jsx(Feedback, __assign({ state: state }, { children: feedbackText })))] })));
});
Checkbox.displayName = "Checkbox";
export default Checkbox;
//# sourceMappingURL=index.js.map