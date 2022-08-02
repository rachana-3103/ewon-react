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
import styled, { css, device, themeGet, space, } from "@doar/shared/styled";
export var StyledBackdrop = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 1040;\n    width: 100vw;\n    height: 100vh;\n    background-color: #000;\n    opacity: 0;\n    visibility: hidden;\n    transition: all 0.15s linear;\n    ", "\n"], ["\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 1040;\n    width: 100vw;\n    height: 100vh;\n    background-color: #000;\n    opacity: 0;\n    visibility: hidden;\n    transition: all 0.15s linear;\n    ", "\n"])), function (_a) {
    var $show = _a.$show;
    return $show && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n            opacity: 0.5;\n            visibility: visible;\n        "], ["\n            opacity: 0.5;\n            visibility: visible;\n        "])));
});
export var StyledModal = styled.div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 1050;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n    outline: 0;\n    opacity: 0;\n    visibility: hidden;\n    transition: all 0.15s linear;\n    ", "\n    .modal-enter {\n        opacity: 0.01;\n\n        &.modal-dialog {\n            transform: translateY(-50px);\n        }\n    }\n    .modal-enter-done {\n        opacity: 1;\n        transition: all 150ms linear;\n\n        &.modal-dialog {\n            transform: translateY(0);\n        }\n    }\n    .modal-exit {\n        opacity: 1;\n\n        &.modal-dialog {\n            transform: translateY(0);\n        }\n    }\n    .modal-exit-active {\n        opacity: 0.01;\n        transition: all 150ms linear;\n\n        &.modal-dialog {\n            transform: translateY(-50px);\n        }\n    }\n    .modal-dialog {\n        position: relative;\n        width: auto;\n        margin: 0.5rem;\n        pointer-events: none;\n        ", " {\n            max-width: 500px;\n            margin: 1.75rem auto;\n        }\n        ", "\n        ", "\n        ", "\n\t\t", "\n\t\t", "\n    }\n\n    .modal-content {\n        position: relative;\n        display: flex;\n        flex-direction: column;\n        width: 100%;\n        pointer-events: auto;\n        background-color: #fff;\n        background-clip: padding-box;\n        border: 1px solid ", ";\n        outline: 0;\n        border-radius: ", ";\n        ", "\n    }\n"], ["\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 1050;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n    outline: 0;\n    opacity: 0;\n    visibility: hidden;\n    transition: all 0.15s linear;\n    ", "\n    .modal-enter {\n        opacity: 0.01;\n\n        &.modal-dialog {\n            transform: translateY(-50px);\n        }\n    }\n    .modal-enter-done {\n        opacity: 1;\n        transition: all 150ms linear;\n\n        &.modal-dialog {\n            transform: translateY(0);\n        }\n    }\n    .modal-exit {\n        opacity: 1;\n\n        &.modal-dialog {\n            transform: translateY(0);\n        }\n    }\n    .modal-exit-active {\n        opacity: 0.01;\n        transition: all 150ms linear;\n\n        &.modal-dialog {\n            transform: translateY(-50px);\n        }\n    }\n    .modal-dialog {\n        position: relative;\n        width: auto;\n        margin: 0.5rem;\n        pointer-events: none;\n        ", " {\n            max-width: 500px;\n            margin: 1.75rem auto;\n        }\n        ", "\n        ", "\n        ", "\n\t\t", "\n\t\t", "\n    }\n\n    .modal-content {\n        position: relative;\n        display: flex;\n        flex-direction: column;\n        width: 100%;\n        pointer-events: auto;\n        background-color: #fff;\n        background-clip: padding-box;\n        border: 1px solid ", ";\n        outline: 0;\n        border-radius: ", ";\n        ", "\n    }\n"])), function (_a) {
    var $show = _a.$show;
    return $show && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n            opacity: 1;\n            visibility: visible;\n        "], ["\n            opacity: 1;\n            visibility: visible;\n        "])));
}, device.small, function (_a) {
    var $size = _a.$size;
    return $size === "sm" && css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n                ", " {\n                    max-width: 300px;\n                }\n            "], ["\n                ", " {\n                    max-width: 300px;\n                }\n            "])), device.small);
}, function (_a) {
    var $size = _a.$size;
    return $size === "md" && css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n                ", " {\n                    max-width: 500px;\n                }\n            "], ["\n                ", " {\n                    max-width: 500px;\n                }\n            "])), device.small);
}, function (_a) {
    var $size = _a.$size;
    return $size === "lg" && css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n                ", " {\n                    max-width: 800px;\n                }\n            "], ["\n                ", " {\n                    max-width: 800px;\n                }\n            "])), device.large);
}, function (_a) {
    var $size = _a.$size;
    return $size === "xl" && css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n                ", " {\n                    max-width: 800px;\n                }\n                ", " {\n                    max-width: 1140px;\n                }\n            "], ["\n                ", " {\n                    max-width: 800px;\n                }\n                ", " {\n                    max-width: 1140px;\n                }\n            "])), device.large, device.xlarge);
}, function (_a) {
    var $centered = _a.$centered;
    return $centered && css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n                display: flex;\n                align-items: center;\n                min-height: calc(100% - 1rem);\n                ", " {\n                    min-height: calc(100% - 3.5rem);\n                }\n            "], ["\n                display: flex;\n                align-items: center;\n                min-height: calc(100% - 1rem);\n                ", " {\n                    min-height: calc(100% - 3.5rem);\n                }\n            "])), device.small);
}, themeGet("colors.border"), themeGet("radii.rounded"), function (props) {
    return props.theme.name === "dark" && css(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n                background-color: ", ";\n            "], ["\n                background-color: ", ";\n            "])), themeGet("colors.gray900"));
});
export var StyledHeader = styled.div(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n    display: flex;\n    align-items: flex-start;\n    justify-content: space-between;\n    padding: 1rem 1rem;\n    border-bottom: 1px solid ", ";\n    border-top-left-radius: calc(0.3rem - 1px);\n    border-top-right-radius: calc(0.3rem - 1px);\n"], ["\n    display: flex;\n    align-items: flex-start;\n    justify-content: space-between;\n    padding: 1rem 1rem;\n    border-bottom: 1px solid ", ";\n    border-top-left-radius: calc(0.3rem - 1px);\n    border-top-right-radius: calc(0.3rem - 1px);\n"])), themeGet("colors.border"));
export var StyledTitle = styled.h6(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n    margin-bottom: 0;\n    line-height: 1.5;\n"], ["\n    margin-bottom: 0;\n    line-height: 1.5;\n"])));
export var StyledClose = styled.button(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n    font-weight: 300;\n    font-size: 28px;\n    line-height: 0.87;\n    padding: 1rem 1rem;\n    margin: -1rem -1rem -1rem auto;\n    background-color: transparent;\n    border: 0;\n    appearance: none;\n    color: ", ";\n    text-shadow: 0 1px 0 #fff;\n    opacity: 0.5;\n    cursor: pointer;\n"], ["\n    font-weight: 300;\n    font-size: 28px;\n    line-height: 0.87;\n    padding: 1rem 1rem;\n    margin: -1rem -1rem -1rem auto;\n    background-color: transparent;\n    border: 0;\n    appearance: none;\n    color: ", ";\n    text-shadow: 0 1px 0 #fff;\n    opacity: 0.5;\n    cursor: pointer;\n"])), themeGet("colors.text2"));
export var StyledBody = styled(function (_a) {
    var px = _a.px, py = _a.py, p = _a.p, pt = _a.pt, pb = _a.pb, pl = _a.pl, pr = _a.pr, rest = __rest(_a, ["px", "py", "p", "pt", "pb", "pl", "pr"]);
    return (_jsx("div", __assign({}, rest)));
})(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n    position: relative;\n    flex: 1 1 auto;\n    padding: 1rem;\n    ", ";\n"], ["\n    position: relative;\n    flex: 1 1 auto;\n    padding: 1rem;\n    ", ";\n"])), space);
export var StyledFooter = styled.div(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: flex-end;\n    padding: 0.75rem;\n    border-top: 1px solid ", ";\n    border-bottom-right-radius: calc(0.3rem - 1px);\n    border-bottom-left-radius: calc(0.3rem - 1px);\n    & > * {\n        margin: ", ";\n    }\n"], ["\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: flex-end;\n    padding: 0.75rem;\n    border-top: 1px solid ", ";\n    border-bottom-right-radius: calc(0.3rem - 1px);\n    border-bottom-left-radius: calc(0.3rem - 1px);\n    & > * {\n        margin: ", ";\n    }\n"])), themeGet("colors.border"), themeGet("radii.rounded"));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15;
//# sourceMappingURL=style.js.map