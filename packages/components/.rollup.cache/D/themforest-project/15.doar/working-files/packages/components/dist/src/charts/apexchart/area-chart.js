import { jsx as _jsx } from "react/jsx-runtime";
import ApexChart from "react-apexcharts";
export var AreaChart = function (_a) {
    var options = _a.options, series = _a.series, width = _a.width, height = _a.height;
    return (_jsx(ApexChart, { type: "area", options: options, series: series, height: height, width: width }));
};
export default AreaChart;
