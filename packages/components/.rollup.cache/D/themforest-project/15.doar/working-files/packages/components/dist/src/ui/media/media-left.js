import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { StyledMediaLeft } from "./style";
var MediaLeft = function (_a) {
    var children = _a.children, alignMent = _a.alignMent, restProps = __rest(_a, ["children", "alignMent"]);
    return (_jsx(StyledMediaLeft, __assign({ "$alignMent": alignMent }, restProps, { children: children })));
};
export default MediaLeft;
