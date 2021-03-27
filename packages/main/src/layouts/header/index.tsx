import { FC, useState, useCallback } from "react";
import { Search, Menu, X } from "react-feather";
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
    StyledNavbarHeader,
    StyledNavbarBody,
    StyledNavbarTitle,
} from "./style";

const Header: FC = () => {
    const [searchOpen, setSearchOpen] = useState(false);
    const searchHandler = useCallback(() => {
        setSearchOpen((prev) => !prev);
    }, []);

    const [menuOpen, setMenuOpen] = useState(false);

    const menuHandler = useCallback(() => {
        setMenuOpen((prev) => !prev);
    }, []);

    return (
        <>
            <StyledHeader>
                <Button
                    variant="texted"
                    ml="18px"
                    display={[null, null, null, "none"]}
                    onClick={menuHandler}
                >
                    <Menu color="#8392a5" size={20} strokeWidth="2.5px" />
                </Button>
                <StyledLogo>
                    <Anchor path="/">Header</Anchor>
                </StyledLogo>
                <StyledNavbarWrap $isOpen={menuOpen} onClick={menuHandler}>
                    <StyledNavbarMenu
                        $isOpen={menuOpen}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <StyledNavbarHeader>
                            <Anchor path="/">Header</Anchor>
                            <Button variant="texted" onClick={menuHandler}>
                                <X
                                    color="#7987a1"
                                    width={20}
                                    strokeWidth="2.5px"
                                />
                            </Button>
                        </StyledNavbarHeader>
                        <StyledNavbarBody>
                            <StyledNavbarTitle>
                                MAIN NAVIGATION
                            </StyledNavbarTitle>
                            <Navbar menus={menuData} />
                        </StyledNavbarBody>
                    </StyledNavbarMenu>
                </StyledNavbarWrap>
                <StyleNavbarRight>
                    <StyledNavbarElement>
                        <Button variant="texted" onClick={searchHandler}>
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
            </StyledHeader>
            <NavSearch isOpen={searchOpen} onClose={searchHandler} />
        </>
    );
};

export default Header;
