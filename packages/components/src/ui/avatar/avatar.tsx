import { Children, FC, ReactChild, ReactText, FunctionComponent } from "react";
import classnames from "classnames";
import { LayoutProps, SpaceProps } from "@doar/shared/styled";

import { StyledAvatar } from "./style";

interface IProps {
    /**
     * Pass extra classes
     */
    className?: string;
}

interface IAvatar extends LayoutProps, SpaceProps, IProps {
    /**
     * Default size is `38x38`
     */
    size?: "default" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
    /**
     * Default size is `square`
     */
    shape?: "circle" | "rounded" | "square";
    /**
     * An avatar can have a status indicator to indicate users availability.
     */
    status?: "online" | "offline";
}

type IChild = Exclude<ReactChild, ReactText>;

const Avatar: FC<IAvatar> = ({
    size,
    shape,
    status,
    className,
    children,
    ...restProps
}) => {
    const RenderChild = Children.map(children, (el) => {
        const child = el as IChild;
        if (child !== null) {
            const childType = child.type as FunctionComponent;
            const name = childType.displayName || childType.name;
            if (name === "AvatarInitial") {
                return (
                    <child.type size={size} shape={shape} {...child.props} />
                );
            }
            return <child.type {...child.props} />;
        }
        return null;
    });
    return (
        <StyledAvatar
            $size={size}
            $shape={shape}
            $status={status}
            className={classnames(className, "avatar")}
            {...restProps}
        >
            {RenderChild}
        </StyledAvatar>
    );
};

Avatar.defaultProps = {
    size: "default",
    shape: "circle",
};

export default Avatar;
