import { df3, df2, df1 } from "../chart";

export const RevenueChart = {
    data: {
        labels: [
            " ",
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
            " ",
        ],
        datasets: [
            {
                data: [...df1],
                borderWidth: 0,
                backgroundColor: "#d1e6fa",
                fill: "origin",
                pointStyle: "dash",
            },
            {
                data: [...df3],
                borderWidth: 0,
                backgroundColor: "#69b2f8",
                pointStyle: "dash",
            },
            {
                data: [...df2],
                borderWidth: 0,
                borderColor: "#d1e6fa",
                backgroundColor: "#fff",
                fill: "origin",
                pointStyle: "dash",
            },
        ],
    },
    options: {
        maintainAspectRatio: true,
        legend: {
            display: false,
            labels: {
                display: false,
            },
        },
        scales: {
            yAxes: [
                {
                    stacked: true,
                    gridLines: {
                        display: false,
                    },
                    ticks: {
                        beginAtZero: false,
                        fontSize: 0,
                    },
                },
            ],
            xAxes: [
                {
                    stacked: true,
                    gridLines: {
                        display: false,
                    },
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
