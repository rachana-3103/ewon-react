declare const data: {
    data: {
        labels: string[];
        datasets: {
            data: number[];
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
                gridLines: {
                    color: string;
                };
                ticks: {
                    beginAtZero: boolean;
                    fontSize: number;
                    fontColor: string;
                    max: number;
                };
            }[];
            xAxes: {
                gridLines: {
                    display: boolean;
                };
                barPercentage: number;
                ticks: {
                    beginAtZero: boolean;
                    fontSize: number;
                    fontColor: string;
                };
            }[];
        };
    };
};
export default data;
