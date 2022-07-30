import { FC } from "react";
import { SpaceProps, FlexboxProps, LayoutProps } from "@doar/shared/styled";
interface IProps {
    as?: React.ElementType;
    className?: string;
}
interface IListGroupItem extends IProps, SpaceProps, FlexboxProps, LayoutProps {
    active?: boolean;
    disabled?: boolean;
    action?: boolean;
    href?: string;
    flush?: boolean;
    horizontal?: boolean;
}
declare const ListGroupItem: FC<IListGroupItem>;
export default ListGroupItem;
