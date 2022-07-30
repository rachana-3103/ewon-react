import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import classnames from "classnames";
import { StyledBody } from "./style";
var ModalBody = function (_a) {
    var className = _a.className, children = _a.children, restProps = __rest(_a, ["className", "children"]);
    return (_jsx(StyledBody, __assign({ className: classnames(className, "modal-body") }, restProps, { children: children }), void 0));
};
export default ModalBody;
