import { FC } from "react";
import classnames from "classnames";
import { StyledDropItem } from "./style";

interface IDropItem {
    path: string;
    className?: string;
    active?: boolean;
}

const DropdownItem: FC<IDropItem> = ({ children, path, className, active }) => (
    <StyledDropItem
        active={active}
        path={path}
        className={classnames(className, "dropdown-item")}
    >
        {children}
    </StyledDropItem>
);

export default DropdownItem;
