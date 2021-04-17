/* eslint-disable jsx-a11y/anchor-has-content */
import styled, {
    space,
    color as colorStyles,
    typography,
    layout,
    SpaceProps,
    ColorProps,
    TypographyProps,
    LayoutProps,
    css,
    themeGet,
} from "@doar/shared/styled";
import { Link } from "react-router-dom";

interface IProps extends SpaceProps, ColorProps, TypographyProps, LayoutProps {
    $variant?: "link2" | "link3";
}

const anchorStyle = css<IProps>`
    ${({ $variant }) =>
        $variant === "link2" &&
        css`
            color: ${themeGet("colors.text2")};
            &:hover {
                color: ${themeGet("colors.primary")};
            }
        `}
    ${({ $variant }) =>
        $variant === "link3" &&
        css`
            color: ${themeGet("colors.text3")};
            &:hover {
                color: ${themeGet("colors.text2")};
            }
        `}

    ${space};
    ${colorStyles};
    ${typography};
    ${layout};
`;

export const StyledLink = styled(
    ({
        p,
        px,
        py,
        pt,
        pb,
        pl,
        pr,
        m,
        mx,
        my,
        mt,
        mb,
        ml,
        mr,
        color,
        fontFamily,
        fontSize,
        fontWeight,
        lineHeight,
        letterSpacing,
        textAlign,
        width,
        height,
        display,
        ...rest
    }) => <Link {...rest} />
)<IProps>`
    ${anchorStyle};
`;

export const StyledAnchor = styled(
    ({
        p,
        px,
        py,
        pt,
        pb,
        pl,
        pr,
        m,
        mx,
        my,
        mt,
        mb,
        ml,
        mr,
        color,
        fontFamily,
        fontSize,
        fontWeight,
        lineHeight,
        letterSpacing,
        textAlign,
        width,
        height,
        display,
        ...rest
    }) => <a {...rest} />
)<IProps>`
    ${anchorStyle};
`;
