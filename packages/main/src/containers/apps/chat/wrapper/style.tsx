import styled, { device } from "@doar/shared/styled";

export const StyledWrapper = styled.div`
    background-color: #f8f9fc;
    position: fixed;
    top: 55px;
    bottom: 0;
    left: 0;
    right: 0;
    ${device.large} {
        top: 60px;
    }
`;
