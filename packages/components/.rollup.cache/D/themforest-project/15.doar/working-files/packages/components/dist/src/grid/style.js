import { __assign, __makeTemplateObject, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import styled, { space, css, device, border, typography, } from "@doar/shared/styled";
import { Container, Row, Col } from "styled-bootstrap-grid";
export var StyledContainer = styled(function (_a) {
    var p = _a.p, pl = _a.pl, pr = _a.pr, pt = _a.pt, pb = _a.pb, m = _a.m, ml = _a.ml, mr = _a.mr, mt = _a.mt, mb = _a.mb, props = __rest(_a, ["p", "pl", "pr", "pt", "pb", "m", "ml", "mr", "mt", "mb"]);
    return (_jsx(Container, __assign({}, props), void 0));
})(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    ", ";\n"], ["\n    ", ";\n"])), space);
export var StyledRow = styled(function (_a) {
    var p = _a.p, pl = _a.pl, pr = _a.pr, pt = _a.pt, pb = _a.pb, m = _a.m, ml = _a.ml, mr = _a.mr, mt = _a.mt, mb = _a.mb, props = __rest(_a, ["p", "pl", "pr", "pt", "pb", "m", "ml", "mr", "mt", "mb"]);
    return _jsx(Row, __assign({}, props), void 0);
})(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    ", ";\n    ", "\n    ", "\n"], ["\n    ", ";\n    ",
    "\n    ",
    "\n"])), space, function (_a) {
    var $gutters = _a.$gutters;
    return !!$gutters && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n            margin-left: -", "px;\n            margin-right: -", "px;\n            & > div {\n                padding-left: ", "px;\n                padding-right: ", "px;\n            }\n        "], ["\n            margin-left: -", "px;\n            margin-right: -", "px;\n            & > div {\n                padding-left: ", "px;\n                padding-right: ", "px;\n            }\n        "])), $gutters / 2, $gutters / 2, $gutters / 2, $gutters / 2);
}, function (_a) {
    var $noGutter = _a.$noGutter;
    return $noGutter === true && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n            margin-left: 0px;\n            margin-right: 0px;\n            & > div {\n                padding-left: 0px;\n                padding-right: 0px;\n            }\n        "], ["\n            margin-left: 0px;\n            margin-right: 0px;\n            & > div {\n                padding-left: 0px;\n                padding-right: 0px;\n            }\n        "])));
});
export var StyledCol = styled(function (_a) {
    var p = _a.p, pl = _a.pl, pr = _a.pr, pt = _a.pt, pb = _a.pb, m = _a.m, ml = _a.ml, mr = _a.mr, mt = _a.mt, mb = _a.mb, textAlign = _a.textAlign, props = __rest(_a, ["p", "pl", "pr", "pt", "pb", "m", "ml", "mr", "mt", "mb", "textAlign"]);
    return (_jsx(Col, __assign({}, props), void 0));
})(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    ", " {\n        &.order-sm-0 {\n            order: 0;\n        }\n    }\n    ", " {\n        &.order-md-0 {\n            order: 0;\n        }\n    }\n    ", " {\n        &.order-lg-0 {\n            order: 0;\n        }\n    }\n    ", " {\n        &.order-xl-0 {\n            order: 0;\n        }\n    }\n    ", ";\n    ", ";\n    ", ";\n"], ["\n    ", " {\n        &.order-sm-0 {\n            order: 0;\n        }\n    }\n    ", " {\n        &.order-md-0 {\n            order: 0;\n        }\n    }\n    ", " {\n        &.order-lg-0 {\n            order: 0;\n        }\n    }\n    ", " {\n        &.order-xl-0 {\n            order: 0;\n        }\n    }\n    ", ";\n    ", ";\n    ", ";\n"])), device.small, device.medium, device.large, device.xlarge, space, border, typography);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
