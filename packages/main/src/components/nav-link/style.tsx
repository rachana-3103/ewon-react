import styled, { themeGet, css } from "@doar/shared/styled";

export const StyledNavLine = styled.nav`
    border-bottom: 2px solid rgba(72, 94, 144, 0.16);
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
`;

interface INavLink {
    $active?: boolean;
}

export const StyledNavLink = styled.a<INavLink>`
    padding: 8px 0;
    color: ${themeGet("colors.gray700")};
    display: block;
    &:not(:first-of-type) {
        margin-left: 25px;
    }
    ${({ $active }) =>
        $active &&
        css`
            position: relative;
            color: ${themeGet("colors.primary")};
            &:after {
                content: "";
                position: absolute;
                bottom: -2px;
                left: 0;
                right: 0;
                height: 2px;
                background-color: ${themeGet("colors.primary")};
            }
        `}
`;
