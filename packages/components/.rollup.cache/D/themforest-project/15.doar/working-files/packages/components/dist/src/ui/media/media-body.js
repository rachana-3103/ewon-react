import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import classnames from "classnames";
import { StyledMediaBody } from "./style";
var MediaBody = function (_a) {
    var children = _a.children, className = _a.className, restProps = __rest(_a, ["children", "className"]);
    return (_jsx(StyledMediaBody, __assign({ className: classnames(className, "media-body") }, restProps, { children: children })));
};
export default MediaBody;
