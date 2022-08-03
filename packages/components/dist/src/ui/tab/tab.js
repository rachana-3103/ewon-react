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
import { jsx as _jsx } from "react/jsx-runtime";
import classnames from "clsx";
import { Tab, TabPanel, TabList } from "react-tabs";
import { StyledTabs, StyledTabContent } from "./style";
export var TabWrap = function (_a) {
    var className = _a.className, children = _a.children, justified = _a.justified, vertical = _a.vertical, variation = _a.variation, defaultFocus = _a.defaultFocus, defaultIndex = _a.defaultIndex, disabledTabClassName = _a.disabledTabClassName, domRef = _a.domRef, forceRenderTabPanel = _a.forceRenderTabPanel, onSelect = _a.onSelect, selectedIndex = _a.selectedIndex, selectedTabClassName = _a.selectedTabClassName, selectedTabPanelClassName = _a.selectedTabPanelClassName;
    return (_jsx(StyledTabs, __assign({ className: classnames(className, "react-tabs"), "$justified": justified, "$vertical": vertical, "$variation": variation, defaultFocus: defaultFocus, defaultIndex: defaultIndex, disabledTabClassName: disabledTabClassName, domRef: domRef, forceRenderTabPanel: forceRenderTabPanel, onSelect: onSelect, selectedIndex: selectedIndex, selectedTabClassName: selectedTabClassName, selectedTabPanelClassName: selectedTabPanelClassName }, { children: children })));
};
export var TabContent = function (_a) {
    var className = _a.className, children = _a.children;
    return (_jsx(StyledTabContent, __assign({ className: classnames(className, "react-tabs__content") }, { children: children })));
};
export { Tab, TabPanel, TabList };
//# sourceMappingURL=tab.js.map