/* eslint-disable jsx-a11y/anchor-has-content */
import styled, {
    space,
    color as colorStyles,
    typography,
    SpaceProps,
    ColorProps,
    TypographyProps,
} from "@doar/shared/styled";
import { Link } from "react-router-dom";

interface IProps extends SpaceProps, ColorProps, TypographyProps {}

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
        ...rest
    }) => <Link {...rest} />
)<IProps>`
    ${space};
    ${colorStyles};
    ${typography};
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
        ...rest
    }) => <a {...rest} />
)<IProps>`
    ${space};
    ${colorStyles};
    ${typography};
`;
