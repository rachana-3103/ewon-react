/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/restrict-plus-operands */

function generateDayWiseTimeSeries(
    baseval: number,
    count: number,
    yrange: { min: any; max: any }
) {
    let i = 0;
    const series = [];
    while (i < count) {
        const y =
            Math.floor(Math.random() * (yrange.max - yrange.min + 1)) +
            yrange.min;

        series.push([baseval, y]);
        baseval += 86400000;
        i++;
    }
    return series;
}

const data = {
    series: [
        {
            name: "South",
            data: generateDayWiseTimeSeries(
                new Date("11 Feb 2017 GMT").getTime(),
                20,
                {
                    min: 0,
                    max: 70,
                }
            ),
        },
        {
            name: "North",
            data: generateDayWiseTimeSeries(
                new Date("11 Feb 2017 GMT").getTime(),
                20,
                {
                    min: 10,
                    max: 20,
                }
            ),
        },
        {
            name: "Central",
            data: generateDayWiseTimeSeries(
                new Date("11 Feb 2017 GMT").getTime(),
                20,
                {
                    min: 10,
                    max: 15,
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
        colors: ["#e1e5ed", "#69b2f8", "#0168fa"],
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
            min: 0,
            max: 150,
            decimalsInFloat: false,
            labels: {
                style: {
                    colors: ["#8392a5"],
                    fontSize: "10px",
                    fontFamily: "Arial, sans-serif",
                    fontWeight: 400,
                    cssClass: "apexcharts-yaxis-label",
                },
            },
        },
        grid: {
            borderColor: "#485e9029",
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
                opacity: 1,
            },
        },
        tooltip: {
            fillSeriesColor: "#ffffff",
        },
        responsive: [
            {
                breakpoint: 575,
                options: {
                    chart: {
                        height: 200,
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
