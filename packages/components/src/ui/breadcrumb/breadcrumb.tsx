import React from "react";
import { Link } from "react-router-dom";
import { StyledBreadcrumb, StyledBreadcrumbItem } from "./style";

export const Breadcrumb: React.FC = ({ children }) => {
    return (
        <nav aria-label="breadcrumb">
            <StyledBreadcrumb>{children}</StyledBreadcrumb>
        </nav>
    );
};

interface IBreadcrumb {
    path?: string;
    active?: boolean;
}

export const BreadcrumbItem: React.FC<IBreadcrumb> = ({
    children,
    path,
    active,
}) => {
    return (
        <StyledBreadcrumbItem aria-current={active && "page"}>
            {active && children}
            {!active && path && <Link to={path}>{children}</Link>}
        </StyledBreadcrumbItem>
    );
};
