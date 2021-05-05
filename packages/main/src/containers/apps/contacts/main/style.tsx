import styled, { device, css, themeGet } from "@doar/shared/styled";

interface IProps {
    $showSidebar: boolean;
    $rightSidebar: boolean;
}

export const StyledMain = styled.div<IProps>`
    background-color: #fff;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transition: all 0.3s;
    ${device.large} {
        left: 325px;
    }
    ${device.xlarge} {
        left: 340px;
    }
    ${({ $showSidebar }) =>
        $showSidebar &&
        css`
            transform: translateX(100vw);
        `}
    ${({ $rightSidebar }) =>
        $rightSidebar &&
        css`
            transform: translateX(-260px);
        `}
`;

export const StyledBody = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #f8f9fc;
    ${device.xlarge} {
        width: calc(100% - 290px);
    }
    .react-tabs {
        height: 100%;
        &__tab-list {
            padding: 0 25px;
            border-bottom-width: 1px;
            background-color: #fff;
        }
        &__tab {
            color: #8392a5;
            font-size: 11px;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            padding: 0;
            height: 55px;
            &--selected {
                color: ${themeGet("colors.primary")};
                font-weight: 600;
                &:after {
                    height: 1px;
                    bottom: 0px;
                }
            }
            &:not(:first-of-type) {
                margin-left: 30px;
            }
        }
        &__tab-panel {
            padding: 20px;
            ${device.xlarge} {
                padding: 25px;
            }
        }
        &__content {
            position: relative;
            height: 100%;
            margin-top: 0;
            padding: 0px;
            padding-bottom: 60px;
            ${device.large} {
                padding-bottom: 30px;
            }
            [data-name="row"] {
                ${device.xlarge} {
                    max-width: 800px;
                }
            }
        }
    }
`;

export const StyledSidebar = styled.div`
    background-color: #fff;
    position: absolute;
    top: 0;
    right: -260px;
    bottom: 0;
    border-left: 1px solid rgba(72, 94, 144, 0.16);
    width: 260px;
    height: 100%;
    ${device.xlarge} {
        width: 290px;
        right: 0;
    }
`;

export const StyledOptionsBtn = styled.button`
    border: none;
    background-color: transparent;
    padding: 0;
    margin-left: auto;
    color: #7987a1;
    ${device.xlarge} {
        display: none;
    }
    &:hover,
    &:focus {
        color: #556179;
    }
`;
