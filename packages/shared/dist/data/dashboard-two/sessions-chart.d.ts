declare const data: {
    options: {
        labels: string[];
        dataLabels: {
            enabled: boolean;
        };
        legend: {
            show: boolean;
        };
        plotOptions: {
            pie: {
                donut: {
                    size: string;
                };
            };
        };
        colors: string[];
    };
    series: number[];
};
export default data;
