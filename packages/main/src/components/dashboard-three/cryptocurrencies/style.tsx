import styled, {
    themeGet,
    typography,
    TypographyProps,
} from "@doar/shared/styled";

export const StyledTheadTR = styled.tr`
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-weight: 600;
    color: ${themeGet("colors.text3")};
`;

export const StyledTH = styled(({ textAlign, ...rest }) => (
    <th {...rest} />
))<TypographyProps>`
    ${typography};
`;

export const StyledTR = styled.tr`
    font-size: 13px;
`;

export const StyledTD = styled.td`
    text-align: right;
    font-family: ${themeGet("fonts.rubik")};
    i {
        font-size: 10px;
    }
`;
