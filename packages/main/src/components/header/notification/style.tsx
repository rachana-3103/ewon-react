/* eslint-disable react/react-in-jsx-scope */
import styled, { themeGet } from "@doar/shared/styled";
import { MediaBody } from "@doar/components";

export const StyledMediaBody = styled(({ ...rest }) => <MediaBody {...rest} />)`
    margin-left: 15px;
    font-size: 13px;
`;

export const StyledStrong = styled.strong`
    font-weight: 500;
    color: ${themeGet("colors.text2")};
`;

export const StyledText = styled.p`
    margin-bottom: 2px;
    color: rgba(${themeGet("colors.text2")}, 0.85);
`;

export const StyledSpan = styled.span`
    color: #8392a5;
    font-size: 11px;
    font-family: ${themeGet("fonts.interUi")};
`;
