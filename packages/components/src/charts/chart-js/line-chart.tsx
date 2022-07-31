import { FC } from "react";
import { Line } from "react-chartjs-2";
import { IProps } from "./types";

const LineChart: FC<IProps> = ({ data, options, width, height }) => {
    const datasetKeyProvider = () => {
        return Math.random().toString();
    };
    return (
        <Line
            data={data}
            options={options}
            width={width}
            height={height}
            datasetKeyProvider={datasetKeyProvider}
        />
    );
};

export default LineChart;
