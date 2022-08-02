import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import classnames from "classnames";
import { StyledCardBody } from "./style";
var CardBody = function (_a) {
    var children = _a.children, className = _a.className, restProps = __rest(_a, ["children", "className"]);
    return (_jsx(StyledCardBody, __assign({ className: classnames(className, "card-body") }, restProps, { children: children })));
};
export default CardBody;
