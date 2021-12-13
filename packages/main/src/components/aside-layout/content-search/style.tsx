import styled, { themeGet } from "@doar/shared/styled";

export const StyledForm = styled.form`
    width: 250px;
    display: flex;
    align-items: center;
    svg {
        color: ${themeGet("colors.text3")};
        margin-right: 10px;
    }
    input {
        border-radius: 0;
        border-width: 0;
        &:hover,
        &:focus,
        &:active {
            border-color: ${themeGet("colors.primary")};
            box-shadow: none;
        }
    }
`;
