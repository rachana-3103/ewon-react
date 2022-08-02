var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
import { jsx as _jsx } from "react/jsx-runtime";
import styled, { space, css, themeGet } from "@doar/shared/styled";
export var StyledInputGroup = styled(function (_a) {
    var mb = _a.mb, rest = __rest(_a, ["mb"]);
    return (_jsx("div", __assign({}, rest)));
})(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    position: relative;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: stretch;\n    width: 100%;\n    .form-control,\n    .custom-select {\n        &:not(:first-child) {\n            border-top-left-radius: 0;\n            border-bottom-left-radius: 0;\n        }\n        &:not(:last-child) {\n            border-top-right-radius: 0;\n            border-bottom-right-radius: 0;\n        }\n        position: relative;\n        flex: 1 1 0%;\n        min-width: 0;\n        margin-bottom: 0;\n    }\n    .form-control {\n        & + .form-control {\n            margin-left: -1px;\n        }\n    }\n    ", ";\n"], ["\n    position: relative;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: stretch;\n    width: 100%;\n    .form-control,\n    .custom-select {\n        &:not(:first-child) {\n            border-top-left-radius: 0;\n            border-bottom-left-radius: 0;\n        }\n        &:not(:last-child) {\n            border-top-right-radius: 0;\n            border-bottom-right-radius: 0;\n        }\n        position: relative;\n        flex: 1 1 0%;\n        min-width: 0;\n        margin-bottom: 0;\n    }\n    .form-control {\n        & + .form-control {\n            margin-left: -1px;\n        }\n    }\n    ", ";\n"])), space);
export var StyledInputGroupWrap = styled(function (_a) {
    var mb = _a.mb, rest = __rest(_a, ["mb"]);
    return (_jsx("div", __assign({}, rest)));
})(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    display: flex;\n    ", "\n    ", "\n    ", ";\n"], ["\n    display: flex;\n    ", "\n    ", "\n    ", ";\n"])), function (_a) {
    var $dir = _a.$dir;
    return $dir === "append" && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n            margin-left: -1px;\n            .input-group-text,\n            .btn {\n                border-top-left-radius: 0;\n                border-bottom-left-radius: 0;\n            }\n            &:last-child {\n                .input-group-text {\n                    &:not(:last-child) {\n                        border-top-right-radius: 0;\n                        border-bottom-right-radius: 0;\n                    }\n                    & + .input-group-text {\n                        margin-left: -1px;\n                    }\n                }\n            }\n        "], ["\n            margin-left: -1px;\n            .input-group-text,\n            .btn {\n                border-top-left-radius: 0;\n                border-bottom-left-radius: 0;\n            }\n            &:last-child {\n                .input-group-text {\n                    &:not(:last-child) {\n                        border-top-right-radius: 0;\n                        border-bottom-right-radius: 0;\n                    }\n                    & + .input-group-text {\n                        margin-left: -1px;\n                    }\n                }\n            }\n        "])));
}, function (_a) {
    var $dir = _a.$dir;
    return $dir === "prepend" && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n            margin-right: -1px;\n            .input-group-text,\n            .btn {\n                border-top-right-radius: 0;\n                border-bottom-right-radius: 0;\n            }\n            &:first-child {\n                .input-group-text {\n                    & + .input-group-text {\n                        margin-left: -1px;\n                        border-top-left-radius: 0;\n                        border-bottom-left-radius: 0;\n                    }\n                }\n            }\n        "], ["\n            margin-right: -1px;\n            .input-group-text,\n            .btn {\n                border-top-right-radius: 0;\n                border-bottom-right-radius: 0;\n            }\n            &:first-child {\n                .input-group-text {\n                    & + .input-group-text {\n                        margin-left: -1px;\n                        border-top-left-radius: 0;\n                        border-bottom-left-radius: 0;\n                    }\n                }\n            }\n        "])));
}, space);
export var StyledInputGroupText = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    display: flex;\n    align-items: center;\n    padding: 0.46875rem 0.625rem;\n    margin-bottom: 0;\n    font-size: 0.875rem;\n    font-weight: 400;\n    line-height: 1.5;\n    color: ", ";\n    text-align: center;\n    white-space: nowrap;\n    background-color: ", ";\n    border: 1px solid ", ";\n    border-radius: 0.25rem;\n    font-size: inherit;\n"], ["\n    display: flex;\n    align-items: center;\n    padding: 0.46875rem 0.625rem;\n    margin-bottom: 0;\n    font-size: 0.875rem;\n    font-weight: 400;\n    line-height: 1.5;\n    color: ", ";\n    text-align: center;\n    white-space: nowrap;\n    background-color: ", ";\n    border: 1px solid ", ";\n    border-radius: 0.25rem;\n    font-size: inherit;\n"])), themeGet("colors.gray700"), themeGet("colors.whisper"), themeGet("colors.text4"));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=style.js.map