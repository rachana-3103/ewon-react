import { FC } from "react";
import classnames from "classnames";
import { StyledCardDeck } from "./style";
import { ICardCommonProps } from "./types";

const CardDeck: FC<ICardCommonProps> = ({
    children,
    className,
    ...restProps
}) => {
    return (
        <StyledCardDeck
            className={classnames(className, "card-deck")}
            {...restProps}
        >
            {children}
        </StyledCardDeck>
    );
};

export default CardDeck;
