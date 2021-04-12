/* eslint-disable react/react-in-jsx-scope */
import styled, { device } from "@doar/shared/styled";

export const StyledContent = styled.div`
    padding: 20px;
    ${device.large} {
        padding: 25px;
        margin-top: 60px;
    }
    ${device.xlarge} {
        padding: 30px;
    }
    &.auth-content {
        min-height: calc(100vh - 107px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        & > .container {
            flex: 1;
        }
    }
    &.auth-content-alt {
        min-height: calc(100vh - 107px);
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`;
