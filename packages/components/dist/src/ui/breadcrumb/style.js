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
import styled, { space, css, themeGet } from "@doar/shared/styled";
export var StyledNav = styled.nav(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
export var StyledBreadcrumb = styled(function (_a) {
    var mr = _a.mr, ml = _a.ml, mb = _a.mb, mt = _a.mt, props = __rest(_a, ["mr", "ml", "mb", "mt"]);
    return (_jsx("ol", __assign({}, props)));
})(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    display: flex;\n    flex-wrap: wrap;\n    padding: 0;\n    margin-bottom: 10px;\n    margin-top: 0;\n    list-style: none;\n    background-color: ", ";\n    border-radius: 0.25rem;\n    ", "\n    ", ";\n"], ["\n    display: flex;\n    flex-wrap: wrap;\n    padding: 0;\n    margin-bottom: 10px;\n    margin-top: 0;\n    list-style: none;\n    background-color: ", ";\n    border-radius: 0.25rem;\n    ", "\n    ", ";\n"])), themeGet("colors.gray200"), function (props) {
    return props.theme.name === "dark" && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n            background-color: transparent;\n        "], ["\n            background-color: transparent;\n        "])));
}, space);
export var StyledBreadcrumbItem = styled.li(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n    ", "\n    a {\n        color: ", ";\n        &:hover {\n            color: ", ";\n        }\n        ", "\n    }\n    &:not(:first-of-type) {\n        padding-left: 0.5rem;\n        &:before {\n            display: inline-block;\n            padding-right: 0.5rem;\n            color: ", ";\n            content: \"/\";\n            ", "\n        }\n    }\n"], ["\n    ", "\n    a {\n        color: ", ";\n        &:hover {\n            color: ", ";\n        }\n        ", "\n    }\n    &:not(:first-of-type) {\n        padding-left: 0.5rem;\n        &:before {\n            display: inline-block;\n            padding-right: 0.5rem;\n            color: ", ";\n            content: \"/\";\n            ", "\n        }\n    }\n"])), function (_a) {
    var $active = _a.$active;
    return $active && css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n            color: ", ";\n            ", "\n        "], ["\n            color: ", ";\n            ", "\n        "])), themeGet("colors.gray600"), function (props) {
        return props.theme.name === "dark" && css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n                    color: ", ";\n                "], ["\n                    color: ", ";\n                "])), themeGet("colors.primary"));
    });
}, themeGet("colors.primary"), themeGet("colors.primary"), function (props) {
    return props.theme.name === "dark" && css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n                color: ", ";\n            "], ["\n                color: ", ";\n            "])), themeGet("colors.gray600"));
}, themeGet("colors.gray600"), function (props) {
    return props.theme.name === "dark" && css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n                    color: ", ";\n                    font-weight: 400;\n                "], ["\n                    color: ", ";\n                    font-weight: 400;\n                "])), themeGet("colors.gray700"));
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
//# sourceMappingURL=style.js.map