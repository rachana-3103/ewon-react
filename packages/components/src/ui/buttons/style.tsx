import styled, { css, themeGet } from "@doar/shared/styled";
import tinycolor2 from "tinycolor2";

interface IProps {
    $variant: "contained" | "outlined" | "texted";
    $color:
        | "primary"
        | "secondary"
        | "success"
        | "danger"
        | "warning"
        | "info"
        | "light"
        | "dark";
    $size: "xs" | "sm" | "md" | "lg";
    $shape: "rounded" | "square" | "ellipse";
    $fullwidth: boolean;
    $active: boolean;
    disabled: boolean;
    $iconButton: boolean;
}

export const StyledButton = styled.button<IProps>`
    display: inline-block;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    line-height: 1.5;
    user-select: none;
    border: 1px solid transparent;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
        border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

    ${({ $color, $variant }) =>
        $variant === "contained" &&
        $color === "primary" &&
        css`
            color: ${themeGet("colors.white")};
            background-color: ${themeGet("colors.primary")};
            border-color: ${themeGet("colors.primary")};
        `}
    ${({ $color, $variant }) =>
        $variant === "contained" &&
        $color === "secondary" &&
        css`
            color: ${themeGet("colors.white")};
            background-color: ${themeGet("colors.secondary")};
            border-color: ${themeGet("colors.secondary")};
        `}
    ${({ $color, $variant }) =>
        $variant === "contained" &&
        $color === "success" &&
        css`
            color: ${themeGet("colors.white")};
            background-color: ${themeGet("colors.success")};
            border-color: ${themeGet("colors.success")};
        `}
    ${({ $color, $variant }) =>
        $variant === "contained" &&
        $color === "danger" &&
        css`
            color: ${themeGet("colors.white")};
            background-color: ${themeGet("colors.danger")};
            border-color: ${themeGet("colors.danger")};
        `}
    ${({ $color, $variant }) =>
        $variant === "contained" &&
        $color === "warning" &&
        css`
            color: ${themeGet("colors.white")};
            background-color: ${themeGet("colors.warning")};
            border-color: ${themeGet("colors.warning")};
        `}
    ${({ $color, $variant }) =>
        $variant === "contained" &&
        $color === "info" &&
        css`
            color: ${themeGet("colors.white")};
            background-color: ${themeGet("colors.info")};
            border-color: ${themeGet("colors.info")};
        `}
    ${({ $color, $variant }) =>
        $variant === "contained" &&
        $color === "light" &&
        css`
            color: ${themeGet("colors.text2")};
            background-color: ${themeGet("colors.light")};
            border-color: ${themeGet("colors.light")};
        `}
    ${({ $color, $variant }) =>
        $variant === "contained" &&
        $color === "dark" &&
        css`
            color: ${themeGet("colors.white")};
            background-color: ${themeGet("colors.dark")};
            border-color: ${themeGet("colors.dark")};
        `}

    ${({ $variant }) =>
        $variant === "outlined" &&
        css`
            background: transparent;
            border-width: 1px;
            border-style: solid;
        `}
    ${({ $variant, $color }) =>
        $variant === "outlined" &&
        $color === "primary" &&
        css`
            color: ${themeGet("colors.primary")};
            border-color: ${themeGet("colors.primary")};
        `}
    ${({ $variant, $color }) =>
        $variant === "outlined" &&
        $color === "secondary" &&
        css`
            color: ${themeGet("colors.secondary")};
            border-color: ${themeGet("colors.secondary")};
        `}
    ${({ $variant, $color }) =>
        $variant === "outlined" &&
        $color === "success" &&
        css`
            color: ${themeGet("colors.success")};
            border-color: ${themeGet("colors.success")};
        `}
    ${({ $variant, $color }) =>
        $variant === "outlined" &&
        $color === "danger" &&
        css`
            color: ${themeGet("colors.danger")};
            border-color: ${themeGet("colors.danger")};
        `}
    ${({ $variant, $color }) =>
        $variant === "outlined" &&
        $color === "warning" &&
        css`
            color: ${themeGet("colors.warning")};
            border-color: ${themeGet("colors.warning")};
        `}
    ${({ $variant, $color }) =>
        $variant === "outlined" &&
        $color === "info" &&
        css`
            color: ${themeGet("colors.info")};
            border-color: ${themeGet("colors.info")};
        `}
    ${({ $variant, $color }) =>
        $variant === "outlined" &&
        $color === "light" &&
        css`
            color: ${themeGet("colors.gray600")};
            border-color: ${themeGet("colors.gray400")};
        `}
    ${({ $variant, $color }) =>
        $variant === "outlined" &&
        $color === "dark" &&
        css`
            color: ${themeGet("colors.dark")};
            border-color: ${themeGet("colors.dark")};
        `}
    ${({ $size }) =>
        $size === "xs" &&
        css`
            font-size: 12px;
            padding: 5px 0.9375rem;
        `}
    ${({ $size }) =>
        $size === "sm" &&
        css`
            font-size: 13px;
            padding: 0.391rem 15px;
        `}
    ${({ $size }) =>
        $size === "md" &&
        css`
            padding: 0.46875rem 0.9375rem;
            font-size: 0.875rem;
        `}
    ${({ $size }) =>
        $size === "lg" &&
        css`
            padding: 0.6rem 1rem;
            font-size: 0.875rem;
        `}
    ${({ $fullwidth }) =>
        $fullwidth &&
        css`
            display: block;
            width: 100%;
        `}

    ${({ $shape }) =>
        $shape === "rounded" &&
        css`
            border-radius: 0.25rem;
        `}

    ${({ $shape }) =>
        $shape === "square" &&
        css`
            border-radius: 0;
        `}
        
	${({ $shape }) =>
        $shape === "ellipse" &&
        css`
            border-radius: 500px;
        `}

    ${(props) =>
        props.$active &&
        props.$color === "primary" &&
        css`
            color: ${themeGet("colors.white")};
            border-color: ${tinycolor2(themeGet("colors.primary")(props))
                .darken(10)
                .toString()};
            background-color: ${tinycolor2(themeGet("colors.primary")(props))
                .darken(10)
                .toString()}; ;
        `}

    ${(props) =>
        props.$active &&
        props.$color === "secondary" &&
        css`
            color: ${themeGet("colors.white")};
            border-color: ${tinycolor2(themeGet("colors.secondary")(props))
                .darken(10)
                .toString()};
            background-color: ${tinycolor2(themeGet("colors.secondary")(props))
                .darken(10)
                .toString()}; ;
        `}

    ${(props) =>
        props.$active &&
        props.$color === "success" &&
        css`
            color: ${themeGet("colors.white")};
            border-color: ${tinycolor2(themeGet("colors.success")(props))
                .darken(10)
                .toString()};
            background-color: ${tinycolor2(themeGet("colors.success")(props))
                .darken(10)
                .toString()}; ;
        `}

    ${(props) =>
        props.$active &&
        props.$color === "danger" &&
        css`
            color: ${themeGet("colors.white")};
            border-color: ${tinycolor2(themeGet("colors.danger")(props))
                .darken(10)
                .toString()};
            background-color: ${tinycolor2(themeGet("colors.danger")(props))
                .darken(10)
                .toString()}; ;
        `}

    ${(props) =>
        props.$active &&
        props.$color === "warning" &&
        css`
            color: ${themeGet("colors.white")};
            border-color: ${tinycolor2(themeGet("colors.warning")(props))
                .darken(10)
                .toString()};
            background-color: ${tinycolor2(themeGet("colors.warning")(props))
                .darken(10)
                .toString()}; ;
        `}

    ${(props) =>
        props.$active &&
        props.$color === "info" &&
        css`
            color: ${themeGet("colors.white")};
            border-color: ${tinycolor2(themeGet("colors.info")(props))
                .darken(10)
                .toString()};
            background-color: ${tinycolor2(themeGet("colors.info")(props))
                .darken(10)
                .toString()}; ;
        `}
    ${(props) =>
        props.$active &&
        props.$color === "light" &&
        css`
            color: ${themeGet("colors.white")};
            border-color: ${tinycolor2(themeGet("colors.light")(props))
                .darken(10)
                .toString()};
            background-color: ${tinycolor2(themeGet("colors.light")(props))
                .darken(10)
                .toString()}; ;
        `}
    ${(props) =>
        props.$active &&
        props.$color === "dark" &&
        css`
            color: ${themeGet("colors.white")};
            border-color: ${tinycolor2(themeGet("colors.dark")(props))
                .darken(10)
                .toString()};
            background-color: ${tinycolor2(themeGet("colors.dark")(props))
                .darken(10)
                .toString()}; ;
        `}
    ${({ disabled }) =>
        disabled &&
        css`
            opacity: 0.65;
            pointer-events: none;
        `}
    
    ${({ $variant }) =>
        $variant === "texted" &&
        css`
            padding: 0;
            background-color: transparent;
            border: none;
        `}
    ${({ $variant, $color }) =>
        $variant === "texted" &&
        $color === "primary" &&
        css`
            color: ${themeGet("colors.primary")};
        `}
    ${({ $variant, $color }) =>
        $variant === "texted" &&
        $color === "secondary" &&
        css`
            color: ${themeGet("colors.secondary")};
        `}
    ${({ $variant, $color }) =>
        $variant === "texted" &&
        $color === "success" &&
        css`
            color: ${themeGet("colors.success")};
        `}
    ${({ $variant, $color }) =>
        $variant === "texted" &&
        $color === "danger" &&
        css`
            color: ${themeGet("colors.danger")};
        `}
    ${({ $variant, $color }) =>
        $variant === "texted" &&
        $color === "warning" &&
        css`
            color: ${themeGet("colors.warning")};
        `}
    ${({ $variant, $color }) =>
        $variant === "texted" &&
        $color === "info" &&
        css`
            color: ${themeGet("colors.info")};
        `}
    ${({ $variant, $color }) =>
        $variant === "texted" &&
        $color === "light" &&
        css`
            color: ${themeGet("colors.text")};
        `}
    ${({ $variant, $color }) =>
        $variant === "texted" &&
        $color === "dark" &&
        css`
            color: ${themeGet("colors.dark")};
        `}
    ${({ $iconButton }) =>
        $iconButton &&
        css`
            line-height: 1;
        `}
    ${({ $iconButton, $size }) =>
        $iconButton &&
        $size === "xs" &&
        css`
            padding: 3px 6px;
        `}
    ${({ $iconButton, $size }) =>
        $iconButton &&
        $size === "md" &&
        css`
            padding: 5px 10px;
        `}
`;
