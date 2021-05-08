import styled, {
    themeGet,
    space,
    SpaceProps,
    device,
} from "@doar/shared/styled";
import { Anchor } from "@doar/components";

export const StyledNav = styled(({ mb, ml, ...rest }) => (
    <nav {...rest} />
))<SpaceProps>`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    ${space};
`;

interface INav extends SpaceProps {
    $active?: boolean;
}

export const StyledLink = styled(({ ...rest }) => <Anchor {...rest} />)<INav>`
    padding: 0;
    color: ${themeGet("colors.text3")};
    line-height: 100%;
    cursor: pointer;
    & + .nav-link {
        margin-left: 10px;
    }
    svg {
        width: 18px;
        height: 18px;
    }
    ${space};
`;

export const StyledDivider = styled.span`
    width: 1px;
    background-color: ${themeGet("colors.light")};
    margin: 0 15px;
    display: none;
    ${device.small} {
        display: block;
    }
`;
