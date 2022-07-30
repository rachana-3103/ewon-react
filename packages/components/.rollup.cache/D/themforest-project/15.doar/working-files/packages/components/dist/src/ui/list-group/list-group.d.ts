import { FC } from "react";
import { SpaceProps } from "@doar/shared/styled";
interface IProps {
    as?: React.ElementType;
    className?: string;
}
interface IListGroup extends IProps, SpaceProps {
    flush?: boolean;
    horizontal?: boolean;
}
declare const ListGroup: FC<IListGroup>;
export default ListGroup;
