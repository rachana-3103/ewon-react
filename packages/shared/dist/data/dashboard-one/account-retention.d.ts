export declare const RetentionChart: {
    options: {
        chart: {
            stacked: boolean;
            toolbar: {
                show: boolean;
            };
            zoom: {
                enabled: boolean;
            };
        };
        dataLabels: {
            enabled: boolean;
        };
        responsive: {
            breakpoint: number;
            options: {
                chart: {
                    height: number;
                };
            };
        }[];
        plotOptions: {
            bar: {
                horizontal: boolean;
                columnWidth: string;
                endingShape: string;
            };
        };
        xaxis: {
            categories: string[];
            tooltip: {
                enabled: boolean;
            };
            axisTicks: {
                show: boolean;
            };
            axisBorder: {
                show: boolean;
            };
        };
        yaxis: {
            show: boolean;
        };
        legend: {
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
        fill: {
            opacity: number;
        };
        colors: string[];
    };
    series: {
        data: number[];
    }[];
};
