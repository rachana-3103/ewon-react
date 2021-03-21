import styled from "@doar/shared/styled";
import { CardHeader } from "@doar/components";

export const StyledHeader = styled(({ ...props }) => <CardHeader {...props} />)`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const StyledTitle = styled.h6`
    margin-bottom: 0px;
`;

export const StyledHeaderRight = styled.div`
    font-size: 13px;
    align-items: center;
    display: flex;
`;

export const StyledHeaderRightText = styled.span`
    margin-right: 5px;
`;

export const StyledHeaderRightIcon = styled.span`
    cursor: pointer;
    line-height: 0;
    color: #8392a5;
    display: flex;
    align-items: center;
    i {
        margin-left: 5px;
    }
`;

export const StyeldMap = styled.div`
    padding: 25px 20px;
`;
