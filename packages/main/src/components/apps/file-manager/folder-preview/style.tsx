import styled from "@doar/shared/styled";
import { Media, MediaBody } from "@doar/components";

export const StyledMedia = styled(({ ...rest }) => <Media {...rest} />)`
    position: relative;
    border: 1px solid rgba(72, 94, 144, 0.16);
    padding: 10px 12px;
    background-color: #fff;
    border-radius: 0.25rem;
    transition: all 0.2s ease-in-out;
    & > svg {
        width: 42px;
        height: 42px;
        stroke-width: 1.5px;
        color: #0168fa;
        opacity: 0.7;
    }
`;

export const StyledMediaBody = styled(({ ...rest }) => <MediaBody {...rest} />)`
    margin-top: 5px;
    margin-left: 10px;
    h6 {
        margin-bottom: 1px;
    }
    span {
        font-size: 12px;
        color: #8392a5;
        display: block;
    }
`;
