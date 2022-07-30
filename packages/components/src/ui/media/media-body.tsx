import React from "react";
import classnames from "classnames";
import { SpaceProps } from "@doar/shared/styled";
import { StyledMediaBody } from "./style";

interface IMediaBodyProps extends SpaceProps {
    className?: string;
}

const MediaBody: React.FC<IMediaBodyProps> = ({
    children,
    className,
    ...restProps
}) => {
    return (
        <StyledMediaBody
            className={classnames(className, "media-body")}
            {...restProps}
        >
            {children}
        </StyledMediaBody>
    );
};

export default MediaBody;
