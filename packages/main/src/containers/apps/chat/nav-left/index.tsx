import { FC } from "react";
import { Users, MessageSquare, Phone, AtSign, HelpCircle } from "react-feather";
import { useAppSelector } from "../../../../redux/hooks";
import { StyledNavLeft, StyledNav, StyledNavLink } from "./style";

const NavLeft: FC = () => {
    const { sidebar } = useAppSelector((state) => state.ui);
    return (
        <StyledNavLeft className="nav-left" $sidebar={sidebar}>
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
