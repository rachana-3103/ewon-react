import styled, { space, SpaceProps } from "@doar/shared/styled";

export const StyledGroup = styled(({ ...rest }) => (
    <div {...rest} />
))<SpaceProps>`
    margin-bottom: 20px;
    select {
        text-transform: capitalize;
    }
    ${space}
`;

export const StyledLabel = styled.label`
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-family: -apple-system, BlinkMacSystemFont, "Inter UI", Roboto,
        sans-serif;
    font-weight: 500;
    color: #8392a5;
    margin-bottom: 0.5rem;
`;
