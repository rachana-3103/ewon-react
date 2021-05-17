import { FC } from "react";
import { MoreVertical } from "react-feather";
import { StyledNav, StyledLink } from "./style";

const SettingsNav: FC = () => {
    return (
        <StyledNav>
            <StyledLink path="#!">
                <MoreVertical />
            </StyledLink>
        </StyledNav>
    );
};

export default SettingsNav;
