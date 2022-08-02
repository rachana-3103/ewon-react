import { jsx as _jsx } from "react/jsx-runtime";
import ApexChart from "react-apexcharts";
var RadialChart = function (_a) {
    var options = _a.options, series = _a.series, width = _a.width, height = _a.height;
    return (_jsx(ApexChart, { type: "radialBar", options: options, series: series, height: height, width: width }));
};
export default RadialChart;
