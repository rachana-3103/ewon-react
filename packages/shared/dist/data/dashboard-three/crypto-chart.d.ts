declare const data: {
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
            colors: string[];
            opacity: number[];
            type: string;
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
            tickAmount: number;
            min: number;
            max: number;
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
export default data;
