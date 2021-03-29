/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
import { df1, df2, df3 } from "../chart";

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

export const RevenueChart = {
    series: [
        {
            name: "South",
            data: generateDayWiseTimeSeries(
                new Date("11 Feb 2017 GMT").getTime(),
                20,
                {
                    min: 10,
                    max: 60,
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
            height: 350,
            stacked: true,
            zoom: {
                enabled: false,
            },
            toolbar: {
                show: false,
            },
        },
        colors: ["#69b2f8", "#00E396", "#d1e6fa"],
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "smooth",
            width: 1,
        },
        fill: {
            type: "gradient",
            gradient: {
                opacityFrom: 0.6,
                opacityTo: 0.8,
            },
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
        },
        yaxis: {
            show: false,
        },
        grid: {
            borderColor: "#ffffff",
            xaxis: {
                lines: {
                    show: true,
                },
            },
            yaxis: {
                lines: {
                    show: false,
                },
            },
            column: {
                colors: "#ffffff",
                opacity: 1,
            },
        },
        tooltip: {
            fillSeriesColor: "#ffffff",
        },
    },
};
