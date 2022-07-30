import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import classnames from "classnames";
import { StyledMedia } from "./style";
var Media = function (_a) {
    var children = _a.children, as = _a.as, className = _a.className, restProps = __rest(_a, ["children", "as", "className"]);
    return (_jsx(StyledMedia, __assign({ className: classnames(className, "media"), as: as, "$el": as }, restProps, { children: children }), void 0));
};
export default Media;
