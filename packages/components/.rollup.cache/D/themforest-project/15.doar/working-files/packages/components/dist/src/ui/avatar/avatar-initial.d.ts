import { FC } from "react";
import { ColorProps, TypographyProps } from "@doar/shared/styled";
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
declare const AvatarInitial: FC<IAvatarText>;
export default AvatarInitial;
