import { FC } from "react";
interface DropdownProps {
    /**
     * Required. Default is `down`.
     */
    direction: "up" | "down" | "left" | "right";
    className?: string;
}
declare const Dropdown: FC<DropdownProps>;
export default Dropdown;
