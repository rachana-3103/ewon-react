import { __assign, __makeTemplateObject, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
/* eslint-disable @typescript-eslint/no-unsafe-return */
import styled, { css, themeGet, tinycolor } from "@doar/shared";
import Anchor from "../anchor";
export var StyledDropdown = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    position: relative;\n"], ["\n    position: relative;\n"])));
export var StyledDropMenu = styled.div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n    position: absolute;\n    will-change: transform;\n    z-index: 1000;\n    display: none;\n    float: left;\n    min-width: 10rem;\n    font-size: 0.875rem;\n    color: ", ";\n    text-align: left;\n    background-color: #fff;\n    background-clip: padding-box;\n    border: 1px solid\n        ", ";\n    border-radius: 0.25rem;\n    box-shadow: 0 0 8px 2px rgb(28 39 60 / 4%);\n    padding: 5px;\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n    ", "\n    ", "\n    ", "\n"], ["\n    position: absolute;\n    will-change: transform;\n    z-index: 1000;\n    display: none;\n    float: left;\n    min-width: 10rem;\n    font-size: 0.875rem;\n    color: ", ";\n    text-align: left;\n    background-color: #fff;\n    background-clip: padding-box;\n    border: 1px solid\n        ",
    ";\n    border-radius: 0.25rem;\n    box-shadow: 0 0 8px 2px rgb(28 39 60 / 4%);\n    padding: 5px;\n\n    ",
    "\n\n    ",
    "\n\n    ",
    "\n\n    ",
    "\n    ",
    "\n    ",
    "\n    ",
    "\n"])), themeGet("colors.text"), function (props) {
    return tinycolor(props.theme.colors.text3).setAlpha(0.27).toString();
}, function (_a) {
    var $show = _a.$show;
    return $show && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n            display: block;\n        "], ["\n            display: block;\n        "])));
}, function (_a) {
    var $direction = _a.$direction;
    return $direction === "down" && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n            top: 100%;\n            left: 0px;\n            margin-top: 0.125rem;\n        "], ["\n            top: 100%;\n            left: 0px;\n            margin-top: 0.125rem;\n        "])));
}, function (_a) {
    var $direction = _a.$direction;
    return $direction === "up" && css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n            left: 0px;\n            bottom: 100%;\n            margin-bottom: 0.125rem;\n        "], ["\n            left: 0px;\n            bottom: 100%;\n            margin-bottom: 0.125rem;\n        "])));
}, function (_a) {
    var $direction = _a.$direction, $menuWidth = _a.$menuWidth;
    return $direction === "left" && css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n            transform: translate3d(-", "px, 0px, 0px);\n            top: 0px;\n            left: 0px;\n            margin-right: 0.125rem;\n        "], ["\n            transform: translate3d(-", "px, 0px, 0px);\n            top: 0px;\n            left: 0px;\n            margin-right: 0.125rem;\n        "])), $menuWidth);
}, function (_a) {
    var $direction = _a.$direction, $menuWidth = _a.$menuWidth;
    return $direction === "right" && css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n            transform: translate3d(", "px, 0px, 0px);\n            top: 0px;\n            right: 0px;\n            margin-left: 0.125rem;\n        "], ["\n            transform: translate3d(", "px, 0px, 0px);\n            top: 0px;\n            right: 0px;\n            margin-left: 0.125rem;\n        "])), $menuWidth);
}, function (props) {
    return props.theme.name === "cool" && css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n            border-color: ", ";\n            border-top-color: transparent;\n            box-shadow: 0 15px 15px\n                ", ";\n        "], ["\n            border-color: ",
        ";\n            border-top-color: transparent;\n            box-shadow: 0 15px 15px\n                ",
        ";\n        "])), tinycolor(themeGet("colors.skinUi01")(props))
        .lighten(45)
        .toString(), tinycolor(themeGet("colors.skinUi01")(props))
        .setAlpha(0.1)
        .toRgbString());
}, function (props) {
    return props.theme.name === "dark" && css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n            border-width: 0;\n            background-color: ", ";\n        "], ["\n            border-width: 0;\n            background-color: ",
        ";\n        "])), tinycolor(themeGet("colors.gray900")(props))
        .lighten(5)
        .toString());
});
export var StyledDropItem = styled(function (_a) {
    var active = _a.active, rest = __rest(_a, ["active"]);
    return (_jsx(Anchor, __assign({}, rest), void 0));
})(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n    display: block;\n    width: 100%;\n    padding: 6px 15px;\n    clear: both;\n    font-weight: 400;\n    color: ", ";\n    text-align: inherit;\n    white-space: nowrap;\n    background-color: transparent;\n    border: 0;\n    transition: all 0.2s ease-in-out;\n    &:hover {\n        color: ", ";\n        background-color: ", ";\n    }\n\n    ", "\n    ", "\n    ", "\n"], ["\n    display: block;\n    width: 100%;\n    padding: 6px 15px;\n    clear: both;\n    font-weight: 400;\n    color: ", ";\n    text-align: inherit;\n    white-space: nowrap;\n    background-color: transparent;\n    border: 0;\n    transition: all 0.2s ease-in-out;\n    &:hover {\n        color: ", ";\n        background-color: ", ";\n    }\n\n    ",
    "\n    ",
    "\n    ",
    "\n"])), themeGet("colors.gray900"), themeGet("colors.heading"), themeGet("colors.light"), function (props) {
    return props.active === true && css(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n            color: #fff;\n            background-color: ", ";\n            &:hover {\n                color: #fff;\n                background-color: ", ";\n            }\n        "], ["\n            color: #fff;\n            background-color: ", ";\n            &:hover {\n                color: #fff;\n                background-color: ", ";\n            }\n        "])), themeGet("colors.primary"), themeGet("colors.primary"));
}, function (props) {
    return props.theme.name === "dark" && css(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n            color: ", ";\n        "], ["\n            color: ", ";\n        "])), themeGet("colors.gray500"));
}, function (props) {
    return props.theme.name === "dark" &&
        !!props.active && css(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n            color: #fff;\n        "], ["\n            color: #fff;\n        "])));
});
export var StyledDropDivider = styled.div(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n    height: 0;\n    margin: 0.5rem 0;\n    overflow: hidden;\n    border-top: 1px solid #e3e7ed;\n    ", "\n"], ["\n    height: 0;\n    margin: 0.5rem 0;\n    overflow: hidden;\n    border-top: 1px solid #e3e7ed;\n    ",
    "\n"])), function (props) {
    return props.theme.name === "dark" && css(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n            border-color: rgba(#fff, 0.06);\n        "], ["\n            border-color: rgba(#fff, 0.06);\n        "])));
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15;
