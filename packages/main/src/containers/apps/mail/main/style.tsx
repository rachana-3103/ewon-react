import styled, { device } from "@doar/shared/styled";

export const StyledMain = styled.div`
    position: absolute;
    top: 0;
    left: 200vw;
    bottom: 0;
    width: 100vw;
    background-color: #f5f6fa;
    ${device.xlarge} {
        left: 540px;
        width: auto;
        right: 0;
    }
`;
