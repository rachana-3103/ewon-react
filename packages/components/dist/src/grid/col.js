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
import classNames from "classnames";
import { StyledCol } from "./style";
var Col = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    var smOrder = props.smOrder, mdOrder = props.mdOrder, lgOrder = props.lgOrder, xlOrder = props.xlOrder;
    var restProps = props;
    var orderSm;
    var orderMd;
    var orderlg;
    var orderXl;
    if (smOrder === 0 || mdOrder === 0 || lgOrder === 0 || xlOrder === 0) {
        if (smOrder === 0) {
            orderSm = "order-sm-".concat(smOrder);
            delete restProps.smOrder;
        }
        if (mdOrder === 0) {
            orderMd = "order-md-".concat(mdOrder);
            delete restProps.mdOrder;
        }
        if (lgOrder === 0) {
            orderlg = "order-lg-".concat(lgOrder);
            delete restProps.lgOrder;
        }
        if (xlOrder === 0) {
            orderXl = "order-xl-".concat(xlOrder);
            delete restProps.xlOrder;
        }
    }
    return (_jsx(StyledCol, __assign({ className: classNames(className, orderSm, orderMd, orderlg, orderXl) }, restProps)));
};
export default Col;
//# sourceMappingURL=col.js.map