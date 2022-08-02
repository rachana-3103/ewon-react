var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import styled, { themeGet, css, typography, } from "@doar/shared/styled";
export var StyledTitle = styled.h6(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    ", "\n    ", "\n\t", "\n"], ["\n    ", "\n    ", "\n\t", "\n"])), function (_a) {
    var $hasDesc = _a.$hasDesc;
    return !$hasDesc && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n            margin-bottom: 0;\n        "], ["\n            margin-bottom: 0;\n        "])));
}, function (_a) {
    var $hasDesc = _a.$hasDesc;
    return $hasDesc && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n            margin-bottom: 5px;\n        "], ["\n            margin-bottom: 5px;\n        "])));
}, typography);
export var StyledDesc = styled(function (_a) {
    var fontSize = _a.fontSize, rest = __rest(_a, ["fontSize"]);
    return (_jsx("p", __assign({}, rest)));
})(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    color: ", ";\n    font-size: 13px;\n    margin-bottom: 0px;\n    ", "\n"], ["\n    color: ", ";\n    font-size: 13px;\n    margin-bottom: 0px;\n    ", "\n"])), themeGet("colors.text3"), typography);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=style.js.map