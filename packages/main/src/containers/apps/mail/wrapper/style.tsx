import styled, { device } from "@doar/shared/styled";

export const StyledWrapper = styled.div`
    position: fixed;
    top: 55px;
    bottom: 0;
    left: 0;
    right: 0;
    transform: translateX(-100vw);
    transition: all 0.3s;
    @media (min-width: 375px) {
        transform: translateX(-220px);
    }
    ${device.medium} {
        transform: translateX(0);
    }
    ${device.large} {
        top: 60px;
    }
`;
