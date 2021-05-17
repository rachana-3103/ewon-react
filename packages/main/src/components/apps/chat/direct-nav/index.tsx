import { FC } from "react";
import { Phone, Info, Flag, Star } from "react-feather";
import { StyledNav, StyledLink } from "./style";

const DirectNav: FC = () => {
    return (
        <StyledNav>
            <StyledLink path="#!">
                <Phone />
            </StyledLink>
            <StyledLink path="#!">
                <Info />
            </StyledLink>
            <StyledLink path="#!">
                <Star />
            </StyledLink>
            <StyledLink path="#!">
                <Flag />
            </StyledLink>
        </StyledNav>
    );
};

export default DirectNav;
