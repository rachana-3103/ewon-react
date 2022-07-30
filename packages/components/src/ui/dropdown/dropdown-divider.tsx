import { FC } from "react";
import classnames from "classnames";
import { StyledDropDivider } from "./style";

interface IDropDivider {
    className?: string;
}

const DropdownDivider: FC<IDropDivider> = ({ className }) => (
    <StyledDropDivider className={classnames(className, "dropdown-divider")} />
);

export default DropdownDivider;
