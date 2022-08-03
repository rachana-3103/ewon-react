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
import { useLocation } from "react-router-dom";
import { StyledSubmenu, StyledSubNavItem, StyledSubNavlink } from "./style";
var Megamenu = function (_a) {
    var menu = _a.menu, onClick = _a.onClick, hasChildren = _a.hasChildren;
    var location = useLocation();
    return (_jsx(StyledSubmenu, __assign({ className: "submenu" }, { children: menu === null || menu === void 0 ? void 0 : menu.map(function (_a) {
            var id = _a.id, title = _a.title, Icon = _a.Icon, megaSubmenu = _a.submenu;
            var hasMegaSubmenu = !!(megaSubmenu === null || megaSubmenu === void 0 ? void 0 : megaSubmenu.length);
            return (_jsxs(StyledSubNavItem, __assign({ onClick: function (e) {
                    onClick(e, hasChildren);
                }, className: hasMegaSubmenu ? "with-sub" : "" }, { children: [_jsxs(StyledSubNavlink, __assign({ path: "#!", className: "aside-navbar-link" }, { children: [Icon && _jsx(Icon, {}), _jsx("span", { children: title })] })), hasMegaSubmenu && (_jsx(StyledSubmenu, __assign({ className: "mega-submenu" }, { children: megaSubmenu === null || megaSubmenu === void 0 ? void 0 : megaSubmenu.map(function (subnav) { return (_jsx(StyledSubNavItem, { children: _jsx(StyledSubNavlink, __assign({ className: location.pathname === subnav.url
                                    ? "active"
                                    : "", path: subnav.url }, { children: subnav.label })) }, subnav.id)); }) })))] }), id));
        }) })));
};
export default Megamenu;
//# sourceMappingURL=megamenu.js.map