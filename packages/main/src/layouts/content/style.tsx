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
`;
