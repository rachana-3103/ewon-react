import styled, { space, SpaceProps } from "@doar/shared/styled";

export const StyledHr = styled(({ my, mt, mb, py, pt, pb, ...rest }) => (
    <hr {...rest} />
))<SpaceProps>`
    ${space}
`;
