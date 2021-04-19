import styled, { device } from "@doar/shared/styled";

export const StyledTime = styled.div`
    flex-shrink: 0;
    padding-left: 25px;
    margin-left: 10px;
    border-left: 1px solid rgba(72, 94, 144, 0.16);
    ${device.small} {
        width: 120px;
        text-align: right;
        padding-right: 25px;
        padding-left: 0;
        margin-left: 0;
        border-left: 0;
    }
    ${device.medium} {
        width: 150px;
    }
`;
