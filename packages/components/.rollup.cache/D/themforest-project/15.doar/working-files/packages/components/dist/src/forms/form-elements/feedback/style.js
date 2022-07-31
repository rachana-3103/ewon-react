import { __makeTemplateObject } from "tslib";
import styled, { themeGet, css } from "@doar/shared/styled";
export var StyledFeedback = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    width: 100%;\n    margin-top: 0.25rem;\n    font-size: 80%;\n    ", "\n    ", ";\n    ", ";\n\n    ", ";\n"], ["\n    width: 100%;\n    margin-top: 0.25rem;\n    font-size: 80%;\n    ",
    "\n    ",
    ";\n    ",
    ";\n\n    ",
    ";\n"])), function (_a) {
    var $state = _a.$state, $showErrorOnly = _a.$showErrorOnly;
    return $state !== "error" &&
        $showErrorOnly && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n            display: none;\n        "], ["\n            display: none;\n        "])));
}, function (_a) {
    var $state = _a.$state, $showState = _a.$showState, $showErrorOnly = _a.$showErrorOnly;
    return $state === "success" &&
        $showState &&
        !$showErrorOnly && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n            color: ", ";\n        "], ["\n            color: ", ";\n        "])), themeGet("colors.success"));
}, function (_a) {
    var $state = _a.$state, $showState = _a.$showState, $showErrorOnly = _a.$showErrorOnly;
    return $state === "warning" &&
        $showState &&
        !$showErrorOnly && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n            color: ", ";\n        "], ["\n            color: ", ";\n        "])), themeGet("colors.warning"));
}, function (_a) {
    var $state = _a.$state, $showState = _a.$showState, $showErrorOnly = _a.$showErrorOnly;
    return $state === "error" &&
        $showState &&
        $showErrorOnly && css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n            color: ", ";\n        "], ["\n            color: ", ";\n        "])), themeGet("colors.danger"));
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
