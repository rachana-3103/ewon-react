import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { StyledSubmenu, StyledSubNavItem, StyledSubNavlink } from "./style";
var Submenu = function (_a) {
    var menu = _a.menu;
    return (_jsx(StyledSubmenu, __assign({ className: "submenu" }, { children: menu.map(function (_a) {
            var id = _a.id, label = _a.label, url = _a.url, Icon = _a.Icon;
            return (_jsx(StyledSubNavItem, { children: _jsxs(StyledSubNavlink, __assign({ path: url }, { children: [Icon && _jsx(Icon, {}, void 0), label] }), void 0) }, id));
        }) }), void 0));
};
export default Submenu;
