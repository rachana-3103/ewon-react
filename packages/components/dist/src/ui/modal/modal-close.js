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
import classnames from "clsx";
import { StyledClose } from "./style";
var ModalClose = function (_a) {
    var className = _a.className, children = _a.children, onClose = _a.onClose, restProps = __rest(_a, ["className", "children", "onClose"]);
    return (_jsx(StyledClose, __assign({ type: "button", className: classnames(className, "close"), onClick: onClose }, restProps, { "data-dismiss": "modal", "aria-label": "Close" }, { children: _jsx("span", __assign({ "aria-hidden": "true" }, { children: children })) })));
};
ModalClose.displayName = "ModalClose";
export default ModalClose;
//# sourceMappingURL=modal-close.js.map