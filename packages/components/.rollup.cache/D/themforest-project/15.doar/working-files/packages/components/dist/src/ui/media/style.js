import { __assign, __makeTemplateObject, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import styled, { layout, space, flexbox, css, } from "@doar/shared/styled";
export var StyledMedia = styled(function (_a) {
    var m = _a.m, ml = _a.ml, mr = _a.mr, mt = _a.mt, mb = _a.mb, display = _a.display, alignItems = _a.alignItems, $el = _a.$el, props = __rest(_a, ["m", "ml", "mr", "mt", "mb", "display", "alignItems", "$el"]);
    return (_jsx("div", __assign({}, props), void 0));
})(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    ", "\n    ", ";\n    ", ";\n    ", ";\n"], ["\n    ",
    "\n    ", ";\n    ", ";\n    ", ";\n"])), function (_a) {
    var $el = _a.$el;
    return $el !== "ul" && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n            display: flex;\n            align-items: flex-start;\n        "], ["\n            display: flex;\n            align-items: flex-start;\n        "])));
}, layout, space, flexbox);
export var StyledMediaLeft = styled(function (_a) {
    var width = _a.width, mr = _a.mr, ml = _a.ml, props = __rest(_a, ["width", "mr", "ml"]);
    return (_jsx("div", __assign({}, props), void 0));
})(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    ", ";\n    ", ";\n    ", "\n    ", "\n    img {\n        max-width: 100%;\n    }\n"], ["\n    ", ";\n    ", ";\n    ",
    "\n    ",
    "\n    img {\n        max-width: 100%;\n    }\n"])), layout, space, function (props) {
    return props.$alignMent === "middle" && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n            align-self: center;\n        "], ["\n            align-self: center;\n        "])));
}, function (props) {
    return props.$alignMent === "end" && css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n            align-self: flex-end;\n        "], ["\n            align-self: flex-end;\n        "])));
});
export var StyledMediaBody = styled(function (_a) {
    var width = _a.width, m = _a.m, mr = _a.mr, ml = _a.ml, mt = _a.mt, mb = _a.mb, px = _a.px, props = __rest(_a, ["width", "m", "mr", "ml", "mt", "mb", "px"]);
    return _jsx("div", __assign({}, props), void 0);
})(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    ", ";\n    flex: 1;\n"], ["\n    ", ";\n    flex: 1;\n"])), space);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
