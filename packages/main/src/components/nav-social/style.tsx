import styled, { space, SpaceProps } from "@doar/shared/styled";
import { Anchor } from "@doar/components";

export const StyledNav = styled(({ mb, ...rest }) => (
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
    color: #1b2e4b;
    &:not(:first-of-type) {
        margin-left: 8px;
    }
    ${space};
    svg {
        width: 18px;
    }
`;
