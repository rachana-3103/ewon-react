import { FC } from "react";
import classNames from "classnames";
import { StyledTableResponsive, StyledTable } from "./style";

type TColor =
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";

interface IProps {
    className: string;
    theadColor?: TColor;
    striped?: boolean;
    bordered?: boolean;
    hover?: boolean;
    compact?: boolean;
    color?: TColor;
}

export const Table: FC<IProps> = ({
    children,
    className,
    theadColor,
    striped,
    bordered,
    hover,
    compact,
    color,
}) => {
    return (
        <StyledTableResponsive>
            <StyledTable
                className={classNames(className)}
                $theadColor={theadColor}
                $striped={striped}
                $bordered={bordered}
                $hover={hover}
                $compact={compact}
                $color={color}
            >
                {children}
            </StyledTable>
        </StyledTableResponsive>
    );
};
