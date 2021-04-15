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
} from "@doar/shared/styled";
import { Link } from "react-router-dom";

interface IProps extends SpaceProps, ColorProps, TypographyProps, LayoutProps {}

const anchorStyle = css`
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
