import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import classnames from "classnames";
import { StyledInitialText } from "./style";
var AvatarInitial = function (_a) {
    var children = _a.children, size = _a.size, shape = _a.shape, className = _a.className, restProps = __rest(_a, ["children", "size", "shape", "className"]);
    return (_jsx(StyledInitialText, __assign({ "$size": size, "$shape": shape, className: classnames(className, "avatar-initial") }, restProps, { children: children }), void 0));
};
export default AvatarInitial;
