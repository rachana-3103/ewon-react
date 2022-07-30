import { FC } from "react";
import Button, { ButtonProps } from "../button/button";

const DropdownToggle: FC<ButtonProps> = (props) => {
    const { children, ...restProps } = props;
    return <Button {...restProps}>{children}</Button>;
};

DropdownToggle.defaultProps = {
    label: "DropdownToggle",
    className: "dropdown-toggle",
};

DropdownToggle.displayName = "DropdownToggle";

export default DropdownToggle;
