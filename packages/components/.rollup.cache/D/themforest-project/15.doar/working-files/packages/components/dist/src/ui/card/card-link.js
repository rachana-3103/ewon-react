import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import classnames from "classnames";
import { StyledCardLink } from "./style";
var CardLink = function (_a) {
    var children = _a.children, className = _a.className, path = _a.path, restProps = __rest(_a, ["children", "className", "path"]);
    return (_jsx(StyledCardLink, __assign({ path: path, className: classnames(className, "card-link") }, restProps, { children: children }), void 0));
};
export default CardLink;
