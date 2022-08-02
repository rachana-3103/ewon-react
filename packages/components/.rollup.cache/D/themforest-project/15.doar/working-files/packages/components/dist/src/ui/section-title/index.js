import { __assign } from "tslib";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { StyledTitle, StyledDesc } from "./style";
var SectionTitle = function (_a) {
    var title = _a.title, desc = _a.desc, descProps = _a.descProps, titleProps = _a.titleProps;
    return (_jsxs(_Fragment, { children: [_jsx(StyledTitle, __assign({ "$hasDesc": Boolean(desc) }, titleProps, { children: title })), desc && (_jsx(StyledDesc, __assign({}, descProps, { dangerouslySetInnerHTML: { __html: desc } })))] }));
};
export default SectionTitle;
