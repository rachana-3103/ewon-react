export declare const ApexStackedData: {
    options: {
        chart: {
            type: string;
            height: number;
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
                legend: {
                    position: string;
                    offsetX: number;
                    offsetY: number;
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
        };
        legend: {
            position: string;
            horizontalAlign: string;
            offsetX: number;
        };
        fill: {
            opacity: number;
        };
        colors: string[];
    };
    series: {
        name: string;
        data: number[];
    }[];
};
