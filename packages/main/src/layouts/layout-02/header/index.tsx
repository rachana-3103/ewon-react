import React from "react";
import { Menu, X } from "react-feather";
import AsideLogo from "../../../components/aside/logo";
import { StyledHeader, StyledMenuBtn } from "./style";

interface IProps {
    minimizeHandler: () => void;
    minimize: boolean;
}

const Header: React.FC<IProps> = ({ minimizeHandler, minimize }) => {
    return (
        <StyledHeader $minimize={minimize} className="aside-header">
            {!minimize && <AsideLogo />}

            <StyledMenuBtn className="menu-btn" onClick={minimizeHandler}>
                <Menu size={18} strokeWidth="2.5px" />
                <X size={20} strokeWidth="2.5px" />
            </StyledMenuBtn>
        </StyledHeader>
    );
};

export default Header;
