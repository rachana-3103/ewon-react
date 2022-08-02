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
import { jsx as _jsx } from "react/jsx-runtime";
import { StyledFeedback } from "./style";
var Feedback = function (_a) {
    var state = _a.state, showState = _a.showState, showErrorOnly = _a.showErrorOnly, children = _a.children;
    return (_jsx(StyledFeedback, __assign({ "$state": state, "$showState": showState, "$showErrorOnly": showErrorOnly }, { children: children })));
};
export default Feedback;
//# sourceMappingURL=index.js.map