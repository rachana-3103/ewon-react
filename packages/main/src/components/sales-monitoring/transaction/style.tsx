/* eslint-disable jsx-a11y/anchor-has-content */
import styled, { themeGet, space, SpaceProps } from "@doar/shared/styled";
import { CardHeader } from "@doar/components";

export const StyledHeader = styled(({ ...props }) => <CardHeader {...props} />)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const StyledTitle = styled.h6`
    margin-bottom: 0px;
`;

export const StyledHeaderRight = styled.div`
    font-size: 18px;
    display: flex;
`;

export const StyledIcon = styled(({ m, ml, mr, mt, mb, ...rest }) => (
    <a {...rest} />
))<SpaceProps>`
    color: ${themeGet("colors.text3")};
    line-height: 0;
    ${space};
`;
