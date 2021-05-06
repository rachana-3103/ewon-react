import { FC } from "react";
import { Tag } from "react-feather";
import NavSidebar, { NavLink } from "../../../nav-sidebar";
import Label from "../label";
import { StyledWrap } from "./style";

const TagsNav: FC = () => {
    return (
        <StyledWrap>
            <Label pl="10px">Tags</Label>
            <NavSidebar fontSize="13px">
                <NavLink>
                    <Tag />
                    <span>Facebook</span>
                </NavLink>
                <NavLink>
                    <Tag />
                    <span>Twitter</span>
                </NavLink>
            </NavSidebar>
        </StyledWrap>
    );
};

export default TagsNav;
