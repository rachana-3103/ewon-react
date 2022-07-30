import { FC } from "react";
import classnames from "classnames";
import { StyledCardImage } from "./style";
import { ICardImageProps } from "./types";

const CardImage: FC<ICardImageProps> = ({
    src,
    alt,
    className,
    isTop,
    isBottom,
    ...restProps
}) => {
    const topClass = isTop ? "card-img-top" : "";
    const bottomClass = isBottom ? "card-img-bottom" : "";
    return (
        <StyledCardImage
            src={src}
            alt={alt}
            className={classnames(
                className,
                "card-image",
                topClass,
                bottomClass
            )}
            $isTop={isTop}
            $isBottom={isBottom}
            {...restProps}
        />
    );
};

export default CardImage;
