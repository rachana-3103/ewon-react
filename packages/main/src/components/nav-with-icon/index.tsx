import { FC } from "react";
import { StyledNav, StyledLink } from "./style";

interface IProps {
    className?: string;
    iconPosition?: "left" | "right";
    iconDistance?: string;
}

const NavWithIcon: FC<IProps> = ({
    children,
    className,
    iconPosition,
    iconDistance,
}) => {
    return (
        <StyledNav
            className={className}
            $iconPosition={iconPosition}
            $iconDistance={iconDistance}
        >
            {children}
        </StyledNav>
    );
};

NavWithIcon.defaultProps = {
    iconPosition: "left",
    iconDistance: "7px",
};

export default NavWithIcon;

interface ILinkProps extends IProps {
    path: string;
}

export const NavLink: FC<ILinkProps> = ({ children, className, path }) => {
    return (
        <StyledLink path={path} className={className}>
            {children}
        </StyledLink>
    );
};
