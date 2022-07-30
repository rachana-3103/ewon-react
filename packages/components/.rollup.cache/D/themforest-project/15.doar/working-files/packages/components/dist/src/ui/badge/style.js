import { __makeTemplateObject, __spreadArrays } from "tslib";
import styled, { css, themeGet, space } from "@doar/shared/styled";
var props = [
    "p",
    "px",
    "py",
    "pt",
    "pb",
    "pl",
    "pr",
    "m",
    "mx",
    "my",
    "mt",
    "mb",
    "ml",
    "mr",
];
var badgeCss = css(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n    font-size: 10px;\n    font-weight: 500;\n    font-family: ", ";\n    padding: 3px 5px 4px;\n    display: inline-block;\n    line-height: 1;\n    text-align: center;\n    white-space: nowrap;\n    vertical-align: baseline;\n    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,\n        border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n    ", "\n    ", "\n    ", "\n\t", "\n\t", "\n\t", "\n\t", "\n\t", "\n\t", "\n\t", "\n\t", "\n\t", "\n\t", "\n"], ["\n    font-size: 10px;\n    font-weight: 500;\n    font-family: ", ";\n    padding: 3px 5px 4px;\n    display: inline-block;\n    line-height: 1;\n    text-align: center;\n    white-space: nowrap;\n    vertical-align: baseline;\n    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,\n        border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n    ",
    "\n    ",
    "\n    ",
    "\n\t",
    "\n\t",
    "\n\t",
    "\n\t",
    "\n\t",
    "\n\t",
    "\n\t",
    "\n\t",
    "\n\t",
    "\n\t",
    "\n"])), themeGet("fonts.interUi"), function (_a) {
    var $color = _a.$color, $variant = _a.$variant;
    return $color === "primary" &&
        $variant === "contained" && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n            color: #fff;\n            background-color: ", ";\n        "], ["\n            color: #fff;\n            background-color: ", ";\n        "])), themeGet("colors.primary"));
}, function (_a) {
    var $color = _a.$color, $variant = _a.$variant;
    return $color === "secondary" &&
        $variant === "contained" && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n            color: #fff;\n            background-color: ", ";\n        "], ["\n            color: #fff;\n            background-color: ", ";\n        "])), themeGet("colors.gray600"));
}, function (_a) {
    var $color = _a.$color, $variant = _a.$variant;
    return $color === "success" &&
        $variant === "contained" && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n            color: #fff;\n            background-color: ", ";\n        "], ["\n            color: #fff;\n            background-color: ", ";\n        "])), themeGet("colors.success"));
}, function (_a) {
    var $color = _a.$color, $variant = _a.$variant;
    return $color === "danger" &&
        $variant === "contained" && css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n            color: #fff;\n            background-color: ", ";\n        "], ["\n            color: #fff;\n            background-color: ", ";\n        "])), themeGet("colors.danger"));
}, function (_a) {
    var $color = _a.$color, $variant = _a.$variant;
    return $color === "warning" &&
        $variant === "contained" && css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n            color: #fff;\n            background-color: ", ";\n        "], ["\n            color: #fff;\n            background-color: ", ";\n        "])), themeGet("colors.warning"));
}, function (_a) {
    var $color = _a.$color, $variant = _a.$variant;
    return $color === "info" &&
        $variant === "contained" && css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n            color: #fff;\n            background-color: ", ";\n        "], ["\n            color: #fff;\n            background-color: ", ";\n        "])), themeGet("colors.info"));
}, function (_a) {
    var $color = _a.$color, $variant = _a.$variant;
    return $color === "light" &&
        $variant === "contained" && css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n            color: ", ";\n            background-color: ", ";\n        "], ["\n            color: ", ";\n            background-color: ", ";\n        "])), themeGet("colors.gray900"), themeGet("colors.gray300"));
}, function (_a) {
    var $color = _a.$color, $variant = _a.$variant;
    return $color === "dark" &&
        $variant === "contained" && css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n            color: #fff;\n            background-color: ", ";\n        "], ["\n            color: #fff;\n            background-color: ", ";\n        "])), themeGet("colors.dark"));
}, function (_a) {
    var $pill = _a.$pill;
    return $pill && css(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n            padding-left: 8px;\n            padding-right: 8px;\n        "], ["\n            padding-left: 8px;\n            padding-right: 8px;\n        "])));
}, function (_a) {
    var $variant = _a.$variant;
    return $variant === "texted" && css(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n            color: ", ";\n            background-color: transparent;\n            padding: 0;\n        "], ["\n            color: ", ";\n            background-color: transparent;\n            padding: 0;\n        "])), themeGet("colors.dark"));
}, function (_a) {
    var $shape = _a.$shape;
    return $shape === "rounded" && css(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n            border-radius: 3px;\n        "], ["\n            border-radius: 3px;\n        "])));
}, function (_a) {
    var $shape = _a.$shape;
    return $shape === "square" && css(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n            border-radius: 0;\n        "], ["\n            border-radius: 0;\n        "])));
}, function (_a) {
    var $shape = _a.$shape;
    return $shape === "circle" && css(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n            border-radius: 100%;\n        "], ["\n            border-radius: 100%;\n        "])));
});
export var StyledBadge = styled("span").withConfig({
    shouldForwardProp: function (prop, defaultValidatorFn) {
        return !__spreadArrays(props).includes(prop) && defaultValidatorFn(prop);
    },
})(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n    ", ";\n    ", ";\n"], ["\n    ", ";\n    ", ";\n"])), badgeCss, space);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15;
