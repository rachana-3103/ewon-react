import styled, { themeGet, device } from "@doar/shared/styled";

export const StyledRole = styled.span`
    display: block;
    color: ${themeGet("colors.text3")};
    font-size: 13px;
`;

export const StyledTime = styled.span`
    font-size: 12px;
    color: ${themeGet("colors.text3")};
    align-self: flex-start;
    display: none;
    ${device.small} {
        display: block;
    }
`;

export const StyledGrayBox = styled.div`
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 15px;
    padding-bottom: 15px;
    border: 1px solid ${themeGet("colors.border")};
    background-color: ${themeGet("colors.gray50")};
    ${device.small} {
        padding-left: 20px;
        padding-right: 20px;
    }
`;
