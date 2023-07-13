import ApexChart from "react-apexcharts";
import { IProps } from "./types";

export const AreaChart = ({ options, series, width, height }: IProps) => {
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

export default AreaChart;
