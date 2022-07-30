import React from "react";
export interface AlertProps {
    /**
     * Required. Default is `contained`.
     */
    variant: "contained" | "outlined";
    /**
     * Required. Default is `primary`.
     */
    color: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark";
    /**
     * Required. Default is `false` make it `true` to get solid background.
     */
    solid: boolean;
    /**
     * Required. Default is `false` make it `true` if alert has link.
     */
    hasLink: boolean;
    /**
     * Required. Default is `false` make it `true` to enable dismissible alert.
     */
    isDismissible: boolean;
    /**
     * Required. Default is `false` make it `true` to get css for icon.
     */
    hasIcon: boolean;
}
declare const Alert: React.FC<AlertProps>;
export default Alert;
