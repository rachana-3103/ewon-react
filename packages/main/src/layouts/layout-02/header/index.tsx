import React, { useCallback } from "react";
import { Menu, X, ArrowLeft } from "react-feather";
import AsideLogo from "../../../components/aside-layout/logo";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { toggleSidebar } from "../../../redux/slices/ui";
import { StyledHeader, StyledMenuBtn, StyledSidebarBtn } from "./style";

interface IProps {
    minimizeHandler: () => void;
    displayHandler: () => void;
    minimize: boolean;
    mdMinimize: boolean;
    show: boolean;
}

const Header: React.FC<IProps> = ({
    minimizeHandler,
    displayHandler,
    minimize,
    mdMinimize,
    show,
}) => {
    const dispatch = useAppDispatch();
    const { sidebar } = useAppSelector((state) => state.ui);
    const sidebarHandler = useCallback(
        (_, isOpen?: "open") => {
            dispatch(toggleSidebar({ isOpen }));
        },
        [dispatch]
    );

    return (
        <StyledHeader
            $minimize={minimize}
            $mdMinimize={mdMinimize}
            $show={show}
            className="aside-header"
        >
            <AsideLogo />

            <StyledMenuBtn className="minimize-btn" onClick={minimizeHandler}>
                <Menu size={18} strokeWidth="2.5px" />
            </StyledMenuBtn>
            <StyledMenuBtn className="display-btn" onClick={displayHandler}>
                <Menu size={18} strokeWidth="2.5px" />
                <X size={18} strokeWidth="2.5px" />
            </StyledMenuBtn>
            <StyledSidebarBtn onClick={sidebarHandler} $sidebarOpen={!sidebar}>
                <ArrowLeft size={20} strokeWidth="2.5px" />
            </StyledSidebarBtn>
        </StyledHeader>
    );
};

export default Header;
