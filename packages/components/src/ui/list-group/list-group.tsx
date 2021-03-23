import { Children, FC, ReactChild, ReactText, FunctionComponent } from "react";
import classnames from "classnames";
import { StyledListGroup, StyledListGroupItem } from "./style";

interface IProps {
    as?: React.ElementType;
    className?: string;
}

interface IListGroup extends IProps {
    flush?: boolean;
    horizontal?: boolean;
}

type IChild = Exclude<ReactChild, ReactText>;

export const ListGroup: FC<IListGroup> = ({
    as,
    className,
    children,
    flush,
    horizontal,
}) => {
    const RenderChild = Children.map(children, (el) => {
        const child = el as IChild;
        if (child !== null) {
            const childType = child.type as FunctionComponent;
            const name = childType.displayName || childType.name;
            if (name === "ListGroupItem") {
                return (
                    <child.type
                        {...child.props}
                        flush={flush}
                        horizontal={horizontal}
                    />
                );
            }
        }
        return null;
    });
    return (
        <StyledListGroup
            as={as}
            className={classnames(className, "list-group")}
            $horizontal={horizontal}
        >
            {RenderChild}
        </StyledListGroup>
    );
};

interface IListGroupItem extends IProps {
    active?: boolean;
    disabled?: boolean;
    action?: boolean;
    href?: string;
    flush?: boolean;
    horizontal?: boolean;
}

export const ListGroupItem: FC<IListGroupItem> = ({
    as,
    className,
    children,
    active,
    disabled,
    action,
    href,
    flush,
    horizontal,
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
        >
            {children}
        </StyledListGroupItem>
    );
};
