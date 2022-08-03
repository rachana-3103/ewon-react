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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
import { jsx as _jsx } from "react/jsx-runtime";
import { useState, useEffect, useRef } from "react";
import classnames from "clsx";
import { StyledDropMenu } from "./style";
var DropdownMenu = function (_a) {
    var children = _a.children, show = _a.show, direction = _a.direction, className = _a.className, restProps = __rest(_a, ["children", "show", "direction", "className"]);
    var _b = __read(useState({
        clientWidth: 0,
        clientHeight: 0,
        clientLeft: 0,
        clientTop: 0,
        offsetWidth: 0,
        offsetHeight: 0,
        offsetLeft: 0,
        offsetTop: 0,
    }), 2), menuMeasure = _b[0], setMenuMeasure = _b[1];
    var menuRef = useRef(null);
    useEffect(function () {
        setMenuMeasure(function (prev) {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            return __assign(__assign({}, prev), { clientWidth: ((_a = menuRef === null || menuRef === void 0 ? void 0 : menuRef.current) === null || _a === void 0 ? void 0 : _a.clientWidth) || 0, clientHeight: ((_b = menuRef === null || menuRef === void 0 ? void 0 : menuRef.current) === null || _b === void 0 ? void 0 : _b.clientHeight) || 0, clientLeft: ((_c = menuRef === null || menuRef === void 0 ? void 0 : menuRef.current) === null || _c === void 0 ? void 0 : _c.clientLeft) || 0, clientTop: ((_d = menuRef === null || menuRef === void 0 ? void 0 : menuRef.current) === null || _d === void 0 ? void 0 : _d.clientTop) || 0, offsetWidth: ((_e = menuRef === null || menuRef === void 0 ? void 0 : menuRef.current) === null || _e === void 0 ? void 0 : _e.offsetWidth) || 0, offsetHeight: ((_f = menuRef === null || menuRef === void 0 ? void 0 : menuRef.current) === null || _f === void 0 ? void 0 : _f.offsetHeight) || 0, offsetLeft: ((_g = menuRef === null || menuRef === void 0 ? void 0 : menuRef.current) === null || _g === void 0 ? void 0 : _g.offsetLeft) || 0, offsetTop: ((_h = menuRef === null || menuRef === void 0 ? void 0 : menuRef.current) === null || _h === void 0 ? void 0 : _h.offsetTop) || 0 });
        });
    }, [show]);
    return (_jsx(StyledDropMenu, __assign({ "$menuWidth": menuMeasure.offsetWidth, "$show": show, "$direction": direction, ref: menuRef, className: classnames(className, "dropdown-menu") }, restProps, { children: children })));
};
DropdownMenu.displayName = "DropdownMenu";
export default DropdownMenu;
//# sourceMappingURL=dropdown-menu.js.map