export const RetentionChart = {
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
            {
                data: [55, 70, 30, 55, 32, 36],
                backgroundColor: "#69b2f8",
            },
            {
                data: [38, 50, 50, 60, 17, 53],
                backgroundColor: "#69b2f8",
            },
            {
                data: [20, 15, 40, 40, 28, 66],
                backgroundColor: "#69b2f8",
            },
        ],
    },
    options: {
        maintainAspectRatio: false,
        responsive: true,
        legend: {
            display: false,
            labels: {
                display: false,
            },
        },
        scales: {
            yAxes: [
                {
                    gridLines: {
                        color: "#e5e9f2",
                    },
                    ticks: {
                        beginAtZero: true,
                        fontSize: 11,
                        fontFamily: "'Rubik', sans-serif",
                        color: "rgba(255,255,255,.2)",
                        max: 80,
                    },
                },
            ],
            xAxes: [
                {
                    gridLines: {
                        display: false,
                    },
                    barPercentage: 0.6,
                    ticks: {
                        beginAtZero: false,
                        fontSize: 11,
                        fontFamily: "'Rubik', sans-serif",
                        color: "rgba(255,255,255,.2)",
                    },
                },
            ],
        },
    },
};
