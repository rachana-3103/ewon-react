import { FC } from "react";
interface IDropMenu {
    show?: boolean;
    direction?: "up" | "down" | "left" | "right";
    className?: string;
}
declare const DropdownMenu: FC<IDropMenu>;
export default DropdownMenu;
