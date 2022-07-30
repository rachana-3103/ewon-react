import { __assign, __rest } from "tslib";
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
            orderSm = "order-sm-" + smOrder;
            delete restProps.smOrder;
        }
        if (mdOrder === 0) {
            orderMd = "order-md-" + mdOrder;
            delete restProps.mdOrder;
        }
        if (lgOrder === 0) {
            orderlg = "order-lg-" + lgOrder;
            delete restProps.lgOrder;
        }
        if (xlOrder === 0) {
            orderXl = "order-xl-" + xlOrder;
            delete restProps.xlOrder;
        }
    }
    return (_jsx(StyledCol, __assign({ className: classNames(className, orderSm, orderMd, orderlg, orderXl) }, restProps), void 0));
};
export default Col;
