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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { StyledTitle, StyledDesc } from "./style";
var SectionTitle = function (_a) {
    var title = _a.title, desc = _a.desc, descProps = _a.descProps, titleProps = _a.titleProps;
    return (_jsxs(_Fragment, { children: [_jsx(StyledTitle, __assign({ "$hasDesc": Boolean(desc) }, titleProps, { children: title })), desc && (_jsx(StyledDesc, __assign({}, descProps, { dangerouslySetInnerHTML: { __html: desc } })))] }));
};
export default SectionTitle;
//# sourceMappingURL=index.js.map