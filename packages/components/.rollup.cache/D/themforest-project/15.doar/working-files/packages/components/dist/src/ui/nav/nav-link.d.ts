import { FC } from "react";
export interface IProps {
    /**
     * Pass extra classes
     */
    className?: string;
}
declare type CustomStyle = "classic" | "icon" | "line" | "sidebar" | "aside" | "social" | "with-icon";
interface ILink extends IProps {
    path: string;
    active?: boolean;
    onClick?: (e: HTMLAnchorElement) => void;
    customStyle?: CustomStyle;
    iconPosition?: "left" | "right";
    iconDistance?: string;
    rel?: string;
    label?: string | undefined;
    target?: "_blank" | "_self" | "_parent" | "_top";
}
export declare const NavLink: FC<ILink>;
export default NavLink;
