import React from "react";
import { SpaceProps } from "@doar/shared/styled";
export interface BadgeProps extends SpaceProps {
    /**
     * The visual style of the badge
     */
    color?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark";
    /**
     *  Optional. Default is `contained`.
     */
    variant?: "contained" | "texted";
    /**
     * Optional. Default is `rounded`.
     */
    shape?: "rounded" | "square" | "circle";
    /**
     * Pass the `pill` props to make badges more rounded with some additional horizontal padding
     */
    pill?: boolean;
    /**
     * Optional. Extra Class Name
     */
    className?: string;
}
declare const Badge: React.FC<BadgeProps>;
export default Badge;
