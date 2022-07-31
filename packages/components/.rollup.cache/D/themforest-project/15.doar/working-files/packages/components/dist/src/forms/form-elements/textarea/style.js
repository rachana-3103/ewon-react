import { __makeTemplateObject, __spreadArrays } from "tslib";
/* eslint-disable @typescript-eslint/no-explicit-any */
import styled, { device } from "@doar/shared/styled";
import { InputStyles, SuccessInputStyles, WarningInputStyles, ErrorInputStyles, allowedProps, } from "../style";
export var StyledTextarea = styled("textarea").withConfig({
    shouldForwardProp: function (prop, defaultValidatorFn) {
        return !__spreadArrays(allowedProps).includes(prop) && defaultValidatorFn(prop);
    },
})(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    height: auto;\n    min-height: 80px;\n    ", " {\n        min-height: 100px;\n    }\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n"], ["\n    height: auto;\n    min-height: 80px;\n    ", " {\n        min-height: 100px;\n    }\n    ", ";\n    ",
    ";\n    ",
    ";\n    ",
    ";\n"])), device.large, InputStyles, function (_a) {
    var $state = _a.$state, $showState = _a.$showState, $showErrorOnly = _a.$showErrorOnly;
    return $state === "success" &&
        !!$showState &&
        !$showErrorOnly &&
        SuccessInputStyles;
}, function (_a) {
    var $state = _a.$state, $showState = _a.$showState, $showErrorOnly = _a.$showErrorOnly;
    return $state === "warning" &&
        !!$showState &&
        !$showErrorOnly &&
        WarningInputStyles;
}, function (_a) {
    var $state = _a.$state, $showState = _a.$showState, $showErrorOnly = _a.$showErrorOnly;
    return $state === "error" &&
        !!$showState &&
        !!$showErrorOnly &&
        ErrorInputStyles;
});
var templateObject_1;
