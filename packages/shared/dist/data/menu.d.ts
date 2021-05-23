/// <reference types="react" />
declare const menus: ({
    id: number;
    label: string;
    url: string;
    Icon: import("react").FC<import("react-feather").IconProps>;
    submenu: {
        id: number;
        label: string;
        url: string;
        Icon: import("react").FC<import("react-feather").IconProps>;
    }[];
    megamenu?: undefined;
} | {
    id: number;
    label: string;
    url: string;
    Icon: import("react").FC<import("react-feather").IconProps>;
    megamenu: {
        id: number;
        title: string;
        submenu: {
            id: number;
            label: string;
            url: string;
            Icon: import("react").FC<import("react-feather").IconProps>;
        }[];
    }[];
    submenu?: undefined;
} | {
    id: number;
    label: string;
    url: string;
    Icon: import("react").FC<import("react-feather").IconProps>;
    submenu?: undefined;
    megamenu?: undefined;
})[];
export default menus;
