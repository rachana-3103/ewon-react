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
                    display: boolean;
                    beginAtZero: boolean;
                    fontSize: number;
                    fontColor: string;
                };
            }[];
            xAxes: {
                gridLines: {
                    display: boolean;
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
