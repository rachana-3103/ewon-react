import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import classnames from "clsx";
import { StyledCardImage } from "./style";
var CardImage = function (_a) {
    var src = _a.src, alt = _a.alt, className = _a.className, isTop = _a.isTop, isBottom = _a.isBottom, restProps = __rest(_a, ["src", "alt", "className", "isTop", "isBottom"]);
    var topClass = isTop ? "card-img-top" : "";
    var bottomClass = isBottom ? "card-img-bottom" : "";
    return (_jsx(StyledCardImage, __assign({ src: src, alt: alt, className: classnames(className, "card-image", topClass, bottomClass), "$isTop": isTop, "$isBottom": isBottom }, restProps)));
};
export default CardImage;
