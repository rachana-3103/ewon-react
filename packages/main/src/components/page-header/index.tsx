import React from "react";
import { StyledBreadItem, StyledBreadWrap, PageHeading } from "./style";

interface IProps {
    title: string;
}

const PageHeader: React.FC<IProps> = ({ title }) => {
    return (
        <>
            <StyledBreadWrap>
                <StyledBreadItem path="/">Dashboard</StyledBreadItem>
                <StyledBreadItem active>{title}</StyledBreadItem>
            </StyledBreadWrap>
            <PageHeading>Welcome to Dashboard</PageHeading>
        </>
    );
};

export default PageHeader;
