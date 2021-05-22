import styled, { SpaceProps, BorderProps } from "@doar/shared/styled";
import {
    InputStyles,
    SuccessInputStyles,
    WarningInputStyles,
    ErrorInputStyles,
    allowedProps,
} from "../style";
import { IFeedback } from "../types";

interface IInput extends IFeedback, SpaceProps, BorderProps {}

export const StyledTextarea = styled("textarea").withConfig({
    shouldForwardProp: (prop, defaultValidatorFn) =>
        ![...allowedProps].includes(prop) && defaultValidatorFn(prop),
})<IInput>`
    height: auto;
    min-height: 38px;
    ${InputStyles};
    ${({ $state, $showState, $showErrorOnly }) =>
        $state === "success" &&
        !!$showState &&
        !$showErrorOnly &&
        SuccessInputStyles};
    ${({ $state, $showState, $showErrorOnly }) =>
        $state === "warning" &&
        !!$showState &&
        !$showErrorOnly &&
        WarningInputStyles};
    ${({ $state, $showState, $showErrorOnly }) =>
        $state === "error" &&
        !!$showState &&
        !!$showErrorOnly &&
        ErrorInputStyles};
`;
