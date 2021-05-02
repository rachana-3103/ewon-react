import { FC, ChangeEvent, FocusEvent } from "react";
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
    value?: string | number;
    showState?: boolean;
    showErrorOnly?: boolean;
    onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
    onBlur?: (e: FocusEvent<HTMLSelectElement>) => void;
}

interface IInputProps extends IProps, SpaceProps, ColorProps, LayoutProps {}

export const Select: FC<IInputProps> = ({
    className,
    disabled,
    state,
    feedbackText,
    id,
    name,
    value,
    onChange,
    onBlur,
    children,
    showState,
    showErrorOnly,
    ...restProps
}) => {
    return (
        <>
            <StyledSelect
                className={classnames(className, "custom-select")}
                $state={state}
                $showState={showState}
                $showErrorOnly={showErrorOnly}
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                {...restProps}
            >
                {children}
            </StyledSelect>
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

Select.defaultProps = {
    showErrorOnly: true,
};
