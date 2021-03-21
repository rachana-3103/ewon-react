import styled, { device } from "@doar/shared/styled";
import { CardHeader } from "@doar/components";

export const StyledGrowthHeader = styled(({ ...props }) => (
    <CardHeader {...props} />
))`
    padding-top: 20px;
    padding-bottom: 20px;
    ${device.small} {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;
