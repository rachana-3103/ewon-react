import { FC } from "react";
import classnames from "classnames";
import { StyledCard } from "./style";
import { ICardProps } from "./types";

const Card: FC<ICardProps> = ({ children, className, color, ...restProps }) => {
    return (
        <StyledCard
            className={classnames(className, "card")}
            {...restProps}
            $color={color}
        >
            {children}
        </StyledCard>
    );
};

export default Card;
