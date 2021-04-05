import styled, {
    space,
    color as colorStyles,
    typography,
    SpaceProps,
    ColorProps,
    TypographyProps,
} from "@doar/shared/styled";

interface IProps extends SpaceProps, ColorProps, TypographyProps {}

export const StyledText = styled(
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
    }) => <p {...rest} />
)<IProps>`
    ${space};
    ${colorStyles};
    ${typography};
`;
