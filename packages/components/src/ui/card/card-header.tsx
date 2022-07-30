import { FC } from "react";
import classnames from "classnames";
import { StyledCardHeader } from "./style";
import { ICardHeaderProps } from "./types";

const CardHeader: FC<ICardHeaderProps> = ({
    children,
    className,
    variant,
    ...restProps
}) => {
    return (
        <StyledCardHeader
            className={classnames(className, "card-header")}
            $variant={variant}
            {...restProps}
        >
            {children}
        </StyledCardHeader>
    );
};

export default CardHeader;
