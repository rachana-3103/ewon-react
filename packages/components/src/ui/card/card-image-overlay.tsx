import { FC } from "react";
import classnames from "classnames";
import { StyledCardImgOverlay } from "./style";
import { ICardCommonProps } from "./types";

const CardImageOverlay: FC<ICardCommonProps> = ({
    children,
    className,
    ...restProps
}) => {
    return (
        <StyledCardImgOverlay
            className={classnames(className, "card-img-overlay")}
            {...restProps}
        >
            {children}
        </StyledCardImgOverlay>
    );
};

export default CardImageOverlay;
