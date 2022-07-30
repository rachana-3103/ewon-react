import { FC } from "react";
import classnames from "classnames";
import { SpaceProps, FlexboxProps } from "@doar/shared/styled";
import { StyledGroup } from "./style";

interface IGroupProps extends FlexboxProps, SpaceProps {
    className?: string;
    size?: "sm";
}

const ImageGroup: FC<IGroupProps> = ({
    children,
    className,
    size,
    ...restProps
}) => {
    return (
        <StyledGroup
            className={classnames(className)}
            $size={size}
            {...restProps}
        >
            {children}
        </StyledGroup>
    );
};

export default ImageGroup;
