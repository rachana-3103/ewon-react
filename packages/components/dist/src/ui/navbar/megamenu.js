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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { StyledSubNavItem, StyledSubNavlink, StyledMegaMenu, StyledMegaMenuInner, StyledMegamenuList, StyledMegamenuLabel, } from "./style";
var Megamenu = function (_a) {
    var menu = _a.menu;
    return (_jsx(StyledMegaMenu, __assign({ className: "submenu" }, { children: _jsx(StyledMegaMenuInner, { children: menu === null || menu === void 0 ? void 0 : menu.map(function (megaNav) {
                var _a;
                return (_jsx(StyledMegamenuList, { children: _jsxs(_Fragment, { children: [(megaNav === null || megaNav === void 0 ? void 0 : megaNav.title) && (_jsx(StyledMegamenuLabel, { children: megaNav === null || megaNav === void 0 ? void 0 : megaNav.title })), (_a = megaNav === null || megaNav === void 0 ? void 0 : megaNav.submenu) === null || _a === void 0 ? void 0 : _a.map(function (_a) {
                                var id = _a.id, label = _a.label, url = _a.url, Icon = _a.Icon;
                                return (_jsx(StyledSubNavItem, { children: _jsxs(StyledSubNavlink, __assign({ path: url }, { children: [Icon && _jsx(Icon, {}), label] })) }, id));
                            })] }) }, megaNav.id));
            }) }) })));
};
export default Megamenu;
//# sourceMappingURL=megamenu.js.map