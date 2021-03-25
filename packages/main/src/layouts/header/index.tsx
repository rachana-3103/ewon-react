import React from "react";
import { Search } from "react-feather";
import { Anchor, Navbar, Button } from "@doar/components";
import { menuData } from "@doar/shared/data";
import MessageDropdown from "../../components/header/message-dropdown";
import NotificationDropdown from "../../components/header/notification-dropdown";
import ProfileDropdown from "../../components/header/profile-dropdown";
import NavSearch from "../../components/header/nav-search";
import {
    StyledHeader,
    StyledLogo,
    StyledNavbarWrap,
    StyledNavbarMenu,
    StyleNavbarRight,
    StyledNavbarElement,
} from "./style";

const Header: React.FC = () => {
    return (
        <StyledHeader>
            <StyledLogo>
                <Anchor path="/">Header</Anchor>
            </StyledLogo>
            <StyledNavbarWrap>
                <StyledNavbarMenu>
                    <Navbar menus={menuData} />
                </StyledNavbarMenu>
            </StyledNavbarWrap>
            <StyleNavbarRight>
                <StyledNavbarElement>
                    <Button variant="texted">
                        <Search className="header-icon" />
                    </Button>
                </StyledNavbarElement>
                <StyledNavbarElement ml={["8px", "15px"]}>
                    <MessageDropdown />
                </StyledNavbarElement>
                <StyledNavbarElement ml={["8px", "15px"]}>
                    <NotificationDropdown />
                </StyledNavbarElement>
                <StyledNavbarElement ml={["15px", "20px", "30px"]}>
                    <ProfileDropdown />
                </StyledNavbarElement>
            </StyleNavbarRight>
            <NavSearch />
        </StyledHeader>
    );
};

export default Header;
