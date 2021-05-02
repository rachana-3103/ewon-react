import { FC, ChangeEvent } from "react";
import classnames from "classnames";
import { SpaceProps, ColorProps, LayoutProps } from "@doar/shared/styled";
import { StyledTextarea, StyledFeedback } from "./style";

interface IProps {
    className?: string;
    disabled?: boolean;
    feedbackText?: string;
    id: string;
    name: string;
    placeholder?: string;
    value?: string;
    showState?: boolean;
    showErrorOnly?: boolean;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

interface ITextareaProps extends IProps, SpaceProps, ColorProps, LayoutProps {
    rows?: number;
    state?: "success" | "warning" | "error";
}

export const Textarea: FC<ITextareaProps> = ({
    className,
    rows,
    disabled,
    state,
    feedbackText,
    id,
    name,
    placeholder,
    value,
    showState,
    showErrorOnly,
    onChange,
    ...restProps
}) => {
    return (
        <>
            <StyledTextarea
                disabled={disabled}
                className={classnames(className, "form-control")}
                $state={state}
                $showState={showState}
                $showErrorOnly={showErrorOnly}
                rows={rows}
                id={id}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
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

Textarea.defaultProps = {
    rows: 2,
    showErrorOnly: true,
};
