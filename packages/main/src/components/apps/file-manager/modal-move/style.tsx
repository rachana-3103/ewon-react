import styled, { device } from "@doar/shared/styled";
import { ModalClose } from "@doar/components";

export const StyledClose = styled(({ ...rest }) => <ModalClose {...rest} />)`
    position: absolute;
    top: 15px;
    right: 20px;
`;

export const StyledTitle = styled.h5`
    font-size: 18px;
    margin-bottom: 0;
    ${device.small} {
        font-size: 20px;
    }
`;

export const StyledText = styled.p`
    color: #8392a5;
    margin-bottom: 25px;
`;

export const StyledWrap = styled.div`
    padding: 10px;
    border: 1px solid rgba(72, 94, 144, 0.16);
    background-color: #f5f6fa;
`;

export const StyledLabel = styled.label`
    display: block;
    margin-bottom: 0.5rem;
`;
