import styled from "@doar/shared/styled";
import { Dropdown } from "@doar/components";

export const StyledDropdown = styled(({ ...rest }) => <Dropdown {...rest} />)`
    position: absolute;
    top: 8px;
    right: 4px;
    .btn {
        svg {
            color: rgba(131, 146, 165, 0.5);
            width: 18px;
            height: 18px;
        }
    }
    .dropdown {
        &-menu {
            left: auto;
            right: 0;
        }
    }
`;

export const StyledItem = styled.button`
    font-size: 12px;
    display: flex;
    align-items: center;
    padding: 5px 10px;
    border-radius: 0.25rem;
    transition: all 0.2s ease-in-out;
    clear: both;
    font-weight: 400;
    color: #1c273c;
    text-align: inherit;
    white-space: nowrap;
    background-color: transparent;
    border: 0;
    width: 100%;
    background: transparent;
    border: none;
    svg {
        width: 14px;
        height: 14px;
        stroke-width: 2.5px;
        margin-right: 10px;
        color: #8392a5;
    }
    &:hover {
        background-color: #e5e9f2;
    }
`;

StyledDropdown.displayName = "Dropdwon";
