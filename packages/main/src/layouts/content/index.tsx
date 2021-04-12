import React from "react";
import { Container } from "@doar/components";
import { StyledContent } from "./style";

interface IProps {
    className?: string;
}

const Content: React.FC<IProps> = ({ children, className }) => {
    return (
        <StyledContent className={className}>
            <Container className="container" pl="0" pr="0">
                {children}
            </Container>
        </StyledContent>
    );
};

export default Content;
