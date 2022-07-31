import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { getSiblings } from "@doar/shared/methods";
import { StyledNavbar, StyledNavitem, StyledNavlink } from "./style";
import Submenu from "./submenu";
import Megamenu from "./megamenu";
var NavbarAside = function (_a) {
    var menus = _a.menus;
    var clickHandler = function (e, hasChildren) {
        if (hasChildren) {
            e.preventDefault();
            var target = e.currentTarget;
            if (target.nodeName === "A") {
                target = target.parentElement;
            }
            var submenu = target.querySelector(".mega-submenu");
            var siblings = getSiblings(target);
            submenu === null || submenu === void 0 ? void 0 : submenu.classList.toggle("open");
            target.classList.toggle("open");
            siblings.forEach(function (sib) {
                sib.classList.remove("open");
                sib.childNodes.forEach(function (child) {
                    var _a;
                    var childHT = child;
                    (_a = childHT === null || childHT === void 0 ? void 0 : childHT.classList) === null || _a === void 0 ? void 0 : _a.remove("open");
                });
            });
        }
    };
    return (_jsx(StyledNavbar, __assign({ className: "aside-navbar" }, { children: menus === null || menus === void 0 ? void 0 : menus.map(function (nav) {
            var submenu = nav.submenu, megamenu = nav.megamenu, navId = nav.id, navLabel = nav.label;
            var hasSubmenu = !!(submenu === null || submenu === void 0 ? void 0 : submenu.length);
            var hasMegamenu = !!(megamenu === null || megamenu === void 0 ? void 0 : megamenu.length);
            var hasChildren = hasSubmenu || hasMegamenu;
            return (_jsxs(StyledNavitem, __assign({ "$hasSubmenu": hasChildren }, { children: [_jsx(StyledNavlink, __assign({ path: hasChildren ? "#!" : nav.url, className: "aside-navbar-label" }, { children: navLabel }), void 0),
                    submenu && (_jsx(Submenu, { menu: submenu, className: "submenu" }, void 0)),
                    megamenu && (_jsx(Megamenu, { menu: megamenu, hasChildren: hasChildren, onClick: clickHandler }, void 0))] }), navId));
        }) }), void 0));
};
NavbarAside.defaultProps = {
    menus: [],
};
export default NavbarAside;
