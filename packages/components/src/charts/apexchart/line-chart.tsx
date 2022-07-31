import { FC } from "react";
import ApexChart from "react-apexcharts";
import { IProps } from "./types";

const LineChart: FC<IProps> = ({ options, series, width, height }) => {
    return (
        <ApexChart
            type="line"
            options={options}
            series={series}
            height={height}
            width={width}
        />
    );
};

export default LineChart;
