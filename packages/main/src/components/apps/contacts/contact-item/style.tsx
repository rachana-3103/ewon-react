import styled, { css } from "@doar/shared/styled";
import { Media } from "@doar/components";

interface IProps {
    $active?: string;
}

export const StyledMedia = styled(({ ...rest }) => <Media {...rest} />)<IProps>`
    color: #1b2e4b;
    padding: 10px;
    align-items: flex-end;
    border-radius: 0.25rem;
    &:not(:first-of-type) {
        margin-top: 2px;
    }
    &:hover,
    &:focus {
        background-color: #f5f6fa;
        cursor: default;
        nav {
            display: flex;
        }
    }
    ${({ $active }) =>
        $active === true &&
        css`
            @media (min-width: 480px) {
                background-color: #eef0f7;
            }
        `}
`;

export const StyledName = styled.h6`
    font-size: 13px;
    margin-bottom: 3px;
`;

export const StyledSpan = styled.span`
    color: #8392a5;
    display: block;
    line-height: 1.02;
    font-size: 12px;
`;

export const StyledNav = styled.nav`
    display: none;
    align-items: center;
    align-self: center;
`;

export const StyledNavBtn = styled.button`
    display: block;
    color: #8392a5;
    padding: 0;
    background-color: transparent;
    border: none;
    &:not(:first-of-type) {
        margin-left: 5px;
    }
    &:hover,
    &:focus {
        color: #1b2e4b;
    }
    svg {
        width: 16px;
    }
`;
