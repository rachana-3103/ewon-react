import React from "react";
import classnames from "classnames";
import { SpaceProps, FlexboxProps, LayoutProps } from "@doar/shared/styled";
import { StyledMedia } from "./style";

interface IMediaProps extends SpaceProps, FlexboxProps, LayoutProps {
    as?: React.ElementType;
    className?: string;
}

const Media: React.FC<IMediaProps> = ({
    children,
    as,
    className,
    ...restProps
}) => {
    return (
        <StyledMedia
            className={classnames(className, "media")}
            as={as}
            $el={as}
            {...restProps}
        >
            {children}
        </StyledMedia>
    );
};

export default Media;
