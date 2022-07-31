import { FC } from "react";
import ApexChart from "react-apexcharts";
import { IProps } from "./types";

const RadialChart: FC<IProps> = ({ options, series, width, height }) => {
    return (
        <ApexChart
            type="radialBar"
            options={options}
            series={series}
            height={height}
            width={width}
        />
    );
};

export default RadialChart;
