import React from "react";
import classnames from "classnames";
import { StyledBadge } from "./style";

export interface BadgeProps {
    /**
     * The visual style of the badge
     */
    color?:
        | "primary"
        | "secondary"
        | "success"
        | "danger"
        | "warning"
        | "info"
        | "light"
        | "dark";
    /**
     *  Optional. Default is `contained`.
     */
    variant?: "contained" | "texted";
    /**
     * Pass the `pill` props to make badges more rounded with some additional horizontal padding
     */
    pill?: boolean;
    /**
     * Optional. Extra Class Name
     */
    className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
    color,
    variant,
    pill,
    children,
    className,
}) => {
    return (
        <StyledBadge
            $color={color}
            $variant={variant}
            $pill={pill}
            className={classnames(className, "badge")}
        >
            {children}
        </StyledBadge>
    );
};

Badge.defaultProps = {
    color: "primary",
    variant: "contained",
};
