import { __assign, __makeTemplateObject, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
/* eslint-disable @typescript-eslint/no-unsafe-return */
import styled, { themeGet, device, css } from "@doar/shared/styled";
import tinycolor2 from "tinycolor2";
import Anchor from "../anchor";
export var StyledNavbar = styled.ul(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    margin: 0;\n    padding: 0;\n    list-style: none;\n"], ["\n    margin: 0;\n    padding: 0;\n    list-style: none;\n"])));
export var StyledNavitem = styled.li(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    ", "\n    &:not(:first-of-type) {\n        margin-top: 10px;\n    }\n    ", " {\n        display: inline-block;\n        margin-left: 25px;\n        &:first-child {\n            margin-left: 0;\n        }\n    }\n    ", " {\n        margin-left: 30px;\n    }\n"], ["\n    ",
    "\n    &:not(:first-of-type) {\n        margin-top: 10px;\n    }\n    ", " {\n        display: inline-block;\n        margin-left: 25px;\n        &:first-child {\n            margin-left: 0;\n        }\n    }\n    ", " {\n        margin-left: 30px;\n    }\n"])), function (_a) {
    var $hasSubmenu = _a.$hasSubmenu;
    return $hasSubmenu && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n            position: relative;\n            & > a {\n                ", " {\n                    padding-right: 14px;\n                }\n                &:after {\n                    position: absolute;\n                    right: 20px;\n                    top: 5px;\n                    content: \"\";\n                    width: 4px;\n                    height: 4px;\n                    border-right: 1.5px solid ", ";\n                    border-bottom: 1.5px solid ", ";\n                    transform: rotate(45deg);\n                    transition: all 0.2s ease-in-out;\n                    ", " {\n                        margin-left: 6px;\n                        right: 0;\n                    }\n                }\n            }\n        "], ["\n            position: relative;\n            & > a {\n                ", " {\n                    padding-right: 14px;\n                }\n                &:after {\n                    position: absolute;\n                    right: 20px;\n                    top: 5px;\n                    content: \"\";\n                    width: 4px;\n                    height: 4px;\n                    border-right: 1.5px solid ", ";\n                    border-bottom: 1.5px solid ", ";\n                    transform: rotate(45deg);\n                    transition: all 0.2s ease-in-out;\n                    ", " {\n                        margin-left: 6px;\n                        right: 0;\n                    }\n                }\n            }\n        "])), device.large, themeGet("colors.text3"), themeGet("colors.text3"), device.large);
}, device.large, device.xlarge);
export var StyledNavlink = styled(function (_a) {
    var rest = __rest(_a, []);
    return _jsx(Anchor, __assign({}, rest), void 0);
})(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    display: flex;\n    align-items: center;\n    font-weight: 500;\n    color: ", ";\n    transition: all 0.2s ease-in-out;\n    position: relative;\n    font-size: ", ";\n    padding: 0 20px;\n    ", " {\n        padding: 0;\n        & > svg {\n            display: none;\n        }\n    }\n    svg {\n        width: 18px;\n        height: 18px;\n        stroke-width: 2.2px;\n        fill: ", ";\n        margin-right: 15px;\n        color: ", ";\n        transition: all 0.2s ease-in-out;\n    }\n    &:hover {\n        color: ", ";\n        svg {\n            color: ", ";\n        }\n    }\n    &:focus {\n        outline: none;\n    }\n    ", "\n"], ["\n    display: flex;\n    align-items: center;\n    font-weight: 500;\n    color: ", ";\n    transition: all 0.2s ease-in-out;\n    position: relative;\n    font-size: ", ";\n    padding: 0 20px;\n    ", " {\n        padding: 0;\n        & > svg {\n            display: none;\n        }\n    }\n    svg {\n        width: 18px;\n        height: 18px;\n        stroke-width: 2.2px;\n        fill: ",
    ";\n        margin-right: 15px;\n        color: ", ";\n        transition: all 0.2s ease-in-out;\n    }\n    &:hover {\n        color: ", ";\n        svg {\n            color: ", ";\n        }\n    }\n    &:focus {\n        outline: none;\n    }\n    ",
    "\n"])), themeGet("colors.text"), themeGet("fontSize.body"), device.large, function (props) {
    return tinycolor2(props.theme.colors.text2).setAlpha(0.1).toString();
}, themeGet("colors.gray600"), themeGet("colors.primary"), themeGet("colors.primary"), function (props) {
    return props.theme.name === "dark" && css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n            color: ", ";\n        "], ["\n            color: ", ";\n        "])), themeGet("colors.gray300"));
});
export var StyledSubmenu = styled.ul(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n    position: relative;\n    min-width: 200px;\n    list-style: none;\n    padding: 0 15px 3px 24px;\n    border-left: 1px solid ", ";\n    margin-top: 10px;\n    margin-left: 28px;\n    z-index: 1000;\n    display: none;\n    &.open {\n        display: block;\n    }\n    ", " {\n        position: absolute;\n        top: 37.5px;\n        left: -25px;\n        background-color: #fff;\n        padding: 20px 25px;\n        border: 1px solid\n            ", ";\n        margin-top: 0;\n        margin-left: 0;\n        border-bottom-right-radius: 0.25rem;\n        border-bottom-left-radius: 0.25rem;\n        &:before {\n            content: \"\";\n            position: absolute;\n            width: 12px;\n            height: 12px;\n            top: -7px;\n            left: 25px;\n            border-bottom: 1.5px solid\n                ", ";\n            border-right: 1.5px solid\n                ", ";\n            transform: rotate(-135deg);\n            background: #fff;\n        }\n        ", "\n        ", "\n    }\n"], ["\n    position: relative;\n    min-width: 200px;\n    list-style: none;\n    padding: 0 15px 3px 24px;\n    border-left: 1px solid ", ";\n    margin-top: 10px;\n    margin-left: 28px;\n    z-index: 1000;\n    display: none;\n    &.open {\n        display: block;\n    }\n    ", " {\n        position: absolute;\n        top: 37.5px;\n        left: -25px;\n        background-color: #fff;\n        padding: 20px 25px;\n        border: 1px solid\n            ",
    ";\n        margin-top: 0;\n        margin-left: 0;\n        border-bottom-right-radius: 0.25rem;\n        border-bottom-left-radius: 0.25rem;\n        &:before {\n            content: \"\";\n            position: absolute;\n            width: 12px;\n            height: 12px;\n            top: -7px;\n            left: 25px;\n            border-bottom: 1.5px solid\n                ",
    ";\n            border-right: 1.5px solid\n                ",
    ";\n            transform: rotate(-135deg);\n            background: #fff;\n        }\n        ",
    "\n        ",
    "\n    }\n"])), themeGet("colors.border"), device.large, function (props) {
    return tinycolor2(props.theme.colors.text4).setAlpha(0.53).toString();
}, function (props) {
    return tinycolor2(props.theme.colors.text4)
        .setAlpha(0.53)
        .toString();
}, function (props) {
    return tinycolor2(props.theme.colors.text4)
        .setAlpha(0.53)
        .toString();
}, function (props) {
    return props.theme.name === "cool" && css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n                padding-top: 10px;\n                margin-top: 0;\n                border-color: ", ";\n                border-top-color: transparent;\n                box-shadow: 0 15px 15px\n                    ", ";\n                &:before {\n                    opacity: 0;\n                }\n            "], ["\n                padding-top: 10px;\n                margin-top: 0;\n                border-color: ",
        ";\n                border-top-color: transparent;\n                box-shadow: 0 15px 15px\n                    ",
        ";\n                &:before {\n                    opacity: 0;\n                }\n            "])), tinycolor2(props.theme.colors.skinUi01)
        .lighten(45)
        .toString(), tinycolor2(props.theme.colors.skinUi01)
        .setAlpha(0.1)
        .toRgbString());
}, function (props) {
    return props.theme.name === "dark" && css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n                border-width: 0;\n                ", " {\n                    background-color: ", ";\n                }\n                &::before {\n                    border-bottom-color: ", ";\n                    border-right-color: ", ";\n                    background: ", ";\n                }\n                &::after {\n                    border-bottom-color: ", ";\n                }\n            "], ["\n                border-width: 0;\n                ", " {\n                    background-color: ",
        ";\n                }\n                &::before {\n                    border-bottom-color: ",
        ";\n                    border-right-color: ",
        ";\n                    background: ",
        ";\n                }\n                &::after {\n                    border-bottom-color: ",
        ";\n                }\n            "])), device.large, tinycolor2(props.theme.colors.gray900)
        .lighten(5)
        .toString(), tinycolor2(props.theme.colors.gray900)
        .lighten(5)
        .toString(), tinycolor2(props.theme.colors.gray900)
        .lighten(5)
        .toString(), tinycolor2(props.theme.colors.gray900)
        .lighten(5)
        .toString(), tinycolor2(props.theme.colors.gray900)
        .lighten(5)
        .toString());
});
export var StyledSubNavItem = styled.li(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n    margin-top: 5px;\n    &:first-child {\n        margin-top: 0;\n    }\n"], ["\n    margin-top: 5px;\n    &:first-child {\n        margin-top: 0;\n    }\n"])));
export var StyledSubNavlink = styled(function (_a) {
    var rest = __rest(_a, []);
    return _jsx(Anchor, __assign({}, rest), void 0);
})(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n    color: ", ";\n    white-space: nowrap;\n    font-size: 13px;\n    display: flex;\n    align-items: center;\n    transition: all 0.2s ease-in-out;\n    &:hover {\n        color: ", ";\n    }\n    svg {\n        width: 16px;\n        height: 16px;\n        margin-right: 15px;\n        display: none;\n        ", " {\n            display: block;\n        }\n    }\n    ", "\n"], ["\n    color: ", ";\n    white-space: nowrap;\n    font-size: 13px;\n    display: flex;\n    align-items: center;\n    transition: all 0.2s ease-in-out;\n    &:hover {\n        color: ", ";\n    }\n    svg {\n        width: 16px;\n        height: 16px;\n        margin-right: 15px;\n        display: none;\n        ", " {\n            display: block;\n        }\n    }\n    ",
    "\n"])), themeGet("colors.text2"), themeGet("colors.primary"), device.large, function (props) {
    return props.theme.name === "dark" && css(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n            color: ", ";\n        "], ["\n            color: ", ";\n        "])), themeGet("colors.gray300"));
});
export var StyledMegaMenu = styled.div(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n    position: relative;\n    min-width: 200px;\n    list-style: none;\n    padding: 0 15px 3px 24px;\n    border-left: 1px solid ", ";\n    margin-top: 10px;\n    margin-left: 28px;\n    z-index: 1000;\n    display: none;\n    &.open {\n        display: block;\n    }\n    ", " {\n        position: absolute;\n        top: 37.5px;\n        left: -25px;\n        background-color: #fff;\n        padding: 20px 25px;\n        border: 1px solid\n            ", ";\n        margin-top: 0;\n        margin-left: 0;\n        border-bottom-right-radius: 0.25rem;\n        border-bottom-left-radius: 0.25rem;\n        &:before {\n            content: \"\";\n            position: absolute;\n            width: 12px;\n            height: 12px;\n            top: -7px;\n            left: 25px;\n            border-bottom: 1.5px solid\n                ", ";\n            border-right: 1.5px solid\n                ", ";\n            transform: rotate(-135deg);\n            background: #fff;\n        }\n    }\n    ", "\n"], ["\n    position: relative;\n    min-width: 200px;\n    list-style: none;\n    padding: 0 15px 3px 24px;\n    border-left: 1px solid ", ";\n    margin-top: 10px;\n    margin-left: 28px;\n    z-index: 1000;\n    display: none;\n    &.open {\n        display: block;\n    }\n    ", " {\n        position: absolute;\n        top: 37.5px;\n        left: -25px;\n        background-color: #fff;\n        padding: 20px 25px;\n        border: 1px solid\n            ",
    ";\n        margin-top: 0;\n        margin-left: 0;\n        border-bottom-right-radius: 0.25rem;\n        border-bottom-left-radius: 0.25rem;\n        &:before {\n            content: \"\";\n            position: absolute;\n            width: 12px;\n            height: 12px;\n            top: -7px;\n            left: 25px;\n            border-bottom: 1.5px solid\n                ",
    ";\n            border-right: 1.5px solid\n                ",
    ";\n            transform: rotate(-135deg);\n            background: #fff;\n        }\n    }\n    ",
    "\n"])), themeGet("colors.border"), device.large, function (props) {
    return tinycolor2(props.theme.colors.text4).setAlpha(0.53).toString();
}, function (props) {
    return tinycolor2(props.theme.colors.text4)
        .setAlpha(0.53)
        .toString();
}, function (props) {
    return tinycolor2(props.theme.colors.text4)
        .setAlpha(0.53)
        .toString();
}, function (props) {
    return props.theme.name === "dark" && css(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n            ", " {\n                background-color: ", ";\n                border-width: 0;\n            }\n            &::before {\n                border-bottom-color: ", ";\n                border-right-color: ", ";\n                background: ", ";\n            }\n            &::after {\n                border-bottom-color: ", ";\n            }\n        "], ["\n            ", " {\n                background-color: ",
        ";\n                border-width: 0;\n            }\n            &::before {\n                border-bottom-color: ",
        ";\n                border-right-color: ",
        ";\n                background: ",
        ";\n            }\n            &::after {\n                border-bottom-color: ",
        ";\n            }\n        "])), device.large, tinycolor2(props.theme.colors.gray900)
        .lighten(5)
        .toString(), tinycolor2(props.theme.colors.gray900)
        .lighten(5)
        .toString(), tinycolor2(props.theme.colors.gray900)
        .lighten(5)
        .toString(), tinycolor2(props.theme.colors.gray900)
        .lighten(5)
        .toString(), tinycolor2(props.theme.colors.gray900)
        .lighten(5)
        .toString());
});
export var StyledMegaMenuInner = styled.div(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n    display: flex;\n    justify-content: space-between;\n    flex-wrap: wrap;\n    min-width: 100%;\n    ", " {\n        min-width: 425px;\n    }\n"], ["\n    display: flex;\n    justify-content: space-between;\n    flex-wrap: wrap;\n    min-width: 100%;\n    ", " {\n        min-width: 425px;\n    }\n"])), device.large);
export var StyledMegamenuList = styled.ul(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n    flex-basis: 100%;\n    max-width: 100%;\n    margin: 0;\n    padding: 0;\n    list-style: none;\n    &:not(:first-of-type) {\n        margin-top: 10px;\n    }\n    ", " {\n        flex-basis: 47%;\n        max-width: 47%;\n        &:nth-of-type(even) {\n            margin-left: 25px;\n            padding-left: 25px;\n            border-left: 1px solid ", ";\n        }\n        &:not(:nth-of-type(-n + 2)) {\n            padding-top: 10px;\n        }\n    }\n"], ["\n    flex-basis: 100%;\n    max-width: 100%;\n    margin: 0;\n    padding: 0;\n    list-style: none;\n    &:not(:first-of-type) {\n        margin-top: 10px;\n    }\n    ", " {\n        flex-basis: 47%;\n        max-width: 47%;\n        &:nth-of-type(even) {\n            margin-left: 25px;\n            padding-left: 25px;\n            border-left: 1px solid ", ";\n        }\n        &:not(:nth-of-type(-n + 2)) {\n            padding-top: 10px;\n        }\n    }\n"])), device.large, themeGet("colors.border"));
export var StyledMegamenuLabel = styled.li(templateObject_17 || (templateObject_17 = __makeTemplateObject(["\n    font-size: 10px;\n    font-weight: 600;\n    letter-spacing: 0.7px;\n    color: ", ";\n    font-family: ", ";\n    text-transform: uppercase;\n    display: block;\n    margin-bottom: 15px;\n    ", "\n"], ["\n    font-size: 10px;\n    font-weight: 600;\n    letter-spacing: 0.7px;\n    color: ", ";\n    font-family: ", ";\n    text-transform: uppercase;\n    display: block;\n    margin-bottom: 15px;\n    ",
    "\n"])), themeGet("colors.text3"), themeGet("fonts.interUi"), function (props) {
    return props.theme.name === "dark" && css(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n            color: ", ";\n        "], ["\n            color: ", ";\n        "])), themeGet("colors.gray700"));
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17;
