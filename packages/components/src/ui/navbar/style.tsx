import styled, { themeGet, device, css } from "@doar/shared/styled";
import { Anchor } from "../anchor";

export const StyledNavbar = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`;

type NavItemProps = {
    $hasSubmenu: boolean;
};

export const StyledNavitem = styled.li<NavItemProps>`
    ${({ $hasSubmenu }) =>
        $hasSubmenu &&
        css`
            position: relative;
            & > a {
                ${device.large} {
                    padding-right: 14px;
                }
                &:after {
                    display: inline-block;
                    top: 3px;
                    content: "";
                    width: 4px;
                    height: 4px;
                    border-right: 1.5px solid #8392a5;
                    border-bottom: 1.5px solid #8392a5;
                    transform: rotate(45deg);
                    margin-left: auto;
                    transition: all 0.2s ease-in-out;
                    ${device.large} {
                        margin-left: 6px;
                    }
                }
            }
        `}
    &:not(:first-of-type) {
        margin-top: 10px;
    }
    ${device.xlarge} {
        margin-left: 30px;
        &:first-child {
            margin-left: 0;
        }
    }
`;

export const StyledNavlink = styled(({ ...rest }) => <Anchor {...rest} />)`
    display: flex;
    align-items: center;
    font-weight: 500;
    color: ${themeGet("colors.text")};
    transition: all 0.2s ease-in-out;
    position: relative;
    font-size: ${themeGet("fontSize.body")};
    padding: 0 20px;
    ${device.large} {
        padding: 0;
    }
    svg {
        width: 18px;
        height: 18px;
        stroke-width: 2.2px;
        fill: rgba(27, 46, 75, 0.1);
        margin-right: 15px;
        color: #7987a1;
        transition: all 0.2s ease-in-out;
    }
    &:hover {
        color: ${themeGet("colors.primary")};
        svg {
            color: ${themeGet("colors.primary")};
        }
    }
    &:focus {
        outline: none;
    }
`;

export const StyledSubmenu = styled.ul`
    position: relative;
    min-width: 200px;
    list-style: none;
    padding: 0 15px 3px 24px;
    border-left: 1px solid rgba(72, 94, 144, 0.16);
    margin-top: 10px;
    margin-left: 28px;
    z-index: 1000;
    display: none;
    &.open {
        display: block;
    }
    ${device.large} {
        position: absolute;
        top: 41.5px;
        left: -25px;
        background-color: #fff;
        padding: 20px 25px;
        border: 1px solid rgba(192, 204, 218, 0.53);
        margin-top: 0;
        margin-left: 0;
        border-bottom-right-radius: 0.25rem;
        border-bottom-left-radius: 0.25rem;
        &:before {
            content: "";
            position: absolute;
            width: 12px;
            height: 12px;
            top: -7px;
            left: 25px;
            border-bottom: 1.5px solid rgba(192, 204, 218, 0.53);
            border-right: 1.5px solid rgba(192, 204, 218, 0.53);
            transform: rotate(-135deg);
            background: #fff;
        }
    }
`;

export const StyledSubNavItem = styled.li`
    margin-top: 5px;
    &:first-child {
        margin-top: 0;
    }
`;

export const StyledSubNavlink = styled(({ ...rest }) => <Anchor {...rest} />)`
    color: #1b2e4b;
    white-space: nowrap;
    font-size: 13px;
    display: flex;
    align-items: center;
    transition: all 0.2s ease-in-out;
    &:hover {
        color: ${themeGet("colors.primary")};
    }
    svg {
        width: 16px;
        height: 16px;
        margin-right: 15px;
        fill: rgba(0, 23, 55, 0.08);
        display: none;
        ${device.large} {
            display: block;
        }
    }
`;

export const StyledMegaMenu = styled.div`
    position: relative;
    min-width: 200px;
    list-style: none;
    padding: 0 15px 3px 24px;
    border-left: 1px solid rgba(72, 94, 144, 0.16);
    margin-top: 10px;
    margin-left: 28px;
    z-index: 1000;
    display: none;
    &.open {
        display: block;
    }
    ${device.large} {
        position: absolute;
        top: 41.5px;
        left: -25px;
        background-color: #fff;
        padding: 20px 25px;
        border: 1px solid rgba(192, 204, 218, 0.53);
        margin-top: 0;
        margin-left: 0;
        border-bottom-right-radius: 0.25rem;
        border-bottom-left-radius: 0.25rem;
        &:before {
            content: "";
            position: absolute;
            width: 12px;
            height: 12px;
            top: -7px;
            left: 25px;
            border-bottom: 1.5px solid rgba(192, 204, 218, 0.53);
            border-right: 1.5px solid rgba(192, 204, 218, 0.53);
            transform: rotate(-135deg);
            background: #fff;
        }
    }
`;

export const StyledMegaMenuInner = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    min-width: 100%;
    ${device.large} {
        min-width: 425px;
    }
`;

export const StyledMegamenuList = styled.ul`
    flex-basis: 100%;
    max-width: 100%;
    margin: 0;
    padding: 0;
    list-style: none;
    &:not(:first-of-type) {
        margin-top: 20px;
    }
    ${device.large} {
        flex-basis: 47%;
        max-width: 47%;
        &:nth-of-type(even) {
            margin-left: 25px;
            padding-left: 25px;
            border-left: 1px solid ${themeGet("colors.border")};
        }
        &:not(:nth-of-type(-n + 2)) {
            padding-top: 20px;
        }
    }
`;

export const StyledMegamenuLabel = styled.li`
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.7px;
    color: ${themeGet("colors.text3")};
    font-family: ${themeGet("fonts.interUi")};
    text-transform: uppercase;
    display: block;
    margin-bottom: 15px;
`;
