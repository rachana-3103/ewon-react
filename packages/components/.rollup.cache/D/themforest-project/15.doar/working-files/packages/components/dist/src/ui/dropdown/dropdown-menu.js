import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { useState, useEffect, useRef } from "react";
import classnames from "classnames";
import { StyledDropMenu } from "./style";
var DropdownMenu = function (_a) {
    var children = _a.children, show = _a.show, direction = _a.direction, className = _a.className, restProps = __rest(_a, ["children", "show", "direction", "className"]);
    var _b = useState({
        clientWidth: 0,
        clientHeight: 0,
        clientLeft: 0,
        clientTop: 0,
        offsetWidth: 0,
        offsetHeight: 0,
        offsetLeft: 0,
        offsetTop: 0,
    }), menuMeasure = _b[0], setMenuMeasure = _b[1];
    var menuRef = useRef(null);
    useEffect(function () {
        setMenuMeasure(function (prev) {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            return __assign(__assign({}, prev), { clientWidth: ((_a = menuRef === null || menuRef === void 0 ? void 0 : menuRef.current) === null || _a === void 0 ? void 0 : _a.clientWidth) || 0, clientHeight: ((_b = menuRef === null || menuRef === void 0 ? void 0 : menuRef.current) === null || _b === void 0 ? void 0 : _b.clientHeight) || 0, clientLeft: ((_c = menuRef === null || menuRef === void 0 ? void 0 : menuRef.current) === null || _c === void 0 ? void 0 : _c.clientLeft) || 0, clientTop: ((_d = menuRef === null || menuRef === void 0 ? void 0 : menuRef.current) === null || _d === void 0 ? void 0 : _d.clientTop) || 0, offsetWidth: ((_e = menuRef === null || menuRef === void 0 ? void 0 : menuRef.current) === null || _e === void 0 ? void 0 : _e.offsetWidth) || 0, offsetHeight: ((_f = menuRef === null || menuRef === void 0 ? void 0 : menuRef.current) === null || _f === void 0 ? void 0 : _f.offsetHeight) || 0, offsetLeft: ((_g = menuRef === null || menuRef === void 0 ? void 0 : menuRef.current) === null || _g === void 0 ? void 0 : _g.offsetLeft) || 0, offsetTop: ((_h = menuRef === null || menuRef === void 0 ? void 0 : menuRef.current) === null || _h === void 0 ? void 0 : _h.offsetTop) || 0 });
        });
    }, [show]);
    return (_jsx(StyledDropMenu, __assign({ "$menuWidth": menuMeasure.offsetWidth, "$show": show, "$direction": direction, ref: menuRef, className: classnames(className, "dropdown-menu") }, restProps, { children: children }), void 0));
};
DropdownMenu.displayName = "DropdownMenu";
export default DropdownMenu;
