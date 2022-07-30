import { FC } from "react";
import classnames from "classnames";
import { StyledCardSubtitle } from "./style";
import { ICardCommonProps } from "./types";

const CardSubtitle: FC<ICardCommonProps> = ({
    children,
    className,
    ...restProps
}) => {
    return (
        <StyledCardSubtitle
            className={classnames(className, "card-subtitle")}
            {...restProps}
        >
            {children}
        </StyledCardSubtitle>
    );
};

export default CardSubtitle;
