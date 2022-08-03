import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import classnames from "clsx";
import { StyledSpinner } from "./style";
var Spinner = function (_a) {
    var className = _a.className, _b = _a.variant, variant = _b === void 0 ? "border" : _b, color = _a.color, size = _a.size, restProps = __rest(_a, ["className", "variant", "color", "size"]);
    return (_jsx(StyledSpinner, __assign({ className: classnames(className, "spinner", "spinner-".concat(variant)), "$variant": variant, "$color": color, "$size": size }, restProps)));
};
Spinner.defaultProps = {
    variant: "border",
    size: "md",
};
export default Spinner;
