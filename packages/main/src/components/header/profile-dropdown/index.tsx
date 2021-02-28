import React from "react";
import {
    Edit3,
    User,
    HelpCircle,
    LifeBuoy,
    Settings,
    LogOut,
} from "react-feather";
import { DropdownToggle, Dropdown, Avatar } from "@doar/components";
import {
    StyledDropMenu,
    StyledAuthorName,
    StyledAuthorRole,
    StyledDropItem,
    StyledDivider,
} from "./style";

const ProfileDropdown: React.FC = () => {
    return (
        <Dropdown direction="down">
            <DropdownToggle variant="texted">
                <Avatar size="sm" shape="circle" initialText="df" />
            </DropdownToggle>
            <StyledDropMenu>
                <Avatar size="lg" shape="circle" initialText="df" />
                <StyledAuthorName>Katherine Pechon</StyledAuthorName>
                <StyledAuthorRole>Administrator</StyledAuthorRole>
                <StyledDropItem path="/">
                    <Edit3 size="24" />
                    Edit Profile
                </StyledDropItem>
                <StyledDropItem path="/" mt="10px">
                    <User size="24" />
                    View Profile
                </StyledDropItem>
                <StyledDivider />
                <StyledDropItem path="/" mt="10px">
                    <HelpCircle size="24" />
                    Help Center
                </StyledDropItem>
                <StyledDropItem path="/" mt="10px">
                    <LifeBuoy size="24" />
                    Forum
                </StyledDropItem>
                <StyledDropItem path="/" mt="10px">
                    <Settings size="24" />
                    Account Settings
                </StyledDropItem>
                <StyledDropItem path="/" mt="10px">
                    <Settings size="24" />
                    Privacy Settings
                </StyledDropItem>
                <StyledDropItem path="/" mt="10px">
                    <LogOut size="24" />
                    Sign Out
                </StyledDropItem>
            </StyledDropMenu>
        </Dropdown>
    );
};

export default ProfileDropdown;
