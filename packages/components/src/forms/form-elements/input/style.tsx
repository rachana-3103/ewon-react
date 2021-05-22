import styled, { SpaceProps, BorderProps } from "@doar/shared/styled";
import { IFeedback } from "../types";
import {
    InputStyles,
    SuccessInputStyles,
    WarningInputStyles,
    ErrorInputStyles,
    allowedProps,
} from "../style";

interface IInput extends IFeedback, SpaceProps, BorderProps {}

export const StyledInput = styled("input").withConfig({
    shouldForwardProp: (prop, defaultValidatorFn) =>
        ![...allowedProps].includes(prop) && defaultValidatorFn(prop),
})<IInput>`
    ${InputStyles};
    ${({ $state, $showState, $showErrorOnly }) =>
        $state === "success" &&
        $showState &&
        !$showErrorOnly &&
        SuccessInputStyles};
    ${({ $state, $showState, $showErrorOnly }) =>
        $state === "warning" &&
        $showState &&
        !$showErrorOnly &&
        WarningInputStyles};
    ${({ $state, $showState, $showErrorOnly }) =>
        $state === "error" && $showState && $showErrorOnly && ErrorInputStyles};
`;
