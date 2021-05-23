import styled, { css } from "@doar/shared/styled";

interface IProps {
    $size?: "lg";
}

export const StyledLabel = styled.h6<IProps>`
    display: flex;
    align-items: center;
    color: #8392a5;
    font-size: 10px;
    font-weight: 500;
    font-family: -apple-system, BlinkMacSystemFont, "Inter UI", Roboto,
        sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin: 15px -10px 10px;
    &:first-of-type {
        margin-top: 0;
    }
    &:before,
    &:after {
        content: "";
        display: block;
        height: 1px;
        background-color: rgba(229, 233, 242, 0.7);
    }
    &:before {
        width: 15px;
        margin-right: 5px;
        ${({ $size }) =>
            $size === "lg" &&
            css`
                width: 27px;
            `}
    }
    &:after {
        margin-left: 5px;
        flex: 1;
    }
`;
