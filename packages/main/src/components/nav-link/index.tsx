import { FC } from "react";
import { StyledNavLine, StyledNavLink } from "./style";

interface IProps {
    className?: string;
}

const NavLine: FC<IProps> = ({ children, className }) => {
    return <StyledNavLine className={className}>{children}</StyledNavLine>;
};

export default NavLine;

interface INavLink extends IProps {
    active?: boolean;
    path: string;
}

export const NavLineLink: FC<INavLink> = ({
    children,
    path,
    active,
    className,
}) => (
    <StyledNavLink $active={active} href={path} className={className}>
        {children}
    </StyledNavLink>
);
