import { FC } from "react";
import { Bar } from "react-chartjs-2";
import { IProps } from "./types";

const BarChart: FC<IProps> = ({ data, options, width, height }) => {
    const datasetKeyProvider = () => {
        return Math.random().toString();
    };
    return (
        <Bar
            data={data}
            options={options}
            width={width}
            height={height}
            datasetKeyProvider={datasetKeyProvider}
        />
    );
};

export default BarChart;
