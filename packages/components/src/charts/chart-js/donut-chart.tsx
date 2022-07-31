import { FC } from "react";
import { Doughnut } from "react-chartjs-2";
import { IProps } from "./types";

const DonutChart: FC<IProps> = ({ data, options, width, height }) => {
    const datasetKeyProvider = () => {
        return Math.random().toString();
    };
    return (
        <Doughnut
            data={data}
            options={options}
            width={width}
            height={height}
            datasetKeyProvider={datasetKeyProvider}
        />
    );
};

export default DonutChart;
