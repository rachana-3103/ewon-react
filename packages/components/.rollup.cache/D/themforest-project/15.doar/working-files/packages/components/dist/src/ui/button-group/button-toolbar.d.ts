import { FC } from "react";
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
declare const ButtonToolbar: FC<IToolbarProps>;
export default ButtonToolbar;
