import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import cn from "classnames";
import { StyledSubmenu, StyledSubNavItem, StyledSubNavlink } from "./style";
var Submenu = function (_a) {
    var menu = _a.menu, className = _a.className;
    return (_jsx(StyledSubmenu, __assign({ className: className }, { children: menu.map(function (_a) {
            var id = _a.id, label = _a.label, url = _a.url, Icon = _a.Icon;
            return (_jsx(StyledSubNavItem, { children: _jsxs(StyledSubNavlink, __assign({ path: url, className: cn(location.pathname === url ? "active" : "", "aside-navbar-link") }, { children: [Icon && _jsx(Icon, {}, void 0),
                        _jsx("span", { children: label }, void 0)] }), void 0) }, id));
        }) }), void 0));
};
export default Submenu;
