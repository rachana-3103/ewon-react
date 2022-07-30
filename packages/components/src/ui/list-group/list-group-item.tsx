import { FC } from "react";
import classnames from "classnames";
import { SpaceProps, FlexboxProps, LayoutProps } from "@doar/shared/styled";
import { StyledListGroupItem } from "./style";

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

const ListGroupItem: FC<IListGroupItem> = ({
    as,
    className,
    children,
    active,
    disabled,
    action,
    href,
    flush,
    horizontal,
    ...restProps
}) => {
    return (
        <StyledListGroupItem
            as={as}
            className={classnames(className, "list-group-item")}
            $active={active}
            $disabled={disabled}
            $action={action}
            href={href}
            $flush={flush}
            $horizontal={horizontal}
            {...restProps}
        >
            {children}
        </StyledListGroupItem>
    );
};

ListGroupItem.displayName = "ListGroupItem";

export default ListGroupItem;
