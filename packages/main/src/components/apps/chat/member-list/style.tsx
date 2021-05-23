import styled from "@doar/shared/styled";
import { Media } from "@doar/components";

export const StyledWrap = styled.div`
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 20px;
    padding-bottom: 20px;
    width: 100%;
    height: 100%;
`;

export const StyledList = styled.div`
    margin-top: 10px;
`;

export const StyledItem = styled(({ ...rest }) => <Media {...rest} />)`
    padding: 6px 10px;
    align-items: center;
    color: #1b2e4b;
    border-radius: 0.25rem;
    cursor: pointer;
    &:not(:first-of-type) {
        margin-top: 2px;
    }
    &:focus,
    &:hover {
        background-color: #f5f6fa;
    }
`;
