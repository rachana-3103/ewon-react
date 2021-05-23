import styled, { device } from "@doar/shared/styled";

export const StyledSidebar = styled.div`
    background-color: #fff;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100vw;
    @media (min-width: 375px) {
        width: 220px;
        border-right: 1px solid rgba(72, 94, 144, 0.16);
    }
    ${device.medium} {
        left: 0;
        opacity: 1;
        visibility: visible;
    }
`;

export const StyledBody = styled.div`
    position: relative;
    height: 100%;
`;
