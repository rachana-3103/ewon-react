import React from "react";
import { Container } from "@doar/components";
import { StyledContent } from "./style";

const Content: React.FC = ({ children }) => {
    return (
        <StyledContent>
            <Container pl="0" pr="0">
                {children}
            </Container>
        </StyledContent>
    );
};

export default Content;
