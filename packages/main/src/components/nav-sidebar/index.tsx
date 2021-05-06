import { FC } from "react";
import classnames from "classnames";
import { SpaceProps, TypographyProps } from "@doar/shared/styled";
import { StyledNav, StyledLink } from "./style";

interface IProps extends SpaceProps, TypographyProps {
    className?: string;
}

const NavSidebar: FC<IProps> = ({ className, children, ...restProps }) => {
    return (
        <StyledNav
            className={classnames(className, "nav-sidebar")}
            {...restProps}
        >
            {children}
        </StyledNav>
    );
};

export default NavSidebar;

interface INav extends IProps {
    path?: string;
    active?: boolean;
}

export const NavLink: FC<INav> = ({
    className,
    path,
    children,
    active,
    ...restProps
}) => {
    return (
        <StyledLink
            path={path}
            className={classnames(className, "nav-link", active && "active")}
            $active={active}
            {...restProps}
        >
            {children}
        </StyledLink>
    );
};
