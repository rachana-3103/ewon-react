import { jsx as _jsx } from "react/jsx-runtime";
import ReactDataTable, { createTheme, } from "react-data-table-component";
createTheme("solarized", {
    text: {
        primary: "#1b2e4b",
    },
    background: {
        default: "transparent",
    },
    divider: {
        default: "#485e9029",
    },
}, "dark");
createTheme("solarizedDark", {
    text: {
        primary: "#ffffff",
    },
    background: {
        default: "transparent",
    },
    divider: {
        default: "#485e9029",
    },
}, "dark");
var DataTable = function (_a) {
    var data = _a.data, columns = _a.columns, theme = _a.theme, customStyles = _a.customStyles, pagination = _a.pagination, paginationPerPage = _a.paginationPerPage, paginationRowsPerPageOptions = _a.paginationRowsPerPageOptions;
    return (_jsx(ReactDataTable, { theme: theme === "dark" ? "solarizedDark" : "solarized", columns: columns, data: data, customStyles: customStyles, paginationPerPage: paginationPerPage, paginationRowsPerPageOptions: paginationRowsPerPageOptions, pagination: pagination }));
};
export default DataTable;
//# sourceMappingURL=index.js.map