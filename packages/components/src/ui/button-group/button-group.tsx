import { FC } from "react";
import classnames from "classnames";
import { SpaceProps } from "@doar/shared/styled";
import { StyledGroup } from "./style";

export interface IProps extends SpaceProps {
    /**
     * Instead of applying button sizing props to every button in a group, just pass `size` to each `BtnGroup`, including each one when nesting multiple groups.
     */
    size?: "xs" | "sm" | "md" | "lg";
    /**
     * Make a set of buttons appear vertically stacked rather than horizontally. Split button dropdowns are not supported here.
     */
    vertical?: boolean;
    /**
     * Pass a label to make button group accessible
     */
    label?: string;
    /**
     * Pass extra class names
     */
    className?: string;
}

const ButtonGroup: FC<IProps> = ({
    children,
    size,
    vertical,
    label,
    className,
    ...restProps
}) => {
    return (
        <StyledGroup
            role="group"
            $size={size}
            $vertical={vertical}
            aria-label={label}
            className={classnames(className, "btn-group")}
            {...restProps}
        >
            {children}
        </StyledGroup>
    );
};

ButtonGroup.defaultProps = {
    label: "button group",
};

export default ButtonGroup;
