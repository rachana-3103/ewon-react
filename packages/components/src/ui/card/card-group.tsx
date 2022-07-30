import { FC } from "react";
import classnames from "classnames";
import { StyledCardGroup } from "./style";
import { ICardCommonProps } from "./types";

const CardGroup: FC<ICardCommonProps> = ({
    children,
    className,
    ...restProps
}) => {
    return (
        <StyledCardGroup
            className={classnames(className, "card-group")}
            {...restProps}
        >
            {children}
        </StyledCardGroup>
    );
};

export default CardGroup;
