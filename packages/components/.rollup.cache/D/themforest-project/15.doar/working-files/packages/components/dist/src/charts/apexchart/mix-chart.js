import { jsx as _jsx } from "react/jsx-runtime";
import ApexChart from "react-apexcharts";
var MixChart = function (_a) {
    var options = _a.options, series = _a.series, width = _a.width, height = _a.height;
    return (_jsx(ApexChart, { type: "line", options: options, series: series, height: height, width: width }, void 0));
};
export default MixChart;
