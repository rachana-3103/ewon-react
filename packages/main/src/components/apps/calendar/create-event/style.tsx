import styled, { device, space, SpaceProps } from "@doar/shared/styled";
import { ModalClose } from "@doar/components";

export const StyledTitle = styled.h5`
    margin-bottom: 20px;
    font-size: 18px;
    ${device.small} {
        font-size: 20px;
        margin-bottom: 30px;
    }
`;

export const StyledClose = styled(({ ...rest }) => <ModalClose {...rest} />)`
    position: absolute;
    top: 20px;
    right: 20px;
`;

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
