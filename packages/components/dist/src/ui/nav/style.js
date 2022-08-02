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
import styled, { themeGet, css, flexbox, space, device, typography, tinycolor, } from "@doar/shared/styled";
import Anchor from "../anchor";
export var StyledNav = styled(function (_a) {
    var fontSize = _a.fontSize, fontWeight = _a.fontWeight, fontFamily = _a.fontFamily, justifyContent = _a.justifyContent, alignItems = _a.alignItems, flexDirection = _a.flexDirection, mb = _a.mb, mt = _a.mt, mx = _a.mx, my = _a.my, ml = _a.ml, mr = _a.mr, rest = __rest(_a, ["fontSize", "fontWeight", "fontFamily", "justifyContent", "alignItems", "flexDirection", "mb", "mt", "mx", "my", "ml", "mr"]);
    return _jsx("nav", __assign({}, rest));
})(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n    display: flex;\n    flex-wrap: wrap;\n    ", "\n    ", "\n\t", "\n\t", "\n\t", "\n\t", "\n\t", "\n\t", "\n\n\t", "\n\t\n\t", "\n\n    ", "\n\n\t", "\n\t\t\n\t", "\n        \n\n    ", ";\n    ", ";\n    ", ";\n"], ["\n    display: flex;\n    flex-wrap: wrap;\n    ", "\n    ", "\n\t", "\n\t", "\n\t", "\n\t", "\n\t", "\n\t", "\n\n\t", "\n\t\n\t", "\n\n    ", "\n\n\t", "\n\t\t\n\t", "\n        \n\n    ", ";\n    ", ";\n    ", ";\n"])), function (_a) {
    var $pills = _a.$pills;
    return !!$pills && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n            .nav-link {\n                transition: all 0.2s ease-in-out;\n                border-radius: 0.25rem;\n                &:not(.active) {\n                    &:hover,\n                    &:focus {\n                        background-color: ", ";\n                        color: ", ";\n                    }\n                }\n                &.active {\n                    color: #fff;\n                    background-color: ", ";\n                }\n            }\n        "], ["\n            .nav-link {\n                transition: all 0.2s ease-in-out;\n                border-radius: 0.25rem;\n                &:not(.active) {\n                    &:hover,\n                    &:focus {\n                        background-color: ", ";\n                        color: ", ";\n                    }\n                }\n                &.active {\n                    color: #fff;\n                    background-color: ", ";\n                }\n            }\n        "])), themeGet("colors.anthens2"), themeGet("colors.text"), themeGet("colors.primary"));
}, function (_a) {
    var $align = _a.$align;
    return $align === "center" && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n            justify-content: center;\n        "], ["\n            justify-content: center;\n        "])));
}, function (_a) {
    var $align = _a.$align;
    return $align === "right" && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n            justify-content: flex-end;\n        "], ["\n            justify-content: flex-end;\n        "])));
}, function (_a) {
    var $vertical = _a.$vertical;
    return !!$vertical && css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n            flex-direction: column;\n        "], ["\n            flex-direction: column;\n        "])));
}, function (_a) {
    var $vertical = _a.$vertical, $pills = _a.$pills;
    return !$vertical &&
        !!$pills && css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n            .nav-link {\n                & + .nav-link {\n                    margin-left: 2px;\n                }\n            }\n        "], ["\n            .nav-link {\n                & + .nav-link {\n                    margin-left: 2px;\n                }\n            }\n        "])));
}, function (_a) {
    var $fill = _a.$fill;
    return !!$fill && css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n            .nav-link {\n                flex: 1 1 auto;\n                text-align: center;\n            }\n        "], ["\n            .nav-link {\n                flex: 1 1 auto;\n                text-align: center;\n            }\n        "])));
}, function (_a) {
    var $customStyle = _a.$customStyle;
    return $customStyle === "classic" && css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n            flex-wrap: wrap;\n            flex-direction: column;\n        "], ["\n            flex-wrap: wrap;\n            flex-direction: column;\n        "])));
}, function (_a) {
    var $customStyle = _a.$customStyle;
    return $customStyle === "icon" && css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n            flex-wrap: wrap;\n            align-items: center;\n        "], ["\n            flex-wrap: wrap;\n            align-items: center;\n        "])));
}, function (_a) {
    var $customStyle = _a.$customStyle;
    return $customStyle === "line" && css(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n            flex-wrap: wrap;\n            border-bottom: 2px solid ", ";\n        "], ["\n            flex-wrap: wrap;\n            border-bottom: 2px solid ", ";\n        "])), themeGet("colors.border"));
}, function (_a) {
    var $customStyle = _a.$customStyle;
    return $customStyle === "sidebar" && css(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n            flex-wrap: wrap;\n            flex-direction: column;\n            font-size: 13px;\n            padding-left: 0;\n            margin-bottom: 0;\n            .badge {\n                margin-left: auto;\n                color: ", ";\n                font-weight: 400;\n                font-size: 11px;\n                background: transparent;\n            }\n        "], ["\n            flex-wrap: wrap;\n            flex-direction: column;\n            font-size: 13px;\n            padding-left: 0;\n            margin-bottom: 0;\n            .badge {\n                margin-left: auto;\n                color: ", ";\n                font-weight: 400;\n                font-size: 11px;\n                background: transparent;\n            }\n        "])), themeGet("colors.text4"));
}, function (props) {
    return props.$customStyle === "aside" && css(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n            font-size: 13px;\n            line-height: 1.6;\n            white-space: nowrap;\n            .nav-link {\n                position: relative;\n                display: flex;\n                align-items: center;\n                padding: 0;\n                height: 30px;\n                transition: all 0.25s;\n                &:before {\n                    content: \"\";\n                    position: absolute;\n                    top: 2px;\n                    left: -25px;\n                    bottom: 2px;\n                    right: -25px;\n                    border-left: 3px solid ", ";\n                    opacity: 0;\n                    visibility: hidden;\n                }\n            }\n            svg {\n                width: 18px;\n                height: 18px;\n                stroke-width: 2.3px;\n                margin-right: 15px;\n                fill: ", ";\n            }\n            ", "\n            ", "\n        "], ["\n            font-size: 13px;\n            line-height: 1.6;\n            white-space: nowrap;\n            .nav-link {\n                position: relative;\n                display: flex;\n                align-items: center;\n                padding: 0;\n                height: 30px;\n                transition: all 0.25s;\n                &:before {\n                    content: \"\";\n                    position: absolute;\n                    top: 2px;\n                    left: -25px;\n                    bottom: 2px;\n                    right: -25px;\n                    border-left: 3px solid ", ";\n                    opacity: 0;\n                    visibility: hidden;\n                }\n            }\n            svg {\n                width: 18px;\n                height: 18px;\n                stroke-width: 2.3px;\n                margin-right: 15px;\n                fill: ", ";\n            }\n            ", "\n            ", "\n        "])), themeGet("colors.text3"), tinycolor(themeGet("colors.text2")(props))
        .setAlpha(0.06)
        .toRgbString(), props.theme.name !== "dark" && css(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n                .nav-link {\n                    color: ", ";\n                }\n                svg {\n                    color: ", ";\n                }\n            "], ["\n                .nav-link {\n                    color: ", ";\n                }\n                svg {\n                    color: ", ";\n                }\n            "])), tinycolor(themeGet("colors.text2")(props))
        .setAlpha(0.9)
        .toRgbString(), tinycolor(themeGet("colors.text2")(props))
        .setAlpha(0.65)
        .toRgbString()), props.theme.name === "dark" && css(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n                .nav-link {\n                    color: ", ";\n                    &:hover,\n                    &:focus {\n                        color: #fff;\n                        svg {\n                            color: #fff;\n                        }\n                    }\n                }\n                svg {\n                    color: ", ";\n                }\n            "], ["\n                .nav-link {\n                    color: ", ";\n                    &:hover,\n                    &:focus {\n                        color: #fff;\n                        svg {\n                            color: #fff;\n                        }\n                    }\n                }\n                svg {\n                    color: ", ";\n                }\n            "])), themeGet("colors.gray500"), themeGet("colors.gray500")));
}, function (_a) {
    var $customStyle = _a.$customStyle;
    return $customStyle === "social" && css(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n            flex-wrap: wrap;\n            align-items: center;\n        "], ["\n            flex-wrap: wrap;\n            align-items: center;\n        "])));
}, function (_a) {
    var $customStyle = _a.$customStyle;
    return $customStyle === "with-icon" && css(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n            flex-wrap: wrap;\n            font-size: 13px;\n        "], ["\n            flex-wrap: wrap;\n            font-size: 13px;\n        "])));
}, flexbox, space, typography);
export var StyledNavLink = styled(function (_a) {
    var fontSize = _a.fontSize, fontWeight = _a.fontWeight, fontFamily = _a.fontFamily, mb = _a.mb, mt = _a.mt, mx = _a.mx, my = _a.my, ml = _a.ml, mr = _a.mr, rest = __rest(_a, ["fontSize", "fontWeight", "fontFamily", "mb", "mt", "mx", "my", "ml", "mr"]);
    return (_jsx(Anchor, __assign({}, rest)));
})(templateObject_32 || (templateObject_32 = __makeTemplateObject(["\n    padding: 0.5rem 1rem;\n    color: ", ";\n    ", "\n    ", "\n\t", "\n\n\t", "\n\t\t\n\t", "\n\t", "\n\t\n\t", "\n\n\t", "\n    ", "\n    ", "\n\n\t", "\n\t\n\t", "\n\n\tsvg {\n        ", "\n        ", "\n    }\n    ", ";\n    ", ";\n"], ["\n    padding: 0.5rem 1rem;\n    color: ", ";\n    ", "\n    ", "\n\t", "\n\n\t", "\n\t\t\n\t", "\n\t", "\n\t\n\t", "\n\n\t", "\n    ", "\n    ", "\n\n\t", "\n\t\n\t", "\n\n\tsvg {\n        ", "\n        ", "\n    }\n    ", ";\n    ", ";\n"])), themeGet("colors.text3"), function (_a) {
    var $active = _a.$active;
    return !!$active && css(templateObject_17 || (templateObject_17 = __makeTemplateObject(["\n            color: ", ";\n        "], ["\n            color: ", ";\n        "])), themeGet("colors.primary"));
}, function (_a) {
    var $customStyle = _a.$customStyle;
    return $customStyle === "classic" && css(templateObject_19 || (templateObject_19 = __makeTemplateObject(["\n            padding: 0;\n            display: flex;\n            align-items: center;\n            color: ", ";\n            &:not(:first-of-type) {\n                margin-top: 10px;\n            }\n            span:not(.badge) {\n                display: block;\n                transform: translateY(1px);\n            }\n            .badge {\n                margin-left: auto;\n                color: ", ";\n                font-weight: 400;\n                font-size: 11px;\n            }\n            ", "\n        "], ["\n            padding: 0;\n            display: flex;\n            align-items: center;\n            color: ", ";\n            &:not(:first-of-type) {\n                margin-top: 10px;\n            }\n            span:not(.badge) {\n                display: block;\n                transform: translateY(1px);\n            }\n            .badge {\n                margin-left: auto;\n                color: ", ";\n                font-weight: 400;\n                font-size: 11px;\n            }\n            ", "\n        "])), themeGet("colors.text2"), themeGet("colors.text4"), function (props) {
        return props.theme.name === "dark" && css(templateObject_18 || (templateObject_18 = __makeTemplateObject(["\n                    color: ", ";\n                    .badge {\n                        color: ", ";\n                    }\n                "], ["\n                    color: ", ";\n                    .badge {\n                        color: ", ";\n                    }\n                "])), themeGet("colors.gray500"), themeGet("colors.gray300"));
    });
}, function (_a) {
    var $active = _a.$active, $customStyle = _a.$customStyle;
    return !!$active &&
        $customStyle === "classic" && css(templateObject_20 || (templateObject_20 = __makeTemplateObject(["\n            color: ", ";\n        "], ["\n            color: ", ";\n        "])), themeGet("colors.primary"));
}, function (_a) {
    var $customStyle = _a.$customStyle;
    return $customStyle === "icon" && css(templateObject_21 || (templateObject_21 = __makeTemplateObject(["\n            padding: 0;\n            line-height: 100%;\n            &:not(:first-of-type) {\n                margin-left: 10px;\n            }\n            svg {\n                width: 18px;\n                height: 18px;\n            }\n        "], ["\n            padding: 0;\n            line-height: 100%;\n            &:not(:first-of-type) {\n                margin-left: 10px;\n            }\n            svg {\n                width: 18px;\n                height: 18px;\n            }\n        "])));
}, function (_a) {
    var $customStyle = _a.$customStyle;
    return $customStyle === "line" && css(templateObject_22 || (templateObject_22 = __makeTemplateObject(["\n            display: block;\n            color: ", ";\n            padding: 8px 0;\n            font-size: 12px;\n            &:not(:first-of-type) {\n                margin-left: 10px;\n            }\n            ", " {\n                font-size: 13px;\n                &:not(:first-of-type) {\n                    margin-left: 15px;\n                }\n            }\n            ", " {\n                &:not(:first-of-type) {\n                    margin-left: 25px;\n                }\n            }\n        "], ["\n            display: block;\n            color: ", ";\n            padding: 8px 0;\n            font-size: 12px;\n            &:not(:first-of-type) {\n                margin-left: 10px;\n            }\n            ", " {\n                font-size: 13px;\n                &:not(:first-of-type) {\n                    margin-left: 15px;\n                }\n            }\n            ", " {\n                &:not(:first-of-type) {\n                    margin-left: 25px;\n                }\n            }\n        "])), themeGet("colors.gray700"), device.small, device.medium);
}, function (_a) {
    var $active = _a.$active, $customStyle = _a.$customStyle;
    return !!$active &&
        $customStyle === "line" && css(templateObject_23 || (templateObject_23 = __makeTemplateObject(["\n            position: relative;\n            color: ", ";\n            &:before {\n                content: \"\";\n                position: absolute;\n                bottom: -2px;\n                left: 0;\n                right: 0;\n                height: 2px;\n                background-color: ", ";\n            }\n        "], ["\n            position: relative;\n            color: ", ";\n            &:before {\n                content: \"\";\n                position: absolute;\n                bottom: -2px;\n                left: 0;\n                right: 0;\n                height: 2px;\n                background-color: ", ";\n            }\n        "])), themeGet("colors.primary"), themeGet("colors.primary"));
}, function (props) {
    return props.$customStyle === "sidebar" && css(templateObject_24 || (templateObject_24 = __makeTemplateObject(["\n            padding: 6px 10px;\n            display: flex;\n            align-items: center;\n            border-radius: 0.25rem;\n            color: ", ";\n            &:not(:first-of-type) {\n                margin-top: 2px;\n            }\n            &:hover,\n            &:focus {\n                background-color: ", ";\n            }\n            svg {\n                width: 18px;\n                height: 18px;\n                stroke-width: 2.3px;\n                margin-right: 12px;\n                color: ", ";\n                fill: ", ";\n            }\n        "], ["\n            padding: 6px 10px;\n            display: flex;\n            align-items: center;\n            border-radius: 0.25rem;\n            color: ", ";\n            &:not(:first-of-type) {\n                margin-top: 2px;\n            }\n            &:hover,\n            &:focus {\n                background-color: ", ";\n            }\n            svg {\n                width: 18px;\n                height: 18px;\n                stroke-width: 2.3px;\n                margin-right: 12px;\n                color: ", ";\n                fill: ", ";\n            }\n        "])), themeGet("colors.text2"), themeGet("colors.whisper"), themeGet("colors.shuttle2"), tinycolor(themeGet("colors.text2")(props))
        .setAlpha(0.06)
        .toRgbString());
}, function (props) {
    return !!props.$active &&
        props.$customStyle === "sidebar" && css(templateObject_25 || (templateObject_25 = __makeTemplateObject(["\n            color: ", ";\n            font-weight: 500;\n            background-color: ", ";\n            svg {\n                color: ", ";\n                fill: ", ";\n            }\n        "], ["\n            color: ", ";\n            font-weight: 500;\n            background-color: ", ";\n            svg {\n                color: ", ";\n                fill: ", ";\n            }\n        "])), themeGet("colors.primary"), themeGet("colors.catskill"), themeGet("colors.primary"), tinycolor(themeGet("colors.primary")(props))
        .setAlpha(0.2)
        .toRgbString());
}, function (props) {
    return props.theme.name === "dark" &&
        props.$customStyle === "sidebar" && css(templateObject_26 || (templateObject_26 = __makeTemplateObject(["\n            &:hover,\n            &:focus {\n                background-color: ", ";\n            }\n        "], ["\n            &:hover,\n            &:focus {\n                background-color: ", ";\n            }\n        "])), themeGet("colors.gray900"));
}, function (props) {
    return !!props.$active &&
        props.theme.name === "dark" &&
        props.$customStyle === "sidebar" && css(templateObject_27 || (templateObject_27 = __makeTemplateObject(["\n            background-color: ", ";\n            color: ", ";\n            .badge {\n                color: ", ";\n            }\n        "], ["\n            background-color: ", ";\n            color: ", ";\n            .badge {\n                color: ", ";\n            }\n        "])), themeGet("colors.darklighten2"), themeGet("colors.gray400"), themeGet("colors.gray50"));
}, function (_a) {
    var $customStyle = _a.$customStyle;
    return $customStyle === "social" && css(templateObject_28 || (templateObject_28 = __makeTemplateObject(["\n            padding: 0;\n            color: ", ";\n            &:not(:first-of-type) {\n                margin-left: 8px;\n            }\n            svg {\n                width: 18px;\n            }\n        "], ["\n            padding: 0;\n            color: ", ";\n            &:not(:first-of-type) {\n                margin-left: 8px;\n            }\n            svg {\n                width: 18px;\n            }\n        "])), themeGet("colors.text2"));
}, function (_a) {
    var $customStyle = _a.$customStyle;
    return $customStyle === "with-icon" && css(templateObject_29 || (templateObject_29 = __makeTemplateObject(["\n            padding: 0;\n            display: flex;\n            align-items: center;\n            &:not(:first-of-type) {\n                margin-left: 15px;\n                ", " {\n                    margin-left: 25px;\n                }\n            }\n            &:hover {\n                color: ", ";\n            }\n            svg {\n                width: 16px;\n                height: 16px;\n                stroke-width: 2.5px;\n                position: relative;\n                top: -1px;\n            }\n        "], ["\n            padding: 0;\n            display: flex;\n            align-items: center;\n            &:not(:first-of-type) {\n                margin-left: 15px;\n                ", " {\n                    margin-left: 25px;\n                }\n            }\n            &:hover {\n                color: ", ";\n            }\n            svg {\n                width: 16px;\n                height: 16px;\n                stroke-width: 2.5px;\n                position: relative;\n                top: -1px;\n            }\n        "])), device.small, themeGet("colors.primary"));
}, function (_a) {
    var $customStyle = _a.$customStyle, $iconPosition = _a.$iconPosition, $iconDistance = _a.$iconDistance;
    return $customStyle === "with-icon" &&
        $iconPosition === "left" && css(templateObject_30 || (templateObject_30 = __makeTemplateObject(["\n                margin-right: ", ";\n            "], ["\n                margin-right: ", ";\n            "])), $iconDistance);
}, function (_a) {
    var $customStyle = _a.$customStyle, $iconPosition = _a.$iconPosition, $iconDistance = _a.$iconDistance;
    return $customStyle === "with-icon" &&
        $iconPosition === "right" && css(templateObject_31 || (templateObject_31 = __makeTemplateObject(["\n                margin-left: ", ";\n            "], ["\n                margin-left: ", ";\n            "])), $iconDistance);
}, space, typography);
export var StyledDivider = styled.span(templateObject_33 || (templateObject_33 = __makeTemplateObject(["\n    width: 1px;\n    background-color: ", ";\n    margin: 0 15px;\n    display: none;\n    ", " {\n        display: block;\n    }\n"], ["\n    width: 1px;\n    background-color: ", ";\n    margin: 0 15px;\n    display: none;\n    ", " {\n        display: block;\n    }\n"])), themeGet("colors.light"), device.small);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20, templateObject_21, templateObject_22, templateObject_23, templateObject_24, templateObject_25, templateObject_26, templateObject_27, templateObject_28, templateObject_29, templateObject_30, templateObject_31, templateObject_32, templateObject_33;
//# sourceMappingURL=style.js.map