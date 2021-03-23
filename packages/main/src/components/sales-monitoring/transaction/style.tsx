/* eslint-disable jsx-a11y/anchor-has-content */
import styled, {
    themeGet,
    space,
    SpaceProps,
    device,
} from "@doar/shared/styled";
import { CardHeader, ListGroupItem } from "@doar/components";

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

export const StyledGroupItem = styled(({ ...rest }) => (
    <ListGroupItem {...rest} />
))`
    display: flex;
    ${device.small} {
        padding-left: 20px;
        padding-right: 20px;
    }
`;
