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
/* eslint-disable jsx-a11y/alt-text */
import styled, { space, layout, flexbox, device, css, themeGet, } from "@doar/shared/styled";
var imageCss = css(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n    max-width: 100%;\n    ", "\n    ", "\n\t", "\n\t", "\n\t", "\n\t", "\n\t\n\t", "\n\t", "\n    ", ";\n    ", ";\n"], ["\n    max-width: 100%;\n    ", "\n    ", "\n\t", "\n\t", "\n\t", "\n\t", "\n\t\n\t", "\n\t", "\n    ", ";\n    ", ";\n"])), function (_a) {
    var $shape = _a.$shape;
    return $shape === "rounded" && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n            border-radius: ", ";\n        "], ["\n            border-radius: ", ";\n        "])), themeGet("radii.rounded"));
}, function (_a) {
    var $shape = _a.$shape;
    return $shape === "circle" && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n            border-radius: ", ";\n        "], ["\n            border-radius: ", ";\n        "])), themeGet("radii.circle"));
}, function (_a) {
    var $shape = _a.$shape;
    return $shape === "thumbnail" && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n            padding: 0.25rem;\n            background-color: transparent;\n            border: 1px solid ", ";\n            border-radius: ", ";\n        "], ["\n            padding: 0.25rem;\n            background-color: transparent;\n            border: 1px solid ", ";\n            border-radius: ", ";\n        "])), themeGet("colors.text4"), themeGet("radii.rounded"));
}, function (_a) {
    var $fluid = _a.$fluid;
    return $fluid && css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n            height: auto;\n        "], ["\n            height: auto;\n        "])));
}, function (_a) {
    var $align = _a.$align;
    return $align === "left" && css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n            float: left;\n        "], ["\n            float: left;\n        "])));
}, function (_a) {
    var $align = _a.$align;
    return $align === "right" && css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n            float: right;\n        "], ["\n            float: right;\n        "])));
}, function (_a) {
    var $fit = _a.$fit;
    return $fit === "cover" && css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n            width: 100%;\n            height: 100%;\n            object-fit: cover;\n        "], ["\n            width: 100%;\n            height: 100%;\n            object-fit: cover;\n        "])));
}, function (_a) {
    var $fit = _a.$fit;
    return $fit === "contain" && css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n            width: 100%;\n            height: 100%;\n            object-fit: contain;\n        "], ["\n            width: 100%;\n            height: 100%;\n            object-fit: contain;\n        "])));
}, space, layout);
export var StyledImage = styled(function (_a) {
    var m = _a.m, mx = _a.mx, my = _a.my, ml = _a.ml, mr = _a.mr, mt = _a.mt, mb = _a.mb, maxWidth = _a.maxWidth, maxHeight = _a.maxHeight, width = _a.width, height = _a.height, display = _a.display, rest = __rest(_a, ["m", "mx", "my", "ml", "mr", "mt", "mb", "maxWidth", "maxHeight", "width", "height", "display"]);
    return _jsx("img", __assign({}, rest));
})(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n    ", "\n"], ["\n    ", "\n"])), imageCss);
var groupCss = css(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    img {\n        position: relative;\n        background-color: #fff;\n        ", " {\n            padding: 3px;\n        }\n        ", "\n    }\n    ", "\n    ", "\n    ", "\n    ", ";\n    ", ";\n"], ["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    img {\n        position: relative;\n        background-color: #fff;\n        ", " {\n            padding: 3px;\n        }\n        ", "\n    }\n    ", "\n    ", "\n    ", "\n    ", ";\n    ", ";\n"])), device.small, function (props) {
    return props.theme.name === "dark" && css(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n                background-color: ", ";\n            "], ["\n                background-color: ", ";\n            "])), themeGet("colors.gray900"));
}, function (_a) {
    var $size = _a.$size;
    return (!$size || $size !== "sm") && css(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n            img {\n                &:not(:first-of-type) {\n                    margin-left: -15px;\n                }\n                ", " {\n                    &:not(:first-of-type) {\n                        margin-left: -25px;\n                    }\n                }\n            }\n        "], ["\n            img {\n                &:not(:first-of-type) {\n                    margin-left: -15px;\n                }\n                ", " {\n                    &:not(:first-of-type) {\n                        margin-left: -25px;\n                    }\n                }\n            }\n        "])), device.small);
}, function (_a) {
    var $size = _a.$size;
    return $size === "sm" && css(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n            img {\n                &:not(:first-of-type) {\n                    margin-left: -15px;\n                }\n            }\n        "], ["\n            img {\n                &:not(:first-of-type) {\n                    margin-left: -15px;\n                }\n            }\n        "])));
}, function (props) {
    return props.theme.name === "dark" && css(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n            img {\n                background-color: ", ";\n            }\n        "], ["\n            img {\n                background-color: ", ";\n            }\n        "])), themeGet("gray900"));
}, flexbox, space);
export var StyledGroup = styled(function (_a) {
    var mb = _a.mb, alignItems = _a.alignItems, justifyContent = _a.justifyContent, rest = __rest(_a, ["mb", "alignItems", "justifyContent"]);
    return _jsx("div", __assign({}, rest));
})(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n    ", ";\n"], ["\n    ", ";\n"])), groupCss);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16;
//# sourceMappingURL=style.js.map