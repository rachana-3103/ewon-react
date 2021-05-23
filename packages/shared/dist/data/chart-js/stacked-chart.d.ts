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
        responsive: boolean;
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
                    fontColor: string;
                };
            }[];
            xAxes: {
                stacked: boolean;
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
