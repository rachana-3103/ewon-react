import { FC, ChangeEvent } from "react";
import classnames from "classnames";
import {
    StyledBoxWrap,
    StyledRadio,
    StyledRadioLabel,
    StyledFeedback,
} from "./style";

interface IProps {
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

export const Radio: FC<IProps> = ({
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
            className={classnames(className, "custom-radio")}
            {...restProps}
        >
            <StyledRadio
                type="radio"
                disabled={disabled}
                id={id}
                name={name}
                checked={checked}
                value={value}
                onChange={onChange}
            />
            <StyledRadioLabel htmlFor={id}>{label}</StyledRadioLabel>
            {feedbackText && (
                <StyledFeedback $state={state}>{feedbackText}</StyledFeedback>
            )}
        </StyledBoxWrap>
    );
};
