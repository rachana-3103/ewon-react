import { __assign, __makeTemplateObject, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import styled, { themeGet, css, typography, } from "@doar/shared/styled";
export var StyledTitle = styled.h6(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    ", "\n    ", "\n\t", "\n"], ["\n    ",
    "\n    ",
    "\n\t", "\n"])), function (_a) {
    var $hasDesc = _a.$hasDesc;
    return !$hasDesc && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n            margin-bottom: 0;\n        "], ["\n            margin-bottom: 0;\n        "])));
}, function (_a) {
    var $hasDesc = _a.$hasDesc;
    return $hasDesc && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n            margin-bottom: 5px;\n        "], ["\n            margin-bottom: 5px;\n        "])));
}, typography);
export var StyledDesc = styled(function (_a) {
    var fontSize = _a.fontSize, rest = __rest(_a, ["fontSize"]);
    return (_jsx("p", __assign({}, rest), void 0));
})(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    color: ", ";\n    font-size: 13px;\n    margin-bottom: 0px;\n    ", "\n"], ["\n    color: ", ";\n    font-size: 13px;\n    margin-bottom: 0px;\n    ", "\n"])), themeGet("colors.text3"), typography);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
