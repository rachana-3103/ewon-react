import { FC, ChangeEvent } from "react";
import classnames from "classnames";
import { SpaceProps, ColorProps, LayoutProps } from "@doar/shared/styled";
import { StyledInput, StyledFeedback } from "./style";

interface IProps {
    className?: string;
    disabled?: boolean;
    feedbackText?: string;
    id: string;
    name: string;
    placeholder?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

interface IInputProps extends IProps, SpaceProps, ColorProps, LayoutProps {
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
    ...restProps
}) => {
    return (
        <>
            <StyledInput
                type={type}
                disabled={disabled}
                $state={state}
                className={classnames(className, "form-control")}
                id={id}
                name={name}
                onChange={onChange}
                {...restProps}
            />
            {feedbackText && (
                <StyledFeedback $state={state}>{feedbackText}</StyledFeedback>
            )}
        </>
    );
};

Input.defaultProps = {
    type: "text",
};
