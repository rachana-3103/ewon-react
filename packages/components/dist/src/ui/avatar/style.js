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
import styled, { css, themeGet, layout, space, color as colorStyles, typography, tinycolor, } from "@doar/shared/styled";
export var StyledAvatar = styled(function (_a) {
    var display = _a.display, mr = _a.mr, rest = __rest(_a, ["display", "mr"]);
    return (_jsx("div", __assign({}, rest)));
})(templateObject_27 || (templateObject_27 = __makeTemplateObject(["\n    position: relative;\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n    ", "\n\n    ", "\n\n    ", "\n    \n    ", "\n    ", "\n    ", "\n    ", "\n    \n    ", "\n\n    ", "\n\n\t", "\n\n\t", "\n\t\t\n\n    ", "\n\n\t", "\n\n    ", "\n\n\t", "\n\n\t", "\n\n\t", "\n\n    img {\n        width: 100%;\n        height: 100%;\n        object-fit: cover;\n    }\n\n    ", "\n\n    ", "\n\n    ", ";\n    ", ";\n"], ["\n    position: relative;\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n    ", "\n\n    ", "\n\n    ", "\n    \n    ", "\n    ", "\n    ", "\n    ", "\n    \n    ", "\n\n    ", "\n\n\t", "\n\n\t", "\n\t\t\n\n    ", "\n\n\t", "\n\n    ", "\n\n\t", "\n\n\t", "\n\n\t", "\n\n    img {\n        width: 100%;\n        height: 100%;\n        object-fit: cover;\n    }\n\n    ", "\n\n    ", "\n\n    ", ";\n    ", ";\n"])), function (_a) {
    var $size = _a.$size;
    return ($size === "default" || !$size) && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n            width: 38px;\n            height: 38px;\n        "], ["\n            width: 38px;\n            height: 38px;\n        "])));
}, function (_a) {
    var $size = _a.$size;
    return $size === "xs" && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n            width: 26px;\n            height: 26px;\n        "], ["\n            width: 26px;\n            height: 26px;\n        "])));
}, function (_a) {
    var $size = _a.$size;
    return $size === "sm" && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n            width: 32px;\n            height: 32px;\n        "], ["\n            width: 32px;\n            height: 32px;\n        "])));
}, function (_a) {
    var $size = _a.$size;
    return $size === "md" && css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n            width: 48px;\n            height: 48px;\n        "], ["\n            width: 48px;\n            height: 48px;\n        "])));
}, function (_a) {
    var $size = _a.$size;
    return $size === "lg" && css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n            width: 64px;\n            height: 64px;\n        "], ["\n            width: 64px;\n            height: 64px;\n        "])));
}, function (_a) {
    var $size = _a.$size;
    return $size === "xl" && css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n            width: 72px;\n            height: 72px;\n        "], ["\n            width: 72px;\n            height: 72px;\n        "])));
}, function (_a) {
    var $size = _a.$size;
    return $size === "xxl" && css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n            width: 100px;\n            height: 100px;\n        "], ["\n            width: 100px;\n            height: 100px;\n        "])));
}, function (_a) {
    var $shape = _a.$shape;
    return $shape === "square" && css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n            border-radius: 0;\n            img,\n            .avatar-initial {\n                border-radius: 0;\n            }\n        "], ["\n            border-radius: 0;\n            img,\n            .avatar-initial {\n                border-radius: 0;\n            }\n        "])));
}, function (_a) {
    var $shape = _a.$shape;
    return $shape === "circle" && css(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n            border-radius: ", ";\n            img,\n            .avatar-initial {\n                border-radius: ", ";\n            }\n        "], ["\n            border-radius: ", ";\n            img,\n            .avatar-initial {\n                border-radius: ", ";\n            }\n        "])), themeGet("radii.circle"), themeGet("radii.circle"));
}, function (_a) {
    var $shape = _a.$shape;
    return $shape === "rounded" && css(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n            border-radius: ", ";\n            img,\n            .avatar-initial {\n                border-radius: ", ";\n            }\n        "], ["\n            border-radius: ", ";\n            img,\n            .avatar-initial {\n                border-radius: ", ";\n            }\n        "])), themeGet("radii.rounded"), themeGet("radii.rounded"));
}, function (_a) {
    var $status = _a.$status;
    return ($status === "online" || $status === "offline") && css(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n            &:after {\n                content: \"\";\n                position: absolute;\n                right: 2px;\n                bottom: 2px;\n                border-radius: 100%;\n                box-shadow: 0 0 0 2px #fff;\n            }\n        "], ["\n            &:after {\n                content: \"\";\n                position: absolute;\n                right: 2px;\n                bottom: 2px;\n                border-radius: 100%;\n                box-shadow: 0 0 0 2px #fff;\n            }\n        "])));
}, function (_a) {
    var $status = _a.$status;
    return $status === "online" && css(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n            &:after {\n                background-color: ", ";\n            }\n        "], ["\n            &:after {\n                background-color: ", ";\n            }\n        "])), themeGet("colors.success"));
}, function (_a) {
    var $status = _a.$status;
    return $status === "offline" && css(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n            &:after {\n                background-color: ", ";\n                ", "\n            }\n        "], ["\n            &:after {\n                background-color: ", ";\n                ", "\n            }\n        "])), themeGet("colors.text4"), function (props) {
        return props.theme.name === "dark" && css(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n                        background-color: ", ";\n                    "], ["\n                        background-color: ", ";\n                    "])), themeGet("colors.gray500"));
    });
}, function (_a) {
    var $size = _a.$size, $status = _a.$status;
    return $size === "xs" &&
        Boolean($status) && css(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n            &:after {\n                width: 5px;\n                height: 5px;\n            }\n        "], ["\n            &:after {\n                width: 5px;\n                height: 5px;\n            }\n        "])));
}, function (_a) {
    var $size = _a.$size, $status = _a.$status;
    return $size === "sm" &&
        Boolean($status) && css(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n            &:after {\n                width: 7px;\n                height: 7px;\n            }\n        "], ["\n            &:after {\n                width: 7px;\n                height: 7px;\n            }\n        "])));
}, function (_a) {
    var $size = _a.$size, $status = _a.$status;
    return ($size === "default" || !$size) &&
        Boolean($status) && css(templateObject_17 || (templateObject_17 = __makeTemplateObject(["\n            &:after {\n                width: 7px;\n                height: 7px;\n            }\n        "], ["\n            &:after {\n                width: 7px;\n                height: 7px;\n            }\n        "])));
}, function (_a) {
    var $size = _a.$size, $status = _a.$status;
    return $size === "md" &&
        Boolean($status) && css(templateObject_18 || (templateObject_18 = __makeTemplateObject(["\n            &:after {\n                width: 9px;\n                height: 9px;\n            }\n        "], ["\n            &:after {\n                width: 9px;\n                height: 9px;\n            }\n        "])));
}, function (_a) {
    var $size = _a.$size, $status = _a.$status;
    return $size === "lg" &&
        Boolean($status) && css(templateObject_19 || (templateObject_19 = __makeTemplateObject(["\n            &:after {\n                width: 10px;\n                height: 10px;\n            }\n        "], ["\n            &:after {\n                width: 10px;\n                height: 10px;\n            }\n        "])));
}, function (_a) {
    var $size = _a.$size, $status = _a.$status, $shape = _a.$shape;
    return $size === "lg" &&
        Boolean($status) &&
        $shape === "circle" && css(templateObject_20 || (templateObject_20 = __makeTemplateObject(["\n            &:after {\n                bottom: 3px;\n                right: 4px;\n            }\n        "], ["\n            &:after {\n                bottom: 3px;\n                right: 4px;\n            }\n        "])));
}, function (_a) {
    var $size = _a.$size, $status = _a.$status;
    return $size === "xl" &&
        Boolean($status) && css(templateObject_21 || (templateObject_21 = __makeTemplateObject(["\n            &:after {\n                width: 11px;\n                height: 11px;\n                box-shadow: 0 0 0 2.5px #fff;\n            }\n        "], ["\n            &:after {\n                width: 11px;\n                height: 11px;\n                box-shadow: 0 0 0 2.5px #fff;\n            }\n        "])));
}, function (_a) {
    var $size = _a.$size, $status = _a.$status, $shape = _a.$shape;
    return $size === "xl" &&
        Boolean($status) &&
        $shape === "circle" && css(templateObject_22 || (templateObject_22 = __makeTemplateObject(["\n            &:after {\n                bottom: 4px;\n                right: 5px;\n            }\n        "], ["\n            &:after {\n                bottom: 4px;\n                right: 5px;\n            }\n        "])));
}, function (_a) {
    var $size = _a.$size, $status = _a.$status;
    return $size === "xxl" &&
        Boolean($status) && css(templateObject_23 || (templateObject_23 = __makeTemplateObject(["\n            &:after {\n                width: 13px;\n                height: 13px;\n                box-shadow: 0 0 0 2.5px #fff;\n            }\n        "], ["\n            &:after {\n                width: 13px;\n                height: 13px;\n                box-shadow: 0 0 0 2.5px #fff;\n            }\n        "])));
}, function (_a) {
    var $size = _a.$size, $status = _a.$status, $shape = _a.$shape;
    return $size === "xxl" &&
        Boolean($status) &&
        $shape === "circle" && css(templateObject_24 || (templateObject_24 = __makeTemplateObject(["\n            &:after {\n                bottom: 6px;\n                right: 7px;\n            }\n        "], ["\n            &:after {\n                bottom: 6px;\n                right: 7px;\n            }\n        "])));
}, function (props) {
    return props.theme.name === "dark" &&
        (props.$status === "online" || props.$status === "offline") && css(templateObject_25 || (templateObject_25 = __makeTemplateObject(["\n            &:after {\n                box-shadow: 0 0 0 1.5px\n                    ", ";\n            }\n        "], ["\n            &:after {\n                box-shadow: 0 0 0 1.5px\n                    ", ";\n            }\n        "])), tinycolor(themeGet("colors.gray900")(props))
        .darken(5)
        .toString());
}, function (props) {
    return props.theme.name === "dark" &&
        (props.$size === "xxl" || props.$size === "xl") &&
        Boolean(props.$status) && css(templateObject_26 || (templateObject_26 = __makeTemplateObject(["\n            &:after {\n                box-shadow: 0 0 0 2.5px\n                    ", ";\n            }\n        "], ["\n            &:after {\n                box-shadow: 0 0 0 2.5px\n                    ", ";\n            }\n        "])), tinycolor(themeGet("colors.gray900")(props))
        .darken(5)
        .toString());
}, layout, space);
export var StyledInitialText = styled(function (_a) {
    var color = _a.color, bg = _a.bg, opacity = _a.opacity, fontWeight = _a.fontWeight, rest = __rest(_a, ["color", "bg", "opacity", "fontWeight"]);
    return _jsx("span", __assign({}, rest));
})(templateObject_37 || (templateObject_37 = __makeTemplateObject(["\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: ", ";\n    color: #fff;\n    font-weight: 700;\n    font-size: 15px;\n    text-transform: uppercase;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    height: 100%;\n    line-height: 100%;\n    font-family: ", ";\n    ", "\n    ", "\n        ", "\n        ", "\n        ", "\n        ", "\n        ", "\n        ", "\n        ", "\n    ", ";\n    ", ";\n"], ["\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: ", ";\n    color: #fff;\n    font-weight: 700;\n    font-size: 15px;\n    text-transform: uppercase;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    height: 100%;\n    line-height: 100%;\n    font-family: ", ";\n    ", "\n    ", "\n        ", "\n        ", "\n        ", "\n        ", "\n        ", "\n        ", "\n        ", "\n    ", ";\n    ", ";\n"])), themeGet("colors.text3"), themeGet("fonts.interUi"), function (_a) {
    var $size = _a.$size;
    return $size === "xs" && css(templateObject_28 || (templateObject_28 = __makeTemplateObject(["\n            font-size: 10px;\n        "], ["\n            font-size: 10px;\n        "])));
}, function (_a) {
    var $size = _a.$size;
    return $size === "sm" && css(templateObject_29 || (templateObject_29 = __makeTemplateObject(["\n            font-size: 13px;\n        "], ["\n            font-size: 13px;\n        "])));
}, function (_a) {
    var $size = _a.$size;
    return $size === "md" && css(templateObject_30 || (templateObject_30 = __makeTemplateObject(["\n            font-size: 18px;\n        "], ["\n            font-size: 18px;\n        "])));
}, function (_a) {
    var $size = _a.$size;
    return $size === "lg" && css(templateObject_31 || (templateObject_31 = __makeTemplateObject(["\n            font-size: 24px;\n        "], ["\n            font-size: 24px;\n        "])));
}, function (_a) {
    var $size = _a.$size;
    return $size === "xl" && css(templateObject_32 || (templateObject_32 = __makeTemplateObject(["\n            font-size: 30px;\n        "], ["\n            font-size: 30px;\n        "])));
}, function (_a) {
    var $size = _a.$size;
    return $size === "xxl" && css(templateObject_33 || (templateObject_33 = __makeTemplateObject(["\n            font-size: 45px;\n        "], ["\n            font-size: 45px;\n        "])));
}, function (_a) {
    var $shape = _a.$shape;
    return $shape === "square" && css(templateObject_34 || (templateObject_34 = __makeTemplateObject(["\n            border-radius: 0;\n        "], ["\n            border-radius: 0;\n        "])));
}, function (_a) {
    var $shape = _a.$shape;
    return $shape === "circle" && css(templateObject_35 || (templateObject_35 = __makeTemplateObject(["\n            border-radius: ", ";\n        "], ["\n            border-radius: ", ";\n        "])), themeGet("radii.circle"));
}, function (_a) {
    var $shape = _a.$shape;
    return $shape === "rounded" && css(templateObject_36 || (templateObject_36 = __makeTemplateObject(["\n            border-radius: ", ";\n        "], ["\n            border-radius: ", ";\n        "])), themeGet("radii.rounded"));
}, colorStyles, typography);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20, templateObject_21, templateObject_22, templateObject_23, templateObject_24, templateObject_25, templateObject_26, templateObject_27, templateObject_28, templateObject_29, templateObject_30, templateObject_31, templateObject_32, templateObject_33, templateObject_34, templateObject_35, templateObject_36, templateObject_37;
//# sourceMappingURL=style.js.map