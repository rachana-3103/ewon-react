export interface IProps {
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
    width?: number;
    height?: number;
    plugins?: any[];
}
