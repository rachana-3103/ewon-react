import { FC } from "react";
import classnames from "classnames";
import { StyledCardHeading } from "./style";
import { ICardTitleProps } from "./types";

const CardTitle: FC<ICardTitleProps> = ({
    children,
    className,
    as,
    ...restProps
}) => {
    return (
        <StyledCardHeading
            as={as}
            className={classnames(className, "card-title")}
            {...restProps}
        >
            {children}
        </StyledCardHeading>
    );
};

export default CardTitle;
