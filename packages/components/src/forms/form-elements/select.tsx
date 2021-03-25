import { FC, ChangeEvent } from "react";
import classnames from "classnames";
import { SpaceProps, ColorProps, LayoutProps } from "@doar/shared/styled";
import { StyledSelect, StyledFeedback } from "./style";

interface IProps {
    className?: string;
    disabled?: boolean;
    feedbackText?: string;
    id: string;
    name: string;
    state?: "success" | "warning" | "error";
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

interface IInputProps extends IProps, SpaceProps, ColorProps, LayoutProps {}

export const Select: FC<IInputProps> = ({
    className,
    disabled,
    state,
    feedbackText,
    id,
    name,
    onChange,
    children,
    ...restProps
}) => {
    return (
        <>
            <StyledSelect
                className={classnames(className, "custom-select")}
                id={id}
                name={name}
                {...restProps}
            >
                {children}
            </StyledSelect>
            {feedbackText && (
                <StyledFeedback $state={state}>{feedbackText}</StyledFeedback>
            )}
        </>
    );
};
