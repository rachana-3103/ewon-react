import { FC } from "react";
import { Folder } from "react-feather";
import NavSidebar, { NavLink } from "../../../nav-sidebar";
import Label from "../label";
import { StyledWrap } from "./style";

const LabelNav: FC = () => {
    return (
        <StyledWrap>
            <Label pl="10px">Label</Label>
            <NavSidebar fontSize="13px">
                <NavLink>
                    <Folder />
                    <span>Social</span>
                </NavLink>
                <NavLink>
                    <Folder />
                    <span>Promotions</span>
                </NavLink>
                <NavLink>
                    <Folder />
                    <span>Updates</span>
                </NavLink>
                <NavLink>
                    <Folder />
                    <span>Business</span>
                </NavLink>
                <NavLink>
                    <Folder />
                    <span>Finance</span>
                </NavLink>
            </NavSidebar>
        </StyledWrap>
    );
};

export default LabelNav;
