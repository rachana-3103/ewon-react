import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { Children } from "react";
import classnames from "classnames";
import { StyledAvatar } from "./style";
var Avatar = function (_a) {
    var size = _a.size, shape = _a.shape, status = _a.status, className = _a.className, children = _a.children, restProps = __rest(_a, ["size", "shape", "status", "className", "children"]);
    var RenderChild = Children.map(children, function (el) {
        var child = el;
        if (child !== null) {
            var childType = child.type;
            var name_1 = childType.displayName || childType.name;
            if (name_1 === "AvatarInitial") {
                return (_jsx(child.type, __assign({ size: size, shape: shape }, child.props), void 0));
            }
            return _jsx(child.type, __assign({}, child.props), void 0);
        }
        return null;
    });
    return (_jsx(StyledAvatar, __assign({ "$size": size, "$shape": shape, "$status": status, className: classnames(className, "avatar") }, restProps, { children: RenderChild }), void 0));
};
Avatar.defaultProps = {
    size: "default",
    shape: "circle",
};
export default Avatar;
