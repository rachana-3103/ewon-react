import styled, { device } from "@doar/shared/styled";
import { CardHeader } from "@doar/components";

export const StyledHeader = styled(({ ...rest }) => <CardHeader {...rest} />)`
    border-bottom: 0;
    padding-bottom: 0px;
    padding-top: 20px;
    ${device.small} {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
    }
`;

export const StyledTitle = styled.h6`
    margin-bottom: 5px;
`;

export const StyeldSubtitle = styled.p`
    font-size: 13px;
    color: #8392a5;
    margin-bottom: 0px;
`;

export const StyeldHeaderRight = styled.div``;
