import { jsx as _jsx } from "react/jsx-runtime";
import { Bar } from "react-chartjs-2";
var BarChart = function (_a) {
    var data = _a.data, options = _a.options, width = _a.width, height = _a.height;
    var datasetKeyProvider = function () {
        return Math.random().toString();
    };
    return (_jsx(Bar, { data: data, options: options, width: width, height: height, datasetKeyProvider: datasetKeyProvider }, void 0));
};
export default BarChart;
