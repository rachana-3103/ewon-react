import styled from "@doar/shared/styled";
import { Media } from "@doar/components";

export const StyledWrap = styled.div`
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 10px;
    padding-right: 10px;
    border-top: 1px solid rgba(72, 94, 144, 0.16);
    flex: 1 1 auto;
`;

export const StyledList = styled.div``;

export const StyledItem = styled(({ ...rest }) => <Media {...rest} />)`
    padding: 8px 10px;
    color: #1b2e4b;
    border-radius: 0.25rem;
    cursor: pointer;
    align-items: center;
    &:hover,
    &:focus {
        background-color: #f5f6fa;
    }
`;
