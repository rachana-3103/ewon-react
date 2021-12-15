import React from "react";
import { Menu, X } from "react-feather";
import AsideLogo from "../../../components/aside-layout/logo";
import { StyledHeader, StyledMenuBtn } from "./style";

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
        </StyledHeader>
    );
};

export default Header;
