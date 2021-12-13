import styled, { device, css } from "@doar/shared/styled";

interface IProps {
    $minimize: boolean;
    $maximize: boolean;
}

export const StyledAside = styled.aside<IProps>`
    width: 240px;
    height: 100%;
    transform: translateX(-100%);
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 1000;
    ${({ $minimize }) =>
        $minimize &&
        css`
            width: auto;
            & + .content {
                margin-left: 60px;
            }
            .aside-user {
                margin-bottom: 5px;
                .avatar {
                    width: 26px;
                    height: 26px;
                    flex-shrink: 0;
                    margin-left: -4px;
                    &-initial {
                        font-size: 10px;
                    }
                }
                .aside-alerts {
                    opacity: 0;
                    visibility: hidden;
                    position: fixed;
                }
            }
            .aside-loggedin-user {
                &-data {
                    display: none;
                }
                &-nav {
                    display: block;
                    .nav {
                        width: 100%;
                        flex-wrap: nowrap;
                    }
                    svg {
                        margin-right: 0;
                    }
                    span {
                        position: fixed;
                        opacity: 0;
                        visibility: hidden;
                        margin-left: 15px;
                    }
                }
            }
            .aside-navbar {
                width: 100%;
                flex-wrap: nowrap;
                &-label {
                    display: none;
                }
                &-link {
                    svg {
                        margin-right: 0;
                    }
                    span {
                        position: fixed;
                        opacity: 0;
                        visibility: hidden;
                        margin-left: 15px;
                    }
                    &:before {
                        right: auto;
                        left: -20px;
                    }
                    &:after {
                        display: none;
                    }
                }
                .submenu {
                    position: relative;
                    & > li {
                        &:first-of-type {
                            margin-top: 10px;
                        }
                    }
                    &:before {
                        content: "";
                        display: block;
                        border-top: 1px solid rgba(72, 94, 144, 0.16);
                        margin: 8px 0;
                    }
                }
            }
        `}

    ${({ $maximize }) =>
        $maximize &&
        css`
            .scrollbar {
                width: 240px;
                .ps__thumb-x {
                    display: none;
                }
            }
            .aside {
                &-body {
                    width: 100%;
                    display: block;
                    &-inner {
                        padding: 20px;
                    }
                }
                &-user {
                    .aside-alerts {
                        opacity: 1;
                        visibility: visible;
                        position: relative;
                    }
                }
                &-loggedin-user {
                    &-nav {
                        span {
                            position: relative;
                            opacity: 1;
                            visibility: visible;
                        }
                    }
                }
                &-navbar {
                    &-link {
                        span {
                            position: relative;
                            opacity: 1;
                            visibility: visible;
                        }
                        &:after {
                            display: block;
                        }
                    }
                }
            }
        `}

    ${({ $minimize, $maximize }) =>
        $minimize &&
        !$maximize &&
        css`
            .mega-submenu {
                display: none;
            }
        `}
    ${device.large} {
        transform: translateX(0);
    }
`;

export const StyledBody = styled.div<IProps>`
    height: 100%;
    padding-bottom: 70px;
    background-color: #fff;
    transition: all 0.3s;
    border-top: 1px solid rgba(72, 94, 144, 0.16);
    border-right: 1px solid rgba(72, 94, 144, 0.16);
    ${({ $minimize }) =>
        $minimize &&
        css`
            width: 60px;
            transition: none;
            .aside-body-inner {
                padding: 20px;
            }
        `}
`;

export const StyledBodyInner = styled.div`
    padding: 25px;
    position: absolute;
    inset: 0;
`;
