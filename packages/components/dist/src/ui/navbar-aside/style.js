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
/* eslint-disable @typescript-eslint/no-unsafe-return */
import styled, { themeGet, tinycolor, css } from "@doar/shared/styled";
import Anchor from "../anchor";
export var StyledNavbar = styled.ul(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    margin: 0;\n    padding: 0;\n    list-style: none;\n"], ["\n    margin: 0;\n    padding: 0;\n    list-style: none;\n"])));
export var StyledNavitem = styled.li(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    &:not(:first-of-type) {\n        margin-top: 25px;\n    }\n"], ["\n    &:not(:first-of-type) {\n        margin-top: 25px;\n    }\n"])));
export var StyledNavlink = styled(function (_a) {
    var rest = __rest(_a, []);
    return _jsx(Anchor, __assign({}, rest));
})(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    font-size: 10px;\n    font-weight: 700;\n    font-family: ", ";\n    letter-spacing: 0.5px;\n    text-transform: uppercase;\n    margin-bottom: 5px;\n    display: block;\n    transition: all 0.25s;\n    ", "\n    ", "\n    .aside-navbar-label {\n        pointer-events: none;\n    }\n"], ["\n    font-size: 10px;\n    font-weight: 700;\n    font-family: ", ";\n    letter-spacing: 0.5px;\n    text-transform: uppercase;\n    margin-bottom: 5px;\n    display: block;\n    transition: all 0.25s;\n    ", "\n    ", "\n    .aside-navbar-label {\n        pointer-events: none;\n    }\n"])), themeGet("fonts.interUi"), function (props) {
    return props.theme.name !== "dark" && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n            color: ", ";\n        "], ["\n            color: ", ";\n        "])), themeGet("colors.text"));
}, function (props) {
    return props.theme.name === "dark" && css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n            color: #fff;\n        "], ["\n            color: #fff;\n        "])));
});
export var StyledSubmenu = styled.ul(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    &.mega-submenu {\n        padding-left: 34px;\n        opacity: 0;\n        visibility: hidden;\n        height: 0;\n        &.open {\n            padding-bottom: 10px;\n            opacity: 1;\n            visibility: visible;\n            height: auto;\n        }\n    }\n"], ["\n    &.mega-submenu {\n        padding-left: 34px;\n        opacity: 0;\n        visibility: hidden;\n        height: 0;\n        &.open {\n            padding-bottom: 10px;\n            opacity: 1;\n            visibility: visible;\n            height: auto;\n        }\n    }\n"])));
export var StyledSubNavItem = styled.li(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    &.with-sub {\n        &.open {\n            & > a {\n                color: ", ";\n                font-weight: 500;\n                svg {\n                    color: ", ";\n                }\n                &:before {\n                    opacity: 1;\n                    visibility: visible;\n                }\n                &:after {\n                    transform: rotate(45deg);\n                }\n            }\n        }\n        & > a {\n            &:before {\n                content: \"\";\n                position: absolute;\n                top: 2px;\n                left: -25px;\n                bottom: 2px;\n                right: -25px;\n                border-left: 3px solid ", ";\n                opacity: 0;\n                visibility: hidden;\n            }\n            &:after {\n                position: absolute;\n                right: 0;\n                top: 11px;\n                content: \"\";\n                width: 4px;\n                height: 4px;\n                border-right: 1.5px solid ", ";\n                border-bottom: 1.5px solid ", ";\n                transform: rotate(-45deg);\n                transition: all 0.2s ease-in-out;\n            }\n        }\n    }\n"], ["\n    &.with-sub {\n        &.open {\n            & > a {\n                color: ", ";\n                font-weight: 500;\n                svg {\n                    color: ", ";\n                }\n                &:before {\n                    opacity: 1;\n                    visibility: visible;\n                }\n                &:after {\n                    transform: rotate(45deg);\n                }\n            }\n        }\n        & > a {\n            &:before {\n                content: \"\";\n                position: absolute;\n                top: 2px;\n                left: -25px;\n                bottom: 2px;\n                right: -25px;\n                border-left: 3px solid ", ";\n                opacity: 0;\n                visibility: hidden;\n            }\n            &:after {\n                position: absolute;\n                right: 0;\n                top: 11px;\n                content: \"\";\n                width: 4px;\n                height: 4px;\n                border-right: 1.5px solid ", ";\n                border-bottom: 1.5px solid ", ";\n                transform: rotate(-45deg);\n                transition: all 0.2s ease-in-out;\n            }\n        }\n    }\n"])), themeGet("colors.text2"), themeGet("colors.text2"), themeGet("colors.text3"), themeGet("colors.text3"), themeGet("colors.text3"));
export var StyledSubNavlink = styled(function (_a) {
    var rest = __rest(_a, []);
    return _jsx(Anchor, __assign({}, rest));
})(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n    position: relative;\n    display: flex;\n    align-items: center;\n    font-size: 13px;\n    padding: 0;\n    height: 30px;\n\n    transition: all 0.25s;\n    &:before {\n        content: \"\";\n        position: absolute;\n        top: 2px;\n        left: -25px;\n        bottom: 2px;\n        right: -25px;\n        border-left: 3px solid ", ";\n        opacity: 0;\n        visibility: hidden;\n    }\n    &:focus {\n        outline: none;\n    }\n    svg {\n        width: 18px;\n        height: 18px;\n        stroke-width: 2.3px;\n        margin-right: 15px;\n    }\n    ", "\n    ", "\n    &.active {\n        opacity: 1;\n        color: ", ";\n        font-weight: 500;\n        &:before {\n            opacity: 1;\n            visibility: visible;\n            border-left-color: ", ";\n        }\n        svg {\n            color: ", ";\n            fill: ", ";\n        }\n    }\n"], ["\n    position: relative;\n    display: flex;\n    align-items: center;\n    font-size: 13px;\n    padding: 0;\n    height: 30px;\n\n    transition: all 0.25s;\n    &:before {\n        content: \"\";\n        position: absolute;\n        top: 2px;\n        left: -25px;\n        bottom: 2px;\n        right: -25px;\n        border-left: 3px solid ", ";\n        opacity: 0;\n        visibility: hidden;\n    }\n    &:focus {\n        outline: none;\n    }\n    svg {\n        width: 18px;\n        height: 18px;\n        stroke-width: 2.3px;\n        margin-right: 15px;\n    }\n    ", "\n    ", "\n    &.active {\n        opacity: 1;\n        color: ", ";\n        font-weight: 500;\n        &:before {\n            opacity: 1;\n            visibility: visible;\n            border-left-color: ", ";\n        }\n        svg {\n            color: ", ";\n            fill: ", ";\n        }\n    }\n"])), themeGet("colors.text3"), function (props) {
    return props.theme.name !== "dark" && css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n            color: ", ";\n            svg {\n                color: ", ";\n                fill: ", ";\n            }\n        "], ["\n            color: ", ";\n            svg {\n                color: ", ";\n                fill: ", ";\n            }\n        "])), tinycolor(themeGet("colors.text2")(props))
        .setAlpha(0.9)
        .toString(), tinycolor(themeGet("colors.text2")(props))
        .setAlpha(0.65)
        .toString(), tinycolor(themeGet("colors.text2")(props))
        .setAlpha(0.06)
        .toString());
}, function (props) {
    return props.theme.name === "dark" && css(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n            color: ", ";\n            svg {\n                color: ", ";\n                fill: ", ";\n            }\n            &:hover,\n            &:focus {\n                color: #fff;\n                svg {\n                    color: #fff;\n                }\n            }\n        "], ["\n            color: ", ";\n            svg {\n                color: ", ";\n                fill: ", ";\n            }\n            &:hover,\n            &:focus {\n                color: #fff;\n                svg {\n                    color: #fff;\n                }\n            }\n        "])), themeGet("colors.gray500"), themeGet("colors.gray500"), tinycolor(themeGet("colors.white")(props))
        .setAlpha(0.06)
        .toString());
}, themeGet("colors.primary"), themeGet("colors.primary"), themeGet("colors.primary"), function (props) {
    return tinycolor(props.theme.colors.primary)
        .setAlpha(0.2)
        .toString();
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10;
//# sourceMappingURL=style.js.map