import { FC } from "react";
import classnames from "classnames";
import { StyledNavLink } from "./style";

export interface IProps {
    /**
     * Pass extra classes
     */
    className?: string;
}

type CustomStyle =
    | "classic"
    | "icon"
    | "line"
    | "sidebar"
    | "aside"
    | "social"
    | "with-icon";

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

export const NavLink: FC<ILink> = ({
    children,
    className,
    path,
    active,
    onClick,
    customStyle,
    iconPosition,
    iconDistance,
    rel,
    label,
    target,
    ...rest
}) => {
    return (
        <StyledNavLink
            className={classnames(className, "nav-link", active && "active")}
            path={path}
            $active={active}
            onClick={onClick}
            $customStyle={customStyle}
            $iconPosition={iconPosition}
            $iconDistance={iconDistance}
            rel={rel}
            target={target}
            aria-label={label}
            {...rest}
        >
            {children}
        </StyledNavLink>
    );
};

NavLink.defaultProps = {
    iconPosition: "left",
    iconDistance: "7px",
};

NavLink.displayName = "NavLink";

export default NavLink;
