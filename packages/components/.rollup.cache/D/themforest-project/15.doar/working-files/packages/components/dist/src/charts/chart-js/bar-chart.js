import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, } from "chart.js";
import { Bar } from "react-chartjs-2";
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
export var BarChart = function (_a) {
    var data = _a.data, options = _a.options, width = _a.width, height = _a.height;
    return (_jsx(Bar, { data: data, options: __assign({ responsive: true, maintainAspectRatio: false }, options), width: width, height: height }));
};
BarChart.defaultProps = {
    width: "100%",
    height: "100%",
};
export default BarChart;
