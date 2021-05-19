import { FC, ChangeEvent, MouseEvent, FocusEvent } from "react";
import classnames from "classnames";
import {
    SpaceProps,
    ColorProps,
    LayoutProps,
    BorderProps,
} from "@doar/shared/styled";
import { StyledInput, StyledFeedback } from "./style";

interface IProps {
    className?: string;
    disabled?: boolean;
    readonly?: boolean;
    feedbackText?: string;
    id: string;
    name: string;
    placeholder?: string;
    value?: string;
    showState?: boolean;
    showErrorOnly?: boolean;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    onClick?: (e: MouseEvent<HTMLInputElement>) => void;
    onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
}

interface IInputProps
    extends IProps,
        SpaceProps,
        ColorProps,
        LayoutProps,
        BorderProps {
    type?: string;
    state?: "success" | "warning" | "error";
}

export const Input: FC<IInputProps> = ({
    className,
    type,
    disabled,
    state,
    feedbackText,
    id,
    name,
    onChange,
    value,
    readonly,
    showState,
    showErrorOnly,
    ...restProps
}) => {
    return (
        <>
            <StyledInput
                type={type}
                disabled={disabled}
                $state={state}
                $showState={showState}
                $showErrorOnly={showErrorOnly}
                className={classnames(className, "form-control")}
                id={id}
                name={name}
                onChange={onChange}
                value={value}
                readOnly={readonly}
                {...restProps}
            />
            {feedbackText && showState && (
                <StyledFeedback
                    $state={state}
                    $showState={showState}
                    $showErrorOnly={showErrorOnly}
                >
                    {feedbackText}
                </StyledFeedback>
            )}
        </>
    );
};

Input.defaultProps = {
    type: "text",
    showErrorOnly: true,
};
