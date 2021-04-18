import { FC } from "react";
import { Badge } from "@doar/components";
import NavLine from "../../nav-line";
import { StyledNavLink } from "./style";

const Navbar: FC = () => {
    return (
        <NavLine mb="30px">
            <StyledNavLink active path="#!">
                Followers
                <Badge>340</Badge>
            </StyledNavLink>
            <StyledNavLink path="#!">
                Following <Badge>1,563</Badge>
            </StyledNavLink>
            <StyledNavLink path="#!">
                Request <Badge>19</Badge>
            </StyledNavLink>
        </NavLine>
    );
};

export default Navbar;
