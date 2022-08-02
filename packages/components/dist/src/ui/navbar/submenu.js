var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { StyledSubmenu, StyledSubNavItem, StyledSubNavlink } from "./style";
var Submenu = function (_a) {
    var menu = _a.menu;
    return (_jsx(StyledSubmenu, __assign({ className: "submenu" }, { children: menu.map(function (_a) {
            var id = _a.id, label = _a.label, url = _a.url, Icon = _a.Icon;
            return (_jsx(StyledSubNavItem, { children: _jsxs(StyledSubNavlink, __assign({ path: url }, { children: [Icon && _jsx(Icon, {}), label] })) }, id));
        }) })));
};
export default Submenu;
//# sourceMappingURL=submenu.js.map