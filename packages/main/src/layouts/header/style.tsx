/* eslint-disable react/react-in-jsx-scope */
import styled, { device, themeGet, layout, space } from "@doar/shared/styled";

export const StyledHeader = styled.header`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    align-items: stretch;
    height: 55px;
    padding: 0;
    justify-content: flex-start;
    background-color: #fff;
    border-bottom: 1px solid ${themeGet("colors.border")};
    ${device.large} {
        height: 60px;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1000;
    }
`;

export const StyledLogo = styled.div`
    padding-top: 0.33594rem;
    padding-bottom: 0.33594rem;
    margin-right: 1rem;
    font-size: 1.09375rem;
    line-height: inherit;
    white-space: nowrap;
    display: flex;
    align-items: center;
    padding-left: 15px;
    margin-right: 0;
    order: 1;
    ${device.large} {
        width: 240px;
        padding: 0 0 0 20px;
    }
`;

export const StyledNavbarWrap = styled.div`
    order: 3;
    width: 260px;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    background-color: #fff;
    overflow: hidden;
    z-index: 1060;
    transform: translateX(-260px);
    transition: all 0.4s;
    ${device.xlarge} {
        padding: 0 30px;
    }
    ${device.large} {
        width: auto;
        padding: 0 25px;
        position: relative;
        top: auto;
        left: auto;
        bottom: auto;
        background-color: transparent;
        overflow: visible;
        display: flex;
        justify-content: center;
        order: 2;
        transform: none;
        z-index: auto;
        flex: 1;
    }
`;

export const StyledNavbarMenu = styled.nav`
    display: flex;
    flex-wrap: wrap;
    ${device.large} {
        width: 100%;
        max-width: 780px;
        margin-top: -3px;
        align-items: center;
        flex-direction: row;
    }
`;

export const StyleNavbarRight = styled.div`
    padding: 0 15px;
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    order: 2;
    ${device.xlarge} {
        width: 240px;
    }
    ${device.large} {
        order: 3;
        padding: 0 20px 0 0;
    }
`;

export const StyledNavbarElement = styled(({ mt, mb, ml, mr, ...props }) => (
    <div {...props} />
))`
    ${space};
    ${layout};
    .header-icon {
        width: 16px;
        height: 16px;
        stroke-width: 3px;
        color: ${themeGet("colors.text")};
        ${device.small} {
            width: 20px;
            height: 20px;
            stroke-width: 2.25px;
        }
    }
`;
