import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import classnames from "clsx";
import { StyledCardDeck } from "./style";
var CardDeck = function (_a) {
    var children = _a.children, className = _a.className, restProps = __rest(_a, ["children", "className"]);
    return (_jsx(StyledCardDeck, __assign({ className: classnames(className, "card-deck") }, restProps, { children: children })));
};
export default CardDeck;
