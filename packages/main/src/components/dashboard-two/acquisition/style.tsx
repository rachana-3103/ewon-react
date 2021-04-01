import styled, { device } from "@doar/shared/styled";
import { CardHeader } from "@doar/components";

export const StyledHeader = styled(({ ...rest }) => <CardHeader {...rest} />)`
    border-bottom: 0;
    padding-bottom: 0px;
    padding-top: 20px;
    padding-left: 20px;
    ${device.large} {
        padding-top: 25px;
        padding-left: 25px;
    }
`;
