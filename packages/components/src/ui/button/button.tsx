/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */
/* eslint-disable @typescript-eslint/ban-types */
import { FC } from "react";

import { StyledButton } from "./style";

export type RenderComponent = React.ComponentType | "a" | "button";

export type GetRenderComponentProps<T> = T extends React.ComponentType
    ? React.ComponentProps<T>
    : T extends "a"
    ? React.HTMLProps<T>
    : {};

export type ButtonRef = HTMLButtonElement | HTMLAnchorElement;

export type ButtonProps = {
    /**
     * Required.
     */
    children: React.ReactNode;
    /**
     * Optional. Default is `button`.
     */
    type?: "button" | "submit" | "reset";
    /**
     * Optional. Default is `contained`.
     */
    variant?: "contained" | "outlined" | "texted";
    /**
     * Optional. Default is `primary`.
     */
    color?:
        | "primary"
        | "secondary"
        | "success"
        | "danger"
        | "warning"
        | "info"
        | "light"
        | "dark"
        | "white";
    /**
     * Optional. Default is `md`.
     */
    size?: "xs" | "sm" | "md" | "lg";
    /**
     * Optional. Default is `rounded`.
     */
    shape?: "rounded" | "square" | "ellipse";
    /**
     * Pass fullwidth to make button fullwidth.
     */
    fullwidth?: boolean;
    /**
     * Pass active to enable active state.
     */
    active?: boolean;
    /**
     * Pass disabled to enable disabled state.
     */
    disabled?: boolean;
    /**
     * Pass iconButton to get Icon Button style.
     */
    iconButton?: boolean;
    /**
     * Pass hasIcon if button has icon with text
     */
    hasIcon?: boolean;
    /**
     * Optional. Pass label if button does not contain any text
     */
    label?: string;
    /**
     * Optional. onClick function
     */
    onClick?: () => void;
    /**
     * Optional. Extra Class Name
     */
    className?: string;
};

export const Button: FC<ButtonProps> = (props) => {
    const {
        children,
        type,
        variant,
        color,
        size,
        shape,
        fullwidth,
        active,
        disabled,
        iconButton,
        hasIcon,
        label,
        onClick,
        className,
        ...restProps
    } = props;

    return (
        <StyledButton
            $color={color}
            $variant={variant}
            $size={size}
            $shape={shape}
            $fullwidth={fullwidth}
            type={type}
            $active={active}
            disabled={disabled}
            $iconButton={iconButton}
            $hasIcon={hasIcon}
            aria-label={label}
            onClick={onClick}
            className={className}
            {...restProps}
        >
            {children}
        </StyledButton>
    );
};

Button.defaultProps = {
    type: "button",
    variant: "contained",
    color: "primary",
    size: "md",
    shape: "rounded",
    fullwidth: false,
    active: false,
    disabled: false,
    iconButton: false,
};

Button.displayName = "Button";
