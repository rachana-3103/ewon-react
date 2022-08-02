import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import classnames from "classnames";
import { StyledTitle } from "./style";
var ModalTitle = function (_a) {
    var className = _a.className, children = _a.children, restProps = __rest(_a, ["className", "children"]);
    return (_jsx(StyledTitle, __assign({ className: classnames(className, "modal-title") }, restProps, { children: children })));
};
export default ModalTitle;
