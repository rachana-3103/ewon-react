export declare const ApexLineData: {
    options: {
        chart: {
            height: number;
            type: string;
            zoom: {
                enabled: boolean;
            };
        };
        plotOptions: {
            area: {
                fillTo: string;
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
            row: {
                colors: string[];
                opacity: number;
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
    };
    series: {
        name: string;
        data: number[][];
    }[];
};
