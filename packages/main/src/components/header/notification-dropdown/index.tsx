import React from "react";
import { Link } from "react-router-dom";
import { Bell } from "react-feather";
import { DropdownToggle, Dropdown } from "@doar/components";
import Notification from "../notification";
import {
    StyledDropMenu,
    StyledDropHeader,
    StyledDropItem,
    StyledDropFooter,
    StyledBadge,
} from "./style";

const NotificationDropdown: React.FC = () => {
    return (
        <Dropdown direction="down">
            <DropdownToggle variant="texted">
                <Bell className="header-icon" />
                <StyledBadge>2</StyledBadge>
            </DropdownToggle>
            <StyledDropMenu>
                <StyledDropHeader>NOTIFICATIONS</StyledDropHeader>
                <StyledDropItem path="/">
                    <Notification />
                </StyledDropItem>
                <StyledDropItem path="/">
                    <Notification />
                </StyledDropItem>
                <StyledDropItem path="/">
                    <Notification />
                </StyledDropItem>
                <StyledDropItem path="/">
                    <Notification />
                </StyledDropItem>
                <StyledDropFooter>
                    <Link to="/">View all Notifications</Link>
                </StyledDropFooter>
            </StyledDropMenu>
        </Dropdown>
    );
};

export default NotificationDropdown;
