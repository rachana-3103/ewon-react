import styled from "@doar/shared/styled";
import { CardHeader } from "@doar/components";

export const StyledHeader = styled(({ ...rest }) => <CardHeader {...rest} />)`
    padding-top: 20px;
    padding-bottom: 0px;
    border-bottom: 0;
`;

export const StyledDiv = styled.div`
    font-size: 12px;
    justify-content: space-between;
    display: flex;
`;
