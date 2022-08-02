var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from "@doar/shared/styled";
import { InputStyles, SuccessInputStyles, WarningInputStyles, ErrorInputStyles, allowedProps, } from "../style";
export var StyledInput = styled("input").withConfig({
    shouldForwardProp: function (prop, defaultValidatorFn) {
        return !__spreadArray([], __read(allowedProps), false).includes(prop) && defaultValidatorFn(prop);
    },
})(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n"], ["\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n"])), InputStyles, function (_a) {
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
//# sourceMappingURL=style.js.map