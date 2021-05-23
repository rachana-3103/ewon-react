declare const data: {
    options: {
        chart: {
            toolbar: {
                show: boolean;
            };
        };
        plotOptions: {
            bar: {
                horizontal: boolean;
                columnWidth: string;
                endingShape: string;
            };
        };
        dataLabels: {
            enabled: boolean;
        };
        stroke: {
            show: boolean;
            width: number;
            colors: string[];
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
            tickAmount: number;
            min: number;
            max: number;
            forceNiceScale: boolean;
            labels: {
                style: {
                    colors: string[];
                    fontSize: string;
                };
            };
        };
        fill: {
            opacity: number;
        };
        colors: string[];
        responsive: {
            breakpoint: number;
            options: {
                stroke: {
                    width: number;
                };
            };
        }[];
    };
    series: {
        data: number[];
    }[];
};
export default data;
