var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css, themeGet } from "@doar/shared/styled";
export var StyledSpinner = styled.div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n    ", "\n    ", "\n\t", "\n\t", "\n\t", "\n\t", "\n    ", "\n\t", "\n"], ["\n    ", "\n    ", "\n\t", "\n\t", "\n\t", "\n\t", "\n    ", "\n\t", "\n"])), function (_a) {
    var $color = _a.$color;
    return !!$color && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n            color: ", ";\n        "], ["\n            color: ", ";\n        "])), themeGet("colors.".concat($color)));
}, function (_a) {
    var $size = _a.$size;
    return $size === "xs" && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n            width: 1rem;\n            height: 1rem;\n            border-width: 0.2em;\n        "], ["\n            width: 1rem;\n            height: 1rem;\n            border-width: 0.2em;\n        "])));
}, function (_a) {
    var $size = _a.$size;
    return $size === "sm" && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n            width: 1.5rem;\n            height: 1.5rem;\n            border-width: 0.2em;\n        "], ["\n            width: 1.5rem;\n            height: 1.5rem;\n            border-width: 0.2em;\n        "])));
}, function (_a) {
    var $size = _a.$size;
    return $size === "md" && css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n            width: 2rem;\n            height: 2rem;\n            border-width: 0.25em;\n        "], ["\n            width: 2rem;\n            height: 2rem;\n            border-width: 0.25em;\n        "])));
}, function (_a) {
    var $size = _a.$size;
    return $size === "lg" && css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n            width: 2.5rem;\n            height: 2.5rem;\n            border-width: 0.3em;\n        "], ["\n            width: 2.5rem;\n            height: 2.5rem;\n            border-width: 0.3em;\n        "])));
}, function (_a) {
    var $size = _a.$size;
    return $size === "xl" && css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n            width: 3rem;\n            height: 3rem;\n            border-width: 0.3em;\n        "], ["\n            width: 3rem;\n            height: 3rem;\n            border-width: 0.3em;\n        "])));
}, function (_a) {
    var $variant = _a.$variant;
    return $variant === "border" && css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n            @keyframes spinner-border {\n                to {\n                    transform: rotate(360deg);\n                }\n            }\n            display: inline-block;\n            vertical-align: text-bottom;\n            border-style: solid;\n            border-color: currentColor;\n            border-right-color: transparent;\n            border-radius: 50%;\n            animation: spinner-border 0.75s linear infinite;\n        "], ["\n            @keyframes spinner-border {\n                to {\n                    transform: rotate(360deg);\n                }\n            }\n            display: inline-block;\n            vertical-align: text-bottom;\n            border-style: solid;\n            border-color: currentColor;\n            border-right-color: transparent;\n            border-radius: 50%;\n            animation: spinner-border 0.75s linear infinite;\n        "])));
}, function (_a) {
    var $variant = _a.$variant;
    return $variant === "grow" && css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n            @keyframes spinner-grow {\n                0% {\n                    transform: scale(0);\n                }\n                50% {\n                    opacity: 1;\n                }\n            }\n            display: inline-block;\n            width: 2rem;\n            height: 2rem;\n            vertical-align: text-bottom;\n            background-color: currentColor;\n            border-radius: 50%;\n            opacity: 0;\n            animation: spinner-grow 0.75s linear infinite;\n        "], ["\n            @keyframes spinner-grow {\n                0% {\n                    transform: scale(0);\n                }\n                50% {\n                    opacity: 1;\n                }\n            }\n            display: inline-block;\n            width: 2rem;\n            height: 2rem;\n            vertical-align: text-bottom;\n            background-color: currentColor;\n            border-radius: 50%;\n            opacity: 0;\n            animation: spinner-grow 0.75s linear infinite;\n        "])));
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
//# sourceMappingURL=style.js.map