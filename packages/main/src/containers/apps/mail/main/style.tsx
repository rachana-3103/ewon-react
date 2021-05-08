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

export const StyledHeader = styled.div`
    background-color: #fff;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 55px;
    border-bottom: 1px solid rgba(72, 94, 144, 0.16);
    padding: 0 20px;
    display: flex;
    align-items: center;
    z-index: 99;
`;

export const StyledBody = styled.div`
    background-color: #fff;
    width: 100%;
    height: 100%;
`;

export const StyledToggleBtn = styled.button`
    padding: 0;
    background-color: transparent;
    border: none;
    color: #1b2e4b;
    margin-right: 20px;
    display: none;
    ${device.large} {
        display: block;
    }
    ${device.xlarge} {
        display: none;
    }
`;
