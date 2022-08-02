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
/* eslint-disable jsx-a11y/heading-has-content */
import styled, { themeGet, layout, space, css, device, typography, color as colorStyles, position as positionProps, border as borderStyles, } from "@doar/shared/styled";
import tinycolor2 from "tinycolor2";
import Anchor from "../anchor";
var colorCSS = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    color: #ffffff;\n    .card-header {\n        border-bottom-color: rgba(255, 255, 255, 0.1);\n    }\n    .card-text,\n    .card-title,\n    p,\n    small {\n        color: #ffffff;\n    }\n"], ["\n    color: #ffffff;\n    .card-header {\n        border-bottom-color: rgba(255, 255, 255, 0.1);\n    }\n    .card-text,\n    .card-title,\n    p,\n    small {\n        color: #ffffff;\n    }\n"])));
export var StyledCard = styled(function (_a) {
    var ml = _a.ml, mr = _a.mr, mt = _a.mt, mb = _a.mb, pl = _a.pl, pr = _a.pr, pt = _a.pt, pb = _a.pb, p = _a.p, width = _a.width, height = _a.height, minWidth = _a.minWidth, maxWidth = _a.maxWidth, props = __rest(_a, ["ml", "mr", "mt", "mb", "pl", "pr", "pt", "pb", "p", "width", "height", "minWidth", "maxWidth"]);
    return _jsx("div", __assign({}, props));
})(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    min-width: 0;\n    word-wrap: break-word;\n    background-color: #fff;\n    background-clip: border-box;\n    border: 1px solid ", ";\n    border-radius: ", ";\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n\n    ", "\n    ", "\n    ", ";\n    ", ";\n"], ["\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    min-width: 0;\n    word-wrap: break-word;\n    background-color: #fff;\n    background-clip: border-box;\n    border: 1px solid ", ";\n    border-radius: ", ";\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n\n    ", "\n    ", "\n    ", ";\n    ", ";\n"])), themeGet("colors.border"), themeGet("radii.rounded"), function (props) {
    return props.$color === "primary" && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n            background-color: ", ";\n            ", ";\n        "], ["\n            background-color: ", ";\n            ", ";\n        "])), themeGet("colors.primary"), colorCSS);
}, function (props) {
    return props.$color === "secondary" && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n            background-color: ", ";\n            ", ";\n        "], ["\n            background-color: ", ";\n            ", ";\n        "])), themeGet("colors.secondary"), colorCSS);
}, function (props) {
    return props.$color === "success" && css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n            background-color: ", ";\n            ", ";\n        "], ["\n            background-color: ", ";\n            ", ";\n        "])), themeGet("colors.success"), colorCSS);
}, function (props) {
    return props.$color === "warning" && css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n            background-color: ", ";\n            ", ";\n        "], ["\n            background-color: ", ";\n            ", ";\n        "])), themeGet("colors.warning"), colorCSS);
}, function (props) {
    return props.$color === "danger" && css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n            background-color: ", ";\n            ", ";\n        "], ["\n            background-color: ", ";\n            ", ";\n        "])), themeGet("colors.danger"), colorCSS);
}, function (props) {
    return props.$color === "info" && css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n            background-color: ", ";\n            ", ";\n        "], ["\n            background-color: ", ";\n            ", ";\n        "])), themeGet("colors.info"), colorCSS);
}, function (props) {
    return props.theme.name === "light" && css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n            box-shadow: 0 0 10px\n                ", ";\n        "], ["\n            box-shadow: 0 0 10px\n                ", ";\n        "])), tinycolor2(themeGet("colors.gray900")(props))
        .setAlpha(0.05)
        .toRgbString());
}, function (props) {
    return props.theme.name === "cool" && css(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n            border-color: transparent;\n            box-shadow: 0 0 25px\n                ", ";\n        "], ["\n            border-color: transparent;\n            box-shadow: 0 0 25px\n                ", ";\n        "])), tinycolor2(themeGet("colors.skinUi01")(props))
        .setAlpha(0.1)
        .toRgbString());
}, function (props) {
    return props.theme.name === "dark" && css(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n            border-width: 0;\n            background-color: ", ";\n            color: ", ";\n        "], ["\n            border-width: 0;\n            background-color: ", ";\n            color: ", ";\n        "])), themeGet("colors.gray900"), themeGet("colors.gray500"));
}, layout, space);
export var StyledCardImage = styled(function (_a) {
    var ml = _a.ml, mr = _a.mr, mt = _a.mt, mb = _a.mb, pl = _a.pl, pr = _a.pr, pt = _a.pt, pb = _a.pb, props = __rest(_a, ["ml", "mr", "mt", "mb", "pl", "pr", "pt", "pb"]);
    return (_jsx("img", __assign({}, props, { alt: "card " })));
})(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n    flex-shrink: 0;\n    width: 100%;\n    border-radius: ", ";\n    display: block;\n    ", "\n    ", "\n    ", ";\n"], ["\n    flex-shrink: 0;\n    width: 100%;\n    border-radius: ", ";\n    display: block;\n    ", "\n    ", "\n    ", ";\n"])), themeGet("radii.rounded"), function (props) {
    return props.$isTop === true && css(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n            border-top-left-radius: ", ";\n            border-top-right-radius: ", ";\n            border-bottom-left-radius: 0;\n            border-bottom-right-radius: 0;\n        "], ["\n            border-top-left-radius: ", ";\n            border-top-right-radius: ", ";\n            border-bottom-left-radius: 0;\n            border-bottom-right-radius: 0;\n        "])), themeGet("radii.rounded"), themeGet("radii.rounded"));
}, function (props) {
    return props.$isBottom === true && css(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n            border-bottom-left-radius: ", ";\n            border-bottom-right-radius: ", ";\n            border-top-left-radius: 0;\n            border-top-right-radius: 0;\n        "], ["\n            border-bottom-left-radius: ", ";\n            border-bottom-right-radius: ", ";\n            border-top-left-radius: 0;\n            border-top-right-radius: 0;\n        "])), themeGet("radii.rounded"), themeGet("radii.rounded"));
}, space);
export var StyledCardBody = styled(function (_a) {
    var textAlign = _a.textAlign, ml = _a.ml, mr = _a.mr, mt = _a.mt, mb = _a.mb, pl = _a.pl, pr = _a.pr, pt = _a.pt, pb = _a.pb, p = _a.p, py = _a.py, px = _a.px, position = _a.position, props = __rest(_a, ["textAlign", "ml", "mr", "mt", "mb", "pl", "pr", "pt", "pb", "p", "py", "px", "position"]);
    return _jsx("div", __assign({}, props));
})(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n    flex: 1 1 auto;\n    min-height: 1px;\n    padding: 15px;\n    ", " {\n        padding: 20px;\n    }\n    ", ";\n    ", ";\n    ", ";\n"], ["\n    flex: 1 1 auto;\n    min-height: 1px;\n    padding: 15px;\n    ", " {\n        padding: 20px;\n    }\n    ", ";\n    ", ";\n    ", ";\n"])), device.small, space, positionProps, typography);
export var StyledCardHeading = styled(function (_a) {
    var ml = _a.ml, mr = _a.mr, mt = _a.mt, mb = _a.mb, pl = _a.pl, pr = _a.pr, pt = _a.pt, pb = _a.pb, fontSize = _a.fontSize, fontFamily = _a.fontFamily, fontWeight = _a.fontWeight, textAlign = _a.textAlign, lineHeight = _a.lineHeight, letterSpacing = _a.letterSpacing, color = _a.color, bg = _a.bg, props = __rest(_a, ["ml", "mr", "mt", "mb", "pl", "pr", "pt", "pb", "fontSize", "fontFamily", "fontWeight", "textAlign", "lineHeight", "letterSpacing", "color", "bg"]);
    return _jsx("h2", __assign({}, props));
})(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n    margin-bottom: 0.75rem;\n    ", ";\n    ", ";\n    ", ";\n"], ["\n    margin-bottom: 0.75rem;\n    ", ";\n    ", ";\n    ", ";\n"])), space, typography, colorStyles);
export var StyledCardText = styled(function (_a) {
    var ml = _a.ml, mr = _a.mr, mt = _a.mt, mb = _a.mb, pl = _a.pl, pr = _a.pr, pt = _a.pt, pb = _a.pb, fontSize = _a.fontSize, fontFamily = _a.fontFamily, fontWeight = _a.fontWeight, textAlign = _a.textAlign, lineHeight = _a.lineHeight, letterSpacing = _a.letterSpacing, color = _a.color, bg = _a.bg, props = __rest(_a, ["ml", "mr", "mt", "mb", "pl", "pr", "pt", "pb", "fontSize", "fontFamily", "fontWeight", "textAlign", "lineHeight", "letterSpacing", "color", "bg"]);
    return _jsx("p", __assign({}, props));
})(templateObject_17 || (templateObject_17 = __makeTemplateObject(["\n    ", ";\n    ", ";\n    ", ";\n"], ["\n    ", ";\n    ", ";\n    ", ";\n"])), space, typography, colorStyles);
export var StyledCardSubtitle = styled(function (_a) {
    var ml = _a.ml, mr = _a.mr, mt = _a.mt, mb = _a.mb, pl = _a.pl, pr = _a.pr, pt = _a.pt, pb = _a.pb, fontSize = _a.fontSize, fontFamily = _a.fontFamily, fontWeight = _a.fontWeight, textAlign = _a.textAlign, lineHeight = _a.lineHeight, letterSpacing = _a.letterSpacing, color = _a.color, bg = _a.bg, props = __rest(_a, ["ml", "mr", "mt", "mb", "pl", "pr", "pt", "pb", "fontSize", "fontFamily", "fontWeight", "textAlign", "lineHeight", "letterSpacing", "color", "bg"]);
    return _jsx("h6", __assign({}, props));
})(templateObject_18 || (templateObject_18 = __makeTemplateObject(["\n    margin-top: -0.375rem;\n    margin-bottom: 0.5rem;\n    color: ", ";\n    ", ";\n    ", ";\n    ", ";\n"], ["\n    margin-top: -0.375rem;\n    margin-bottom: 0.5rem;\n    color: ", ";\n    ", ";\n    ", ";\n    ", ";\n"])), themeGet("colors.gray600"), space, typography, colorStyles);
export var StyledCardLink = styled(function (_a) {
    var ml = _a.ml, mr = _a.mr, mt = _a.mt, mb = _a.mb, pl = _a.pl, pr = _a.pr, pt = _a.pt, pb = _a.pb, fontSize = _a.fontSize, fontFamily = _a.fontFamily, fontWeight = _a.fontWeight, textAlign = _a.textAlign, lineHeight = _a.lineHeight, letterSpacing = _a.letterSpacing, color = _a.color, bg = _a.bg, props = __rest(_a, ["ml", "mr", "mt", "mb", "pl", "pr", "pt", "pb", "fontSize", "fontFamily", "fontWeight", "textAlign", "lineHeight", "letterSpacing", "color", "bg"]);
    return _jsx(Anchor, __assign({}, props));
})(templateObject_19 || (templateObject_19 = __makeTemplateObject(["\n    color: ", ";\n    &:not(:first-of-type) {\n        margin-left: 1.25rem;\n    }\n    ", ";\n    ", ";\n    ", ";\n"], ["\n    color: ", ";\n    &:not(:first-of-type) {\n        margin-left: 1.25rem;\n    }\n    ", ";\n    ", ";\n    ", ";\n"])), themeGet("colors.primary"), space, typography, colorStyles);
export var StyledCardHeader = styled(function (_a) {
    var ml = _a.ml, mr = _a.mr, mt = _a.mt, mb = _a.mb, p = _a.p, px = _a.px, py = _a.py, pl = _a.pl, pr = _a.pr, pt = _a.pt, pb = _a.pb, fontSize = _a.fontSize, fontFamily = _a.fontFamily, fontWeight = _a.fontWeight, textAlign = _a.textAlign, lineHeight = _a.lineHeight, letterSpacing = _a.letterSpacing, color = _a.color, bg = _a.bg, props = __rest(_a, ["ml", "mr", "mt", "mb", "p", "px", "py", "pl", "pr", "pt", "pb", "fontSize", "fontFamily", "fontWeight", "textAlign", "lineHeight", "letterSpacing", "color", "bg"]);
    return _jsx("header", __assign({}, props));
})(templateObject_22 || (templateObject_22 = __makeTemplateObject(["\n    margin-bottom: 0;\n    border-bottom: 1px solid ", ";\n    background-color: transparent;\n    padding: 15px;\n    font-weight: 500;\n    ", " {\n        padding: 15px 20px;\n    }\n    &:first-of-type {\n        border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;\n    }\n    ", "\n    ", "\n    ", ";\n    ", ";\n    ", ";\n"], ["\n    margin-bottom: 0;\n    border-bottom: 1px solid ", ";\n    background-color: transparent;\n    padding: 15px;\n    font-weight: 500;\n    ", " {\n        padding: 15px 20px;\n    }\n    &:first-of-type {\n        border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;\n    }\n    ", "\n    ", "\n    ", ";\n    ", ";\n    ", ";\n"])), themeGet("colors.border"), device.small, function (_a) {
    var $variant = _a.$variant;
    return $variant === "flexbcenter" && css(templateObject_20 || (templateObject_20 = __makeTemplateObject(["\n            display: flex;\n            align-items: center;\n            justify-content: space-between;\n        "], ["\n            display: flex;\n            align-items: center;\n            justify-content: space-between;\n        "])));
}, function (props) {
    return props.theme.name === "cool" && css(templateObject_21 || (templateObject_21 = __makeTemplateObject(["\n            border-color: ", ";\n        "], ["\n            border-color: ", ";\n        "])), tinycolor2(themeGet("colors.skinUi01")(props))
        .lighten(46)
        .toString());
}, space, typography, colorStyles);
export var StyledCardFooter = styled(function (_a) {
    var border = _a.border, borderTopWidth = _a.borderTopWidth, m = _a.m, mx = _a.mx, my = _a.my, ml = _a.ml, mr = _a.mr, mt = _a.mt, mb = _a.mb, p = _a.p, px = _a.px, py = _a.py, pl = _a.pl, pr = _a.pr, pt = _a.pt, pb = _a.pb, props = __rest(_a, ["border", "borderTopWidth", "m", "mx", "my", "ml", "mr", "mt", "mb", "p", "px", "py", "pl", "pr", "pt", "pb"]);
    return _jsx("footer", __assign({}, props));
})(templateObject_24 || (templateObject_24 = __makeTemplateObject(["\n    border-top: 1px solid ", ";\n    background-color: transparent;\n    padding: 0.75rem 1.25rem;\n    &:last-of-type {\n        border-radius: 0 0 calc(0.25rem - 1px) calc(0.25rem - 1px);\n    }\n    ", "\n    ", ";\n    ", ";\n"], ["\n    border-top: 1px solid ", ";\n    background-color: transparent;\n    padding: 0.75rem 1.25rem;\n    &:last-of-type {\n        border-radius: 0 0 calc(0.25rem - 1px) calc(0.25rem - 1px);\n    }\n    ", "\n    ", ";\n    ", ";\n"])), themeGet("colors.border"), function (props) {
    return props.theme.name === "cool" && css(templateObject_23 || (templateObject_23 = __makeTemplateObject(["\n            border-color: ", ";\n        "], ["\n            border-color: ", ";\n        "])), tinycolor2(themeGet("colors.skinUi01")(props))
        .lighten(46)
        .toString());
}, space, borderStyles);
export var StyledCardImgOverlay = styled(function (_a) {
    var m = _a.m, mx = _a.mx, my = _a.my, ml = _a.ml, mr = _a.mr, mt = _a.mt, mb = _a.mb, p = _a.p, px = _a.px, py = _a.py, pl = _a.pl, pr = _a.pr, pt = _a.pt, pb = _a.pb, props = __rest(_a, ["m", "mx", "my", "ml", "mr", "mt", "mb", "p", "px", "py", "pl", "pr", "pt", "pb"]);
    return (_jsx("div", __assign({}, props)));
})(templateObject_25 || (templateObject_25 = __makeTemplateObject(["\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    padding: 1.25rem;\n    ", ";\n"], ["\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    padding: 1.25rem;\n    ", ";\n"])), space);
export var StyledCardGroup = styled(function (_a) {
    var ml = _a.ml, mr = _a.mr, mt = _a.mt, mb = _a.mb, pl = _a.pl, pr = _a.pr, pt = _a.pt, pb = _a.pb, width = _a.width, height = _a.height, minWidth = _a.minWidth, maxWidth = _a.maxWidth, minHeight = _a.minHeight, maxHeight = _a.maxHeight, props = __rest(_a, ["ml", "mr", "mt", "mb", "pl", "pr", "pt", "pb", "width", "height", "minWidth", "maxWidth", "minHeight", "maxHeight"]);
    return _jsx("div", __assign({}, props));
})(templateObject_26 || (templateObject_26 = __makeTemplateObject(["\n    ", " {\n        display: flex;\n        flex-flow: row wrap;\n        & > .card {\n            flex: 1 0 0%;\n            margin-bottom: 0;\n        }\n        & > .card:not(:last-of-type) {\n            border-top-right-radius: 0;\n            border-bottom-right-radius: 0;\n        }\n        & > .card:not(:first-of-type) {\n            border-top-left-radius: 0;\n            border-bottom-left-radius: 0;\n            margin-left: 0;\n            border-left: 0;\n        }\n        & > .card:not(:last-of-type) .card-img-top,\n        & > .card:not(:last-of-type) .card-header {\n            border-top-right-radius: 0;\n        }\n        & > .card:not(:first-of-type) .card-img-top,\n        & > .card:not(:first-of-type) .card-header {\n            border-top-left-radius: 0;\n        }\n    }\n    ", ";\n    ", ";\n"], ["\n    ", " {\n        display: flex;\n        flex-flow: row wrap;\n        & > .card {\n            flex: 1 0 0%;\n            margin-bottom: 0;\n        }\n        & > .card:not(:last-of-type) {\n            border-top-right-radius: 0;\n            border-bottom-right-radius: 0;\n        }\n        & > .card:not(:first-of-type) {\n            border-top-left-radius: 0;\n            border-bottom-left-radius: 0;\n            margin-left: 0;\n            border-left: 0;\n        }\n        & > .card:not(:last-of-type) .card-img-top,\n        & > .card:not(:last-of-type) .card-header {\n            border-top-right-radius: 0;\n        }\n        & > .card:not(:first-of-type) .card-img-top,\n        & > .card:not(:first-of-type) .card-header {\n            border-top-left-radius: 0;\n        }\n    }\n    ", ";\n    ", ";\n"])), device.small, space, layout);
export var StyledCardDeck = styled(function (_a) {
    var ml = _a.ml, mr = _a.mr, mt = _a.mt, mb = _a.mb, pl = _a.pl, pr = _a.pr, pt = _a.pt, pb = _a.pb, width = _a.width, height = _a.height, minWidth = _a.minWidth, maxWidth = _a.maxWidth, minHeight = _a.minHeight, maxHeight = _a.maxHeight, props = __rest(_a, ["ml", "mr", "mt", "mb", "pl", "pr", "pt", "pb", "width", "height", "minWidth", "maxWidth", "minHeight", "maxHeight"]);
    return _jsx("div", __assign({}, props));
})(templateObject_27 || (templateObject_27 = __makeTemplateObject(["\n    ", " {\n        display: flex;\n        flex-flow: row wrap;\n        margin-right: -15px;\n        margin-left: -15px;\n        & > .card {\n            flex: 1 0 0%;\n            margin-right: 15px;\n            margin-bottom: 0;\n            margin-left: 15px;\n        }\n    }\n    ", ";\n    ", ";\n"], ["\n    ", " {\n        display: flex;\n        flex-flow: row wrap;\n        margin-right: -15px;\n        margin-left: -15px;\n        & > .card {\n            flex: 1 0 0%;\n            margin-right: 15px;\n            margin-bottom: 0;\n            margin-left: 15px;\n        }\n    }\n    ", ";\n    ", ";\n"])), device.small, space, layout);
export var StyledCardColumns = styled(function (_a) {
    var ml = _a.ml, mr = _a.mr, mt = _a.mt, mb = _a.mb, pl = _a.pl, pr = _a.pr, pt = _a.pt, pb = _a.pb, width = _a.width, height = _a.height, minWidth = _a.minWidth, maxWidth = _a.maxWidth, minHeight = _a.minHeight, maxHeight = _a.maxHeight, props = __rest(_a, ["ml", "mr", "mt", "mb", "pl", "pr", "pt", "pb", "width", "height", "minWidth", "maxWidth", "minHeight", "maxHeight"]);
    return _jsx("div", __assign({}, props));
})(templateObject_28 || (templateObject_28 = __makeTemplateObject(["\n    ", " {\n        column-count: 3;\n        column-gap: 1.25rem;\n        orphans: 1;\n        widows: 1;\n        & > .card {\n            display: inline-block;\n            width: 100%;\n        }\n    }\n\n    & > .card {\n        margin-bottom: 0.75rem;\n    }\n    ", ";\n    ", ";\n"], ["\n    ", " {\n        column-count: 3;\n        column-gap: 1.25rem;\n        orphans: 1;\n        widows: 1;\n        & > .card {\n            display: inline-block;\n            width: 100%;\n        }\n    }\n\n    & > .card {\n        margin-bottom: 0.75rem;\n    }\n    ", ";\n    ", ";\n"])), device.small, space, layout);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20, templateObject_21, templateObject_22, templateObject_23, templateObject_24, templateObject_25, templateObject_26, templateObject_27, templateObject_28;
//# sourceMappingURL=style.js.map