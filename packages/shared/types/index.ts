import { FC, SVGAttributes } from "react";

export interface IconProps extends SVGAttributes<SVGElement> {
    color?: string;
    size?: string | number;
}

export interface ISubmenu {
    id: number;
    label: string;
    url: string;
    Icon?: FC<IconProps> | undefined;
}

export interface IMegamenu {
    id: number;
    title: string;
    submenu: ISubmenu[];
}

export interface IMenu {
    id: number;
    label: string;
    url: string;
    Icon?: FC<IconProps> | undefined;
    submenu?: ISubmenu[];
    megamenu?: IMegamenu[];
}

export interface IChart {
    options: {
        [x: string]: unknown;
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    series: any[];
}

export interface IConversion {
    id: number;
    title: string;
    rate: string;
    change: {
        percentage: string;
        growth: "up" | "down";
        time: string;
    };
    chart?: IChart;
}

export interface IWatchlist {
    id: number;
    icon: string;
    title: string;
    subtitle?: string;
    coin: string;
    coinRate: string;
    coinStatus: "up" | "down";
    color?: string;
    markets?: number[];
    chart?: IChart;
}

export interface IRadial {
    id: number;
    title: string;
    desc: string;
    min: string;
    sec: string;
    chart: IChart;
}
