export declare const ApexAreaData: {
    options: {
        chart: {
            height: number;
            type: string;
            zoom: {
                enabled: boolean;
            };
        };
        dataLabels: {
            enabled: boolean;
        };
        stroke: {
            curve: string;
            width: number;
            lineCap: string;
        };
        grid: {
            borderColor: string;
            position: string;
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
        };
        yaxis: {
            show: boolean;
            decimalsInFloat: boolean;
        };
        colors: string[];
        legend: {
            show: boolean;
        };
        fill: {
            opacity: number;
            type: string;
        };
    };
    series: {
        name: string;
        data: number[][];
    }[];
};
