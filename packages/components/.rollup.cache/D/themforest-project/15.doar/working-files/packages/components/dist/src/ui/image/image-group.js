import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import classnames from "classnames";
import { StyledGroup } from "./style";
var ImageGroup = function (_a) {
    var children = _a.children, className = _a.className, size = _a.size, restProps = __rest(_a, ["children", "className", "size"]);
    return (_jsx(StyledGroup, __assign({ className: classnames(className), "$size": size }, restProps, { children: children })));
};
export default ImageGroup;
