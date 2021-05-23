export declare const ApexBarData: {
    options: {
        chart: {
            type: string;
            height: number;
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
        xaxis: {
            categories: string[];
        };
        yaxis: {
            title: {
                text: string;
            };
        };
        fill: {
            opacity: number;
        };
    };
    series: {
        name: string;
        data: number[];
    }[];
};
