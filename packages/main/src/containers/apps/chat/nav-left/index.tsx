import { FC } from "react";
import { Users, MessageSquare, Phone, AtSign, HelpCircle } from "react-feather";
import { StyledNavLeft, StyledNav, StyledNavLink } from "./style";

const NavLeft: FC = () => {
    return (
        <StyledNavLeft className="nav-left">
            <StyledNav>
                <StyledNavLink path="#!">
                    <Users />
                </StyledNavLink>
                <StyledNavLink path="#!" $active>
                    <MessageSquare />
                </StyledNavLink>
                <StyledNavLink path="#!">
                    <Phone />
                </StyledNavLink>
                <StyledNavLink path="#!">
                    <AtSign />
                </StyledNavLink>
                <StyledNavLink path="#!">
                    <HelpCircle />
                </StyledNavLink>
            </StyledNav>
        </StyledNavLeft>
    );
};

export default NavLeft;
