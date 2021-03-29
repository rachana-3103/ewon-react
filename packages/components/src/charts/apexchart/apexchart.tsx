/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from "react";
import ApexChart from "react-apexcharts";

interface IProps {
    options: {
        [x: string]: unknown;
    };
    series: Array<{
        name?: string;
        data: any[];
    }>;
    width?: string | number;
    height?: string | number;
}

export const ApexBarChart: FC<IProps> = ({
    options,
    series,
    width,
    height,
}) => {
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

ApexBarChart.defaultProps = {
    width: "100%",
    height: "350px",
};

export const ApexLineChart: FC<IProps> = ({
    options,
    series,
    width,
    height,
}) => {
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

ApexLineChart.defaultProps = {
    width: "100%",
    height: "350px",
};

export const ApexAreaChart: FC<IProps> = ({
    options,
    series,
    width,
    height,
}) => {
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

ApexAreaChart.defaultProps = {
    width: "100%",
    height: "350px",
};

export const ApexPieChart: FC<IProps> = ({
    options,
    series,
    width,
    height,
}) => {
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

ApexPieChart.defaultProps = {
    width: 510,
    height: 350,
};

export const ApexDonutChart: FC<IProps> = ({
    options,
    series,
    width,
    height,
}) => {
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

ApexDonutChart.defaultProps = {
    width: 510,
    height: 350,
};
