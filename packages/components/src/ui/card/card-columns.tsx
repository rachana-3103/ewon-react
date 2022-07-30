import { FC } from "react";
import classnames from "classnames";
import { StyledCardColumns } from "./style";
import { ICardCommonProps } from "./types";

const CardColumns: FC<ICardCommonProps> = ({
    children,
    className,
    ...restProps
}) => {
    return (
        <StyledCardColumns
            className={classnames(className, "card-columns")}
            {...restProps}
        >
            {children}
        </StyledCardColumns>
    );
};

export default CardColumns;
