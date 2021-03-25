import styled, { css } from "@doar/shared/styled";

interface INavSearch {
    $isOpen: boolean;
}

export const StyledNavSearch = styled.div<INavSearch>`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    visibility: hidden;
    opacity: 0;
    transition: all 0.2s ease-in-out;
    ${({ $isOpen }) =>
        $isOpen === true &&
        css`
            visibility: visible;
            opacity: 1;
        `}
`;
