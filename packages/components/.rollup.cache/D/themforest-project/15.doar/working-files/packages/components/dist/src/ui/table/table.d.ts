import { FC } from "react";
import { SpaceProps, BorderProps } from "@doar/shared/styled";
declare type TColor = "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark";
interface IProps extends SpaceProps, BorderProps {
    className?: string;
    theadColor?: TColor;
    striped?: boolean;
    bordered?: boolean;
    hover?: boolean;
    compact?: boolean;
    color?: TColor;
    borderless?: boolean;
}
declare const Table: FC<IProps>;
export default Table;
