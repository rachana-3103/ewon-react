import React from "react";
import { StyledAvatar, StyledInitialText } from "./style";

interface IProps {
    /**
     * Demo url `https://via.placeholder.com/150`
     */
    imageUrl?: string;
    /**
     * Image alt text
     */
    altText?: string;
    /**
     * Default size is `38x38`
     */
    size: "default" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
    /**
     * Default size is `square`
     */
    shape: "circle" | "rounded" | "square";
    /**
     * user's initial name. Maximum length is 2.
     */
    initialText?: string;
    /**
     * An avatar can have a status indicator to indicate users availability.
     */
    status?: "online" | "offline";
}

export const Avatar: React.FC<IProps> = ({
    imageUrl,
    altText,
    size,
    shape,
    initialText,
    status,
}) => {
    const isInitialText = Boolean(initialText);
    const iniT = initialText?.substring(0, 2);
    return (
        <StyledAvatar
            $size={size}
            $shape={shape}
            $initialText={isInitialText}
            $status={status}
        >
            {isInitialText && <StyledInitialText>{iniT}</StyledInitialText>}
            {!isInitialText && <img src={imageUrl} alt={altText} />}
        </StyledAvatar>
    );
};

Avatar.defaultProps = {
    size: "default",
    shape: "circle",
};
