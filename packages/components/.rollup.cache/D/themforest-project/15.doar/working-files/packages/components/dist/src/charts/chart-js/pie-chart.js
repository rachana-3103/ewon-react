import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);
var PieChart = function (_a) {
    var data = _a.data, options = _a.options, width = _a.width, height = _a.height;
    return (_jsx(Pie, { data: data, options: __assign({ responsive: true, maintainAspectRatio: false }, options), width: width, height: height }));
};
PieChart.defaultProps = {
    width: "100%",
    height: "100%",
};
export default PieChart;
