export declare const ApexThresholdsData: {
    options: {
        chart: {
            height: number;
            type: string;
            zoom: {
                enabled: boolean;
            };
        };
        plotOptions: {
            bar: {
                colors: {
                    ranges: {
                        from: number;
                        to: number;
                        color: string;
                    }[];
                };
                columnWidth: string;
            };
        };
        dataLabels: {
            enabled: boolean;
        };
        xaxis: {
            type: string;
        };
        yaxis: {
            show: boolean;
            decimalsInFloat: boolean;
        };
        colors: string[];
        legend: {
            show: boolean;
        };
    };
    series: {
        name: string;
        data: number[][];
    }[];
};
