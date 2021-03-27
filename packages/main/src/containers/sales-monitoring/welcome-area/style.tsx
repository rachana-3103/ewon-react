import styled, { device } from "@doar/shared/styled";
import { Button } from "@doar/components";

export const StyledWelcomeArea = styled.div`
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    ${device.small} {
        display: flex;
    }
    ${device.large} {
        margin-bottom: 25px;
    }
    ${device.xlarge} {
        margin-bottom: 30px;
    }
`;

export const StyledWelcomeLeft = styled.div``;

export const StyledWelcomeRight = styled.div`
    display: none;
    ${device.medium} {
        display: block;
    }
`;

export const StyledButton = styled((props) => <Button {...props} />)`
    text-transform: uppercase;
    font-size: 11px;
    line-height: 1.773;
    padding-left: 15px;
    padding-right: 15px;
    font-weight: 600;
    letter-spacing: 0.5px;
`;
