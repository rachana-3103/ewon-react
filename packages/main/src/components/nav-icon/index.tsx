import { FC } from "react";
import classnames from "classnames";
import { SpaceProps } from "@doar/shared/styled";
import { StyledNav, StyledLink, StyledDivider } from "./style";

interface IProps extends SpaceProps {
    className?: string;
}

const NavIcon: FC<IProps> = ({ children, ...restProps }) => {
    return (
        <StyledNav className="nav-icon" {...restProps}>
            {children}
        </StyledNav>
    );
};

export default NavIcon;

interface INav extends IProps {
    path?: string;
    active?: boolean;
    onClick?: (e: HTMLAnchorElement) => void;
}

export const NavLink: FC<INav> = ({
    children,
    className,
    path,
    active,
    onClick,
    ...restProps
}) => {
    return (
        <StyledLink
            className={classnames(className, "nav-link")}
            path={path}
            active={active}
            onClick={onClick}
            {...restProps}
        >
            {children}
        </StyledLink>
    );
};

export const NavDivider: FC = () => {
    return <StyledDivider />;
};
