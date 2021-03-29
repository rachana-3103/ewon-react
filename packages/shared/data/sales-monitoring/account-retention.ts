export const RetentionChart = {
    options: {
        chart: {
            stacked: true,
            toolbar: {
                show: false,
            },
            zoom: {
                enabled: false,
            },
        },
        dataLabels: {
            enabled: false,
        },
        responsive: [
            {
                breakpoint: 480,
                options: {
                    legend: {
                        position: "bottom",
                        offsetX: -10,
                        offsetY: 0,
                    },
                },
            },
        ],
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: "50%",
                endingShape: "rounded",
            },
        },
        xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            tooltip: {
                enabled: false,
            },
            axisTicks: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
        },
        yaxis: {
            show: false,
        },
        legend: {
            show: false,
        },
        grid: {
            borderColor: "#ffffff",
            xaxis: {
                lines: {
                    show: false,
                },
            },
            yaxis: {
                lines: {
                    show: false,
                },
            },
        },
        fill: {
            opacity: 1,
        },
        colors: ["#69b2f8", "#f0f1f5"],
    },
    series: [
        {
            data: [
                44,
                55,
                57,
                56,
                61,
                58,
                63,
                60,
                66,
                70,
                75,
                61,
                95,
                80,
                52,
                55,
                68,
            ],
        },
        {
            data: [
                76,
                85,
                99,
                98,
                87,
                95,
                91,
                84,
                94,
                60,
                50,
                61,
                89,
                65,
                92,
                41,
                77,
            ],
        },
    ],
};
