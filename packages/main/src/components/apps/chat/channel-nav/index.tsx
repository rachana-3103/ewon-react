import { FC } from "react";
import { UserPlus, Users } from "react-feather";
import { StyledNav, StyledLink } from "./style";

const ChannelNav: FC = () => {
    return (
        <StyledNav>
            <StyledLink path="#!">
                <UserPlus />
            </StyledLink>
            <StyledLink path="#!" $active>
                <Users />
                <span>25</span>
            </StyledLink>
        </StyledNav>
    );
};

export default ChannelNav;
