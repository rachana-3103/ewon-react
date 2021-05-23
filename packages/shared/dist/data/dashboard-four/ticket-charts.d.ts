declare const data: {
    options: {
        chart: {
            height: number;
            type: string;
            stacked: boolean;
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
            width: number;
        };
        fill: {
            type: string;
            opacity: number;
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
            axisTicks: {
                show: boolean;
            };
            axisBorder: {
                show: boolean;
            };
            tickAmount: number;
            labels: {
                style: {
                    colors: string[];
                    fontSize: string;
                    fontFamily: string;
                    fontWeight: number;
                    cssClass: string;
                };
            };
        };
        yaxis: {
            axisTicks: {
                show: boolean;
            };
            axisBorder: {
                show: boolean;
            };
            min: number;
            max: number;
            tickAmount: number;
            decimalsInFloat: boolean;
            labels: {
                style: {
                    colors: string[];
                    fontSize: string;
                    fontFamily: string;
                    fontWeight: number;
                    cssClass: string;
                };
            };
        }[];
        colors: string[];
        legend: {
            show: boolean;
        };
        tooltip: {
            enabled: boolean;
        };
        plotOptions: {
            bar: {
                columnWidth: string;
            };
        };
    };
    series: {
        type: string;
        data: number[][];
    }[];
};
export default data;
