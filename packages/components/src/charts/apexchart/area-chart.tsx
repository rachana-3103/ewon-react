import { FC } from "react";
import ApexChart from "react-apexcharts";
import { IProps } from "./types";

export const AreaChart: FC<IProps> = ({ options, series, width, height }) => {
    return (
        <ApexChart
            type="area"
            options={options}
            series={series}
            height={height}
            width={width}
        />
    );
};

export default AreaChart;
