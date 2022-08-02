import { jsx as _jsx } from "react/jsx-runtime";
import ApexChart from "react-apexcharts";
var LineChart = function (_a) {
    var options = _a.options, series = _a.series, width = _a.width, height = _a.height;
    return (_jsx(ApexChart, { type: "line", options: options, series: series, height: height, width: width }));
};
export default LineChart;
