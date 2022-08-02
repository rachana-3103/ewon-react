var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
/* eslint-disable jsx-a11y/heading-has-content */
import styled, { space, color as colorStyles, typography, css, } from "@doar/shared/styled";
var props = [
    "p",
    "px",
    "py",
    "pt",
    "pb",
    "pl",
    "pr",
    "m",
    "mx",
    "my",
    "mt",
    "mb",
    "ml",
    "mr",
    "color",
    "fontFamily",
    "fontSize",
    "fontWeight",
    "lineHeight",
    "letterSpacing",
    "textAlign",
];
export var StyledHeading = styled("h6").withConfig({
    shouldForwardProp: function (prop, defaultValidatorFn) {
        return !__spreadArray([], __read(props), false).includes(prop) && defaultValidatorFn(prop);
    },
})(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    ", "\n    ", ";\n    ", ";\n    ", ";\n"], ["\n    ", "\n    ", ";\n    ", ";\n    ", ";\n"])), function (_a) {
    var $tt = _a.$tt;
    return $tt && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n            text-transform: ", ";\n        "], ["\n            text-transform: ", ";\n        "])), $tt);
}, space, colorStyles, typography);
var templateObject_1, templateObject_2;
//# sourceMappingURL=style.js.map