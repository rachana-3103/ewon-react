declare const data: {
    data: {
        labels: string[];
        datasets: {
            data: number[];
            borderColor: string;
            borderWidth: number;
            backgroundColor: string;
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
                stacked: boolean;
                gridLines: {
                    color: string;
                };
                ticks: {
                    beginAtZero: boolean;
                    fontSize: number;
                };
            }[];
            xAxes: {
                stacked: boolean;
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
