import { FC } from "react";
import { Inbox, Monitor, Clock, Star, File, Slash, Trash } from "react-feather";
import { Badge } from "@doar/components";
import NavSidebar, { NavLink } from "../../../nav-sidebar";
import { StyledWrap } from "./style";

const MainNav: FC = () => {
    return (
        <StyledWrap>
            <NavSidebar fontSize="13px">
                <NavLink active>
                    <Inbox />
                    <span>Inbox</span>
                    <Badge>20</Badge>
                </NavLink>
                <NavLink>
                    <Monitor />
                    <span>Starred</span>
                    <Badge>3</Badge>
                </NavLink>
                <NavLink>
                    <Clock />
                    <span>Important</span>
                    <Badge>10</Badge>
                </NavLink>
                <NavLink>
                    <Star />
                    <span>Sent Mail</span>
                    <Badge>8</Badge>
                </NavLink>
                <NavLink>
                    <File />
                    <span>Drafts</span>
                    <Badge>15</Badge>
                </NavLink>
                <NavLink>
                    <Slash />
                    <span>Spam</span>
                    <Badge>128</Badge>
                </NavLink>
                <NavLink>
                    <Trash />
                    <span>Trash</span>
                    <Badge>6</Badge>
                </NavLink>
            </NavSidebar>
        </StyledWrap>
    );
};

export default MainNav;
