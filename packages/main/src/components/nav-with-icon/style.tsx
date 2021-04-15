import styled, { themeGet, device } from "@doar/shared/styled";
import { Anchor } from "@doar/components";

export const StyledNav = styled.nav`
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    font-size: 13px;
`;

export const StyledLink = styled(({ ...rest }) => <Anchor {...rest} />)`
    padding: 0;
    display: flex;
    align-items: center;
    color: ${themeGet("colors.text3")};
    &:not(:first-of-type) {
        margin-left: 15px;
        ${device.small} {
            margin-left: 25px;
        }
    }
    &:hover {
        color: ${themeGet("colors.primary")};
    }
    svg {
        width: 16px;
        height: 16px;
        stroke-width: 2.5px;
        margin-right: 7px;
        position: relative;
        top: -1px;
    }
`;
