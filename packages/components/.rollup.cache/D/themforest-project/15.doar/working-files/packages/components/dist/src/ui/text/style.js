import { __makeTemplateObject, __spreadArrays } from "tslib";
import styled, { space, color as colorStyles, typography, layout, css, } from "@doar/shared/styled";
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
    "display",
];
export var StyledText = styled("p").withConfig({
    shouldForwardProp: function (prop, defaultValidatorFn) {
        return !__spreadArrays(props).includes(prop) && defaultValidatorFn(prop);
    },
})(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    ", "\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n"], ["\n    ",
    "\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n"])), function (_a) {
    var $tt = _a.$tt;
    return $tt && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n            text-transform: ", ";\n        "], ["\n            text-transform: ", ";\n        "])), $tt);
}, space, colorStyles, typography, layout);
var templateObject_1, templateObject_2;
