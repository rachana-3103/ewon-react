import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import classnames from "classnames";
import { StyledImage } from "./style";
var Image = function (_a) {
    var src = _a.src, alt = _a.alt, size = _a.size, shape = _a.shape, fluid = _a.fluid, align = _a.align, fit = _a.fit, className = _a.className, restProps = __rest(_a, ["src", "alt", "size", "shape", "fluid", "align", "fit", "className"]);
    return (_jsx(StyledImage, __assign({ src: src, alt: alt, "$shape": shape, "$size": size, "$fluid": fluid, "$align": align, "$fit": fit, className: classnames(className) }, restProps), void 0));
};
export default Image;
