import React from "react";
import { MoreVertical } from "react-feather";
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
                <PageHeader title="Cryptocurrency" />
            </StyledWelcomeLeft>
            <StyledWelcomeRight>
                <StyledButton size="sm" hasIcon mt="10px">
                    Btc
                </StyledButton>
                <StyledButton
                    size="sm"
                    color="white"
                    hasIcon
                    mt="10px"
                    ml="5px"
                >
                    Eth
                </StyledButton>
                <StyledButton
                    size="sm"
                    color="white"
                    hasIcon
                    mt="10px"
                    ml="5px"
                >
                    Ltc
                </StyledButton>
                <StyledButton
                    size="sm"
                    color="white"
                    hasIcon
                    mt="10px"
                    ml="5px"
                >
                    Btg
                </StyledButton>
                <StyledButton
                    size="sm"
                    color="white"
                    mt="10px"
                    ml="5px"
                    className="btn-icon"
                >
                    <MoreVertical size="19" strokeWidth="2.5px" />
                </StyledButton>
            </StyledWelcomeRight>
        </StyledWelcomeArea>
    );
};

export default WelcomeArea;
