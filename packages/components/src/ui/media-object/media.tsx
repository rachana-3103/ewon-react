import React from "react";
import { StyledMedia, StyledMediaBody, StyledMediaLeft } from "./style";

interface IMediaProps {
    as?: React.ElementType;
    className?: string;
}

export const Media: React.FC<IMediaProps> = ({
    children,
    as,
    className,
    ...restProps
}) => {
    const classes = className || "";
    return (
        <StyledMedia className={classes} as={as} {...restProps}>
            {children}
        </StyledMedia>
    );
};

interface IImgProps {
    alignMent?: "top" | "middle" | "end";
}

export const MediaLeft: React.FC<IImgProps> = ({
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

interface IMediaBodyProps {
    className?: string;
}

export const MediaBody: React.FC<IMediaBodyProps> = ({
    children,
    className,
}) => {
    const classes = className || "";
    return <StyledMediaBody className={classes}>{children}</StyledMediaBody>;
};
