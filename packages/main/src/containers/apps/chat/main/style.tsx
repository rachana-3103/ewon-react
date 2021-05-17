import styled, { device } from "@doar/shared/styled";

export const StyledMain = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    visibility: hidden;
    opacity: 0;
    transform: translateX(100vw);
    transition: all 0.3s;
    ${device.small} {
        transform: translateX(310px);
    }
    ${device.large} {
        opacity: 1;
        left: 310px;
        transform: none;
        visibility: visible;
    }
`;
