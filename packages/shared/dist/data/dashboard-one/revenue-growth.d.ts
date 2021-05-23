export declare const RevenueChart: {
    series: {
        name: string;
        data: any[][];
    }[];
    options: {
        chart: {
            type: string;
            stacked: boolean;
            zoom: {
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
            width: number;
        };
        fill: {
            type: string;
            gradient: {
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
            column: {
                colors: string;
                opacity: number;
            };
        };
        tooltip: {
            fillSeriesColor: string;
        };
        responsive: {
            breakpoint: number;
            options: {
                chart: {
                    height: number;
                };
                xaxis: {
                    show: boolean;
                };
            };
        }[];
    };
};
