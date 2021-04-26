import styled, { device } from "@doar/shared/styled";

export const StyledWrap = styled.div`
    position: fixed;
    top: 55px;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    ${device.large} {
        top: 60px;
    }
    /* position: relative;
    margin-top: 55px;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: flex-start;
    ${device.large} {
        margin-top: 60px;
    } */
`;
