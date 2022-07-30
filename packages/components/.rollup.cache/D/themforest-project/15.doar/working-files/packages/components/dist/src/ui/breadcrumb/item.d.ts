import React from "react";
interface IBreadcrumbItem {
    path?: string;
    active?: boolean;
    className?: string;
}
declare const BreadcrumbItem: React.FC<IBreadcrumbItem>;
export default BreadcrumbItem;
