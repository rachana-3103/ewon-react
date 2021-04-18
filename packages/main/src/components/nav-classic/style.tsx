import styled, {
    themeGet,
    space,
    typography,
    SpaceProps,
    TypographyProps,
} from "@doar/shared/styled";
import { Anchor } from "@doar/components";

interface INav extends SpaceProps, TypographyProps {}

export const StyledNav = styled(({ mb, ...rest }) => <nav {...rest} />)<INav>`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    ${space};
    ${typography};
`;

interface INavLink extends SpaceProps {
    $active?: boolean;
}

export const StyledLink = styled(({ ...rest }) => (
    <Anchor {...rest} />
))<INavLink>`
    padding: 0;
    display: flex;
    align-items: center;
    color: ${themeGet("colors.text2")};
    &:not(:first-of-type) {
        margin-top: 10px;
    }
    &:hover {
        color: ${themeGet("colors.primary")};
    }
    span:not(.badge) {
        display: block;
        transform: translateY(1px);
    }
    .badge {
        margin-left: auto;
        color: ${themeGet("colors.text4")};
        font-weight: 400;
        font-size: 11px;
    }
    ${space};
`;
