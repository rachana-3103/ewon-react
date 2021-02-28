/* eslint-disable react/react-in-jsx-scope */
import styled, { device, Container } from "@doar/shared/styled";

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

export const StyledContainer = styled(({ ...rest }) => <Container {...rest} />)`
    padding-left: 0px;
    padding-right: 0px;
`;
