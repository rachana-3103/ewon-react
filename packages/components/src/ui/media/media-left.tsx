import React from "react";
import { StyledMediaLeft } from "./style";

interface IImgProps {
    alignMent?: "top" | "middle" | "end";
}

const MediaLeft: React.FC<IImgProps> = ({
    children,
    alignMent,
    ...restProps
}) => {
    return (
        <StyledMediaLeft $alignMent={alignMent} {...restProps}>
            {children}
        </StyledMediaLeft>
    );
};

export default MediaLeft;
