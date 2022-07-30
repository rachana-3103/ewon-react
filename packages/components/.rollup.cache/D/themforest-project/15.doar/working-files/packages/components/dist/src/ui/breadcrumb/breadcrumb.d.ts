import React from "react";
import { SpaceProps } from "@doar/shared/styled";
interface IBreadcrumb extends SpaceProps {
    /**
     * Extra class name
     */
    className?: string;
    /**
     * Element type. Default is `nav`
     */
    as?: React.ElementType;
}
export declare const Breadcrumb: React.FC<IBreadcrumb>;
export default Breadcrumb;
