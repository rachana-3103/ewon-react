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

export interface IConversion {
    id: number;
    title: string;
    rate: string;
    change: {
        percentage: string;
        growth: "up" | "down";
        time: string;
    };
    chart: number[];
}
