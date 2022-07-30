import { __assign, __makeTemplateObject, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import styled, { themeGet, css, space, flexbox, layout, } from "@doar/shared/styled";
import tinycolor2 from "tinycolor2";
export var StyledListGroup = styled(function (_a) {
    var p = _a.p, px = _a.px, py = _a.py, pl = _a.pl, pr = _a.pr, pt = _a.pt, pb = _a.pb, m = _a.m, mx = _a.mx, my = _a.my, ml = _a.ml, mr = _a.mr, mt = _a.mt, mb = _a.mb, rest = __rest(_a, ["p", "px", "py", "pl", "pr", "pt", "pb", "m", "mx", "my", "ml", "mr", "mt", "mb"]);
    return (_jsx("ul", __assign({}, rest), void 0));
})(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    display: flex;\n    ", "\n    ", "\n    ", "\n"], ["\n    display: flex;\n    ", "\n    ",
    "\n    ",
    "\n"])), space, function (_a) {
    var $horizontal = _a.$horizontal;
    return ($horizontal !== true || !$horizontal) && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n            flex-direction: column;\n        "], ["\n            flex-direction: column;\n        "])));
}, function (_a) {
    var $horizontal = _a.$horizontal;
    return $horizontal === true && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n            flex-direction: row;\n        "], ["\n            flex-direction: row;\n        "])));
});
export var StyledListGroupItem = styled(function (_a) {
    var display = _a.display, p = _a.p, px = _a.px, py = _a.py, pl = _a.pl, pr = _a.pr, pt = _a.pt, pb = _a.pb, rest = __rest(_a, ["display", "p", "px", "py", "pl", "pr", "pt", "pb"]);
    return _jsx("li", __assign({}, rest), void 0);
})(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n    padding: 10px 15px;\n    position: relative;\n    display: block;\n    background-color: transparent;\n    border: 1px solid ", ";\n    &:first-child {\n        border-top-left-radius: 0.25rem;\n        border-top-right-radius: 0.25rem;\n    }\n    &:not(:first-child) {\n        border-top-width: 0;\n    }\n    &:last-child {\n        border-bottom-right-radius: 0.25rem;\n        border-bottom-left-radius: 0.25rem;\n    }\n\n    ", "\n    ", "\n    ", "\n\n    ", "\n    ", "\n        ", "\n        ", "\n    ", ";\n    ", ";\n    ", "\n"], ["\n    padding: 10px 15px;\n    position: relative;\n    display: block;\n    background-color: transparent;\n    border: 1px solid ", ";\n    &:first-child {\n        border-top-left-radius: 0.25rem;\n        border-top-right-radius: 0.25rem;\n    }\n    &:not(:first-child) {\n        border-top-width: 0;\n    }\n    &:last-child {\n        border-bottom-right-radius: 0.25rem;\n        border-bottom-left-radius: 0.25rem;\n    }\n\n    ",
    "\n    ",
    "\n    ",
    "\n\n    ",
    "\n    ",
    "\n        ",
    "\n        ",
    "\n    ", ";\n    ", ";\n    ", "\n"])), themeGet("colors.light"), function (_a) {
    var $active = _a.$active;
    return $active === true && css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n            margin-top: -1px;\n            border-top-width: 1px;\n            z-index: 2;\n            color: #fff;\n            background-color: ", ";\n            border-color: ", ";\n        "], ["\n            margin-top: -1px;\n            border-top-width: 1px;\n            z-index: 2;\n            color: #fff;\n            background-color: ", ";\n            border-color: ", ";\n        "])), themeGet("colors.primary"), themeGet("colors.primary"));
}, function (_a) {
    var $disabled = _a.$disabled;
    return $disabled === true && css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n            color: ", ";\n            pointer-events: none;\n            background-color: #fff;\n        "], ["\n            color: ", ";\n            pointer-events: none;\n            background-color: #fff;\n        "])), themeGet("colors.gray600"));
}, function (_a) {
    var $action = _a.$action, $active = _a.$active;
    return $action === true &&
        $active !== true && css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n            &:hover,\n            &:focus {\n                z-index: 1;\n                color: ", ";\n                text-decoration: none;\n                background-color: ", ";\n            }\n        "], ["\n            &:hover,\n            &:focus {\n                z-index: 1;\n                color: ", ";\n                text-decoration: none;\n                background-color: ", ";\n            }\n        "])), themeGet("colors.gray700"), themeGet("colors.gray100"));
}, function (_a) {
    var $flush = _a.$flush;
    return $flush === true && css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n            border-width: 0 0 1px;\n            border-radius: 0;\n            &:first-child,\n            &:last-child {\n                border-radius: 0;\n            }\n            &:last-child {\n                border-bottom-width: 0;\n            }\n        "], ["\n            border-width: 0 0 1px;\n            border-radius: 0;\n            &:first-child,\n            &:last-child {\n                border-radius: 0;\n            }\n            &:last-child {\n                border-bottom-width: 0;\n            }\n        "])));
}, function (_a) {
    var $horizontal = _a.$horizontal;
    return $horizontal === true && css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n            &:first-child {\n                border-bottom-left-radius: 0.25rem;\n                border-top-right-radius: 0;\n            }\n            &:not(:first-child) {\n                border-top-width: 1px;\n                border-left-width: 0;\n            }\n            &:last-child {\n                border-top-right-radius: 0.25rem;\n                border-bottom-left-radius: 0;\n            }\n        "], ["\n            &:first-child {\n                border-bottom-left-radius: 0.25rem;\n                border-top-right-radius: 0;\n            }\n            &:not(:first-child) {\n                border-top-width: 1px;\n                border-left-width: 0;\n            }\n            &:last-child {\n                border-top-right-radius: 0.25rem;\n                border-bottom-left-radius: 0;\n            }\n        "])));
}, function (props) {
    return props.theme.name === "cool" && css(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n            border-color: ", ";\n        "], ["\n            border-color: ",
        ";\n        "])), tinycolor2(themeGet("colors.skinUi01")(props))
        .lighten(46)
        .toString());
}, function (props) {
    return props.theme.name === "dark" && css(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n            background-color: inherit;\n            border-color: rgba(255, 255, 255, 0.025);\n        "], ["\n            background-color: inherit;\n            border-color: rgba(255, 255, 255, 0.025);\n        "])));
}, space, flexbox, layout);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11;
