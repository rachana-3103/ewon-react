import { FC } from "react";
import { Bar, HorizontalBar, Line, Pie, Doughnut } from "react-chartjs-2";

interface IBarProps {
    data: {
        labels: string[];
        datasets: Array<{
            data: number[];
            backgroundColor: string | string[];
            borderColor?: string | string[];
            borderWidth?: number;
        }>;
    };
    options: {
        [x: string]: unknown;
    };
    width: number;
    height: number;
}

export const BarChart: FC<IBarProps> = ({ data, options, width, height }) => {
    return <Bar data={data} options={options} width={width} height={height} />;
};

export const HorizontalBarChart: FC<IBarProps> = ({
    data,
    options,
    width,
    height,
}) => {
    return (
        <HorizontalBar
            data={data}
            options={options}
            width={width}
            height={height}
        />
    );
};

export const LineChart: FC<IBarProps> = ({ data, options, width, height }) => {
    return <Line data={data} options={options} width={width} height={height} />;
};

export const PieChart: FC<IBarProps> = ({ data, options, width, height }) => {
    return <Pie data={data} options={options} width={width} height={height} />;
};

export const DonutChart: FC<IBarProps> = ({ data, options, width, height }) => {
    return (
        <Doughnut data={data} options={options} width={width} height={height} />
    );
};
