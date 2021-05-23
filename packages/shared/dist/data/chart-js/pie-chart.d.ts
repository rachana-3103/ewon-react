declare const data: {
    data: {
        labels: string[];
        datasets: {
            data: number[];
            backgroundColor: string[];
        }[];
    };
    options: {
        maintainAspectRatio: boolean;
        responsive: boolean;
        legend: {
            display: boolean;
        };
        animation: {
            animateScale: boolean;
            animateRotate: boolean;
        };
    };
};
export default data;
