declare const data: {
    options: {
        chart: {
            toolbar: {
                show: boolean;
            };
        };
        states: {
            hover: {
                filter: {
                    type: string;
                };
            };
        };
        dataLabels: {
            enabled: boolean;
        };
        stroke: {
            curve: string;
            width: number;
            lineCap: string;
        };
        grid: {
            borderColor: string;
            xaxis: {
                lines: {
                    show: boolean;
                };
            };
            yaxis: {
                lines: {
                    show: boolean;
                };
            };
        };
        xaxis: {
            type: string;
            labels: {
                offsetY: number;
                offsetX: number;
                style: {
                    colors: string;
                    fontWeight: number;
                };
            };
            axisBorder: {
                show: boolean;
            };
            axisTicks: {
                show: boolean;
            };
            tickAmount: number;
            tickPlacement: string;
            min: number;
            max: number;
            floating: boolean;
            position: string;
        };
        yaxis: {
            show: boolean;
            min: number;
            max: number;
        };
        colors: string[];
        legend: {
            show: boolean;
        };
        fill: {
            opacity: number;
            colors: string[];
            type: string;
        };
        tooltip: {
            enabled: boolean;
        };
    };
    series: {
        data: number[][];
    }[];
};
export default data;
