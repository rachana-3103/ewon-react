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
                <StyledButton size="sm" color="white" hasIcon mt="10px">
                    <Save />
                    Save
                </StyledButton>
                <StyledButton
                    size="sm"
                    color="white"
                    hasIcon
                    mt="10px"
                    ml="8px"
                >
                    <Upload />
                    Export
                </StyledButton>
                <StyledButton
                    size="sm"
                    color="white"
                    hasIcon
                    mt="10px"
                    ml={[null, "8px"]}
                >
                    <Share2 />
                    Share
                </StyledButton>
                <StyledButton size="sm" hasIcon mt="10px" ml="8px">
                    <Sliders />
                    Settings
                </StyledButton>
            </StyledWelcomeRight>
        </StyledWelcomeArea>
    );
};

export default WelcomeArea;
