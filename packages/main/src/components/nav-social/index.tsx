import { FC } from "react";
import classnames from "classnames";
import { SpaceProps } from "@doar/shared/styled";
import { StyledNav, StyledLink } from "./style";

interface IProps extends SpaceProps {
    className?: string;
}

const NavSocial: FC<IProps> = ({ className, children, ...restProps }) => {
    return (
        <StyledNav
            className={classnames(className, "nav-social")}
            {...restProps}
        >
            {children}
        </StyledNav>
    );
};

export default NavSocial;

interface INav extends IProps {
    path?: string;
}

export const NavLink: FC<INav> = ({
    className,
    path,
    children,
    ...restProps
}) => {
    return (
        <StyledLink
            path={path}
            className={classnames(className, "nav-link")}
            rel="noopener"
            {...restProps}
        >
            {children}
        </StyledLink>
    );
};
