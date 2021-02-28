/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Link } from "react-router-dom";

interface IProps {
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
            <Link
                aria-label={label}
                rel="preload"
                className={className}
                to={path}
                onClick={onClick}
                {...rest}
            >
                {children}
            </Link>
        );
    }
    return (
        <a
            aria-label={label}
            rel={rel}
            className={className}
            href={path}
            target={target}
            onClick={onClick}
            {...rest}
        >
            {children}
        </a>
    );
};

Anchor.displayName = "Anchor";
