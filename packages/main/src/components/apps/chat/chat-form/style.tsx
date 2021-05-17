import styled from "@doar/shared/styled";
import { Input } from "@doar/components";

export const StyledForm = styled.form`
    height: 100%;
    display: flex;
    justify-content: space-between;
`;

export const StyldFile = styled.label`
    width: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #8392a5;
    border-right: 1px solid rgba(72, 94, 144, 0.16);
    cursor: pointer;
    &:hover,
    &:focus {
        color: #1b2e4b;
    }
`;

export const StyledInput = styled(({ ...rest }) => <Input {...rest} />)`
    font-size: inherit;
    border: 0;
    box-shadow: none !important;
    background-color: transparent;
    align-self: center;
`;

export const StyledNav = styled.nav`
    display: flex;
    align-items: center;
    border-left: 1px solid rgba(72, 94, 144, 0.16);
    padding: 10px 20px;
    svg {
        width: 20px;
        color: #8392a5;
        &:hover {
            color: #525f70;
        }
    }
`;

export const StyledImage = styled.label`
    padding: 2px 5px;
    border-radius: 0.25rem;
    cursor: pointer;
    line-height: 1;
`;

export const StyledBtn = styled.button`
    padding: 2px 5px;
    border-radius: 0.25rem;
    cursor: pointer;
    background: transparent;
    border: none;
    margin-left: 2px;
    line-height: 1;
`;
