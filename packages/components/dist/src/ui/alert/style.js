var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css, themeGet } from "@doar/shared/styled";
import tinycolor from "tinycolor2";
export var StyledAlert = styled.div(templateObject_38 || (templateObject_38 = __makeTemplateObject(["\n    position: relative;\n    padding: 12px 15px;\n    margin-bottom: 1rem;\n    border: 1px solid transparent;\n    border-radius: 0.25rem;\n    svg {\n        margin-right: 10px;\n    }\n    h1,\n    h2,\n    h3,\n    h4,\n    h5,\n    h6 {\n        color: inherit;\n    }\n    p {\n        color: inherit;\n    }\n    hr {\n        box-sizing: content-box;\n        height: 0;\n        overflow: visible;\n        margin-top: 1rem;\n        margin-bottom: 1rem;\n        border: 0;\n        border-top: 1px solid rgba(0, 0, 0, 0.1);\n    }\n\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n\n    ", "\n\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n\n    ", "\n\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n\n    ", "\n"], ["\n    position: relative;\n    padding: 12px 15px;\n    margin-bottom: 1rem;\n    border: 1px solid transparent;\n    border-radius: 0.25rem;\n    svg {\n        margin-right: 10px;\n    }\n    h1,\n    h2,\n    h3,\n    h4,\n    h5,\n    h6 {\n        color: inherit;\n    }\n    p {\n        color: inherit;\n    }\n    hr {\n        box-sizing: content-box;\n        height: 0;\n        overflow: visible;\n        margin-top: 1rem;\n        margin-bottom: 1rem;\n        border: 0;\n        border-top: 1px solid rgba(0, 0, 0, 0.1);\n    }\n\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n\n    ", "\n\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n\n    ", "\n\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n\n    ", "\n"])), function (props) {
    return props.$variant === "contained" &&
        props.$color === "primary" &&
        !props.$solid && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n            color: ", ";\n            background-color: ", ";\n            border-color: ", ";\n            hr {\n                border-top-color: ", ";\n            }\n        "], ["\n            color: ", ";\n            background-color: ", ";\n            border-color: ", ";\n            hr {\n                border-top-color: ", ";\n            }\n        "])), tinycolor
        .mix("#000000", themeGet("colors.primary")(props), 52)
        .toString(), tinycolor
        .mix("#ffffff", themeGet("colors.primary")(props), 19.9)
        .toString(), tinycolor
        .mix("#ffffff", themeGet("colors.primary")(props), 28)
        .toString(), tinycolor
        .mix("#fff", themeGet("colors.primary")(props), 50)
        .toString());
}, function (props) {
    return props.$variant === "contained" &&
        props.$color === "secondary" &&
        !props.$solid && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n            color: ", ";\n            background-color: ", ";\n            border-color: ", ";\n            hr {\n                border-top-color: ", ";\n            }\n        "], ["\n            color: ", ";\n            background-color: ", ";\n            border-color: ", ";\n            hr {\n                border-top-color: ", ";\n            }\n        "])), tinycolor
        .mix("#000000", themeGet("colors.secondary")(props), 65)
        .toString(), themeGet("colors.gray200"), themeGet("colors.gray300"), tinycolor
        .mix("#fff", themeGet("colors.secondary")(props), 50)
        .toString());
}, function (props) {
    return props.$variant === "contained" &&
        props.$color === "success" &&
        !props.$solid && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n            color: ", ";\n            background-color: ", ";\n            border-color: ", ";\n            hr {\n                border-top-color: ", ";\n            }\n        "], ["\n            color: ", ";\n            background-color: ", ";\n            border-color: ", ";\n            hr {\n                border-top-color: ", ";\n            }\n        "])), tinycolor
        .mix("#000000", themeGet("colors.success")(props), 52)
        .toString(), tinycolor
        .mix("#ffffff", themeGet("colors.success")(props), 19.9)
        .toString(), tinycolor
        .mix("#ffffff", themeGet("colors.success")(props), 28)
        .toString(), tinycolor
        .mix("#fff", themeGet("colors.success")(props), 50)
        .toString());
}, function (props) {
    return props.$variant === "contained" &&
        props.$color === "danger" &&
        !props.$solid && css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n            color: ", ";\n            background-color: ", ";\n            border-color: ", ";\n            hr {\n                border-top-color: ", ";\n            }\n        "], ["\n            color: ", ";\n            background-color: ", ";\n            border-color: ", ";\n            hr {\n                border-top-color: ", ";\n            }\n        "])), tinycolor
        .mix("#000000", themeGet("colors.danger")(props), 52)
        .toString(), tinycolor
        .mix("#ffffff", themeGet("colors.danger")(props), 19.9)
        .toString(), tinycolor
        .mix("#ffffff", themeGet("colors.danger")(props), 28)
        .toString(), tinycolor
        .mix("#fff", themeGet("colors.danger")(props), 50)
        .toString());
}, function (props) {
    return props.$variant === "contained" &&
        props.$color === "warning" &&
        !props.$solid && css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n            color: ", ";\n            background-color: ", ";\n            border-color: ", ";\n            hr {\n                border-top-color: ", ";\n            }\n        "], ["\n            color: ", ";\n            background-color: ", ";\n            border-color: ", ";\n            hr {\n                border-top-color: ", ";\n            }\n        "])), tinycolor
        .mix("#000000", themeGet("colors.warning")(props), 52)
        .toString(), tinycolor
        .mix("#ffffff", themeGet("colors.warning")(props), 19.9)
        .toString(), tinycolor
        .mix("#ffffff", themeGet("colors.warning")(props), 28)
        .toString(), tinycolor
        .mix("#fff", themeGet("colors.warning")(props), 50)
        .toString());
}, function (props) {
    return props.$variant === "contained" &&
        props.$color === "info" &&
        !props.$solid && css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n            color: ", ";\n            background-color: ", ";\n            border-color: ", ";\n            hr {\n                border-top-color: ", ";\n            }\n        "], ["\n            color: ", ";\n            background-color: ", ";\n            border-color: ", ";\n            hr {\n                border-top-color: ", ";\n            }\n        "])), tinycolor
        .mix("#000000", themeGet("colors.info")(props), 52)
        .toString(), tinycolor
        .mix("#ffffff", themeGet("colors.info")(props), 19.9)
        .toString(), tinycolor
        .mix("#ffffff", themeGet("colors.info")(props), 28)
        .toString(), tinycolor
        .mix("#fff", themeGet("colors.info")(props), 50)
        .toString());
}, function (props) {
    return props.$variant === "contained" &&
        props.$color === "light" &&
        !props.$solid && css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n            color: ", ";\n            background-color: ", ";\n            border-color: ", ";\n            hr {\n                border-top-color: ", ";\n            }\n        "], ["\n            color: ", ";\n            background-color: ", ";\n            border-color: ", ";\n            hr {\n                border-top-color: ", ";\n            }\n        "])), tinycolor
        .mix("#000000", themeGet("colors.light")(props), 52)
        .toString(), tinycolor(themeGet("colors.gray100")(props))
        .darken(2)
        .toString(), themeGet("colors.gray200"), tinycolor
        .mix("#fff", themeGet("colors.gray100")(props), 50)
        .toString());
}, function (props) {
    return props.$variant === "contained" &&
        props.$color === "dark" &&
        !props.$solid && css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n            color: ", ";\n            background-color: ", ";\n            border-color: ", ";\n            hr {\n                border-top-color: ", ";\n            }\n        "], ["\n            color: ", ";\n            background-color: ", ";\n            border-color: ", ";\n            hr {\n                border-top-color: ", ";\n            }\n        "])), tinycolor
        .mix("#000000", themeGet("colors.dark")(props), 52)
        .toString(), themeGet("colors.gray500"), tinycolor(themeGet("colors.gray500")(props))
        .darken(3)
        .toString(), tinycolor
        .mix("#fff", themeGet("colors.gray500")(props), 50)
        .toString());
}, function (_a) {
    var $variant = _a.$variant, $color = _a.$color, $solid = _a.$solid;
    return $variant === "contained" &&
        $color === "primary" &&
        $solid && css(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n            color: #fff;\n            background-color: ", ";\n            border-color: ", ";\n            hr {\n                border-top-color: #fff;\n            }\n        "], ["\n            color: #fff;\n            background-color: ", ";\n            border-color: ", ";\n            hr {\n                border-top-color: #fff;\n            }\n        "])), themeGet("colors.primary"), themeGet("colors.primary"));
}, function (_a) {
    var $variant = _a.$variant, $color = _a.$color, $solid = _a.$solid;
    return $variant === "contained" &&
        $color === "secondary" &&
        $solid && css(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n            color: #fff;\n            background-color: ", ";\n            border-color: ", ";\n            hr {\n                border-top-color: #fff;\n            }\n        "], ["\n            color: #fff;\n            background-color: ", ";\n            border-color: ", ";\n            hr {\n                border-top-color: #fff;\n            }\n        "])), themeGet("colors.secondary"), themeGet("colors.secondary"));
}, function (_a) {
    var $variant = _a.$variant, $color = _a.$color, $solid = _a.$solid;
    return $variant === "contained" &&
        $color === "success" &&
        $solid && css(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n            color: #fff;\n            background-color: ", ";\n            border-color: ", ";\n            hr {\n                border-top-color: #fff;\n            }\n        "], ["\n            color: #fff;\n            background-color: ", ";\n            border-color: ", ";\n            hr {\n                border-top-color: #fff;\n            }\n        "])), themeGet("colors.success"), themeGet("colors.success"));
}, function (_a) {
    var $variant = _a.$variant, $color = _a.$color, $solid = _a.$solid;
    return $variant === "contained" &&
        $color === "danger" &&
        $solid && css(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n            color: #fff;\n            background-color: ", ";\n            border-color: ", ";\n            hr {\n                border-top-color: #fff;\n            }\n        "], ["\n            color: #fff;\n            background-color: ", ";\n            border-color: ", ";\n            hr {\n                border-top-color: #fff;\n            }\n        "])), themeGet("colors.danger"), themeGet("colors.danger"));
}, function (_a) {
    var $variant = _a.$variant, $color = _a.$color, $solid = _a.$solid;
    return $variant === "contained" &&
        $color === "warning" &&
        $solid && css(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n            color: #fff;\n            background-color: ", ";\n            border-color: ", ";\n            hr {\n                border-top-color: #fff;\n            }\n        "], ["\n            color: #fff;\n            background-color: ", ";\n            border-color: ", ";\n            hr {\n                border-top-color: #fff;\n            }\n        "])), themeGet("colors.warning"), themeGet("colors.warning"));
}, function (_a) {
    var $variant = _a.$variant, $color = _a.$color, $solid = _a.$solid;
    return $variant === "contained" &&
        $color === "info" &&
        $solid && css(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n            color: #fff;\n            background-color: ", ";\n            border-color: ", ";\n            hr {\n                border-top-color: #fff;\n            }\n        "], ["\n            color: #fff;\n            background-color: ", ";\n            border-color: ", ";\n            hr {\n                border-top-color: #fff;\n            }\n        "])), themeGet("colors.info"), themeGet("colors.info"));
}, function (_a) {
    var $variant = _a.$variant, $color = _a.$color, $solid = _a.$solid;
    return $variant === "contained" &&
        $color === "light" &&
        $solid && css(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n            color: #fff;\n            background-color: ", ";\n            border-color: ", ";\n            hr {\n                border-top-color: #fff;\n            }\n        "], ["\n            color: #fff;\n            background-color: ", ";\n            border-color: ", ";\n            hr {\n                border-top-color: #fff;\n            }\n        "])), themeGet("colors.gray400"), themeGet("colors.gray200"));
}, function (_a) {
    var $variant = _a.$variant, $color = _a.$color, $solid = _a.$solid;
    return $variant === "contained" &&
        $color === "dark" &&
        $solid && css(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n            color: #fff;\n            background-color: ", ";\n            border-color: ", ";\n            hr {\n                border-top-color: #fff;\n            }\n        "], ["\n            color: #fff;\n            background-color: ", ";\n            border-color: ", ";\n            hr {\n                border-top-color: #fff;\n            }\n        "])), themeGet("colors.gray700"), themeGet("colors.gray500"));
}, function (_a) {
    var $variant = _a.$variant;
    return $variant === "outlined" && css(templateObject_17 || (templateObject_17 = __makeTemplateObject(["\n            background: transparent;\n            border-width: 2px;\n            border-radius: 3px;\n            font-weight: 500;\n            padding: 11px 15px;\n        "], ["\n            background: transparent;\n            border-width: 2px;\n            border-radius: 3px;\n            font-weight: 500;\n            padding: 11px 15px;\n        "])));
}, function (_a) {
    var $variant = _a.$variant, $color = _a.$color;
    return $variant === "outlined" &&
        $color === "primary" && css(templateObject_18 || (templateObject_18 = __makeTemplateObject(["\n            border-color: ", ";\n            color: ", ";\n            hr {\n                border-top-color: ", ";\n            }\n        "], ["\n            border-color: ", ";\n            color: ", ";\n            hr {\n                border-top-color: ", ";\n            }\n        "])), themeGet("colors.primary"), themeGet("colors.primary"), themeGet("colors.primary"));
}, function (_a) {
    var $variant = _a.$variant, $color = _a.$color;
    return $variant === "outlined" &&
        $color === "secondary" && css(templateObject_19 || (templateObject_19 = __makeTemplateObject(["\n            border-color: ", ";\n            color: ", ";\n            hr {\n                border-top-color: ", ";\n            }\n        "], ["\n            border-color: ", ";\n            color: ", ";\n            hr {\n                border-top-color: ", ";\n            }\n        "])), themeGet("colors.gray500"), themeGet("colors.gray600"), themeGet("colors.gray500"));
}, function (_a) {
    var $variant = _a.$variant, $color = _a.$color;
    return $variant === "outlined" &&
        $color === "success" && css(templateObject_20 || (templateObject_20 = __makeTemplateObject(["\n            border-color: ", ";\n            color: ", ";\n            hr {\n                border-top-color: ", ";\n            }\n        "], ["\n            border-color: ", ";\n            color: ", ";\n            hr {\n                border-top-color: ", ";\n            }\n        "])), themeGet("colors.success"), themeGet("colors.success"), themeGet("colors.success"));
}, function (_a) {
    var $variant = _a.$variant, $color = _a.$color;
    return $variant === "outlined" &&
        $color === "danger" && css(templateObject_21 || (templateObject_21 = __makeTemplateObject(["\n            border-color: ", ";\n            color: ", ";\n            hr {\n                border-top-color: ", ";\n            }\n        "], ["\n            border-color: ", ";\n            color: ", ";\n            hr {\n                border-top-color: ", ";\n            }\n        "])), themeGet("colors.danger"), themeGet("colors.danger"), themeGet("colors.danger"));
}, function (props) {
    return props.$variant === "outlined" &&
        props.$color === "warning" && css(templateObject_22 || (templateObject_22 = __makeTemplateObject(["\n            border-color: ", ";\n            color: ", ";\n            hr {\n                border-top-color: ", ";\n            }\n        "], ["\n            border-color: ", ";\n            color: ", ";\n            hr {\n                border-top-color: ", ";\n            }\n        "])), tinycolor(themeGet("colors.warning")(props))
        .darken(5)
        .toString(), tinycolor(themeGet("colors.warning")(props))
        .darken(5)
        .toString(), tinycolor(themeGet("colors.warning")(props))
        .darken(5)
        .toString());
}, function (_a) {
    var $variant = _a.$variant, $color = _a.$color;
    return $variant === "outlined" &&
        $color === "info" && css(templateObject_23 || (templateObject_23 = __makeTemplateObject(["\n            border-color: ", ";\n            color: ", ";\n            hr {\n                border-top-color: ", ";\n            }\n        "], ["\n            border-color: ", ";\n            color: ", ";\n            hr {\n                border-top-color: ", ";\n            }\n        "])), themeGet("colors.info"), themeGet("colors.info"), themeGet("colors.info"));
}, function (_a) {
    var $variant = _a.$variant, $color = _a.$color;
    return $variant === "outlined" &&
        $color === "light" && css(templateObject_24 || (templateObject_24 = __makeTemplateObject(["\n            border-color: ", ";\n            color: ", ";\n            hr {\n                border-top-color: ", ";\n            }\n        "], ["\n            border-color: ", ";\n            color: ", ";\n            hr {\n                border-top-color: ", ";\n            }\n        "])), themeGet("colors.gray300"), themeGet("colors.gray500"), themeGet("colors.gray300"));
}, function (_a) {
    var $variant = _a.$variant, $color = _a.$color;
    return $variant === "outlined" &&
        $color === "dark" && css(templateObject_25 || (templateObject_25 = __makeTemplateObject(["\n            border-color: ", ";\n            color: ", ";\n            hr {\n                border-top-color: ", ";\n            }\n        "], ["\n            border-color: ", ";\n            color: ", ";\n            hr {\n                border-top-color: ", ";\n            }\n        "])), themeGet("colors.gray600"), themeGet("colors.gray700"), themeGet("colors.gray600"));
}, function (_a) {
    var $hasLink = _a.$hasLink;
    return $hasLink && css(templateObject_26 || (templateObject_26 = __makeTemplateObject(["\n            a {\n                font-weight: 700;\n            }\n        "], ["\n            a {\n                font-weight: 700;\n            }\n        "])));
}, function (props) {
    return props.$variant === "contained" &&
        props.$color === "primary" &&
        props.$hasLink &&
        !props.$solid && css(templateObject_27 || (templateObject_27 = __makeTemplateObject(["\n            a {\n                color: ", ";\n            }\n        "], ["\n            a {\n                color: ", ";\n            }\n        "])), tinycolor
        .mix("#000000", themeGet("colors.primary")(props), 52)
        .darken(10)
        .toString());
}, function (props) {
    return props.$variant === "contained" &&
        props.$color === "secondary" &&
        props.$hasLink &&
        !props.$solid && css(templateObject_28 || (templateObject_28 = __makeTemplateObject(["\n            a {\n                color: ", ";\n            }\n        "], ["\n            a {\n                color: ", ";\n            }\n        "])), tinycolor
        .mix("#000000", themeGet("colors.secondary")(props), 52)
        .darken(10)
        .toString());
}, function (props) {
    return props.$variant === "contained" &&
        props.$color === "success" &&
        props.$hasLink &&
        !props.$solid && css(templateObject_29 || (templateObject_29 = __makeTemplateObject(["\n            a {\n                color: ", ";\n            }\n        "], ["\n            a {\n                color: ", ";\n            }\n        "])), tinycolor
        .mix("#000000", themeGet("colors.success")(props), 52)
        .darken(10)
        .toString());
}, function (props) {
    return props.$variant === "contained" &&
        props.$color === "danger" &&
        props.$hasLink &&
        !props.$solid && css(templateObject_30 || (templateObject_30 = __makeTemplateObject(["\n            a {\n                color: ", ";\n            }\n        "], ["\n            a {\n                color: ", ";\n            }\n        "])), tinycolor
        .mix("#000000", themeGet("colors.danger")(props), 52)
        .darken(10)
        .toString());
}, function (props) {
    return props.$variant === "contained" &&
        props.$color === "warning" &&
        props.$hasLink &&
        !props.$solid && css(templateObject_31 || (templateObject_31 = __makeTemplateObject(["\n            a {\n                color: ", ";\n            }\n        "], ["\n            a {\n                color: ", ";\n            }\n        "])), tinycolor
        .mix("#000000", themeGet("colors.warning")(props), 52)
        .darken(10)
        .toString());
}, function (props) {
    return props.$variant === "contained" &&
        props.$color === "info" &&
        props.$hasLink &&
        !props.$solid && css(templateObject_32 || (templateObject_32 = __makeTemplateObject(["\n            a {\n                color: ", ";\n            }\n        "], ["\n            a {\n                color: ", ";\n            }\n        "])), tinycolor
        .mix("#000000", themeGet("colors.info")(props), 52)
        .darken(10)
        .toString());
}, function (props) {
    return props.$variant === "contained" &&
        props.$color === "light" &&
        props.$hasLink &&
        !props.$solid && css(templateObject_33 || (templateObject_33 = __makeTemplateObject(["\n            a {\n                color: ", ";\n            }\n        "], ["\n            a {\n                color: ", ";\n            }\n        "])), tinycolor
        .mix("#000000", themeGet("colors.light")(props), 52)
        .darken(10)
        .toString());
}, function (props) {
    return props.$variant === "contained" &&
        props.$color === "dark" &&
        props.$hasLink &&
        !props.$solid && css(templateObject_34 || (templateObject_34 = __makeTemplateObject(["\n            a {\n                color: ", ";\n            }\n        "], ["\n            a {\n                color: ", ";\n            }\n        "])), tinycolor
        .mix("#000000", themeGet("colors.dark")(props), 52)
        .darken(10)
        .toString());
}, function (_a) {
    var $variant = _a.$variant, $color = _a.$color, $hasLink = _a.$hasLink, $solid = _a.$solid;
    return $variant === "contained" &&
        ($color === "primary" ||
            $color === "secondary" ||
            $color === "success" ||
            $color === "danger" ||
            $color === "warning" ||
            $color === "info" ||
            $color === "light" ||
            $color === "dark") &&
        $hasLink &&
        $solid && css(templateObject_35 || (templateObject_35 = __makeTemplateObject(["\n            a {\n                color: ", ";\n            }\n        "], ["\n            a {\n                color: ", ";\n            }\n        "])), tinycolor("#fff").darken(10).toString());
}, function (_a) {
    var $isDismissible = _a.$isDismissible;
    return $isDismissible && css(templateObject_36 || (templateObject_36 = __makeTemplateObject(["\n            opacity 0.15s linear;\n            button {\n                padding: 0;\n                top: 9px;\n                right: 15px;\n                font-weight: 500;\n                position: absolute;\n                color: inherit;\n                cursor: pointer;\n                background-color: transparent;\n                border: 0;\n                appearance: none;\n                text-shadow: 0 1px 0 #fff;\n                opacity: 0.5;\n                line-height: 1;\n                float: right;\n                font-size: 1.3125rem;\n                &:active,\n                &:focus {\n                    outline: none;\n                }\n            }\n        "], ["\n            opacity 0.15s linear;\n            button {\n                padding: 0;\n                top: 9px;\n                right: 15px;\n                font-weight: 500;\n                position: absolute;\n                color: inherit;\n                cursor: pointer;\n                background-color: transparent;\n                border: 0;\n                appearance: none;\n                text-shadow: 0 1px 0 #fff;\n                opacity: 0.5;\n                line-height: 1;\n                float: right;\n                font-size: 1.3125rem;\n                &:active,\n                &:focus {\n                    outline: none;\n                }\n            }\n        "])));
}, function (_a) {
    var $hasIcon = _a.$hasIcon;
    return $hasIcon && css(templateObject_37 || (templateObject_37 = __makeTemplateObject(["\n            display: flex;\n            align-items: center;\n        "], ["\n            display: flex;\n            align-items: center;\n        "])));
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20, templateObject_21, templateObject_22, templateObject_23, templateObject_24, templateObject_25, templateObject_26, templateObject_27, templateObject_28, templateObject_29, templateObject_30, templateObject_31, templateObject_32, templateObject_33, templateObject_34, templateObject_35, templateObject_36, templateObject_37, templateObject_38;
//# sourceMappingURL=style.js.map