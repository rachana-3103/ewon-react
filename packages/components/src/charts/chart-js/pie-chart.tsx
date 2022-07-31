import { FC } from "react";
import { Pie } from "react-chartjs-2";
import { IProps } from "./types";

const PieChart: FC<IProps> = ({ data, options, width, height }) => {
    const datasetKeyProvider = () => {
        return Math.random().toString();
    };
    return (
        <Pie
            data={data}
            options={options}
            width={width}
            height={height}
            datasetKeyProvider={datasetKeyProvider}
        />
    );
};

export default PieChart;
