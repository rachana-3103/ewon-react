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
    onChange,
    ...restProps
}) => {
    return (
        <>
            <StyledTextarea
                disabled={disabled}
                className={classnames(className, "form-control")}
                $state={state}
                rows={rows}
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

Textarea.defaultProps = {
    rows: 2,
};
