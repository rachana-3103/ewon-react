import { FC } from "react";
import classnames from "classnames";
import { StyledCardLink } from "./style";
import { ICardLinkProps } from "./types";

const CardLink: FC<ICardLinkProps> = ({
    children,
    className,
    path,
    ...restProps
}) => {
    return (
        <StyledCardLink
            path={path}
            className={classnames(className, "card-link")}
            {...restProps}
        >
            {children}
        </StyledCardLink>
    );
};

export default CardLink;
