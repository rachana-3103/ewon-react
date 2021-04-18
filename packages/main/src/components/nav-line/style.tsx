import styled, {
    themeGet,
    css,
    space,
    SpaceProps,
    device,
} from "@doar/shared/styled";
import { Anchor } from "@doar/components";

export const StyledNav = styled(({ mb, ...rest }) => (
    <nav {...rest} />
))<SpaceProps>`
    border-bottom: 2px solid ${themeGet("colors.border")};
    display: flex;
    flex-wrap: wrap;
    ${space};
`;

interface INav extends SpaceProps {
    $active?: boolean;
}

export const StyledLink = styled(({ ...rest }) => <Anchor {...rest} />)<INav>`
    display: block;
    color: ${themeGet("colors.gray700")};
    padding: 8px 0;
    font-size: 12px;
    &:not(:first-of-type) {
        margin-left: 10px;
    }
    ${device.small} {
        font-size: 13px;
        &:not(:first-of-type) {
            margin-left: 15px;
        }
    }
    ${device.medium} {
        &:not(:first-of-type) {
            margin-left: 25px;
        }
    }
    ${({ $active }) =>
        $active === true &&
        css`
            position: relative;
            color: ${themeGet("colors.primary")};
            &:before {
                content: "";
                position: absolute;
                bottom: -2px;
                left: 0;
                right: 0;
                height: 2px;
                background-color: ${themeGet("colors.primary")};
            }
        `}
    ${space};
`;
