import styled from "@doar/shared/styled";
import { Media } from "@doar/components";

export const StyledMedia = styled(({ ...rest }) => <Media {...rest} />)`
    padding: 15px 20px;
    background-color: #f8f9fc;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:not(:first-of-type) {
        margin-top: -1px;
        border-top: 1px solid #e5e9f2;
    }
    &.unread {
        background-color: #fff;
    }
    &:hover,
    &:focus {
        background-color: #f3f8ff;
    }
`;

export const StyledTop = styled.div`
    color: #8392a5;
    margin-bottom: 2px;
    align-items: center;
    justify-content: space-between;
    display: flex;
`;
