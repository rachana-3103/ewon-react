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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Portal } from "react-portal";
import classnames from "clsx";
import { CSSTransition } from "react-transition-group";
import { StyledBackdrop, StyledModal } from "./style";
var Modal = function (_a) {
    var className = _a.className, show = _a.show, size = _a.size, centered = _a.centered, children = _a.children, onClose = _a.onClose, restProps = __rest(_a, ["className", "show", "size", "centered", "children", "onClose"]);
    return (_jsx(Portal, { children: _jsxs(_Fragment, { children: [_jsx(StyledBackdrop, { "$show": show }), _jsx(StyledModal, __assign({ "$show": show, "$size": size, "$centered": centered, className: classnames(className), onClick: onClose }, restProps, { children: _jsx(CSSTransition, __assign({ in: show, timeout: 400, unmountOnExit: true, classNames: "modal" }, { children: function () { return (_jsx("div", __assign({ className: "modal-dialog" }, { children: _jsx("div", __assign({ className: "modal-content", onClick: function (e) { return e.stopPropagation(); }, onKeyPress: function () { }, role: "button", tabIndex: 0 }, { children: children })) }))); } })) }))] }) }));
};
Modal.defaultProps = {
    size: "md",
    centered: true,
};
export default Modal;
//# sourceMappingURL=modal.js.map