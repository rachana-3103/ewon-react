/* eslint-disable @typescript-eslint/no-explicit-any */
import { forwardRef } from "react";
import { HorizontalBar } from "react-chartjs-2";
import { IProps } from "./types";

const HorizontalBarChart = forwardRef<any, IProps>(
    ({ data, options, width, height, plugins }, ref) => {
        const datasetKeyProvider = () => {
            return Math.random().toString();
        };
        return (
            <HorizontalBar
                data={data}
                options={options}
                width={width}
                height={height}
                datasetKeyProvider={datasetKeyProvider}
                ref={ref}
                plugins={plugins}
            />
        );
    }
);

HorizontalBarChart.displayName = "HorizontalBarChart";

export default HorizontalBarChart;
