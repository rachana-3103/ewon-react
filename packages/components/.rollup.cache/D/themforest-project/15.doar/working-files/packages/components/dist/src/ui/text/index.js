import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { StyledText } from "./style";
var Text = function (_a) {
    var as = _a.as, className = _a.className, children = _a.children, restProps = __rest(_a, ["as", "className", "children"]);
    return (_jsx(StyledText, __assign({ as: as, className: className }, restProps, { children: children })));
};
export default Text;
