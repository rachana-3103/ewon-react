import { __makeTemplateObject, __spreadArrays } from "tslib";
/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from "@doar/shared/styled";
import { InputStyles, SuccessInputStyles, WarningInputStyles, ErrorInputStyles, allowedProps, } from "../style";
export var StyledInput = styled("input").withConfig({
    shouldForwardProp: function (prop, defaultValidatorFn) {
        return !__spreadArrays(allowedProps).includes(prop) && defaultValidatorFn(prop);
    },
})(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n"], ["\n    ", ";\n    ",
    ";\n    ",
    ";\n    ",
    ";\n"])), InputStyles, function (_a) {
    var $state = _a.$state, $showState = _a.$showState, $showErrorOnly = _a.$showErrorOnly;
    return $state === "success" &&
        $showState &&
        !$showErrorOnly &&
        SuccessInputStyles;
}, function (_a) {
    var $state = _a.$state, $showState = _a.$showState, $showErrorOnly = _a.$showErrorOnly;
    return $state === "warning" &&
        $showState &&
        !$showErrorOnly &&
        WarningInputStyles;
}, function (_a) {
    var $state = _a.$state, $showState = _a.$showState, $showErrorOnly = _a.$showErrorOnly;
    return $state === "error" && $showState && $showErrorOnly && ErrorInputStyles;
});
var templateObject_1;
