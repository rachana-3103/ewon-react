import React from "react";
import { StyledBreadItem, StyledBreadWrap, PageHeading } from "./style";

interface IProps {
    /**
     * Pass previous page's text and link
     */
    prev: {
        text: string;
        link: string;
    };
    /**
     * Write page's title
     */
    title: string;
    /**
     * Write page's welcome text
     */
    wcText?: string;
}

const PageHeader: React.FC<IProps> = ({ prev, title, wcText }) => {
    return (
        <>
            <StyledBreadWrap>
                <StyledBreadItem path={prev.link}>{prev.text}</StyledBreadItem>
                <StyledBreadItem active>{title}</StyledBreadItem>
            </StyledBreadWrap>
            {wcText && <PageHeading>{wcText}</PageHeading>}
        </>
    );
};

export default PageHeader;
