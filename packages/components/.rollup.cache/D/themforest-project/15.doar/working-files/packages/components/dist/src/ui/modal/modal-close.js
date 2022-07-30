import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import classnames from "classnames";
import { StyledClose } from "./style";
var ModalClose = function (_a) {
    var className = _a.className, children = _a.children, onClose = _a.onClose, restProps = __rest(_a, ["className", "children", "onClose"]);
    return (_jsx(StyledClose, __assign({ type: "button", className: classnames(className, "close"), onClick: onClose }, restProps, { "data-dismiss": "modal", "aria-label": "Close" }, { children: _jsx("span", __assign({ "aria-hidden": "true" }, { children: children }), void 0) }), void 0));
};
ModalClose.displayName = "ModalClose";
export default ModalClose;
