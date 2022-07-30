import { FC } from "react";
import classnames from "classnames";
import { ColorProps, TypographyProps } from "@doar/shared/styled";

import { StyledInitialText } from "./style";

interface IProps {
    /**
     * Pass extra classes
     */
    className?: string;
}

interface IAvatarText extends IProps, ColorProps, TypographyProps {
    size?: "default" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
    shape?: "circle" | "rounded" | "square";
}

const AvatarInitial: FC<IAvatarText> = ({
    children,
    size,
    shape,
    className,
    ...restProps
}) => {
    return (
        <StyledInitialText
            $size={size}
            $shape={shape}
            className={classnames(className, "avatar-initial")}
            {...restProps}
        >
            {children}
        </StyledInitialText>
    );
};

export default AvatarInitial;
