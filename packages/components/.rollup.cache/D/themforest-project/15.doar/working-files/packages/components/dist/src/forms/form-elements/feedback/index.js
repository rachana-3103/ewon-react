import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { StyledFeedback } from "./style";
var Feedback = function (_a) {
    var state = _a.state, showState = _a.showState, showErrorOnly = _a.showErrorOnly, children = _a.children;
    return (_jsx(StyledFeedback, __assign({ "$state": state, "$showState": showState, "$showErrorOnly": showErrorOnly }, { children: children })));
};
export default Feedback;
