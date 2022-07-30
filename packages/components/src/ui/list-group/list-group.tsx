import { Children, FC, ReactChild, ReactText, FunctionComponent } from "react";
import classnames from "classnames";
import { SpaceProps } from "@doar/shared/styled";
import { StyledListGroup } from "./style";

interface IProps {
    as?: React.ElementType;
    className?: string;
}

interface IListGroup extends IProps, SpaceProps {
    flush?: boolean;
    horizontal?: boolean;
}

type IChild = Exclude<ReactChild, ReactText>;

const ListGroup: FC<IListGroup> = ({
    as,
    className,
    children,
    flush,
    horizontal,
    ...restProps
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
        return child;
    });
    return (
        <StyledListGroup
            as={as}
            className={classnames(className, "list-group")}
            $horizontal={horizontal}
            {...restProps}
        >
            {RenderChild}
        </StyledListGroup>
    );
};

export default ListGroup;
