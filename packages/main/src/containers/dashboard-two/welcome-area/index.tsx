import React from "react";
import { Save, Upload, Share2, Sliders } from "react-feather";
import PageHeader from "../../../components/page-header";
import {
    StyledWelcomeArea,
    StyledWelcomeLeft,
    StyledWelcomeRight,
    StyledButton,
} from "./style";

const WelcomeArea: React.FC = () => {
    return (
        <StyledWelcomeArea>
            <StyledWelcomeLeft>
                <PageHeader />
            </StyledWelcomeLeft>
            <StyledWelcomeRight>
                <StyledButton size="sm" color="white" hasIcon>
                    <Save />
                    Save
                </StyledButton>
                <StyledButton size="sm" color="white" hasIcon ml="8px">
                    <Upload />
                    Export
                </StyledButton>
                <StyledButton size="sm" color="white" ml="8px" hasIcon>
                    <Share2 />
                    Share
                </StyledButton>
                <StyledButton size="sm" ml="8px" hasIcon>
                    <Sliders />
                    Settings
                </StyledButton>
            </StyledWelcomeRight>
        </StyledWelcomeArea>
    );
};

export default WelcomeArea;
