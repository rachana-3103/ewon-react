import { jsx as _jsx } from "react/jsx-runtime";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { forwardRef } from "react";
import { HorizontalBar } from "react-chartjs-2";
var HorizontalBarChart = forwardRef(function (_a, ref) {
    var data = _a.data, options = _a.options, width = _a.width, height = _a.height, plugins = _a.plugins;
    var datasetKeyProvider = function () {
        return Math.random().toString();
    };
    return (_jsx(HorizontalBar, { data: data, options: options, width: width, height: height, datasetKeyProvider: datasetKeyProvider, ref: ref, plugins: plugins }, void 0));
});
HorizontalBarChart.displayName = "HorizontalBarChart";
export default HorizontalBarChart;
