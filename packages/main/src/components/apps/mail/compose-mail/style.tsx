import styled, { device } from "@doar/shared/styled";
import { ModalHeader, ModalBody } from "@doar/components";

export const StyledHeader = styled(({ ...rest }) => <ModalHeader {...rest} />)`
    background-color: #1c273c;
    padding: 20px;
    color: #fff;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    .nav-link {
        color: rgba(255, 255, 255, 0.5);
    }
`;

export const StyledTitle = styled.h6`
    margin-bottom: 0;
    font-weight: 400;
    position: relative;
    top: 1px;
    color: #fff;
`;

export const StyledBody = styled(({ ...rest }) => <ModalBody {...rest} />)`
    transition: all 0.3s;
    ${device.large} {
        padding: 30px;
    }
`;

export const StyledWrap = styled.div`
    background-color: #fff;
    margin-top: 15px;
    .ql {
        &-container {
            border-bottom-right-radius: 0.25rem;
            border-bottom-left-radius: 0.25rem;
            border-color: rgba(72, 94, 144, 0.16) !important;
            height: 80px;
            ${device.small} {
                height: 150px;
            }
        }
        &-editor {
            padding: 20px;
            color: #001737;
        }
    }
`;

export const StyledToolbarWrap = styled.div`
    margin-top: 25px;
    align-items: center;
    justify-content: space-between;
    display: flex;
    flex-wrap: wrap;
`;

export const StyledToolbar = styled.div`
    padding: 0px !important;
    border: 0 !important;
    .ql {
        &-toolbar {
            border-top-left-radius: 0.25rem;
            border-top-right-radius: 0.25rem;
        }
        &-formats {
            display: inline-flex;
        }
    }
`;

export const StyledBtnWrap = styled.div`
    margin-top: 15px;
    ${device.small} {
        margin-top: 0px;
    }
    button {
        font-size: 13px;
    }
`;
