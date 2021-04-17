import React from "react";
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
     * Pass the `pill` props to make badges more rounded with some additional horizontal padding
     */
    pill?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({ color, pill, children }) => {
    return (
        <StyledBadge $color={color} $pill={pill}>
            {children}
        </StyledBadge>
    );
};

Badge.defaultProps = {
    color: "primary",
};
