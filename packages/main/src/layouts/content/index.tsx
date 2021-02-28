import React from "react";
import { StyledContent, StyledContainer } from "./style";

const Content: React.FC = ({ children }) => {
    return (
        <StyledContent>
            <StyledContainer>{children}</StyledContainer>
        </StyledContent>
    );
};

export default Content;
