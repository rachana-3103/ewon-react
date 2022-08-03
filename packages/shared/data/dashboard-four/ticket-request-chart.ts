const data = {
    data: {
        labels: [
            "Modification",
            "Code Request",
            "Feature Request",
            "Bug Fix",
            "Integration",
            "Production",
        ],
        datasets: [
            {
                data: [90, 60, 50, 95, 50, 60],
                backgroundColor: [
                    "#65e0e0",
                    "#69b2f8",
                    "#6fd39b",
                    "#f77eb9",
                    "#fdb16d",
                    "#c693f9",
                ],
            },
            {
                data: [60, 50, 70, 45, 70, 30],
                backgroundColor: "#e5e9f2",
            },
        ],
    },
    options: {
        maintainAspectRatio: false,
        responsive: true,
        layout: {
            padding: {
                left: 5,
            },
        },
        scales: {
            y: {
                grid: {
                    display: false,
                },
                ticks: {
                    beginAtZero: true,
                    fontSize: 13,
                    fontColor: "#182b49",
                    fontFamily: "IBM Plex Sans",
                },
            },
            x: {
                grid: {
                    color: "#e5e9f2",
                },
                ticks: {
                    beginAtZero: true,
                    fontSize: 10,
                    fontColor: "#182b49",
                    max: 100,
                },
            },
        },
        elements: {
            bar: { borderWidth: 3, borderColor: "transparent" },
        },
        plugins: {
            legend: {
                display: false,
            },
        },
    },
};

export default data;
