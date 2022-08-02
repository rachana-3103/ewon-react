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
/* eslint-disable jsx-a11y/anchor-has-content */
import styled, { space, color as colorStyles, typography, layout, css, themeGet, tinycolor, } from "@doar/shared/styled";
import { Link } from "react-router-dom";
var anchorStyle = css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n    ", "\n    ", "\n    ", "\n    ", "\n    \n    ", ";\n    ", ";\n    ", ";\n    ", ";\n"], ["\n    ", "\n    ", "\n    ", "\n    ", "\n    \n    ", ";\n    ", ";\n    ", ";\n    ", ";\n"])), function (_a) {
    var $variant = _a.$variant;
    return $variant === "link1" && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n            color: ", ";\n            &:hover,\n            &:focus {\n                color: ", ";\n            }\n        "], ["\n            color: ", ";\n            &:hover,\n            &:focus {\n                color: ", ";\n            }\n        "])), themeGet("colors.text"), themeGet("colors.primary"));
}, function (_a) {
    var $variant = _a.$variant;
    return $variant === "link2" && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n            color: ", ";\n            &:hover,\n            &:focus {\n                color: ", ";\n            }\n        "], ["\n            color: ", ";\n            &:hover,\n            &:focus {\n                color: ", ";\n            }\n        "])), themeGet("colors.text2"), themeGet("colors.primary"));
}, function (_a) {
    var $variant = _a.$variant;
    return $variant === "link3" && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n            color: ", ";\n            &:hover,\n            &:focus {\n                color: ", ";\n            }\n        "], ["\n            color: ", ";\n            &:hover,\n            &:focus {\n                color: ", ";\n            }\n        "])), themeGet("colors.text3"), themeGet("colors.text2"));
}, function (props) {
    return props.theme.name === "dark" && css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n            ", "\n            ", "\n            ", "\n        "], ["\n            ", "\n            ", "\n            ", "\n        "])), props.$variant === "link1" && css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n                color: ", ";\n                &:hover,\n                &:focus {\n                    color: ", ";\n                }\n            "], ["\n                color: ", ";\n                &:hover,\n                &:focus {\n                    color: ", ";\n                }\n            "])), tinycolor(themeGet("colors.white")(props))
        .setAlpha(0.85)
        .toRgbString(), themeGet("colors.white")), props.$variant === "link2" && css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n                color: ", ";\n                &:hover,\n                &:focus {\n                    color: ", ";\n                }\n            "], ["\n                color: ", ";\n                &:hover,\n                &:focus {\n                    color: ", ";\n                }\n            "])), themeGet("colors.gray300"), themeGet("colors.white")), props.$variant === "link3" && css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n                &:hover,\n                &:focus {\n                    color: ", ";\n                }\n            "], ["\n                &:hover,\n                &:focus {\n                    color: ", ";\n                }\n            "])), themeGet("colors.white")));
}, space, colorStyles, typography, layout);
export var StyledLink = styled(function (_a) {
    var p = _a.p, px = _a.px, py = _a.py, pt = _a.pt, pb = _a.pb, pl = _a.pl, pr = _a.pr, m = _a.m, mx = _a.mx, my = _a.my, mt = _a.mt, mb = _a.mb, ml = _a.ml, mr = _a.mr, color = _a.color, fontFamily = _a.fontFamily, fontSize = _a.fontSize, fontWeight = _a.fontWeight, lineHeight = _a.lineHeight, letterSpacing = _a.letterSpacing, textAlign = _a.textAlign, width = _a.width, height = _a.height, display = _a.display, rest = __rest(_a, ["p", "px", "py", "pt", "pb", "pl", "pr", "m", "mx", "my", "mt", "mb", "ml", "mr", "color", "fontFamily", "fontSize", "fontWeight", "lineHeight", "letterSpacing", "textAlign", "width", "height", "display"]);
    return _jsx(Link, __assign({}, rest));
})(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n    ", ";\n"], ["\n    ", ";\n"])), anchorStyle);
export var StyledAnchor = styled(function (_a) {
    var p = _a.p, px = _a.px, py = _a.py, pt = _a.pt, pb = _a.pb, pl = _a.pl, pr = _a.pr, m = _a.m, mx = _a.mx, my = _a.my, mt = _a.mt, mb = _a.mb, ml = _a.ml, mr = _a.mr, color = _a.color, fontFamily = _a.fontFamily, fontSize = _a.fontSize, fontWeight = _a.fontWeight, lineHeight = _a.lineHeight, letterSpacing = _a.letterSpacing, textAlign = _a.textAlign, width = _a.width, height = _a.height, display = _a.display, rest = __rest(_a, ["p", "px", "py", "pt", "pb", "pl", "pr", "m", "mx", "my", "mt", "mb", "ml", "mr", "color", "fontFamily", "fontSize", "fontWeight", "lineHeight", "letterSpacing", "textAlign", "width", "height", "display"]);
    return _jsx("a", __assign({}, rest));
})(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n    ", ";\n"], ["\n    ", ";\n"])), anchorStyle);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10;
//# sourceMappingURL=style.js.map