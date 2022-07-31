import { FC } from "react";
import ApexChart from "react-apexcharts";
import { IMixChart } from "./types";

const MixChart: FC<IMixChart> = ({ options, series, width, height }) => {
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

export default MixChart;
