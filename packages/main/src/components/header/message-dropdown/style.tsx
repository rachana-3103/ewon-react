/* eslint-disable react/react-in-jsx-scope */
import styled, { device, themeGet } from "@doar/shared/styled";
import { hexTorgb } from "@doar/shared/methods";
import { DropdownMenu, Anchor } from "@doar/components";

export const StyledDropMenu = styled(({ ...rest }) => (
    <DropdownMenu {...rest} />
))`
    width: 300px;
    padding: 0;
    margin-right: -20px;
    box-shadow: none;
    right: 0;
    left: auto;
    border-top-width: 0;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    margin-top: 17.5px;
    margin-right: -88px;
    ${device.small} {
        margin-right: -20px;
    }
    &:before {
        content: "";
        position: absolute;
        top: -10px;
        left: 25px;
        border-bottom: 10px solid rgba(72, 94, 144, 0.16);
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        left: auto;
        right: 20px;
        ${device.small} {
            right: 20px;
        }
    }
    &:after {
        content: "";
        position: absolute;
        top: -8.5px;
        left: 26px;
        border-bottom: 9px solid #fff;
        border-left: 9px solid transparent;
        border-right: 9px solid transparent;
        left: auto;
        right: 21px;
        ${device.small} {
            right: 21px;
        }
    }
`;

StyledDropMenu.displayName = "DropdownMenu";

export const StyledDropHeader = styled.div`
    display: block;
    white-space: nowrap;
    padding: 12px 15px;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.5px;
    color: #1b2e4b;
    border-bottom: 1px solid ${themeGet("colors.border")};
    margin-bottom: 5px;
`;

export const StyledDropItem = styled((props) => <Anchor {...props} />)`
    transition: none;
    border-radius: 0.25rem;
    white-space: normal;
    padding: 8px 10px;
    margin: 0 5px;
    width: auto;
    display: block;
    &:hover {
        background-color: ${(props) => hexTorgb(props.theme.colors.light, 0.5)};
    }
`;

export const StyledDropFooter = styled.div`
    margin-top: 5px;
    border-top: 1px solid ${themeGet("colors.border")};
    padding: 10px;
    text-align: center;
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    a {
        color: ${themeGet("colors.text3")};
    }
`;

export const StyledBadge = styled.span`
    display: flex;
    width: 15px;
    height: 15px;
    justify-content: center;
    position: absolute;
    top: -5px;
    right: -2px;
    background-color: ${themeGet("colors.danger")};
    color: #fff;
    font-size: 8px;
    font-weight: 400;
    font-family: sans-serif;
    line-height: 2;
    border-radius: 100%;
`;
