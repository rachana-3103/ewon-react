import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import classnames from "clsx";
import { StyledGroup } from "./style";
var ButtonGroup = function (_a) {
    var children = _a.children, size = _a.size, vertical = _a.vertical, label = _a.label, className = _a.className, restProps = __rest(_a, ["children", "size", "vertical", "label", "className"]);
    return (_jsx(StyledGroup, __assign({ role: "group", "$size": size, "$vertical": vertical, "aria-label": label, className: classnames(className, "btn-group") }, restProps, { children: children })));
};
ButtonGroup.defaultProps = {
    label: "button group",
};
export default ButtonGroup;
