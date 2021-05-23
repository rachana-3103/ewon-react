declare const data: {
    options: {
        chart: {
            sparkline: {
                enabled: boolean;
            };
        };
        labels: string[];
        dataLabels: {
            enabled: boolean;
        };
        plotOptions: {
            pie: {
                donut: {
                    size: string;
                };
            };
        };
        legend: {
            show: boolean;
        };
        colors: string[];
    };
    series: number[];
};
export default data;
