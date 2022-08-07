import { __assign, __read, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { Children, isValidElement, useState, useCallback, } from "react";
import classnames from "clsx";
import { useClickOutside } from "@doar/shared/hooks";
import { StyledDropdown } from "./style";
var Dropdown = function (_a) {
    var children = _a.children, direction = _a.direction, className = _a.className, restProps = __rest(_a, ["children", "direction", "className"]);
    var _b = __read(useState(false), 2), show = _b[0], setShow = _b[1];
    var handleClick = function () {
        setShow(function (prev) { return !prev; });
    };
    var onClose = useCallback(function () {
        setShow(false);
    }, []);
    var containerRef = useClickOutside(onClose);
    var RenderChild = Children.map(children, function (el) {
        if (!isValidElement(el))
            return el;
        var child = el;
        if (child !== null) {
            var childType = child.type;
            var name_1 = childType.displayName || childType.name;
            if (name_1 === "DropdownToggle") {
                return _jsx(child.type, __assign({}, child.props, { onClick: handleClick }));
            }
            if (name_1 === "DropdownMenu") {
                return (_jsx(child.type, __assign({}, child.props, { direction: direction, show: show })));
            }
        }
        return null;
    });
    return (_jsx(StyledDropdown, __assign({}, restProps, { className: classnames(className, "dropdown"), ref: containerRef }, { children: RenderChild })));
};
Dropdown.defaultProps = {
    direction: "down",
};
export default Dropdown;
