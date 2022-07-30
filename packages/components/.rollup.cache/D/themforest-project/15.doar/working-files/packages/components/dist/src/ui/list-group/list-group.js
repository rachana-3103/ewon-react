import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { Children } from "react";
import classnames from "classnames";
import { StyledListGroup } from "./style";
var ListGroup = function (_a) {
    var as = _a.as, className = _a.className, children = _a.children, flush = _a.flush, horizontal = _a.horizontal, restProps = __rest(_a, ["as", "className", "children", "flush", "horizontal"]);
    var RenderChild = Children.map(children, function (el) {
        var child = el;
        if (child !== null) {
            var childType = child.type;
            var name_1 = childType.displayName || childType.name;
            if (name_1 === "ListGroupItem") {
                return (_jsx(child.type, __assign({}, child.props, { flush: flush, horizontal: horizontal }), void 0));
            }
        }
        return child;
    });
    return (_jsx(StyledListGroup, __assign({ as: as, className: classnames(className, "list-group"), "$horizontal": horizontal }, restProps, { children: RenderChild }), void 0));
};
export default ListGroup;
