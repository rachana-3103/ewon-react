import { FC } from "react";
import classnames from "classnames";
import { StyledButtonToolbar } from "./style";

interface IToolbarProps {
    /**
     * Pass a label to make button group accessible
     */
    label?: string;
    /**
     * Pass extra class names
     */
    className?: string;
}

const ButtonToolbar: FC<IToolbarProps> = ({ children, className, label }) => {
    return (
        <StyledButtonToolbar
            role="toolbar"
            className={classnames(className, "btn-toolbar")}
            aria-label={label}
        >
            {children}
        </StyledButtonToolbar>
    );
};

ButtonToolbar.defaultProps = {
    label: "button toolbar",
};

export default ButtonToolbar;
