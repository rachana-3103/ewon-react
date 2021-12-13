import styled, { device } from "@doar/shared/styled";

export const StyledContent = styled.main`
    height: 100vh;
    ${device.large} {
        margin-left: 60px;
    }
    ${device.xlarge} {
        margin-left: 240px;
    }
`;
