import { FC } from "react";
import classnames from "classnames";
import { StyledCardText } from "./style";
import { ICardCommonProps } from "./types";

const CardText: FC<ICardCommonProps> = ({
    children,
    className,
    ...restProps
}) => {
    return (
        <StyledCardText
            className={classnames(className, "card-text")}
            {...restProps}
        >
            {children}
        </StyledCardText>
    );
};

export default CardText;
