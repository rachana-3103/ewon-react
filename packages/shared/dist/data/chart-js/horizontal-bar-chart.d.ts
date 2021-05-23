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
                gridLines: {
                    display: boolean;
                };
                ticks: {
                    beginAtZero: boolean;
                    fontSize: number;
                    fontColor: string;
                };
            }[];
            xAxes: {
                gridLines: {
                    color: string;
                };
                barPercentage: number;
                ticks: {
                    beginAtZero: boolean;
                    fontSize: number;
                    fontColor: string;
                    max: number;
                };
            }[];
        };
    };
};
export default data;
