import { TTheme } from "@doar/shared/types";
import { FC } from "react";
import { TableColumn } from "react-data-table-component";
interface IProps {
    data: any[];
    columns: TableColumn<any>[];
    theme?: TTheme;
    pagination?: boolean;
    paginationPerPage?: number;
    paginationRowsPerPageOptions?: number[];
    customStyles: {
        [x: string]: any;
    };
}
declare const DataTable: FC<IProps>;
export default DataTable;
