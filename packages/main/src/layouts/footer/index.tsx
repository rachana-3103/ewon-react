import React from "react";
import { Heart } from "react-feather";
import {
    StyledFooter,
    StyledFooterLeft,
    StyledFooterRight,
    StyledFooterNav,
    StyledFotterNavLink,
} from "./style";

const Footer: React.FC = () => {
    return (
        <StyledFooter>
            <StyledFooterLeft>
                <span>&copy; Doar {new Date().getFullYear()} </span>
                <span className="copright-link">
                    Made with <Heart size="24" /> by{"  "}
                    <a
                        href="https://hasthemes.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        HasThemes
                    </a>
                </span>
            </StyledFooterLeft>
            <StyledFooterRight>
                <StyledFooterNav>
                    <StyledFotterNavLink path="https://themeforest.net/licenses/standard">
                        Licenses
                    </StyledFotterNavLink>
                    <StyledFotterNavLink path="/">
                        Change Log
                    </StyledFotterNavLink>
                    <StyledFotterNavLink path="/">Get Help</StyledFotterNavLink>
                </StyledFooterNav>
            </StyledFooterRight>
        </StyledFooter>
    );
};

export default Footer;
