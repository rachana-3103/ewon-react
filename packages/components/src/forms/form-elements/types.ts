import { ChangeEvent, MouseEvent, FocusEvent } from "react";
import { SpaceProps, BorderProps } from "@doar/shared/styled";

export interface IFeedback {
    $state?: "success" | "warning" | "error";
    $showState?: boolean;
    $showErrorOnly?: boolean;
}

type TInput = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;

export interface IInputProps extends SpaceProps, BorderProps {
    className?: string;
    disabled?: boolean;
    readonly?: boolean;
    feedbackText?: string;
    id: string;
    name: string;
    placeholder?: string;
    value?: string | number;
    showState?: boolean;
    showErrorOnly?: boolean;
    state?: "success" | "warning" | "error";
    onChange?: (e: ChangeEvent<TInput>) => void;
    onClick?: (e: MouseEvent<TInput>) => void;
    onBlur?: (e: FocusEvent<TInput>) => void;
}
