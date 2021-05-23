declare const data: {
    options: {
        chart: {
            toolbar: {
                show: boolean;
            };
            offsetX: number;
            offsetY: number;
        };
        dataLabels: {
            enabled: boolean;
        };
        stroke: {
            curve: string;
            lineCap: string;
            width: number;
        };
        plotOptions: {
            bar: {
                columnWidth: string;
                barHeight: string;
            };
        };
        legend: {
            show: boolean;
        };
        xaxis: {
            type: string;
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
            borderColor: string;
            strokeDashArray: number;
            position: string;
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
        fill: {
            colors: string[];
            opacity: number[];
            type: string;
        };
        colors: string[];
        tooltip: {
            enabled: boolean;
        };
    };
    series: {
        data: number[][];
        type: string;
    }[];
};
export default data;
