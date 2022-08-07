import { __assign, __makeTemplateObject, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import styled, { css, space, layout, border as borderStyle, typography, themeGet, } from "@doar/shared/styled";
import tinycolor2 from "tinycolor2";
import { Link } from "react-router-dom";
var buttonStyles = css(templateObject_72 || (templateObject_72 = __makeTemplateObject(["\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    font-weight: 400;\n    text-align: center;\n    vertical-align: middle;\n    cursor: pointer;\n    line-height: 1.5;\n    user-select: none;\n    border: 1px solid transparent;\n    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,\n        border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n    &:hover,\n    &:active,\n    &:focus {\n        outline: none;\n    }\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n\n        ", "\n\n\n    \n\n    ", "\n \n    ", "\n\n\t", "\n\t", "\n\t", "\n\n    ", "\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n\t", "\n\n\t", "\n\n\t\n\t", "\n\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n\n    ", "\n\n    ", "\n        \n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n    ", "\n    ", "\n    ", "\n\n    ", "\n    ", "\n    \n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n\t", "\n    ", "\n\t\n\t", "\n\n\t", "\n\n\t", "\n\t", "\n\t", "\n\n\t", "\n\t", "\n    ", "\n\t", ";\n    ", ";\n    ", ";\n    ", ";\n"], ["\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    font-weight: 400;\n    text-align: center;\n    vertical-align: middle;\n    cursor: pointer;\n    line-height: 1.5;\n    user-select: none;\n    border: 1px solid transparent;\n    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,\n        border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n    &:hover,\n    &:active,\n    &:focus {\n        outline: none;\n    }\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n\n        ", "\n\n\n    \n\n    ", "\n \n    ", "\n\n\t", "\n\t", "\n\t", "\n\n    ", "\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n\t", "\n\n\t", "\n\n\t\n\t", "\n\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n\n    ", "\n\n    ", "\n        \n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n    ", "\n    ", "\n    ", "\n\n    ", "\n    ", "\n    \n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n\t", "\n    ", "\n\t\n\t", "\n\n\t", "\n\n\t", "\n\t", "\n\t", "\n\n\t", "\n\t", "\n    ", "\n\t", ";\n    ", ";\n    ", ";\n    ", ";\n"])), function (props) {
    return props.$variant === "contained" &&
        props.$color === "primary" && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n            color: ", ";\n            background-color: ", ";\n            border-color: ", ";\n            &:hover {\n                background-color: ", ";\n                border-color: ", ";\n            }\n            &:active,\n            &:focus {\n                background-color: ", ";\n                border-color: ", ";\n                box-shadow: 0 0 0 0.2rem\n                    ", ";\n            }\n        "], ["\n            color: ", ";\n            background-color: ", ";\n            border-color: ", ";\n            &:hover {\n                background-color: ", ";\n                border-color: ", ";\n            }\n            &:active,\n            &:focus {\n                background-color: ", ";\n                border-color: ", ";\n                box-shadow: 0 0 0 0.2rem\n                    ", ";\n            }\n        "])), themeGet("colors.white"), themeGet("colors.primary"), themeGet("colors.primary"), tinycolor2(themeGet("colors.primary")(props))
        .darken(10)
        .toString(), tinycolor2(themeGet("colors.primary")(props))
        .darken(14)
        .toString(), tinycolor2(themeGet("colors.primary")(props))
        .darken(10)
        .toString(), tinycolor2(themeGet("colors.primary")(props))
        .darken(14)
        .toString(), tinycolor2(themeGet("colors.primary")(props))
        .setAlpha(0.5)
        .toRgbString());
}, function (props) {
    return props.$variant === "contained" &&
        props.$color === "secondary" && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n            color: ", ";\n            background-color: ", ";\n            border-color: ", ";\n            &:hover {\n                background-color: ", ";\n                border-color: ", ";\n            }\n            &:active,\n            &:focus {\n                box-shadow: 0 0 0 0.2rem\n                    ", ";\n            }\n        "], ["\n            color: ", ";\n            background-color: ", ";\n            border-color: ", ";\n            &:hover {\n                background-color: ", ";\n                border-color: ", ";\n            }\n            &:active,\n            &:focus {\n                box-shadow: 0 0 0 0.2rem\n                    ", ";\n            }\n        "])), themeGet("colors.white"), themeGet("colors.secondary"), themeGet("colors.secondary"), tinycolor2(themeGet("colors.secondary")(props))
        .darken(10)
        .toString(), tinycolor2(themeGet("colors.secondary")(props))
        .darken(14)
        .toString(), tinycolor2(themeGet("colors.secondary")(props))
        .setAlpha(0.5)
        .toRgbString());
}, function (props) {
    return props.$variant === "contained" &&
        props.$color === "success" && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n            color: ", ";\n            background-color: ", ";\n            border-color: ", ";\n            &:hover {\n                background-color: ", ";\n                border-color: ", ";\n            }\n            &:active,\n            &:focus {\n                background-color: ", ";\n                border-color: ", ";\n                box-shadow: 0 0 0 0.2rem\n                    ", ";\n            }\n        "], ["\n            color: ", ";\n            background-color: ", ";\n            border-color: ", ";\n            &:hover {\n                background-color: ", ";\n                border-color: ", ";\n            }\n            &:active,\n            &:focus {\n                background-color: ", ";\n                border-color: ", ";\n                box-shadow: 0 0 0 0.2rem\n                    ", ";\n            }\n        "])), themeGet("colors.white"), themeGet("colors.success"), themeGet("colors.success"), tinycolor2(themeGet("colors.success")(props))
        .darken(10)
        .toString(), tinycolor2(themeGet("colors.success")(props))
        .darken(14)
        .toString(), tinycolor2(themeGet("colors.success")(props))
        .darken(10)
        .toString(), tinycolor2(themeGet("colors.success")(props))
        .darken(10)
        .toString(), tinycolor2(themeGet("colors.success")(props))
        .setAlpha(0.5)
        .toRgbString());
}, function (props) {
    return props.$variant === "contained" &&
        props.$color === "danger" && css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n            color: ", ";\n            background-color: ", ";\n            border-color: ", ";\n            &:hover {\n                background-color: ", ";\n                border-color: ", ";\n            }\n            &:active,\n            &:focus {\n                background-color: ", ";\n                border-color: ", ";\n                box-shadow: 0 0 0 0.2rem\n                    ", ";\n            }\n        "], ["\n            color: ", ";\n            background-color: ", ";\n            border-color: ", ";\n            &:hover {\n                background-color: ", ";\n                border-color: ", ";\n            }\n            &:active,\n            &:focus {\n                background-color: ", ";\n                border-color: ", ";\n                box-shadow: 0 0 0 0.2rem\n                    ", ";\n            }\n        "])), themeGet("colors.white"), themeGet("colors.danger"), themeGet("colors.danger"), tinycolor2(themeGet("colors.danger")(props))
        .darken(10)
        .toString(), tinycolor2(themeGet("colors.danger")(props))
        .darken(14)
        .toString(), tinycolor2(themeGet("colors.danger")(props))
        .darken(10)
        .toString(), tinycolor2(themeGet("colors.danger")(props))
        .darken(14)
        .toString(), tinycolor2(themeGet("colors.danger")(props))
        .setAlpha(0.5)
        .toRgbString());
}, function (props) {
    return props.$variant === "contained" &&
        props.$color === "warning" && css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n            color: ", ";\n            background-color: ", ";\n            border-color: ", ";\n            &:hover {\n                background-color: ", ";\n                border-color: ", ";\n            }\n            &:active,\n            &:focus {\n                background-color: ", ";\n                border-color: ", ";\n                box-shadow: 0 0 0 0.2rem\n                    ", ";\n            }\n        "], ["\n            color: ", ";\n            background-color: ", ";\n            border-color: ", ";\n            &:hover {\n                background-color: ", ";\n                border-color: ", ";\n            }\n            &:active,\n            &:focus {\n                background-color: ", ";\n                border-color: ", ";\n                box-shadow: 0 0 0 0.2rem\n                    ", ";\n            }\n        "])), themeGet("colors.white"), themeGet("colors.warning"), themeGet("colors.warning"), tinycolor2(themeGet("colors.warning")(props))
        .darken(10)
        .toString(), tinycolor2(themeGet("colors.warning")(props))
        .darken(14)
        .toString(), tinycolor2(themeGet("colors.warning")(props))
        .darken(10)
        .toString(), tinycolor2(themeGet("colors.warning")(props))
        .darken(14)
        .toString(), tinycolor2(themeGet("colors.warning")(props))
        .setAlpha(0.5)
        .toRgbString());
}, function (props) {
    return props.$variant === "contained" &&
        props.$color === "info" && css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n            color: ", ";\n            background-color: ", ";\n            border-color: ", ";\n            &:hover {\n                background-color: ", ";\n                border-color: ", ";\n            }\n            &:active,\n            &:focus {\n                background-color: ", ";\n                border-color: ", ";\n                box-shadow: 0 0 0 0.2rem\n                    ", ";\n            }\n        "], ["\n            color: ", ";\n            background-color: ", ";\n            border-color: ", ";\n            &:hover {\n                background-color: ", ";\n                border-color: ", ";\n            }\n            &:active,\n            &:focus {\n                background-color: ", ";\n                border-color: ", ";\n                box-shadow: 0 0 0 0.2rem\n                    ", ";\n            }\n        "])), themeGet("colors.white"), themeGet("colors.info"), themeGet("colors.info"), tinycolor2(themeGet("colors.info")(props))
        .darken(10)
        .toString(), tinycolor2(themeGet("colors.info")(props))
        .darken(14)
        .toString(), tinycolor2(themeGet("colors.info")(props))
        .darken(10)
        .toString(), tinycolor2(themeGet("colors.info")(props))
        .darken(14)
        .toString(), tinycolor2(themeGet("colors.info")(props))
        .setAlpha(0.5)
        .toRgbString());
}, function (props) {
    return props.$variant === "contained" &&
        props.$color === "light" && css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n            color: ", ";\n            background-color: ", ";\n            border-color: ", ";\n            &:hover {\n                color: ", ";\n                background-color: ", ";\n                border-color: ", ";\n            }\n            &:active,\n            &:focus {\n                color: ", ";\n                background-color: ", ";\n                border-color: ", ";\n                box-shadow: 0 0 0 0.2rem\n                    ", ";\n            }\n        "], ["\n            color: ", ";\n            background-color: ", ";\n            border-color: ", ";\n            &:hover {\n                color: ", ";\n                background-color: ", ";\n                border-color: ", ";\n            }\n            &:active,\n            &:focus {\n                color: ", ";\n                background-color: ", ";\n                border-color: ", ";\n                box-shadow: 0 0 0 0.2rem\n                    ", ";\n            }\n        "])), themeGet("colors.text2"), themeGet("colors.light"), themeGet("colors.light"), themeGet("colors.gray900"), tinycolor2(themeGet("colors.light")(props))
        .darken(10)
        .toString(), tinycolor2(themeGet("colors.light")(props))
        .darken(14)
        .toString(), themeGet("colors.gray900"), tinycolor2(themeGet("colors.light")(props))
        .darken(10)
        .toString(), tinycolor2(themeGet("colors.light")(props))
        .darken(14)
        .toString(), tinycolor2(themeGet("colors.light")(props))
        .setAlpha(0.5)
        .toRgbString());
}, function (props) {
    return props.theme.name === "dark" &&
        props.$variant === "contained" &&
        props.$color === "light" && css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n            color: ", ";\n        "], ["\n            color: ", ";\n        "])), themeGet("colors.gray700"));
}, function (props) {
    return props.$variant === "contained" &&
        props.$color === "dark" && css(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n            color: ", ";\n            background-color: ", ";\n            border-color: ", ";\n            &:hover {\n                background-color: ", ";\n                border-color: ", ";\n            }\n            &:active,\n            &:focus {\n                background-color: ", ";\n                border-color: ", ";\n                box-shadow: 0 0 0 0.2rem\n                    ", ";\n            }\n        "], ["\n            color: ", ";\n            background-color: ", ";\n            border-color: ", ";\n            &:hover {\n                background-color: ", ";\n                border-color: ", ";\n            }\n            &:active,\n            &:focus {\n                background-color: ", ";\n                border-color: ", ";\n                box-shadow: 0 0 0 0.2rem\n                    ", ";\n            }\n        "])), themeGet("colors.white"), themeGet("colors.dark"), themeGet("colors.dark"), tinycolor2(themeGet("colors.dark")(props))
        .darken(10)
        .toString(), tinycolor2(themeGet("colors.dark")(props))
        .darken(14)
        .toString(), tinycolor2(themeGet("colors.dark")(props))
        .darken(10)
        .toString(), tinycolor2(themeGet("colors.dark")(props))
        .darken(14)
        .toString(), tinycolor2(themeGet("colors.dark")(props))
        .setAlpha(0.5)
        .toRgbString());
}, function (props) {
    return props.$variant === "contained" &&
        props.$color === "white" && css(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n            ", "\n\n            ", "\n        "], ["\n            ", "\n\n            ", "\n        "])), props.theme.name !== "dark" && css(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n                color: ", ";\n                background-color: ", ";\n                border-color: ", ";\n\n                &:hover {\n                    border-color: ", ";\n                    color: ", ";\n                }\n\n                &:active,\n                &:focus {\n                    background-color: ", ";\n                    border-color: ", ";\n                    color: ", ";\n                    box-shadow: none;\n                }\n            "], ["\n                color: ", ";\n                background-color: ", ";\n                border-color: ", ";\n\n                &:hover {\n                    border-color: ", ";\n                    color: ", ";\n                }\n\n                &:active,\n                &:focus {\n                    background-color: ", ";\n                    border-color: ", ";\n                    color: ", ";\n                    box-shadow: none;\n                }\n            "])), tinycolor2(themeGet("colors.text2")(props))
        .setAlpha(0.7)
        .toRgbString(), themeGet("colors.white"), themeGet("colors.text4"), themeGet("colors.text3"), themeGet("colors.text2"), themeGet("colors.whisper"), themeGet("colors.text3"), themeGet("colors.text2")), props.theme.name === "dark" && css(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n                color: ", ";\n                background-color: ", ";\n                border-color: ", ";\n                &:hover {\n                    background-color: ", ";\n                    border-color: ", ";\n                }\n                &:active,\n                &:focus {\n                    background-color: ", ";\n                    border-color: ", ";\n                    box-shadow: 0 0 0 0.2rem\n                        ", ";\n                }\n            "], ["\n                color: ", ";\n                background-color: ", ";\n                border-color: ", ";\n                &:hover {\n                    background-color: ", ";\n                    border-color: ", ";\n                }\n                &:active,\n                &:focus {\n                    background-color: ", ";\n                    border-color: ", ";\n                    box-shadow: 0 0 0 0.2rem\n                        ", ";\n                }\n            "])), themeGet("colors.white"), themeGet("colors.dark"), themeGet("colors.dark"), tinycolor2(themeGet("colors.dark")(props))
        .darken(10)
        .toString(), tinycolor2(themeGet("colors.dark")(props))
        .darken(14)
        .toString(), tinycolor2(themeGet("colors.dark")(props))
        .darken(10)
        .toString(), tinycolor2(themeGet("colors.dark")(props))
        .darken(14)
        .toString(), tinycolor2(themeGet("colors.dark")(props))
        .setAlpha(0.5)
        .toRgbString()));
}, function (props) {
    return props.$variant === "contained" &&
        props.$color === "brand2" && css(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n            color: #fff;\n            background-color: ", ";\n            border-color: ", ";\n\n            &:hover,\n            &:active,\n            &:focus {\n                border-color: ", ";\n                background-color: ", ";\n                color: #fff;\n                box-shadow: none;\n            }\n        "], ["\n            color: #fff;\n            background-color: ", ";\n            border-color: ", ";\n\n            &:hover,\n            &:active,\n            &:focus {\n                border-color: ", ";\n                background-color: ", ";\n                color: #fff;\n                box-shadow: none;\n            }\n        "])), themeGet("colors.brand2"), themeGet("colors.brand2"), themeGet("colors.science"), themeGet("colors.science"));
}, function (props) {
    return props.$variant === "contained" &&
        props.$color === "facebook" && css(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n            background-color: ", ";\n            border-color: ", ";\n            color: #fff;\n            &:hover {\n                background-color: ", ";\n                border-color: ", ";\n                color: #fff;\n            }\n            &:active,\n            &:focus {\n                color: #fff;\n                background-color: ", ";\n                border-color: ", ";\n                box-shadow: 0 0 0 0.2rem\n                    ", ";\n            }\n        "], ["\n            background-color: ", ";\n            border-color: ", ";\n            color: #fff;\n            &:hover {\n                background-color: ", ";\n                border-color: ", ";\n                color: #fff;\n            }\n            &:active,\n            &:focus {\n                color: #fff;\n                background-color: ", ";\n                border-color: ", ";\n                box-shadow: 0 0 0 0.2rem\n                    ", ";\n            }\n        "])), themeGet("colors.facebook"), themeGet("colors.facebook"), tinycolor2(themeGet("colors.facebook")(props))
        .darken(10)
        .toString(), tinycolor2(themeGet("colors.facebook")(props))
        .darken(14)
        .toString(), tinycolor2(themeGet("colors.facebook")(props))
        .darken(10)
        .toString(), tinycolor2(themeGet("colors.facebook")(props))
        .darken(14)
        .toString(), tinycolor2(themeGet("colors.facebook")(props))
        .setAlpha(0.5)
        .toRgbString());
}, function (props) {
    return props.$variant === "contained" &&
        props.$color === "twitter" && css(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n            background-color: ", ";\n            border-color: ", ";\n            color: #fff;\n            &:hover {\n                background-color: ", ";\n                border-color: ", ";\n                color: #fff;\n            }\n            &:active,\n            &:focus {\n                color: #fff;\n                background-color: ", ";\n                border-color: ", ";\n                box-shadow: 0 0 0 0.2rem\n                    ", ";\n            }\n        "], ["\n            background-color: ", ";\n            border-color: ", ";\n            color: #fff;\n            &:hover {\n                background-color: ", ";\n                border-color: ", ";\n                color: #fff;\n            }\n            &:active,\n            &:focus {\n                color: #fff;\n                background-color: ", ";\n                border-color: ", ";\n                box-shadow: 0 0 0 0.2rem\n                    ", ";\n            }\n        "])), themeGet("colors.twitter"), themeGet("colors.twitter"), tinycolor2(themeGet("colors.twitter")(props))
        .darken(10)
        .toString(), tinycolor2(themeGet("colors.twitter")(props))
        .darken(14)
        .toString(), tinycolor2(themeGet("colors.twitter")(props))
        .darken(10)
        .toString(), tinycolor2(themeGet("colors.twitter")(props))
        .darken(14)
        .toString(), tinycolor2(themeGet("colors.twitter")(props))
        .setAlpha(0.5)
        .toRgbString());
}, function (_a) {
    var $variant = _a.$variant;
    return $variant === "outlined" && css(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n            background: transparent;\n            border-width: 1px;\n            border-style: solid;\n        "], ["\n            background: transparent;\n            border-width: 1px;\n            border-style: solid;\n        "])));
}, function (props) {
    return props.$variant === "outlined" &&
        props.$color === "primary" && css(templateObject_17 || (templateObject_17 = __makeTemplateObject(["\n            color: ", ";\n            border-color: ", ";\n            &:hover {\n                color: ", ";\n                border-color: ", ";\n                background-color: ", ";\n            }\n            &:active,\n            &:focus {\n                color: ", ";\n                border-color: ", ";\n                background-color: ", ";\n                box-shadow: 0 0 0 0.2rem\n                    ", ";\n            }\n        "], ["\n            color: ", ";\n            border-color: ", ";\n            &:hover {\n                color: ", ";\n                border-color: ", ";\n                background-color: ", ";\n            }\n            &:active,\n            &:focus {\n                color: ", ";\n                border-color: ", ";\n                background-color: ", ";\n                box-shadow: 0 0 0 0.2rem\n                    ", ";\n            }\n        "])), themeGet("colors.primary"), themeGet("colors.primary"), themeGet("colors.white"), themeGet("colors.primary"), themeGet("colors.primary"), themeGet("colors.white"), themeGet("colors.primary"), themeGet("colors.primary"), tinycolor2(themeGet("colors.primary")(props))
        .setAlpha(0.5)
        .toRgbString());
}, function (props) {
    return props.$variant === "outlined" &&
        props.$color === "secondary" && css(templateObject_18 || (templateObject_18 = __makeTemplateObject(["\n            color: ", ";\n            border-color: ", ";\n            &:hover {\n                color: ", ";\n                border-color: ", ";\n                background-color: ", ";\n            }\n            &:active,\n            &:focus {\n                color: ", ";\n                border-color: ", ";\n                background-color: ", ";\n                box-shadow: 0 0 0 0.2rem\n                    ", ";\n            }\n        "], ["\n            color: ", ";\n            border-color: ", ";\n            &:hover {\n                color: ", ";\n                border-color: ", ";\n                background-color: ", ";\n            }\n            &:active,\n            &:focus {\n                color: ", ";\n                border-color: ", ";\n                background-color: ", ";\n                box-shadow: 0 0 0 0.2rem\n                    ", ";\n            }\n        "])), themeGet("colors.secondary"), themeGet("colors.secondary"), themeGet("colors.white"), themeGet("colors.secondary"), themeGet("colors.secondary"), themeGet("colors.white"), themeGet("colors.secondary"), themeGet("colors.secondary"), tinycolor2(themeGet("colors.secondary")(props))
        .setAlpha(0.5)
        .toRgbString());
}, function (props) {
    return props.$variant === "outlined" &&
        props.$color === "success" && css(templateObject_19 || (templateObject_19 = __makeTemplateObject(["\n            color: ", ";\n            border-color: ", ";\n            &:hover {\n                color: ", ";\n                border-color: ", ";\n                background-color: ", ";\n            }\n            &:active,\n            &:focus {\n                color: ", ";\n                border-color: ", ";\n                background-color: ", ";\n                box-shadow: 0 0 0 0.2rem\n                    ", ";\n            }\n        "], ["\n            color: ", ";\n            border-color: ", ";\n            &:hover {\n                color: ", ";\n                border-color: ", ";\n                background-color: ", ";\n            }\n            &:active,\n            &:focus {\n                color: ", ";\n                border-color: ", ";\n                background-color: ", ";\n                box-shadow: 0 0 0 0.2rem\n                    ", ";\n            }\n        "])), themeGet("colors.success"), themeGet("colors.success"), themeGet("colors.white"), themeGet("colors.success"), themeGet("colors.success"), themeGet("colors.white"), themeGet("colors.success"), themeGet("colors.success"), tinycolor2(themeGet("colors.success")(props))
        .setAlpha(0.5)
        .toRgbString());
}, function (props) {
    return props.$variant === "outlined" &&
        props.$color === "danger" && css(templateObject_20 || (templateObject_20 = __makeTemplateObject(["\n            color: ", ";\n            border-color: ", ";\n            &:hover {\n                color: ", ";\n                border-color: ", ";\n                background-color: ", ";\n            }\n            &:active,\n            &:focus {\n                color: ", ";\n                border-color: ", ";\n                background-color: ", ";\n                box-shadow: 0 0 0 0.2rem\n                    ", ";\n            }\n        "], ["\n            color: ", ";\n            border-color: ", ";\n            &:hover {\n                color: ", ";\n                border-color: ", ";\n                background-color: ", ";\n            }\n            &:active,\n            &:focus {\n                color: ", ";\n                border-color: ", ";\n                background-color: ", ";\n                box-shadow: 0 0 0 0.2rem\n                    ", ";\n            }\n        "])), themeGet("colors.danger"), themeGet("colors.danger"), themeGet("colors.white"), themeGet("colors.danger"), themeGet("colors.danger"), themeGet("colors.white"), themeGet("colors.danger"), themeGet("colors.danger"), tinycolor2(themeGet("colors.danger")(props))
        .setAlpha(0.5)
        .toRgbString());
}, function (props) {
    return props.$variant === "outlined" &&
        props.$color === "warning" && css(templateObject_21 || (templateObject_21 = __makeTemplateObject(["\n            color: ", ";\n            border-color: ", ";\n            &:hover {\n                color: ", ";\n                border-color: ", ";\n                background-color: ", ";\n            }\n            &:active,\n            &:focus {\n                color: ", ";\n                border-color: ", ";\n                background-color: ", ";\n                box-shadow: 0 0 0 0.2rem\n                    ", ";\n            }\n        "], ["\n            color: ", ";\n            border-color: ", ";\n            &:hover {\n                color: ", ";\n                border-color: ", ";\n                background-color: ", ";\n            }\n            &:active,\n            &:focus {\n                color: ", ";\n                border-color: ", ";\n                background-color: ", ";\n                box-shadow: 0 0 0 0.2rem\n                    ", ";\n            }\n        "])), themeGet("colors.warning"), themeGet("colors.warning"), themeGet("colors.white"), themeGet("colors.warning"), themeGet("colors.warning"), themeGet("colors.white"), themeGet("colors.warning"), themeGet("colors.warning"), tinycolor2(themeGet("colors.warning")(props))
        .setAlpha(0.5)
        .toRgbString());
}, function (props) {
    return props.$variant === "outlined" &&
        props.$color === "info" && css(templateObject_22 || (templateObject_22 = __makeTemplateObject(["\n            color: ", ";\n            border-color: ", ";\n            &:hover {\n                color: ", ";\n                border-color: ", ";\n                background-color: ", ";\n            }\n            &:active,\n            &:focus {\n                color: ", ";\n                border-color: ", ";\n                background-color: ", ";\n                box-shadow: 0 0 0 0.2rem\n                    ", ";\n            }\n        "], ["\n            color: ", ";\n            border-color: ", ";\n            &:hover {\n                color: ", ";\n                border-color: ", ";\n                background-color: ", ";\n            }\n            &:active,\n            &:focus {\n                color: ", ";\n                border-color: ", ";\n                background-color: ", ";\n                box-shadow: 0 0 0 0.2rem\n                    ", ";\n            }\n        "])), themeGet("colors.info"), themeGet("colors.info"), themeGet("colors.white"), themeGet("colors.info"), themeGet("colors.info"), themeGet("colors.white"), themeGet("colors.info"), themeGet("colors.info"), tinycolor2(themeGet("colors.info")(props))
        .setAlpha(0.5)
        .toRgbString());
}, function (props) {
    return props.$variant === "outlined" &&
        props.$color === "light" && css(templateObject_23 || (templateObject_23 = __makeTemplateObject(["\n            color: ", ";\n            border-color: ", ";\n            &:hover {\n                color: ", ";\n                border-color: ", ";\n                background-color: ", ";\n            }\n            &:active,\n            &:focus {\n                color: ", ";\n                border-color: ", ";\n                background-color: ", ";\n                box-shadow: 0 0 0 0.2rem\n                    ", ";\n            }\n        "], ["\n            color: ", ";\n            border-color: ", ";\n            &:hover {\n                color: ", ";\n                border-color: ", ";\n                background-color: ", ";\n            }\n            &:active,\n            &:focus {\n                color: ", ";\n                border-color: ", ";\n                background-color: ", ";\n                box-shadow: 0 0 0 0.2rem\n                    ", ";\n            }\n        "])), themeGet("colors.gray600"), themeGet("colors.gray400"), themeGet("colors.gray900"), themeGet("colors.light"), themeGet("colors.light"), themeGet("colors.gray900"), themeGet("colors.light"), themeGet("colors.light"), tinycolor2(themeGet("colors.light")(props))
        .setAlpha(0.5)
        .toRgbString());
}, function (props) {
    return props.$variant === "outlined" &&
        props.$color === "dark" && css(templateObject_24 || (templateObject_24 = __makeTemplateObject(["\n            color: ", ";\n            border-color: ", ";\n            &:hover {\n                color: ", ";\n                border-color: ", ";\n                background-color: ", ";\n            }\n            &:active,\n            &:focus {\n                color: ", ";\n                border-color: ", ";\n                background-color: ", ";\n                box-shadow: 0 0 0 0.2rem\n                    ", ";\n            }\n        "], ["\n            color: ", ";\n            border-color: ", ";\n            &:hover {\n                color: ", ";\n                border-color: ", ";\n                background-color: ", ";\n            }\n            &:active,\n            &:focus {\n                color: ", ";\n                border-color: ", ";\n                background-color: ", ";\n                box-shadow: 0 0 0 0.2rem\n                    ", ";\n            }\n        "])), themeGet("colors.dark"), themeGet("colors.dark"), themeGet("colors.white"), themeGet("colors.dark"), themeGet("colors.dark"), themeGet("colors.white"), themeGet("colors.dark"), themeGet("colors.dark"), tinycolor2(themeGet("colors.dark")(props))
        .setAlpha(0.5)
        .toRgbString());
}, function (props) {
    return props.theme.name === "dark" &&
        props.$variant === "outlined" &&
        props.$color === "dark" && css(templateObject_25 || (templateObject_25 = __makeTemplateObject(["\n            color: ", ";\n            border-color: ", ";\n        "], ["\n            color: ", ";\n            border-color: ", ";\n        "])), themeGet("colors.gray500"), themeGet("colors.gray500"));
}, function (props) {
    return props.$variant === "outlined" &&
        props.$color === "brand2" && css(templateObject_26 || (templateObject_26 = __makeTemplateObject(["\n            color: ", ";\n            border-color: ", ";\n            &:hover {\n                color: ", ";\n                border-color: ", ";\n                background-color: ", ";\n            }\n            &:active,\n            &:focus {\n                color: ", ";\n                border-color: ", ";\n                background-color: ", ";\n                box-shadow: 0 0 0 0.2rem\n                    ", ";\n            }\n        "], ["\n            color: ", ";\n            border-color: ", ";\n            &:hover {\n                color: ", ";\n                border-color: ", ";\n                background-color: ", ";\n            }\n            &:active,\n            &:focus {\n                color: ", ";\n                border-color: ", ";\n                background-color: ", ";\n                box-shadow: 0 0 0 0.2rem\n                    ", ";\n            }\n        "])), themeGet("colors.brand2"), themeGet("colors.brand2"), themeGet("colors.white"), themeGet("colors.brand2"), themeGet("colors.brand2"), themeGet("colors.white"), themeGet("colors.brand2"), themeGet("colors.brand2"), tinycolor2(themeGet("colors.brand2")(props))
        .setAlpha(0.5)
        .toRgbString());
}, function (props) {
    return props.$variant === "outlined" &&
        props.$color === "facebook" && css(templateObject_27 || (templateObject_27 = __makeTemplateObject(["\n            color: ", ";\n            border-color: ", ";\n            &:hover {\n                color: ", ";\n                border-color: ", ";\n                background-color: ", ";\n            }\n            &:active,\n            &:focus {\n                color: ", ";\n                border-color: ", ";\n                background-color: ", ";\n                box-shadow: none;\n            }\n        "], ["\n            color: ", ";\n            border-color: ", ";\n            &:hover {\n                color: ", ";\n                border-color: ", ";\n                background-color: ", ";\n            }\n            &:active,\n            &:focus {\n                color: ", ";\n                border-color: ", ";\n                background-color: ", ";\n                box-shadow: none;\n            }\n        "])), themeGet("colors.facebook"), themeGet("colors.facebook"), themeGet("colors.white"), themeGet("colors.facebook"), themeGet("colors.facebook"), themeGet("colors.white"), themeGet("colors.facebook"), themeGet("colors.facebook"));
}, function (props) {
    return props.$variant === "outlined" &&
        props.$color === "twitter" && css(templateObject_28 || (templateObject_28 = __makeTemplateObject(["\n            color: ", ";\n            border-color: ", ";\n            &:hover {\n                color: ", ";\n                border-color: ", ";\n                background-color: ", ";\n            }\n            &:active,\n            &:focus {\n                color: ", ";\n                border-color: ", ";\n                background-color: ", ";\n                box-shadow: none;\n            }\n        "], ["\n            color: ", ";\n            border-color: ", ";\n            &:hover {\n                color: ", ";\n                border-color: ", ";\n                background-color: ", ";\n            }\n            &:active,\n            &:focus {\n                color: ", ";\n                border-color: ", ";\n                background-color: ", ";\n                box-shadow: none;\n            }\n        "])), themeGet("colors.twitter"), themeGet("colors.twitter"), themeGet("colors.white"), themeGet("colors.twitter"), themeGet("colors.twitter"), themeGet("colors.white"), themeGet("colors.twitter"), themeGet("colors.twitter"));
}, function (_a) {
    var $size = _a.$size;
    return $size === "xs" && css(templateObject_29 || (templateObject_29 = __makeTemplateObject(["\n            font-size: 12px;\n            padding: 5px 0.9375rem;\n        "], ["\n            font-size: 12px;\n            padding: 5px 0.9375rem;\n        "])));
}, function (_a) {
    var $size = _a.$size;
    return $size === "sm" && css(templateObject_30 || (templateObject_30 = __makeTemplateObject(["\n            font-size: 13px;\n            padding: 0.391rem 15px;\n        "], ["\n            font-size: 13px;\n            padding: 0.391rem 15px;\n        "])));
}, function (_a) {
    var $size = _a.$size;
    return $size === "md" && css(templateObject_31 || (templateObject_31 = __makeTemplateObject(["\n            padding: 0.46875rem 0.9375rem;\n            font-size: 0.875rem;\n        "], ["\n            padding: 0.46875rem 0.9375rem;\n            font-size: 0.875rem;\n        "])));
}, function (_a) {
    var $size = _a.$size;
    return $size === "lg" && css(templateObject_32 || (templateObject_32 = __makeTemplateObject(["\n            padding: 0.6rem 1rem;\n            font-size: 0.875rem;\n        "], ["\n            padding: 0.6rem 1rem;\n            font-size: 0.875rem;\n        "])));
}, function (_a) {
    var $fullwidth = _a.$fullwidth;
    return $fullwidth && css(templateObject_33 || (templateObject_33 = __makeTemplateObject(["\n            display: block;\n            width: 100%;\n        "], ["\n            display: block;\n            width: 100%;\n        "])));
}, function (_a) {
    var $shape = _a.$shape;
    return $shape === "rounded" && css(templateObject_34 || (templateObject_34 = __makeTemplateObject(["\n            border-radius: 0.25rem;\n        "], ["\n            border-radius: 0.25rem;\n        "])));
}, function (_a) {
    var $shape = _a.$shape;
    return $shape === "square" && css(templateObject_35 || (templateObject_35 = __makeTemplateObject(["\n            border-radius: 0;\n        "], ["\n            border-radius: 0;\n        "])));
}, function (_a) {
    var $shape = _a.$shape;
    return $shape === "ellipse" && css(templateObject_36 || (templateObject_36 = __makeTemplateObject(["\n            border-radius: 500px;\n        "], ["\n            border-radius: 500px;\n        "])));
}, function (props) {
    return props.$active &&
        props.$color === "primary" && css(templateObject_37 || (templateObject_37 = __makeTemplateObject(["\n            color: ", ";\n            border-color: ", ";\n            background-color: ", "; ;\n        "], ["\n            color: ", ";\n            border-color: ", ";\n            background-color: ", "; ;\n        "])), themeGet("colors.white"), tinycolor2(themeGet("colors.primary")(props))
        .darken(10)
        .toString(), tinycolor2(themeGet("colors.primary")(props))
        .darken(10)
        .toString());
}, function (props) {
    return props.$active &&
        props.$color === "secondary" && css(templateObject_38 || (templateObject_38 = __makeTemplateObject(["\n            color: ", ";\n            border-color: ", ";\n            background-color: ", "; ;\n        "], ["\n            color: ", ";\n            border-color: ", ";\n            background-color: ", "; ;\n        "])), themeGet("colors.white"), tinycolor2(themeGet("colors.secondary")(props))
        .darken(10)
        .toString(), tinycolor2(themeGet("colors.secondary")(props))
        .darken(10)
        .toString());
}, function (props) {
    return props.$active &&
        props.$color === "success" && css(templateObject_39 || (templateObject_39 = __makeTemplateObject(["\n            color: ", ";\n            border-color: ", ";\n            background-color: ", "; ;\n        "], ["\n            color: ", ";\n            border-color: ", ";\n            background-color: ", "; ;\n        "])), themeGet("colors.white"), tinycolor2(themeGet("colors.success")(props))
        .darken(10)
        .toString(), tinycolor2(themeGet("colors.success")(props))
        .darken(10)
        .toString());
}, function (props) {
    return props.$active &&
        props.$color === "danger" && css(templateObject_40 || (templateObject_40 = __makeTemplateObject(["\n            color: ", ";\n            border-color: ", ";\n            background-color: ", "; ;\n        "], ["\n            color: ", ";\n            border-color: ", ";\n            background-color: ", "; ;\n        "])), themeGet("colors.white"), tinycolor2(themeGet("colors.danger")(props))
        .darken(10)
        .toString(), tinycolor2(themeGet("colors.danger")(props))
        .darken(10)
        .toString());
}, function (props) {
    return props.$active &&
        props.$color === "warning" && css(templateObject_41 || (templateObject_41 = __makeTemplateObject(["\n            color: ", ";\n            border-color: ", ";\n            background-color: ", "; ;\n        "], ["\n            color: ", ";\n            border-color: ", ";\n            background-color: ", "; ;\n        "])), themeGet("colors.white"), tinycolor2(themeGet("colors.warning")(props))
        .darken(10)
        .toString(), tinycolor2(themeGet("colors.warning")(props))
        .darken(10)
        .toString());
}, function (props) {
    return props.$active &&
        props.$color === "info" && css(templateObject_42 || (templateObject_42 = __makeTemplateObject(["\n            color: ", ";\n            border-color: ", ";\n            background-color: ", "; ;\n        "], ["\n            color: ", ";\n            border-color: ", ";\n            background-color: ", "; ;\n        "])), themeGet("colors.white"), tinycolor2(themeGet("colors.info")(props))
        .darken(10)
        .toString(), tinycolor2(themeGet("colors.info")(props))
        .darken(10)
        .toString());
}, function (props) {
    return props.$active &&
        props.$color === "light" && css(templateObject_43 || (templateObject_43 = __makeTemplateObject(["\n            color: ", ";\n            border-color: ", ";\n            background-color: ", "; ;\n        "], ["\n            color: ", ";\n            border-color: ", ";\n            background-color: ", "; ;\n        "])), themeGet("colors.white"), tinycolor2(themeGet("colors.light")(props))
        .darken(10)
        .toString(), tinycolor2(themeGet("colors.light")(props))
        .darken(10)
        .toString());
}, function (props) {
    return props.$active &&
        props.$color === "dark" && css(templateObject_44 || (templateObject_44 = __makeTemplateObject(["\n            color: ", ";\n            border-color: ", ";\n            background-color: ", "; ;\n        "], ["\n            color: ", ";\n            border-color: ", ";\n            background-color: ", "; ;\n        "])), themeGet("colors.white"), tinycolor2(themeGet("colors.dark")(props))
        .darken(10)
        .toString(), tinycolor2(themeGet("colors.dark")(props))
        .darken(10)
        .toString());
}, function (props) {
    return props.$active &&
        props.$color === "white" && css(templateObject_45 || (templateObject_45 = __makeTemplateObject(["\n            background-color: ", ";\n        "], ["\n            background-color: ", ";\n        "])), themeGet("colors.whisper"));
}, function (props) {
    return props.theme.name === "dark" &&
        props.$active &&
        props.$color === "white" && css(templateObject_46 || (templateObject_46 = __makeTemplateObject(["\n            color: #fff;\n            background-color: ", ";\n            border-color: ", ";\n        "], ["\n            color: #fff;\n            background-color: ", ";\n            border-color: ", ";\n        "])), themeGet("colors.clay"), themeGet("colors.clay2"));
}, function (_a) {
    var disabled = _a.disabled;
    return disabled && css(templateObject_47 || (templateObject_47 = __makeTemplateObject(["\n            opacity: 0.65;\n            pointer-events: none;\n        "], ["\n            opacity: 0.65;\n            pointer-events: none;\n        "])));
}, function (_a) {
    var $variant = _a.$variant;
    return $variant === "texted" && css(templateObject_48 || (templateObject_48 = __makeTemplateObject(["\n            padding: 0;\n            background-color: transparent;\n            border: none;\n        "], ["\n            padding: 0;\n            background-color: transparent;\n            border: none;\n        "])));
}, function (_a) {
    var $variant = _a.$variant, $color = _a.$color;
    return $variant === "texted" &&
        $color === "primary" && css(templateObject_49 || (templateObject_49 = __makeTemplateObject(["\n            color: ", ";\n        "], ["\n            color: ", ";\n        "])), themeGet("colors.primary"));
}, function (_a) {
    var $variant = _a.$variant, $color = _a.$color;
    return $variant === "texted" &&
        $color === "secondary" && css(templateObject_50 || (templateObject_50 = __makeTemplateObject(["\n            color: ", ";\n        "], ["\n            color: ", ";\n        "])), themeGet("colors.secondary"));
}, function (_a) {
    var $variant = _a.$variant, $color = _a.$color;
    return $variant === "texted" &&
        $color === "success" && css(templateObject_51 || (templateObject_51 = __makeTemplateObject(["\n            color: ", ";\n        "], ["\n            color: ", ";\n        "])), themeGet("colors.success"));
}, function (_a) {
    var $variant = _a.$variant, $color = _a.$color;
    return $variant === "texted" &&
        $color === "danger" && css(templateObject_52 || (templateObject_52 = __makeTemplateObject(["\n            color: ", ";\n        "], ["\n            color: ", ";\n        "])), themeGet("colors.danger"));
}, function (_a) {
    var $variant = _a.$variant, $color = _a.$color;
    return $variant === "texted" &&
        $color === "warning" && css(templateObject_53 || (templateObject_53 = __makeTemplateObject(["\n            color: ", ";\n        "], ["\n            color: ", ";\n        "])), themeGet("colors.warning"));
}, function (_a) {
    var $variant = _a.$variant, $color = _a.$color;
    return $variant === "texted" &&
        $color === "info" && css(templateObject_54 || (templateObject_54 = __makeTemplateObject(["\n            color: ", ";\n        "], ["\n            color: ", ";\n        "])), themeGet("colors.info"));
}, function (_a) {
    var $variant = _a.$variant, $color = _a.$color;
    return $variant === "texted" &&
        $color === "light" && css(templateObject_55 || (templateObject_55 = __makeTemplateObject(["\n            color: ", ";\n        "], ["\n            color: ", ";\n        "])), themeGet("colors.text"));
}, function (_a) {
    var $variant = _a.$variant, $color = _a.$color;
    return $variant === "texted" &&
        $color === "dark" && css(templateObject_56 || (templateObject_56 = __makeTemplateObject(["\n            color: ", ";\n        "], ["\n            color: ", ";\n        "])), themeGet("colors.dark"));
}, function (props) {
    return props.theme.name === "dark" &&
        props.$variant === "texted" &&
        props.$color === "dark" && css(templateObject_57 || (templateObject_57 = __makeTemplateObject(["\n            color: ", ";\n        "], ["\n            color: ", ";\n        "])), themeGet("colors.gray500"));
}, function (_a) {
    var $iconButton = _a.$iconButton;
    return $iconButton && css(templateObject_58 || (templateObject_58 = __makeTemplateObject(["\n            line-height: 1;\n        "], ["\n            line-height: 1;\n        "])));
}, function (_a) {
    var $iconButton = _a.$iconButton, $size = _a.$size;
    return $iconButton &&
        $size === "xs" && css(templateObject_59 || (templateObject_59 = __makeTemplateObject(["\n            padding: 3px 6px;\n            svg {\n                width: 14px;\n                height: 14px;\n                stroke-width: 2.5px;\n                margin: 0;\n            }\n        "], ["\n            padding: 3px 6px;\n            svg {\n                width: 14px;\n                height: 14px;\n                stroke-width: 2.5px;\n                margin: 0;\n            }\n        "])));
}, function (_a) {
    var $iconButton = _a.$iconButton, $size = _a.$size;
    return $iconButton &&
        $size === "sm" && css(templateObject_60 || (templateObject_60 = __makeTemplateObject(["\n            padding-left: 8px;\n            padding-right: 8px;\n            svg {\n                width: 14px;\n                height: 14px;\n                stroke-width: 2.5px;\n                margin-top: -2px;\n            }\n        "], ["\n            padding-left: 8px;\n            padding-right: 8px;\n            svg {\n                width: 14px;\n                height: 14px;\n                stroke-width: 2.5px;\n                margin-top: -2px;\n            }\n        "])));
}, function (_a) {
    var $iconButton = _a.$iconButton, $size = _a.$size;
    return $iconButton &&
        $size === "md" && css(templateObject_61 || (templateObject_61 = __makeTemplateObject(["\n            padding: 5px 10px;\n            svg {\n                width: 18px;\n                height: 18px;\n                stroke-width: 2.5px;\n                margin-top: -2px;\n            }\n        "], ["\n            padding: 5px 10px;\n            svg {\n                width: 18px;\n                height: 18px;\n                stroke-width: 2.5px;\n                margin-top: -2px;\n            }\n        "])));
}, function (_a) {
    var $hasIcon = _a.$hasIcon, $fullwidth = _a.$fullwidth;
    return $hasIcon &&
        $fullwidth && css(templateObject_62 || (templateObject_62 = __makeTemplateObject(["\n            display: flex;\n        "], ["\n            display: flex;\n        "])));
}, function (_a) {
    var $hasIcon = _a.$hasIcon, $iconSize = _a.$iconSize;
    return $hasIcon &&
        $iconSize === "xs" && css(templateObject_63 || (templateObject_63 = __makeTemplateObject(["\n            svg {\n                width: 12px;\n                height: 12px;\n                stroke-width: 2.5px;\n                margin-top: -1px;\n            }\n        "], ["\n            svg {\n                width: 12px;\n                height: 12px;\n                stroke-width: 2.5px;\n                margin-top: -1px;\n            }\n        "])));
}, function (_a) {
    var $hasIcon = _a.$hasIcon, $iconSize = _a.$iconSize;
    return $hasIcon &&
        $iconSize === "sm" && css(templateObject_64 || (templateObject_64 = __makeTemplateObject(["\n            svg {\n                width: 14px;\n                height: 14px;\n                stroke-width: 2.5px;\n                margin-top: -2px;\n            }\n        "], ["\n            svg {\n                width: 14px;\n                height: 14px;\n                stroke-width: 2.5px;\n                margin-top: -2px;\n            }\n        "])));
}, function (_a) {
    var $hasIcon = _a.$hasIcon, $iconPosition = _a.$iconPosition, $iconSpace = _a.$iconSpace;
    return $hasIcon &&
        $iconPosition === "left" &&
        !$iconSpace && css(templateObject_65 || (templateObject_65 = __makeTemplateObject(["\n            svg,\n            .spinner {\n                margin-right: 7px;\n            }\n        "], ["\n            svg,\n            .spinner {\n                margin-right: 7px;\n            }\n        "])));
}, function (_a) {
    var $hasIcon = _a.$hasIcon, $iconPosition = _a.$iconPosition, $iconSpace = _a.$iconSpace;
    return $hasIcon &&
        $iconPosition === "left" &&
        $iconSpace && css(templateObject_66 || (templateObject_66 = __makeTemplateObject(["\n            svg,\n            .spinner {\n                margin-right: ", ";\n            }\n        "], ["\n            svg,\n            .spinner {\n                margin-right: ", ";\n            }\n        "])), $iconSpace);
}, function (_a) {
    var $hasIcon = _a.$hasIcon, $iconPosition = _a.$iconPosition, $iconSpace = _a.$iconSpace;
    return $hasIcon &&
        $iconPosition === "right" &&
        !$iconSpace && css(templateObject_67 || (templateObject_67 = __makeTemplateObject(["\n            svg,\n            .spinner {\n                margin-left: 7px;\n            }\n        "], ["\n            svg,\n            .spinner {\n                margin-left: 7px;\n            }\n        "])));
}, function (_a) {
    var $hasIcon = _a.$hasIcon, $iconPosition = _a.$iconPosition, $iconSpace = _a.$iconSpace;
    return $hasIcon &&
        $iconPosition === "right" &&
        $iconSpace && css(templateObject_68 || (templateObject_68 = __makeTemplateObject(["\n            svg,\n            .spinner {\n                margin-left: ", ";\n            }\n        "], ["\n            svg,\n            .spinner {\n                margin-left: ", ";\n            }\n        "])), $iconSpace);
}, function (_a) {
    var $uppercase = _a.$uppercase, $size = _a.$size;
    return $uppercase && css(templateObject_71 || (templateObject_71 = __makeTemplateObject(["\n            text-transform: uppercase;\n            font-weight: 600;\n            letter-spacing: 0.5px;\n            ", "\n            ", "\n        "], ["\n            text-transform: uppercase;\n            font-weight: 600;\n            letter-spacing: 0.5px;\n            ", "\n            ", "\n        "])), $size === "xs" && css(templateObject_69 || (templateObject_69 = __makeTemplateObject(["\n                font-size: 10px;\n                line-height: 1.8;\n            "], ["\n                font-size: 10px;\n                line-height: 1.8;\n            "]))), $size === "md" && css(templateObject_70 || (templateObject_70 = __makeTemplateObject(["\n                line-height: 1.75;\n            "], ["\n                line-height: 1.75;\n            "]))));
}, space, layout, borderStyle, typography);
export var StyledButton = styled(function (_a) {
    var mt = _a.mt, mb = _a.mb, ml = _a.ml, mr = _a.mr, px = _a.px, py = _a.py, display = _a.display, borderWidth = _a.borderWidth, fontSize = _a.fontSize, props = __rest(_a, ["mt", "mb", "ml", "mr", "px", "py", "display", "borderWidth", "fontSize"]);
    return (_jsx("button", __assign({ type: "button" }, props)));
})(templateObject_73 || (templateObject_73 = __makeTemplateObject(["\n    ", "\n"], ["\n    ", "\n"])), buttonStyles);
export var StyledLink = styled(function (_a) {
    var mt = _a.mt, mb = _a.mb, ml = _a.ml, mr = _a.mr, px = _a.px, py = _a.py, display = _a.display, borderWidth = _a.borderWidth, fontSize = _a.fontSize, props = __rest(_a, ["mt", "mb", "ml", "mr", "px", "py", "display", "borderWidth", "fontSize"]);
    return (_jsx(Link, __assign({}, props)));
})(templateObject_74 || (templateObject_74 = __makeTemplateObject(["\n    ", "\n"], ["\n    ", "\n"])), buttonStyles);
export var StyledAnchor = styled(function (_a) {
    var mt = _a.mt, mb = _a.mb, ml = _a.ml, mr = _a.mr, px = _a.px, py = _a.py, display = _a.display, borderWidth = _a.borderWidth, fontSize = _a.fontSize, props = __rest(_a, ["mt", "mb", "ml", "mr", "px", "py", "display", "borderWidth", "fontSize"]);
    return (_jsx("a", __assign({}, props)));
})(templateObject_75 || (templateObject_75 = __makeTemplateObject(["\n    ", "\n"], ["\n    ", "\n"])), buttonStyles);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20, templateObject_21, templateObject_22, templateObject_23, templateObject_24, templateObject_25, templateObject_26, templateObject_27, templateObject_28, templateObject_29, templateObject_30, templateObject_31, templateObject_32, templateObject_33, templateObject_34, templateObject_35, templateObject_36, templateObject_37, templateObject_38, templateObject_39, templateObject_40, templateObject_41, templateObject_42, templateObject_43, templateObject_44, templateObject_45, templateObject_46, templateObject_47, templateObject_48, templateObject_49, templateObject_50, templateObject_51, templateObject_52, templateObject_53, templateObject_54, templateObject_55, templateObject_56, templateObject_57, templateObject_58, templateObject_59, templateObject_60, templateObject_61, templateObject_62, templateObject_63, templateObject_64, templateObject_65, templateObject_66, templateObject_67, templateObject_68, templateObject_69, templateObject_70, templateObject_71, templateObject_72, templateObject_73, templateObject_74, templateObject_75;
