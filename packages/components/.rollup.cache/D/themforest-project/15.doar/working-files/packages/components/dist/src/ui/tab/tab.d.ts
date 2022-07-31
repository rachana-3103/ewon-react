import { FC } from "react";
import { Tab, TabPanel, TabList } from "react-tabs";
import type { TabsProps } from "react-tabs";
interface IProps {
    className?: string;
}
interface ITab extends TabsProps {
    justified?: boolean;
    vertical?: boolean;
    variation?: "line";
}
export declare const TabWrap: FC<ITab>;
export declare const TabContent: FC<IProps>;
export { Tab, TabPanel, TabList };
