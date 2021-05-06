import styled, {
    themeGet,
    space,
    typography,
    SpaceProps,
    TypographyProps,
    css,
} from "@doar/shared/styled";
import { Anchor } from "@doar/components";

interface INav extends SpaceProps, TypographyProps {}

export const StyledNav = styled(({ mb, fontSize, ...rest }) => (
    <nav {...rest} />
))<INav>`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    font-size: 13px;
    padding-left: 0;
    margin-bottom: 0;
    ${space};
    ${typography};
    .badge {
        margin-left: auto;
        color: ${themeGet("colors.text4")};
        font-weight: 400;
        font-size: 11px;
        background: transparent;
    }
`;

interface INavLink extends SpaceProps {
    $active?: boolean;
}

export const StyledLink = styled(({ ...rest }) => (
    <Anchor {...rest} />
))<INavLink>`
    padding: 6px 10px;
    display: flex;
    align-items: center;
    border-radius: 0.25rem;
    color: ${themeGet("colors.text2")};
    &:not(:first-of-type) {
        margin-top: 2px;
    }
    &:hover,
    &:focus {
        background-color: ${themeGet("colors.whisper")};
    }
    svg {
        width: 18px;
        height: 18px;
        stroke-width: 2.3px;
        margin-right: 12px;
        color: #566476;
        fill: rgba(27, 46, 75, 0.06);
    }
    ${({ $active }) =>
        $active === true &&
        css`
            color: ${themeGet("colors.primary")};
            font-weight: 500;
            background-color: ${themeGet("colors.catskill")};
            svg {
                color: ${themeGet("colors.primary")};
                fill: rgba(1, 104, 250, 0.2);
            }
        `}
    ${space};
`;
