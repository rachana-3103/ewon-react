import { __assign, __makeTemplateObject, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import styled, { themeGet, color as colorStyles, space, css, keyframes, } from "@doar/shared/styled";
export var StyledProgress = styled(function (_a) {
    var m = _a.m, mb = _a.mb, mt = _a.mt, ml = _a.ml, mr = _a.mr, rest = __rest(_a, ["m", "mb", "mt", "ml", "mr"]);
    return (_jsx("div", __assign({}, rest), void 0));
})(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    display: flex;\n    height: ", ";\n    overflow: hidden;\n    font-size: 0.65625rem;\n    background-color: #e3e7ed;\n    border-radius: ", ";\n    opacity: ", ";\n    ", "\n    ", ";\n"], ["\n    display: flex;\n    height: ", ";\n    overflow: hidden;\n    font-size: 0.65625rem;\n    background-color: #e3e7ed;\n    border-radius: ", ";\n    opacity: ", ";\n    ",
    "\n    ", ";\n"])), function (props) { return props.$height; }, themeGet("radii.rounded"), function (props) { return props.$opacity; }, function (props) {
    return props.theme.name === "dark" && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n            background-color: ", ";\n        "], ["\n            background-color: ", ";\n        "])), themeGet("colors.gray700"));
}, space);
var ProgressStrips = keyframes(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    from {\n        background-position: 1rem 0; \n    }\n    to {\n        background-position: 0 0; \n    } \n"], ["\n    from {\n        background-position: 1rem 0; \n    }\n    to {\n        background-position: 0 0; \n    } \n"])));
export var StyledProgressBar = styled(function (_a) {
    var bg = _a.bg, rest = __rest(_a, ["bg"]);
    return (_jsx("div", __assign({}, rest), void 0));
})(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    overflow: hidden;\n    color: #fff;\n    text-align: center;\n    white-space: nowrap;\n    transition: width 0.6s ease;\n    width: ", ";\n    ", "\n    ", "\n    ", "\n"], ["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    overflow: hidden;\n    color: #fff;\n    text-align: center;\n    white-space: nowrap;\n    transition: width 0.6s ease;\n    width: ", ";\n    ",
    "\n    ",
    "\n    ", "\n"])), function (_a) {
    var $width = _a.$width;
    return $width + "%";
}, function (_a) {
    var $striped = _a.$striped;
    return $striped && css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n            background-image: linear-gradient(\n                45deg,\n                rgba(255, 255, 255, 0.15) 25%,\n                transparent 25%,\n                transparent 50%,\n                rgba(255, 255, 255, 0.15) 50%,\n                rgba(255, 255, 255, 0.15) 75%,\n                transparent 75%,\n                transparent\n            );\n            background-size: 1rem 1rem;\n        "], ["\n            background-image: linear-gradient(\n                45deg,\n                rgba(255, 255, 255, 0.15) 25%,\n                transparent 25%,\n                transparent 50%,\n                rgba(255, 255, 255, 0.15) 50%,\n                rgba(255, 255, 255, 0.15) 75%,\n                transparent 75%,\n                transparent\n            );\n            background-size: 1rem 1rem;\n        "])));
}, function (_a) {
    var $animated = _a.$animated;
    return $animated && css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n            animation: ", " 1s linear infinite;\n        "], ["\n            animation: ", " 1s linear infinite;\n        "])), ProgressStrips);
}, colorStyles);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
