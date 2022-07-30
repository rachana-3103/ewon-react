import React from "react";
import classnames from "classnames";
import { SpaceProps } from "@doar/shared/styled";
import { StyledNav, StyledBreadcrumb } from "./style";

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

export const Breadcrumb: React.FC<IBreadcrumb> = ({
    children,
    className,
    as,
    ...restProps
}) => (
    <StyledNav aria-label="breadcrumb" as={as}>
        <StyledBreadcrumb
            className={classnames(className, "breadcrumb")}
            {...restProps}
        >
            {children}
        </StyledBreadcrumb>
    </StyledNav>
);

export default Breadcrumb;
