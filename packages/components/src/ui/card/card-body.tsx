import { FC } from "react";
import classnames from "classnames";
import { StyledCardBody } from "./style";
import { ICardBodyProps } from "./types";

const CardBody: FC<ICardBodyProps> = ({
    children,
    className,
    ...restProps
}) => {
    return (
        <StyledCardBody
            className={classnames(className, "card-body")}
            {...restProps}
        >
            {children}
        </StyledCardBody>
    );
};

export default CardBody;
