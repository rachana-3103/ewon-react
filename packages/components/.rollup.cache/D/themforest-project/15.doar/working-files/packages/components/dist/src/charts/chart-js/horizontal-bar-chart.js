import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { forwardRef } from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, } from "chart.js";
import { Bar } from "react-chartjs-2";
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
var HorizontalBarChart = forwardRef(function (_a, ref) {
    var data = _a.data, options = _a.options, width = _a.width, height = _a.height;
    return (_jsx(Bar, { data: data, ref: ref, options: __assign({ indexAxis: "y", responsive: true, maintainAspectRatio: false }, options), width: width, height: height }));
});
HorizontalBarChart.defaultProps = {
    width: "100%",
    height: "100%",
};
HorizontalBarChart.displayName = "HorizontalBarChart";
export default HorizontalBarChart;
