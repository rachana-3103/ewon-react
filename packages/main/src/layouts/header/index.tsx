import { FC, useState, useCallback, useEffect } from "react";
import { Search, Menu, X, ArrowLeft } from "react-feather";
import { Anchor, Navbar, Button } from "@doar/components";
import { menuData } from "@doar/shared/data";
import MessageDropdown from "../../components/header/message-dropdown";
import NotificationDropdown from "../../components/header/notification-dropdown";
import ProfileDropdown from "../../components/header/profile-dropdown";
import NavSearch from "../../components/header/nav-search";
import { useAppDispatch } from "../../redux/hooks";
import { toggleSidebar } from "../../redux/slices/ui";
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
    StyledMenuBtn,
    StyledSidebarBtn,
} from "./style";

interface IProps {
    hasSidebar?: boolean;
}

const Header: FC<IProps> = ({ hasSidebar }) => {
    const dispatch = useAppDispatch();
    const [searchOpen, setSearchOpen] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const searchHandler = useCallback(() => {
        setSearchOpen((prev) => !prev);
    }, []);

    const [menuOpen, setMenuOpen] = useState(false);

    const sidebarHandler = useCallback(
        (_, isOpen?: "open") => {
            if (isOpen) {
                dispatch(toggleSidebar(false));
            } else {
                dispatch(toggleSidebar(true));
            }
            setSidebarOpen((prev) => !prev);
        },
        [dispatch]
    );

    const menuHandler = useCallback(() => {
        setMenuOpen((prev) => !prev);
        if (menuOpen) {
            sidebarHandler(undefined, "open");
        }
    }, [menuOpen, sidebarHandler]);

    useEffect(() => {
        return () => {
            sidebarHandler(undefined, "open");
        };
    }, [sidebarHandler]);

    return (
        <>
            <StyledHeader>
                <StyledMenuBtn
                    variant="texted"
                    onClick={menuHandler}
                    $hasSidebar={hasSidebar}
                    $sidebarOpen={sidebarOpen}
                >
                    <Menu size={20} strokeWidth="2.5px" />
                </StyledMenuBtn>
                {hasSidebar && (
                    <StyledSidebarBtn
                        variant="texted"
                        onClick={sidebarHandler}
                        $hasSidebar={hasSidebar}
                        $sidebarOpen={sidebarOpen}
                    >
                        <ArrowLeft size={20} strokeWidth="2.5px" />
                    </StyledSidebarBtn>
                )}
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
