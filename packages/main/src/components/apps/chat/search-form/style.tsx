import styled, { themeGet, device } from "@doar/shared/styled";
import { Input, Button } from "@doar/components";

export const StyledForm = styled.form`
    flex: 1;
    display: flex;
    align-items: center;
    margin-left: 15px;
    height: 34px;
    ${device.small} {
        margin-right: 10px;
    }
    input {
        &:hover,
        &:focus,
        &:active {
            border: none;
            box-shadow: none;
        }
    }
`;

export const StyledInput = styled(({ ...rest }) => <Input {...rest} />)`
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right-width: 0;
    font-size: inherit;
    width: 150px;
    height: 100%;
    min-height: 0;
    background-color: transparent;
`;

export const StyledButton = styled(({ ...rest }) => <Button {...rest} />)`
    display: flex;
    align-items: center;
    border: 1px solid ${themeGet("colors.text4")};
    border-left-width: 0;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    color: ${themeGet("colors.text3")};
    min-height: 0;
    padding: 0 10px;
    height: 100%;
    svg {
        width: 18px;
        height: 18px;
        stroke-width: 2.5px;
    }
`;
