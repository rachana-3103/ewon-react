import { __assign, __rest } from "tslib";
import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import classnames from "classnames";
import { StyledProgress, StyledProgressBar } from "./style";
var Progress = function (_a) {
    var className = _a.className, now = _a.now, min = _a.min, max = _a.max, isLabel = _a.isLabel, bg = _a.bg, height = _a.height, striped = _a.striped, animated = _a.animated, opacity = _a.opacity, restProps = __rest(_a, ["className", "now", "min", "max", "isLabel", "bg", "height", "striped", "animated", "opacity"]);
    return (_jsx(StyledProgress, __assign({ className: classnames(className), "$height": height, "$opacity": opacity }, restProps, { children: _jsx(StyledProgressBar, __assign({ role: "progressbar", "aria-valuenow": now, "aria-valuemin": min, "aria-valuemax": max, bg: bg, "$width": now, "$striped": striped, "$animated": animated }, { children: _jsxs("span", __assign({ className: !isLabel ? "sr-only" : "" }, { children: [now, "%"] })) })) })));
};
Progress.defaultProps = {
    now: 40,
    min: 0,
    max: 100,
    bg: "primary",
    height: "10px",
    striped: false,
    animated: false,
};
export default Progress;
