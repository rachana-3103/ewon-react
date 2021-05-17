import styled, { css, device } from "@doar/shared/styled";
import { Anchor } from "@doar/components";

export const StyledNav = styled.nav`
    display: flex;
    align-items: center;
    display: none;
`;

interface ILinkProps {
    $active?: boolean;
}

export const StyledLink = styled(({ ...rest }) => (
    <Anchor {...rest} />
))<ILinkProps>`
    color: #8392a5;
    padding: 2px;
    border-radius: 0.25rem;
    display: flex;
    align-items: center;
    &:not(:first-of-type) {
        margin-left: 2px;
    }
    ${device.small} {
        padding: 2px 5px;
    }
    ${({ $active }) =>
        !!$active &&
        css`
            color: #1b2e4b;
        `}
    span {
        margin-left: 5px;
        font-weight: 500;
    }
    svg {
        width: 20px;
    }
`;
