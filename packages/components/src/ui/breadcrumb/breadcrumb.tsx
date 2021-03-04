import React from "react";
import { Link } from "react-router-dom";
import { StyledNav, StyledBreadcrumb, StyledBreadcrumbItem } from "./style";

interface IBreadcrumb {
    /**
     * Extra class name
     */
    className?: string;
    /**
     * Element type. Default is `nav`
     */
    as?: React.ElementType;
}

export const Breadcrumb: React.FC<IBreadcrumb> = ({
    children,
    className,
    as,
    ...restProps
}) => {
    const classes = className || "";
    return (
        <StyledNav aria-label="breadcrumb" as={as}>
            <StyledBreadcrumb className={classes} {...restProps}>
                {children}
            </StyledBreadcrumb>
        </StyledNav>
    );
};

interface IBreadcrumbItem {
    path?: string;
    active?: boolean;
    className?: string;
}

export const BreadcrumbItem: React.FC<IBreadcrumbItem> = ({
    children,
    path,
    active,
    className,
}) => {
    const classes = className || "";
    return (
        <StyledBreadcrumbItem
            className={classes}
            $active={active}
            aria-current={active && "page"}
        >
            {active && children}
            {!active && path && <Link to={path}>{children}</Link>}
        </StyledBreadcrumbItem>
    );
};
