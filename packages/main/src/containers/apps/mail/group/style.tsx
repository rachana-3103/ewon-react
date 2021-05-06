import styled, { device } from "@doar/shared/styled";

export const StyledGroup = styled.div`
    width: 100vw;
    position: absolute;
    top: 0;
    left: 100vw;
    bottom: 0;
    transition: all 0.3s;
    @media (min-width: 375px) {
        left: 220px;
    }
    ${device.medium} {
        width: auto;
        right: 0;
        left: 220px;
    }
    ${device.xlarge} {
        width: 320px;
        border-right: 1px solid rgba(72, 94, 144, 0.16);
    }
`;
