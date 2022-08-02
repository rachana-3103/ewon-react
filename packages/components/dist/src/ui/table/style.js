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
import styled, { space, css, themeGet, border as borderStyles, } from "@doar/shared/styled";
import tinycolor2 from "tinycolor2";
export var StyledTableResponsive = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n"], ["\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n"])));
export var StyledTable = styled(function (_a) {
    var border = _a.border, borderBottomWidth = _a.borderBottomWidth, m = _a.m, ml = _a.ml, mr = _a.mr, mt = _a.mt, mb = _a.mb, p = _a.p, pl = _a.pl, pr = _a.pr, pt = _a.pt, pb = _a.pb, props = __rest(_a, ["border", "borderBottomWidth", "m", "ml", "mr", "mt", "mb", "p", "pl", "pr", "pt", "pb"]);
    return _jsx("table", __assign({}, props));
})(templateObject_46 || (templateObject_46 = __makeTemplateObject(["\n    width: 100%;\n    margin-bottom: 1rem;\n    color: ", ";\n    ", "\n    ", ";\n    ", ";\n\n    th,\n    td {\n        white-space: nowrap;\n        padding: 8px 10px;\n        line-height: 1.5;\n        border-top: 1px solid ", ";\n        vertical-align: top;\n    }\n    thead th {\n        border-bottom-width: 0;\n        vertical-align: bottom;\n    }\n    thead th,\n    tbody th {\n        font-weight: 500;\n    }\n    thead {\n        ", "\n\n        ", "\n\n        ", "\n\n        ", "\n        ", "\n        ", "\n        ", "\n        ", "\n    }\n\n    ", "\n    ", "\n\n    ", "\n    ", "\n    ", "\n\n    ", "\n    ", "\n    ", "\n\n\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n\n    ", "\n\n    ", "\n            ", "\n\n\n\n    ", "\n    \n    ", "\n    ", "\n\n\n    ", "\n        \n    ", "\n    ", "\n\n\n\n\n    ", "\n            \n    ", "\n    ", "\n\n\n\n\n    ", "\n                \n    ", "\n    ", "\n\n\n    ", "\n                    \n    ", "\n    ", "\n\n    ", "\n    \n    tr th, tr td {\n        ", "\n    }\n    ", "\n"], ["\n    width: 100%;\n    margin-bottom: 1rem;\n    color: ", ";\n    ", "\n    ", ";\n    ", ";\n\n    th,\n    td {\n        white-space: nowrap;\n        padding: 8px 10px;\n        line-height: 1.5;\n        border-top: 1px solid ", ";\n        vertical-align: top;\n    }\n    thead th {\n        border-bottom-width: 0;\n        vertical-align: bottom;\n    }\n    thead th,\n    tbody th {\n        font-weight: 500;\n    }\n    thead {\n        ", "\n\n        ", "\n\n        ", "\n\n        ", "\n        ", "\n        ", "\n        ", "\n        ", "\n    }\n\n    ", "\n    ", "\n\n    ", "\n    ", "\n    ", "\n\n    ", "\n    ", "\n    ", "\n\n\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n\n    ", "\n\n    ", "\n            ", "\n\n\n\n    ", "\n    \n    ", "\n    ", "\n\n\n    ", "\n        \n    ", "\n    ", "\n\n\n\n\n    ", "\n            \n    ", "\n    ", "\n\n\n\n\n    ", "\n                \n    ", "\n    ", "\n\n\n    ", "\n                    \n    ", "\n    ", "\n\n    ", "\n    \n    tr th, tr td {\n        ", "\n    }\n    ", "\n"])), themeGet("colors.text"), function (_a) {
    var borderBottomWidth = _a.borderBottomWidth;
    return Boolean(borderBottomWidth) && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n            border-bottom-style: solid;\n            border-bottom-color: ", ";\n        "], ["\n            border-bottom-style: solid;\n            border-bottom-color: ", ";\n        "])), themeGet("colors.border"));
}, space, borderStyles, themeGet("colors.border"), function (props) {
    return props.$theadColor === "primary" && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n                background-color: ", ";\n                th {\n                    border-top-width: 0px;\n                    color: #fff;\n                }\n            "], ["\n                background-color: ", ";\n                th {\n                    border-top-width: 0px;\n                    color: #fff;\n                }\n            "])), themeGet("colors.primary"));
}, function (props) {
    return props.$theadColor === "secondary" && css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n                background-color: ", ";\n                th {\n                    border-top-width: 0px;\n                    color: #fff;\n                }\n            "], ["\n                background-color: ", ";\n                th {\n                    border-top-width: 0px;\n                    color: #fff;\n                }\n            "])), themeGet("colors.gray600"));
}, function (props) {
    return props.$theadColor === "success" && css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n                background-color: ", ";\n                th {\n                    border-top-width: 0px;\n                    color: #fff;\n                }\n            "], ["\n                background-color: ", ";\n                th {\n                    border-top-width: 0px;\n                    color: #fff;\n                }\n            "])), themeGet("colors.success"));
}, function (props) {
    return props.$theadColor === "danger" && css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n                background-color: ", ";\n                th {\n                    border-top-width: 0px;\n                    color: #fff;\n                }\n            "], ["\n                background-color: ", ";\n                th {\n                    border-top-width: 0px;\n                    color: #fff;\n                }\n            "])), themeGet("colors.danger"));
}, function (props) {
    return props.$theadColor === "warning" && css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n                background-color: ", ";\n                th {\n                    border-top-width: 0px;\n                    color: #fff;\n                }\n            "], ["\n                background-color: ", ";\n                th {\n                    border-top-width: 0px;\n                    color: #fff;\n                }\n            "])), themeGet("colors.warning"));
}, function (props) {
    return props.$theadColor === "info" && css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n                background-color: ", ";\n                th {\n                    border-top-width: 0px;\n                    color: #fff;\n                }\n            "], ["\n                background-color: ", ";\n                th {\n                    border-top-width: 0px;\n                    color: #fff;\n                }\n            "])), themeGet("colors.info"));
}, function (props) {
    return props.$theadColor === "light" && css(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n                background-color: ", ";\n                th {\n                    color: ", ";\n                    border-top-color: ", ";\n                }\n            "], ["\n                background-color: ", ";\n                th {\n                    color: ", ";\n                    border-top-color: ", ";\n                }\n            "])), themeGet("colors.border"), themeGet("colors.gray700"), themeGet("colors.border"));
}, function (props) {
    return props.$theadColor === "dark" && css(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n                background-color: ", ";\n                th {\n                    color: #fff;\n                    border-top-color: ", ";\n                }\n            "], ["\n                background-color: ", ";\n                th {\n                    color: #fff;\n                    border-top-color: ", ";\n                }\n            "])), themeGet("colors.dark"), themeGet("colors.bayoux"));
}, function (props) {
    return props.$striped === true && css(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n            tbody {\n                tr:nth-of-type(2n + 1) {\n                    background-color: ", ";\n                }\n            }\n        "], ["\n            tbody {\n                tr:nth-of-type(2n + 1) {\n                    background-color: ", ";\n                }\n            }\n        "])), themeGet("colors.athens3"));
}, function (props) {
    return props.theme.name === "dark" &&
        props.$striped === true && css(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n            tbody {\n                tr:nth-of-type(2n + 1) {\n                    background-color: ", ";\n                }\n                th,\n                td {\n                    border-top: 0;\n                }\n            }\n        "], ["\n            tbody {\n                tr:nth-of-type(2n + 1) {\n                    background-color: ", ";\n                }\n                th,\n                td {\n                    border-top: 0;\n                }\n            }\n        "])), themeGet("colors.darklighten5"));
}, function (props) {
    return props.$bordered === true && css(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n            th,\n            td {\n                border: 1px solid ", ";\n            }\n        "], ["\n            th,\n            td {\n                border: 1px solid ", ";\n            }\n        "])), themeGet("colors.border"));
}, function (props) {
    return props.$hover === true && css(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n            tbody tr {\n                &:hover {\n                    background-color: ", ";\n                    color: ", ";\n                }\n            }\n        "], ["\n            tbody tr {\n                &:hover {\n                    background-color: ", ";\n                    color: ", ";\n                }\n            }\n        "])), themeGet("colors.athens"), themeGet("colors.text"));
}, function (props) {
    return props.$compact === true && css(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n            th,\n            td {\n                padding: 5px 10px;\n            }\n        "], ["\n            th,\n            td {\n                padding: 5px 10px;\n            }\n        "])));
}, function (props) {
    return props.$color === "primary" && css(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n            thead {\n                color: #fff;\n                background-color: ", ";\n                th {\n                    border-top-width: 0;\n                }\n            }\n            tbody {\n                tr {\n                    background-color: ", ";\n                }\n                tr:first-child {\n                    td,\n                    th {\n                        border-top-width: 0;\n                    }\n                }\n                tr {\n                    th,\n                    td {\n                        border-top-color: rgba(255, 255, 255, 0.45);\n                    }\n                }\n            }\n        "], ["\n            thead {\n                color: #fff;\n                background-color: ", ";\n                th {\n                    border-top-width: 0;\n                }\n            }\n            tbody {\n                tr {\n                    background-color: ", ";\n                }\n                tr:first-child {\n                    td,\n                    th {\n                        border-top-width: 0;\n                    }\n                }\n                tr {\n                    th,\n                    td {\n                        border-top-color: rgba(255, 255, 255, 0.45);\n                    }\n                }\n            }\n        "])), themeGet("colors.primary"), tinycolor2(themeGet("colors.primary")(props))
        .lighten(48)
        .toString());
}, function (props) {
    return props.$color === "primary" &&
        props.$striped === true && css(templateObject_17 || (templateObject_17 = __makeTemplateObject(["\n            tbody {\n                tr {\n                    &:nth-of-type(2n + 1) {\n                        background-color: ", ";\n                    }\n                }\n            }\n        "], ["\n            tbody {\n                tr {\n                    &:nth-of-type(2n + 1) {\n                        background-color: ", ";\n                    }\n                }\n            }\n        "])), tinycolor2(themeGet("colors.primary")(props))
        .lighten(48)
        .darken(3)
        .toString());
}, function (props) {
    return props.$color === "primary" &&
        props.$hover === true && css(templateObject_18 || (templateObject_18 = __makeTemplateObject(["\n            tbody {\n                tr {\n                    &:hover {\n                        background-color: ", ";\n                    }\n                }\n            }\n        "], ["\n            tbody {\n                tr {\n                    &:hover {\n                        background-color: ", ";\n                    }\n                }\n            }\n        "])), tinycolor2(themeGet("colors.primary")(props))
        .lighten(48)
        .darken(6)
        .toString());
}, function (_a) {
    var $color = _a.$color;
    return $color === "secondary" && css(templateObject_20 || (templateObject_20 = __makeTemplateObject(["\n            thead {\n                color: #fff;\n                background-color: ", ";\n                th {\n                    border-top-width: 0;\n                }\n            }\n            tbody {\n                tr {\n                    background-color: ", ";\n                }\n                tr:first-child {\n                    td,\n                    th {\n                        border-top-width: 0;\n                    }\n                }\n                tr {\n                    th,\n                    td {\n                        border-top-color: rgba(255, 255, 255, 0.45);\n                    }\n                }\n            }\n            ", "\n        "], ["\n            thead {\n                color: #fff;\n                background-color: ", ";\n                th {\n                    border-top-width: 0;\n                }\n            }\n            tbody {\n                tr {\n                    background-color: ", ";\n                }\n                tr:first-child {\n                    td,\n                    th {\n                        border-top-width: 0;\n                    }\n                }\n                tr {\n                    th,\n                    td {\n                        border-top-color: rgba(255, 255, 255, 0.45);\n                    }\n                }\n            }\n            ", "\n        "])), themeGet("colors.gray600"), themeGet("colors.gray200"), function (props) {
        return props.theme.name === "dark" && css(templateObject_19 || (templateObject_19 = __makeTemplateObject(["\n                    tbody {\n                        tr {\n                            background-color: ", ";\n                        }\n                    }\n                "], ["\n                    tbody {\n                        tr {\n                            background-color: ", ";\n                        }\n                    }\n                "])), themeGet("colors.gray900"));
    });
}, function (props) {
    return props.$color === "secondary" &&
        props.$striped === true && css(templateObject_21 || (templateObject_21 = __makeTemplateObject(["\n            tbody {\n                tr {\n                    &:nth-of-type(2n + 1) {\n                        background-color: ", ";\n                    }\n                }\n            }\n        "], ["\n            tbody {\n                tr {\n                    &:nth-of-type(2n + 1) {\n                        background-color: ", ";\n                    }\n                }\n            }\n        "])), tinycolor2(themeGet("colors.gray200")(props))
        .darken(3)
        .toString());
}, function (props) {
    return props.theme.name === "dark" &&
        props.$color === "secondary" &&
        props.$striped === true && css(templateObject_22 || (templateObject_22 = __makeTemplateObject(["\n            tbody {\n                tr {\n                    &:nth-of-type(2n + 1) {\n                        background-color: ", ";\n                    }\n                }\n            }\n        "], ["\n            tbody {\n                tr {\n                    &:nth-of-type(2n + 1) {\n                        background-color: ", ";\n                    }\n                }\n            }\n        "])), themeGet("colors.gray700"));
}, function (props) {
    return props.$color === "secondary" &&
        props.$hover === true && css(templateObject_23 || (templateObject_23 = __makeTemplateObject(["\n            tbody {\n                tr {\n                    &:hover {\n                        background-color: ", ";\n                        th,\n                        td {\n                            color: #fff;\n                        }\n                    }\n                }\n            }\n        "], ["\n            tbody {\n                tr {\n                    &:hover {\n                        background-color: ", ";\n                        th,\n                        td {\n                            color: #fff;\n                        }\n                    }\n                }\n            }\n        "])), tinycolor2(themeGet("colors.gray200")(props))
        .darken(6)
        .toString());
}, function (props) {
    return props.theme.name === "dark" &&
        props.$color === "secondary" &&
        props.$hover === true && css(templateObject_24 || (templateObject_24 = __makeTemplateObject(["\n            tbody {\n                tr {\n                    &:hover {\n                        background-color: ", ";\n                    }\n                }\n            }\n        "], ["\n            tbody {\n                tr {\n                    &:hover {\n                        background-color: ", ";\n                    }\n                }\n            }\n        "])), themeGet("colors.darklighten8"));
}, function (props) {
    return props.$color === "success" && css(templateObject_25 || (templateObject_25 = __makeTemplateObject(["\n            thead {\n                color: #fff;\n                background-color: ", ";\n                th {\n                    border-top-width: 0;\n                }\n            }\n            tbody {\n                tr {\n                    background-color: ", ";\n                }\n                tr:first-child {\n                    td,\n                    th {\n                        border-top-width: 0;\n                    }\n                }\n                tr {\n                    th,\n                    td {\n                        border-top-color: rgba(255, 255, 255, 0.45);\n                    }\n                }\n            }\n        "], ["\n            thead {\n                color: #fff;\n                background-color: ", ";\n                th {\n                    border-top-width: 0;\n                }\n            }\n            tbody {\n                tr {\n                    background-color: ", ";\n                }\n                tr:first-child {\n                    td,\n                    th {\n                        border-top-width: 0;\n                    }\n                }\n                tr {\n                    th,\n                    td {\n                        border-top-color: rgba(255, 255, 255, 0.45);\n                    }\n                }\n            }\n        "])), themeGet("colors.success"), tinycolor2(themeGet("colors.success")(props))
        .lighten(56)
        .toString());
}, function (props) {
    return props.$color === "success" &&
        props.$striped === true && css(templateObject_26 || (templateObject_26 = __makeTemplateObject(["\n            tbody {\n                tr {\n                    &:nth-of-type(2n + 1) {\n                        background-color: ", ";\n                    }\n                }\n            }\n        "], ["\n            tbody {\n                tr {\n                    &:nth-of-type(2n + 1) {\n                        background-color: ", ";\n                    }\n                }\n            }\n        "])), tinycolor2(themeGet("colors.success")(props))
        .lighten(56)
        .darken(3)
        .toString());
}, function (props) {
    return props.$color === "success" &&
        props.$hover === true && css(templateObject_27 || (templateObject_27 = __makeTemplateObject(["\n            tbody {\n                tr {\n                    &:hover {\n                        background-color: ", ";\n                    }\n                }\n            }\n        "], ["\n            tbody {\n                tr {\n                    &:hover {\n                        background-color: ", ";\n                    }\n                }\n            }\n        "])), tinycolor2(themeGet("colors.success")(props))
        .lighten(56)
        .darken(6)
        .toString());
}, function (props) {
    return props.$color === "danger" && css(templateObject_28 || (templateObject_28 = __makeTemplateObject(["\n            thead {\n                color: #fff;\n                background-color: ", ";\n                th {\n                    border-top-width: 0;\n                }\n            }\n            tbody {\n                tr {\n                    background-color: ", ";\n                }\n                tr:first-child {\n                    td,\n                    th {\n                        border-top-width: 0;\n                    }\n                }\n                tr {\n                    th,\n                    td {\n                        border-top-color: rgba(255, 255, 255, 0.45);\n                    }\n                }\n            }\n        "], ["\n            thead {\n                color: #fff;\n                background-color: ", ";\n                th {\n                    border-top-width: 0;\n                }\n            }\n            tbody {\n                tr {\n                    background-color: ", ";\n                }\n                tr:first-child {\n                    td,\n                    th {\n                        border-top-width: 0;\n                    }\n                }\n                tr {\n                    th,\n                    td {\n                        border-top-color: rgba(255, 255, 255, 0.45);\n                    }\n                }\n            }\n        "])), themeGet("colors.danger"), tinycolor2(themeGet("colors.danger")(props))
        .lighten(45)
        .toString());
}, function (props) {
    return props.$color === "danger" &&
        props.$striped === true && css(templateObject_29 || (templateObject_29 = __makeTemplateObject(["\n            tbody {\n                tr {\n                    &:nth-of-type(2n + 1) {\n                        background-color: ", ";\n                    }\n                }\n            }\n        "], ["\n            tbody {\n                tr {\n                    &:nth-of-type(2n + 1) {\n                        background-color: ", ";\n                    }\n                }\n            }\n        "])), tinycolor2(themeGet("colors.danger")(props))
        .lighten(45)
        .darken(3)
        .toString());
}, function (props) {
    return props.$color === "danger" &&
        props.$hover === true && css(templateObject_30 || (templateObject_30 = __makeTemplateObject(["\n            tbody {\n                tr {\n                    &:hover {\n                        background-color: ", ";\n                    }\n                }\n            }\n        "], ["\n            tbody {\n                tr {\n                    &:hover {\n                        background-color: ", ";\n                    }\n                }\n            }\n        "])), tinycolor2(themeGet("colors.danger")(props))
        .lighten(45)
        .darken(6)
        .toString());
}, function (props) {
    return props.$color === "warning" && css(templateObject_31 || (templateObject_31 = __makeTemplateObject(["\n            thead {\n                color: #fff;\n                background-color: ", ";\n                th {\n                    border-top-width: 0;\n                }\n            }\n            tbody {\n                tr {\n                    background-color: ", ";\n                }\n                tr:first-child {\n                    td,\n                    th {\n                        border-top-width: 0;\n                    }\n                }\n                tr {\n                    th,\n                    td {\n                        border-top-color: rgba(255, 255, 255, 0.45);\n                    }\n                }\n            }\n        "], ["\n            thead {\n                color: #fff;\n                background-color: ", ";\n                th {\n                    border-top-width: 0;\n                }\n            }\n            tbody {\n                tr {\n                    background-color: ", ";\n                }\n                tr:first-child {\n                    td,\n                    th {\n                        border-top-width: 0;\n                    }\n                }\n                tr {\n                    th,\n                    td {\n                        border-top-color: rgba(255, 255, 255, 0.45);\n                    }\n                }\n            }\n        "])), themeGet("colors.warning"), tinycolor2(themeGet("colors.orange")(props))
        .lighten(45)
        .toString());
}, function (props) {
    return props.$color === "warning" &&
        props.$striped === true && css(templateObject_32 || (templateObject_32 = __makeTemplateObject(["\n            tbody {\n                tr {\n                    &:nth-of-type(2n + 1) {\n                        background-color: ", ";\n                    }\n                }\n            }\n        "], ["\n            tbody {\n                tr {\n                    &:nth-of-type(2n + 1) {\n                        background-color: ", ";\n                    }\n                }\n            }\n        "])), tinycolor2(themeGet("colors.orange")(props))
        .lighten(45)
        .darken(3)
        .toString());
}, function (props) {
    return props.$color === "warning" &&
        props.$hover === true && css(templateObject_33 || (templateObject_33 = __makeTemplateObject(["\n            tbody {\n                tr {\n                    &:hover {\n                        background-color: ", ";\n                    }\n                }\n            }\n        "], ["\n            tbody {\n                tr {\n                    &:hover {\n                        background-color: ", ";\n                    }\n                }\n            }\n        "])), tinycolor2(themeGet("colors.orange")(props))
        .lighten(45)
        .darken(6)
        .toString());
}, function (props) {
    return props.$color === "info" && css(templateObject_34 || (templateObject_34 = __makeTemplateObject(["\n            thead {\n                color: #fff;\n                background-color: ", ";\n                th {\n                    border-top-width: 0;\n                }\n            }\n            tbody {\n                tr {\n                    background-color: ", ";\n                }\n                tr:first-child {\n                    td,\n                    th {\n                        border-top-width: 0;\n                    }\n                }\n                tr {\n                    th,\n                    td {\n                        border-top-color: rgba(255, 255, 255, 0.45);\n                    }\n                }\n            }\n        "], ["\n            thead {\n                color: #fff;\n                background-color: ", ";\n                th {\n                    border-top-width: 0;\n                }\n            }\n            tbody {\n                tr {\n                    background-color: ", ";\n                }\n                tr:first-child {\n                    td,\n                    th {\n                        border-top-width: 0;\n                    }\n                }\n                tr {\n                    th,\n                    td {\n                        border-top-color: rgba(255, 255, 255, 0.45);\n                    }\n                }\n            }\n        "])), themeGet("colors.cyan"), tinycolor2(themeGet("colors.cyan")(props))
        .lighten(55)
        .toString());
}, function (props) {
    return props.$color === "info" &&
        props.$striped === true && css(templateObject_35 || (templateObject_35 = __makeTemplateObject(["\n            tbody {\n                tr {\n                    &:nth-of-type(2n + 1) {\n                        background-color: ", ";\n                    }\n                }\n            }\n        "], ["\n            tbody {\n                tr {\n                    &:nth-of-type(2n + 1) {\n                        background-color: ", ";\n                    }\n                }\n            }\n        "])), tinycolor2(themeGet("colors.cyan")(props))
        .lighten(55)
        .darken(3)
        .toString());
}, function (props) {
    return props.$color === "info" &&
        props.$hover === true && css(templateObject_36 || (templateObject_36 = __makeTemplateObject(["\n            tbody {\n                tr {\n                    &:hover {\n                        background-color: ", ";\n                    }\n                }\n            }\n        "], ["\n            tbody {\n                tr {\n                    &:hover {\n                        background-color: ", ";\n                    }\n                }\n            }\n        "])), tinycolor2(themeGet("colors.cyan")(props))
        .lighten(55)
        .darken(6)
        .toString());
}, function (props) {
    return props.$color === "light" && css(templateObject_37 || (templateObject_37 = __makeTemplateObject(["\n            thead {\n                color: ", ";\n                background-color: ", ";\n                th {\n                    border-top-width: 0;\n                }\n            }\n            tbody {\n                tr {\n                    background-color: ", ";\n                }\n                tr:first-child {\n                    td,\n                    th {\n                        border-top-width: 0;\n                    }\n                }\n                tr {\n                    th,\n                    td {\n                        border-top-color: rgba(255, 255, 255, 0.45);\n                    }\n                }\n            }\n        "], ["\n            thead {\n                color: ", ";\n                background-color: ", ";\n                th {\n                    border-top-width: 0;\n                }\n            }\n            tbody {\n                tr {\n                    background-color: ", ";\n                }\n                tr:first-child {\n                    td,\n                    th {\n                        border-top-width: 0;\n                    }\n                }\n                tr {\n                    th,\n                    td {\n                        border-top-color: rgba(255, 255, 255, 0.45);\n                    }\n                }\n            }\n        "])), themeGet("colors.text"), themeGet("colors.gray200"), tinycolor2(themeGet("colors.gray200")(props))
        .lighten(7)
        .toString());
}, function (props) {
    return props.$color === "light" &&
        props.$striped === true && css(templateObject_38 || (templateObject_38 = __makeTemplateObject(["\n            tbody {\n                tr {\n                    &:nth-of-type(2n + 1) {\n                        background-color: ", ";\n                    }\n                }\n            }\n        "], ["\n            tbody {\n                tr {\n                    &:nth-of-type(2n + 1) {\n                        background-color: ", ";\n                    }\n                }\n            }\n        "])), tinycolor2(themeGet("colors.gray200")(props))
        .lighten(7)
        .darken(3)
        .toString());
}, function (props) {
    return props.$color === "light" &&
        props.$hover === true && css(templateObject_39 || (templateObject_39 = __makeTemplateObject(["\n            tbody {\n                tr {\n                    &:hover {\n                        background-color: ", ";\n                    }\n                }\n            }\n        "], ["\n            tbody {\n                tr {\n                    &:hover {\n                        background-color: ", ";\n                    }\n                }\n            }\n        "])), tinycolor2(themeGet("colors.gray200")(props))
        .lighten(7)
        .darken(6)
        .toString());
}, function (props) {
    return props.$color === "dark" && css(templateObject_40 || (templateObject_40 = __makeTemplateObject(["\n            thead {\n                color: #fff;\n                background-color: ", ";\n                th {\n                    border-top-width: 0;\n                }\n            }\n            tbody {\n                tr {\n                    background-color: ", ";\n                }\n                tr:first-child {\n                    td,\n                    th {\n                        border-top-width: 0;\n                    }\n                }\n                tr {\n                    th,\n                    td {\n                        border-top-color: rgba(255, 255, 255, 0.45);\n                    }\n                }\n            }\n        "], ["\n            thead {\n                color: #fff;\n                background-color: ", ";\n                th {\n                    border-top-width: 0;\n                }\n            }\n            tbody {\n                tr {\n                    background-color: ", ";\n                }\n                tr:first-child {\n                    td,\n                    th {\n                        border-top-width: 0;\n                    }\n                }\n                tr {\n                    th,\n                    td {\n                        border-top-color: rgba(255, 255, 255, 0.45);\n                    }\n                }\n            }\n        "])), themeGet("colors.gray800"), themeGet("colors.gray200"));
}, function (props) {
    return props.$color === "dark" &&
        props.$striped === true && css(templateObject_41 || (templateObject_41 = __makeTemplateObject(["\n            tbody {\n                tr {\n                    &:nth-of-type(2n + 1) {\n                        background-color: ", ";\n                    }\n                }\n            }\n        "], ["\n            tbody {\n                tr {\n                    &:nth-of-type(2n + 1) {\n                        background-color: ", ";\n                    }\n                }\n            }\n        "])), tinycolor2(themeGet("colors.gray200")(props))
        .darken(3)
        .toString());
}, function (props) {
    return props.$color === "dark" &&
        props.$hover === true && css(templateObject_42 || (templateObject_42 = __makeTemplateObject(["\n            tbody {\n                tr {\n                    &:hover {\n                        background-color: ", ";\n                    }\n                }\n            }\n        "], ["\n            tbody {\n                tr {\n                    &:hover {\n                        background-color: ", ";\n                    }\n                }\n            }\n        "])), tinycolor2(themeGet("colors.gray200")(props))
        .darken(6)
        .toString());
}, function (props) {
    return props.$borderless === true && css(templateObject_43 || (templateObject_43 = __makeTemplateObject(["\n            th,\n            td,\n            thead th,\n            tbody + tbody {\n                border: 0;\n            }\n        "], ["\n            th,\n            td,\n            thead th,\n            tbody + tbody {\n                border: 0;\n            }\n        "])));
}, function (props) {
    return props.theme.name === "cool" && css(templateObject_44 || (templateObject_44 = __makeTemplateObject(["\n                border-color: ", ";\n            "], ["\n                border-color: ", ";\n            "])), tinycolor2(themeGet("colors.skinUi01")(props))
        .lighten(46)
        .toString());
}, function (props) {
    return props.theme.name === "dark" && css(templateObject_45 || (templateObject_45 = __makeTemplateObject(["\n            color: inherit;\n        "], ["\n            color: inherit;\n        "])));
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20, templateObject_21, templateObject_22, templateObject_23, templateObject_24, templateObject_25, templateObject_26, templateObject_27, templateObject_28, templateObject_29, templateObject_30, templateObject_31, templateObject_32, templateObject_33, templateObject_34, templateObject_35, templateObject_36, templateObject_37, templateObject_38, templateObject_39, templateObject_40, templateObject_41, templateObject_42, templateObject_43, templateObject_44, templateObject_45, templateObject_46;
//# sourceMappingURL=style.js.map