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
import { useCallback } from "react";
import { getSiblings } from "@doar/shared/methods";
import { useClickOutside } from "@doar/shared/hooks";
import { StyledNavbar, StyledNavitem, StyledNavlink } from "./style";
import Submenu from "./submenu";
import Megamenu from "./megamenu";
var Navbar = function (_a) {
    var menus = _a.menus;
    var clickHandler = function (e, hasChildren) {
        if (hasChildren) {
            e.preventDefault();
            var target = e.currentTarget;
            if (target.nodeName === "A") {
                target = target.parentElement;
            }
            var submenu = target.querySelector(".submenu");
            var siblings = getSiblings(target);
            submenu === null || submenu === void 0 ? void 0 : submenu.classList.toggle("open");
            siblings.forEach(function (sib) {
                sib.childNodes.forEach(function (child) {
                    var _a;
                    var childHT = child;
                    (_a = childHT === null || childHT === void 0 ? void 0 : childHT.classList) === null || _a === void 0 ? void 0 : _a.remove("open");
                });
            });
        }
    };
    var onClose = useCallback(function () {
        var nav = document.querySelector(".navbar");
        var submenu = nav === null || nav === void 0 ? void 0 : nav.querySelectorAll(".submenu");
        submenu === null || submenu === void 0 ? void 0 : submenu.forEach(function (el) { return el.classList.remove("open"); });
    }, []);
    var containerRef = useClickOutside(onClose);
    return (_jsx(StyledNavbar, __assign({ ref: containerRef, className: "navbar" }, { children: menus &&
            menus.map(function (nav) {
                var submenu = nav.submenu, megamenu = nav.megamenu, navId = nav.id, NavIcon = nav.Icon, navLabel = nav.label;
                var hasSubmenu = !!(submenu === null || submenu === void 0 ? void 0 : submenu.length);
                var hasMegamenu = !!(megamenu === null || megamenu === void 0 ? void 0 : megamenu.length);
                var hasChildren = hasSubmenu || hasMegamenu;
                return (_jsxs(StyledNavitem, __assign({ "$hasSubmenu": hasChildren, onClick: function (e) { return clickHandler(e, hasChildren); } }, { children: [_jsxs(StyledNavlink, __assign({ path: hasChildren ? "#!" : nav.url }, { children: [NavIcon && _jsx(NavIcon, {}), navLabel] })), submenu && _jsx(Submenu, { menu: submenu }), megamenu && _jsx(Megamenu, { menu: megamenu })] }), navId));
            }) })));
};
Navbar.defaultProps = {
    menus: [],
};
export default Navbar;
//# sourceMappingURL=index.js.map