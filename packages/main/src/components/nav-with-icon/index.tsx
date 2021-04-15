import { FC } from "react";
import { StyledNav, StyledLink } from "./style";

interface IProps {
    className?: string;
}

const NavWithIcon: FC<IProps> = ({ children, className }) => {
    return <StyledNav className={className}>{children}</StyledNav>;
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
