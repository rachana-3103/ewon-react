import styled, { css, device } from "@doar/shared/styled";
import { Anchor } from "@doar/components";

export const StyledWrap = styled.div`
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 20px;
    padding-bottom: 20px;
    flex: 1 1 auto;
`;

export const StyledHeader = styled.div`
    padding-left: 10px;
    padding-right: 10px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const StyledBtn = styled.button`
    color: #8392a5;
    background: transparent;
    padding: 0;
    border: none;
`;

export const StyledNav = styled.nav`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    margin-bottom: 20px;
`;

interface ILinkProps {
    $active?: boolean;
}

export const StyledLink = styled(({ ...rest }) => (
    <Anchor {...rest} />
))<ILinkProps>`
    display: flex;
    align-items: center;
    position: relative;
    padding: 5px 10px;
    font-weight: 500;
    color: #1b2e4b;
    border-radius: 0.25rem;
    &:not(:first-of-type) {
        margin-top: 2px;
    }
    &:hover,
    &:focus {
        background-color: #f5f6fa;
    }
    ${device.large} {
        ${({ $active }) =>
            !!$active &&
            css`
                color: #0168fa;
                background-color: #eef0f7;
            `}
    }
`;
