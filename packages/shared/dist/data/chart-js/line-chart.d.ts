declare const data: {
    data: {
        labels: string[];
        datasets: {
            data: number[];
            borderColor: string;
            borderWidth: number;
            fill: boolean;
        }[];
    };
    options: {
        maintainAspectRatio: boolean;
        legend: {
            display: boolean;
            labels: {
                display: boolean;
            };
        };
        scales: {
            yAxes: {
                gridLines: {
                    color: string;
                };
                ticks: {
                    beginAtZero: boolean;
                    fontSize: number;
                    max: number;
                };
            }[];
            xAxes: {
                gridLines: {
                    display: boolean;
                };
                ticks: {
                    beginAtZero: boolean;
                    fontSize: number;
                };
            }[];
        };
    };
};
export default data;
