import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import classnames from "classnames";
import { StyledListGroupItem } from "./style";
var ListGroupItem = function (_a) {
    var as = _a.as, className = _a.className, children = _a.children, active = _a.active, disabled = _a.disabled, action = _a.action, href = _a.href, flush = _a.flush, horizontal = _a.horizontal, restProps = __rest(_a, ["as", "className", "children", "active", "disabled", "action", "href", "flush", "horizontal"]);
    return (_jsx(StyledListGroupItem, __assign({ as: as, className: classnames(className, "list-group-item"), "$active": active, "$disabled": disabled, "$action": action, href: href, "$flush": flush, "$horizontal": horizontal }, restProps, { children: children })));
};
ListGroupItem.displayName = "ListGroupItem";
export default ListGroupItem;
