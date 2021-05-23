declare const data: {
    series: {
        data: number[][];
    }[];
    options: {
        chart: {
            stacked: boolean;
            sparkline: {
                enabled: boolean;
            };
            toolbar: {
                show: boolean;
            };
        };
        colors: string[];
        dataLabels: {
            enabled: boolean;
        };
        stroke: {
            curve: string;
            width: number[];
        };
        fill: {
            type: string;
            gradient: {
                shade: string;
                type: string;
                shadeIntensity: number;
                gradientToColors: string[];
                inverseColors: boolean;
                opacityFrom: number;
                opacityTo: number;
            };
        };
        legend: {
            show: boolean;
        };
        xaxis: {
            type: string;
            tooltip: {
                enabled: boolean;
            };
            axisTicks: {
                show: boolean;
            };
            tickPlacement: string;
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
            show: boolean;
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
        tooltip: {
            enabled: boolean;
        };
    };
};
export default data;
