import styled, { device } from "@doar/shared/styled";

export const StyledSidebar = styled.div`
    background-color: #fff;
    position: absolute;
    top: 0;
    bottom: 0;
    left: -240px;
    width: 240px;
    border-right: 1px solid rgba(72, 94, 144, 0.16);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s;
    ${device.large} {
        left: 0;
        opacity: 1;
        visibility: visible;
    }
`;

export const StyledHeader = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 55px;
    border-bottom: 1px solid rgba(72, 94, 144, 0.16);
    display: flex;
    align-items: center;
    padding: 0 20px;
    button {
        text-transform: uppercase;
        font-weight: 500;
        font-size: 10px;
        font-family: -apple-system, BlinkMacSystemFont, "Inter UI", Roboto,
            sans-serif;
        letter-spacing: 0.5px;
    }
    .btn-white {
        font-weight: 700;
    }
    .dropdown {
        flex: 1 1 auto;
        &:last-child {
            margin-left: 10px;
        }
        &-menu {
            font-size: 13px;
        }
        &-item {
            display: flex;
            align-items: center;
            padding: 5px 10px;
            svg {
                width: 16px;
                height: 16px;
                margin-right: 10px;
            }
            span {
                display: block;
                position: relative;
                top: 1.5px;
            }
        }
        &-divider {
            margin: 10px 15px;
        }
    }
`;

export const StyledBody = styled.div`
    position: absolute;
    top: 55px;
    left: 0;
    right: 0;
    bottom: 0;
`;
