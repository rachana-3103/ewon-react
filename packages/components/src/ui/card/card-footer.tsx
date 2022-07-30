import { FC } from "react";
import classnames from "classnames";
import { StyledCardFooter } from "./style";
import { ICardFooterProps } from "./types";

const CardFooter: FC<ICardFooterProps> = ({
    children,
    className,
    ...restProps
}) => {
    return (
        <StyledCardFooter
            className={classnames(className, "card-footer")}
            {...restProps}
        >
            {children}
        </StyledCardFooter>
    );
};
export default CardFooter;
