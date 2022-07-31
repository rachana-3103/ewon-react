import { FC } from "react";
import ApexChart from "react-apexcharts";
import { IProps } from "./types";

const PieChart: FC<IProps> = ({ options, series, width, height }) => {
    return (
        <ApexChart
            type="pie"
            options={options}
            series={series}
            height={height}
            width={width}
        />
    );
};

export default PieChart;
