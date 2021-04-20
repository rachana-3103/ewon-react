import React from "react";
import { Save, Share2, Plus } from "react-feather";
import Breadcrumb from "../../../components/breadcrumb";
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
                <Breadcrumb
                    prev={[{ text: "Dashboard", link: "/" }]}
                    title="Helpdesk Management"
                    wcText="Welcome To Dashboard"
                />
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
