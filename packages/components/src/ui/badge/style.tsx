import styled, { css, themeGet } from "@doar/shared/styled";

interface BadgeProps {
    $color?:
        | "primary"
        | "secondary"
        | "success"
        | "danger"
        | "warning"
        | "info"
        | "light"
        | "dark";
    $pill?: boolean;
}

const badgeCss = css<BadgeProps>`
    font-size: 10px;
    font-weight: 500;
    font-family: ${themeGet("fonts.interUi")};
    padding: 3px 5px 4px;
    border-radius: 3px;
    display: inline-block;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
        border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    ${({ $color }) =>
        $color === "primary" &&
        css`
            color: #fff;
            background-color: ${themeGet("colors.primary")};
        `}
    ${({ $color }) =>
        $color === "secondary" &&
        css`
            color: #fff;
            background-color: ${themeGet("colors.gray600")};
        `}
    ${({ $color }) =>
        $color === "success" &&
        css`
            color: #fff;
            background-color: ${themeGet("colors.success")};
        `}
	${({ $color }) =>
        $color === "danger" &&
        css`
            color: #fff;
            background-color: ${themeGet("colors.danger")};
        `}
	${({ $color }) =>
        $color === "warning" &&
        css`
            color: #fff;
            background-color: ${themeGet("colors.warning")};
        `}
	${({ $color }) =>
        $color === "info" &&
        css`
            color: #fff;
            background-color: ${themeGet("colors.info")};
        `}
	${({ $color }) =>
        $color === "light" &&
        css`
            color: ${themeGet("colors.gray900")};
            background-color: ${themeGet("colors.gray300")};
        `}
	${({ $color }) =>
        $color === "dark" &&
        css`
            color: #fff;
            background-color: ${themeGet("colors.dark")};
        `}
	${({ $pill }) =>
        $pill &&
        css`
            padding-left: 8px;
            padding-right: 8px;
        `}
`;

export const StyledBadge = styled.span<BadgeProps>`
    ${badgeCss};
`;
