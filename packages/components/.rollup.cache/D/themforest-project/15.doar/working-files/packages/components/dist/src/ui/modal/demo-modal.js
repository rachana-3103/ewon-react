import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import Modal from "./modal";
import ModalHeader from "./modal-header";
import ModalTitle from "./modal-title";
import ModalClose from "./modal-close";
import ModalBody from "./modal-body";
import ModalFooter from "./modal-footer";
import Button from "../button/button";
var DemoModal = function (_a) {
    var size = _a.size, centered = _a.centered;
    var _b = useState(false), show = _b[0], setShow = _b[1];
    var clickHandler = function () {
        setShow(function (prev) { return !prev; });
    };
    return (_jsxs(_Fragment, { children: [_jsxs(Modal, __assign({ show: show, onClose: clickHandler, size: size, centered: centered }, { children: [_jsxs(ModalHeader, { children: [_jsx(ModalTitle, { children: "Modal Title" }, void 0),
                            _jsx(ModalClose, __assign({ onClose: clickHandler }, { children: "x" }), void 0)] }, void 0),
                    _jsx(ModalBody, { children: _jsx("p", { children: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English." }, void 0) }, void 0),
                    _jsxs(ModalFooter, { children: [_jsx(Button, __assign({ color: "secondary", onClick: clickHandler }, { children: "Close" }), void 0),
                            _jsx(Button, __assign({ color: "primary" }, { children: "Save changes" }), void 0)] }, void 0)] }), void 0),
            _jsx(Button, __assign({ onClick: clickHandler }, { children: "Open Modal" }), void 0)] }, void 0));
};
export default DemoModal;
