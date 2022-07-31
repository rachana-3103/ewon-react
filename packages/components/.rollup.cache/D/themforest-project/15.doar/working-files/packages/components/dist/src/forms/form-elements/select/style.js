import { __makeTemplateObject, __spreadArrays } from "tslib";
/* eslint-disable @typescript-eslint/no-explicit-any */
import styled, { themeGet } from "@doar/shared/styled";
import selectIcon from "../../../static/select.svg";
import { InputStyles, SuccessInputStyles, WarningInputStyles, ErrorInputStyles, allowedProps, } from "../style";
export var StyledSelect = styled("select").withConfig({
    shouldForwardProp: function (prop, defaultValidatorFn) {
        return !__spreadArrays(allowedProps).includes(prop) && defaultValidatorFn(prop);
    },
})(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    border-color: ", ";\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    background: #fff url(", ") no-repeat right 0.625rem center/8px 10px;\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n"], ["\n    border-color: ", ";\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    background: #fff url(", ") no-repeat right 0.625rem center/8px 10px;\n    ", ";\n    ",
    ";\n    ",
    ";\n    ",
    ";\n"])), themeGet("colors.text4"), selectIcon, InputStyles, function (_a) {
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
