import { FC } from "react";
import ApexChart from "react-apexcharts";
import { IProps } from "./types";

const BarChart: FC<IProps> = ({ options, series, width, height }) => {
    return (
        <ApexChart
            type="bar"
            options={options}
            series={series}
            height={height}
            width={width}
        />
    );
};

export default BarChart;
