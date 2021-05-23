declare const data: {
    options: {
        chart: {
            toolbar: {
                show: boolean;
            };
        };
        dataLabels: {
            enabled: boolean;
        };
        stroke: {
            curve: string;
            lineCap: string;
            width: number;
        };
        legend: {
            show: boolean;
        };
        xaxis: {
            labels: {
                show: boolean;
            };
            axisBorder: {
                show: boolean;
            };
            axisTicks: {
                show: boolean;
            };
        };
        yaxis: {
            labels: {
                show: boolean;
            };
            axisBorder: {
                show: boolean;
            };
            axisTicks: {
                show: boolean;
            };
        };
        grid: {
            show: boolean;
        };
        fill: {
            opacity: number;
            type: string;
            colors: string[];
        };
        colors: string[];
    };
    series: {
        data: number[][];
    }[];
};
export default data;
