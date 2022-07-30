import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { StyledLink, StyledAnchor } from "./style";
var Anchor = function (_a) {
    var path = _a.path, children = _a.children, className = _a.className, rel = _a.rel, label = _a.label, target = _a.target, onClick = _a.onClick, variant = _a.variant, rest = __rest(_a, ["path", "children", "className", "rel", "label", "target", "onClick", "variant"]);
    var internal = /^\/(?!\/)/.test(path);
    if (!internal) {
        var isHash = path.startsWith("#");
        if (isHash) {
            return (_jsx(StyledAnchor, __assign({ "aria-label": label, rel: rel, className: className, href: path, onClick: onClick, "$variant": variant }, rest, { children: children }), void 0));
        }
        return (_jsx(StyledAnchor, __assign({ "aria-label": label, rel: rel, className: className, href: path, target: target, onClick: onClick, "$variant": variant }, rest, { children: children }), void 0));
    }
    return (_jsx(StyledLink, __assign({ "aria-label": label, rel: "preload", className: className, to: path, onClick: onClick, "$variant": variant }, rest, { children: children }), void 0));
};
Anchor.defaultProps = {
    target: "_blank",
    rel: "noopener noreferrer",
};
Anchor.displayName = "Anchor";
export default Anchor;
