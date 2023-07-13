import { generateDayWiseTimeSeries } from "../../methods";
const data = {
    series: [
        {
            name: "South",
            data:
             generateDayWiseTimeSeries(
                new Date("11 Feb 2017 GMT").getTime(),
                10,
                {
                    min: 0,
                    max: 70,
                }
            ),
        },
    ],
    options: {
        chart: {
            type: "area",
            stacked: true,
            zoom: {
                enabled: false,
            },
            toolbar: {
                show: false,
            },
        },
        colors: ["#FF0000", "#69b2f8", "#0168fa"],
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "smooth",
            width: 1.5,
        },
        fill: {
            colors: ["#ffffff", "#69b2f8", "#0168fa"],
            opacity: [0.3, 0, 0.1],
            type: "solid",
        },
        legend: {
            show: false,
        },
        xaxis: {
            type: "datetime",
            tooltip: {
                enabled: false,
            },
            axisTicks: {
                show: false,
            },
            tickPlacement: "on",
            labels: {
                style: {
                    colors: ["#8392a5"],
                    fontSize: "10px",
                    fontFamily: "Arial, sans-serif",
                    fontWeight: 400,
                    cssClass: "apexcharts-xaxis-label",
                },
            },
        },
        yaxis: {
            tickAmount: 3,
            decimalsInFloat: false,
            labels: {
                style: {
                    colors: ["#8392a5"],
                    fontSize: "10px",
                    fontFamily: "Arial, sans-serif",
                    fontWeight: 4000,
                    cssClass: "apexcharts-yaxis-label",
                },
            },
        },
        grid: {
            borderColor: "#485e9029",
            height: 10000,
            xaxis: {
                lines: {
                    show: true,
                },
            },
            yaxis: {
                lines: {
                    show: true,
                },
            },
            column: {
                colors: "#485e9029",
                opacity: 2,
            },
        },
        tooltip: {
            enabled: false,
        },
        responsive: [
            {
                breakpoint: 575,
                options: {
                    chart: {
                        height: 100,
                    },
                    xaxis: {
                        show: false,
                    },
                },
            },
        ],
    },
};

export default data;
