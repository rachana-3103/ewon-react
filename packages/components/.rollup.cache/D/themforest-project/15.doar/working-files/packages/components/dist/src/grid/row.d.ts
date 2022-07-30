import { FC } from "react";
import { SpaceProps } from "@doar/shared/styled";
import { RowProps } from "./types";
interface IProps extends SpaceProps {
    className?: string;
}
interface IRowProps extends IProps, RowProps {
    gutters?: number;
    noGutter?: boolean;
}
declare const Row: FC<IRowProps>;
export default Row;
