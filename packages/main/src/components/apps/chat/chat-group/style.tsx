import styled from "@doar/shared/styled";
import { MediaBody } from "@doar/components";

export const StyledGroup = styled.div`
    min-height: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    .media {
        & + .media {
            margin-top: 20px;
        }
    }
`;

export const StyledDivider = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    margin: 20px 0;
    color: #8392a5;
    font-size: 10px;
    font-family: -apple-system, BlinkMacSystemFont, "Inter UI", Roboto,
        sans-serif;
    font-weight: 500;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    &:first-of-type {
        margin-top: 0;
    }
    &:before,
    &:after {
        content: "";
        display: block;
        flex: 1;
        height: 1px;
        background-color: #e5e9f2;
    }
    &:before {
        margin-right: 10px;
    }
    &:after {
        margin-left: 10px;
    }
`;

export const StyledItemBody = styled(({ ...rest }) => <MediaBody {...rest} />)`
    margin-left: 20px;
    h6 {
        font-size: 14px;
        font-weight: 600;
        small {
            color: #8392a5;
        }
    }
    p {
        margin-bottom: 5px;
    }
`;
