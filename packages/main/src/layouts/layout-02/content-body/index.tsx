import React from "react";
import { Container } from "@doar/components";
import { StyledBody } from "./style";

const ContentBody: React.FC = ({ children }) => {
    return (
        <StyledBody className="content-body">
            <Container className="container" px="0" mb="25px">
                {children}
            </Container>
        </StyledBody>
    );
};

export default ContentBody;
