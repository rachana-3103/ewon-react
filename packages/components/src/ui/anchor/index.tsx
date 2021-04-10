import React from "react";
import { SpaceProps, ColorProps, TypographyProps } from "@doar/shared/styled";
import { StyledLink, StyledAnchor } from "./style";

interface IProps extends SpaceProps, ColorProps, TypographyProps {
    path: string;
    className?: string | undefined;
    rel?: string | undefined;
    label?: string | undefined;
    target?: "_blank" | "_self" | "_parent" | "_top";
    onClick?: (e: React.MouseEvent) => void;
}

export const Anchor: React.FC<IProps> = ({
    path,
    children,
    className,
    rel,
    label,
    target,
    onClick,
    ...rest
}) => {
    const internal = /^\/(?!\/)/.test(path);
    if (internal) {
        return (
            <StyledLink
                aria-label={label}
                rel="preload"
                className={className}
                to={path}
                onClick={onClick}
                {...rest}
            >
                {children}
            </StyledLink>
        );
    }
    return (
        <StyledAnchor
            aria-label={label}
            rel={rel}
            className={className}
            href={path}
            target={target}
            onClick={onClick}
            {...rest}
        >
            {children}
        </StyledAnchor>
    );
};

Anchor.displayName = "Anchor";
