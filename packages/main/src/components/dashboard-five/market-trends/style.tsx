import styled, { device } from "@doar/shared/styled";
import { CardHeader } from "@doar/components";

export const StyledHeader = styled(({ ...props }) => <CardHeader {...props} />)`
    padding-top: 20px;
    padding-bottom: 20px;
    ${device.medium} {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

export const StyledChart = styled.div`
    height: 180px;
    margin-bottom: -33px;
    ${device.large} {
        height: 205px;
    }
    ${device.xlarge} {
        height: 390px;
    }
`;
