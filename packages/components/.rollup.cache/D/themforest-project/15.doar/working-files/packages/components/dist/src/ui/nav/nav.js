import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { Children } from "react";
import classnames from "classnames";
import { StyledNav } from "./style";
var Nav = function (_a) {
    var children = _a.children, className = _a.className, pills = _a.pills, align = _a.align, vertical = _a.vertical, fill = _a.fill, customStyle = _a.customStyle, rest = __rest(_a, ["children", "className", "pills", "align", "vertical", "fill", "customStyle"]);
    var RenderChild = Children.map(children, function (el) {
        var child = el;
        if (child !== null) {
            var childType = child.type;
            var name_1 = childType.displayName || childType.name;
            if (name_1 === "NavLink") {
                return (_jsx(child.type, __assign({}, child.props, { customStyle: customStyle }), void 0));
            }
        }
        return _jsx(child.type, __assign({}, child.props), void 0);
    });
    return (_jsx(StyledNav, __assign({ className: classnames(className, "nav"), "$pills": pills, "$align": align, "$vertical": vertical, "$fill": fill, "$customStyle": customStyle }, rest, { children: RenderChild }), void 0));
};
export default Nav;
