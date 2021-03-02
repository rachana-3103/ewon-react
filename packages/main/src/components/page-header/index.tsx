import React from "react";
import { StyledBreadItem, StyledBreadWrap, PageHeading } from "./style";

const PageHeader: React.FC = () => {
    return (
        <>
            <StyledBreadWrap>
                <StyledBreadItem path="/">Dashboard</StyledBreadItem>
                <StyledBreadItem active>Sales Monitoring</StyledBreadItem>
            </StyledBreadWrap>
            <PageHeading>Welcome to Dashboard</PageHeading>
        </>
    );
};

export default PageHeader;
