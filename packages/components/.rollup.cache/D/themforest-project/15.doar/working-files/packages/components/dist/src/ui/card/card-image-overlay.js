import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import classnames from "classnames";
import { StyledCardImgOverlay } from "./style";
var CardImageOverlay = function (_a) {
    var children = _a.children, className = _a.className, restProps = __rest(_a, ["children", "className"]);
    return (_jsx(StyledCardImgOverlay, __assign({ className: classnames(className, "card-img-overlay") }, restProps, { children: children })));
};
export default CardImageOverlay;
