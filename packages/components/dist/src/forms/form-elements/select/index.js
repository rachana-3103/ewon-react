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
import classnames from "clsx";
import { StyledSelect } from "./style";
import Feedback from "../feedback";
var Select = forwardRef(function (_a, ref) {
    var className = _a.className, disabled = _a.disabled, state = _a.state, feedbackText = _a.feedbackText, id = _a.id, name = _a.name, value = _a.value, onChange = _a.onChange, onBlur = _a.onBlur, onClick = _a.onClick, children = _a.children, showState = _a.showState, showErrorOnly = _a.showErrorOnly, width = _a.width, height = _a.height, customStyle = _a.customStyle, restProps = __rest(_a, ["className", "disabled", "state", "feedbackText", "id", "name", "value", "onChange", "onBlur", "onClick", "children", "showState", "showErrorOnly", "width", "height", "customStyle"]);
    return (_jsxs(_Fragment, { children: [_jsx(StyledSelect, __assign({ className: classnames(className, "custom-select"), ref: ref, id: id, name: name, value: value, onChange: onChange, onClick: onClick, onBlur: onBlur, "$state": state, "$showState": showState, "$showErrorOnly": showErrorOnly, "$width": width, "$height": height, "$customStyle": customStyle, disabled: disabled }, restProps, { children: children })), feedbackText && showState && (_jsx(Feedback, __assign({ state: state, showState: showState, showErrorOnly: showErrorOnly }, { children: feedbackText })))] }));
});
Select.displayName = "Select";
Select.defaultProps = {
    showErrorOnly: true,
};
export default Select;
//# sourceMappingURL=index.js.map