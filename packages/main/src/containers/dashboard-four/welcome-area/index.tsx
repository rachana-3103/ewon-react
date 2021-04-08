import React from "react";
import { Save, Share2, Plus } from "react-feather";
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
                <PageHeader title="Helpdesk Management" />
            </StyledWelcomeLeft>
            <StyledWelcomeRight>
                <StyledButton size="sm" color="white" hasIcon>
                    <Save />
                    Save
                </StyledButton>
                <StyledButton size="sm" color="white" hasIcon ml="10px">
                    <Share2 />
                    Share
                </StyledButton>
                <StyledButton size="sm" ml="10px" hasIcon>
                    <Plus />
                    Add New Ticket
                </StyledButton>
            </StyledWelcomeRight>
        </StyledWelcomeArea>
    );
};

export default WelcomeArea;
