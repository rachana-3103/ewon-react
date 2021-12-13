import styled, { device, themeGet, css } from "@doar/shared/styled";

interface IProps {
    $minimize: boolean;
}

export const StyledHeader = styled.header<IProps>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 54px;
    padding: 0 18px;
    border-right: 1px solid rgba(72, 94, 144, 0.16);
    background-color: #fff;
    transform: translateX(54px);

    ${device.large} {
        padding: 0 20px;
        transform: none;
        height: 59px;
    }
    ${({ $minimize }) =>
        $minimize &&
        css`
            width: 60px;
            justify-content: center;
            ${device.large} {
                padding: 0;
            }
        `}
`;

export const StyledMenuBtn = styled.button`
    padding: 0;
    background-color: transparent;
    border: none;
    line-height: 0.5;
    svg {
        color: ${themeGet("colors.text3")};
        margin-top: -3px;
        &:last-of-type {
            margin-top: 0;
            display: none;
        }
    }
    &:hover,
    &:focus {
        svg {
            color: ${themeGet("colors.text2")};
        }
    }
    ${({ theme }) =>
        theme.name === "dark" &&
        css`
            &:hover {
                color: ${themeGet("colors.white")};
            }
        `}
`;
