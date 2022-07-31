import { FC } from "react";
import ApexChart from "react-apexcharts";
import { IProps } from "./types";

const DonutChart: FC<IProps> = ({ options, series, width, height }) => {
    return (
        <ApexChart
            type="donut"
            options={options}
            series={series}
            height={height}
            width={width}
        />
    );
};

export default DonutChart;
