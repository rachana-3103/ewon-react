import { FC, ChangeEvent } from "react";
import { SpaceProps } from "@doar/shared/styled";
import classnames from "classnames";
import {
    StyledBoxWrap,
    StyledCheckbox,
    StyledCheckboxLabel,
    StyledFeedback,
} from "./style";

interface IProps extends SpaceProps {
    className?: string;
    disabled?: boolean;
    feedbackText?: string;
    id: string;
    name: string;
    label: string;
    state?: "success" | "warning" | "error";
    checked?: boolean;
    value?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox: FC<IProps> = ({
    className,
    disabled,
    feedbackText,
    id,
    name,
    label,
    state,
    checked,
    onChange,
    value,
    ...restProps
}) => {
    return (
        <StyledBoxWrap
            className={classnames(className, "custom-checkbox")}
            {...restProps}
        >
            <StyledCheckbox
                type="checkbox"
                disabled={disabled}
                id={id}
                name={name}
                checked={checked}
                onChange={onChange}
                value={value}
            />
            <StyledCheckboxLabel htmlFor={id}>{label}</StyledCheckboxLabel>
            {feedbackText && (
                <StyledFeedback $state={state}>{feedbackText}</StyledFeedback>
            )}
        </StyledBoxWrap>
    );
};
