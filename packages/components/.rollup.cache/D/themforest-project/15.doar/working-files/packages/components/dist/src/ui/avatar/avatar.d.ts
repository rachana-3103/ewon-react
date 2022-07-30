import { FC } from "react";
import { LayoutProps, SpaceProps } from "@doar/shared/styled";
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
declare const Avatar: FC<IAvatar>;
export default Avatar;
