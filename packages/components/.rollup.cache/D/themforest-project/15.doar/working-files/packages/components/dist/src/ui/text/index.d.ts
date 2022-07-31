import { FC, ElementType } from "react";
import { SpaceProps, ColorProps, TypographyProps, LayoutProps } from "@doar/shared/styled";
interface IProps extends SpaceProps, ColorProps, TypographyProps, LayoutProps {
    as?: ElementType;
    className?: string;
}
declare const Text: FC<IProps>;
export default Text;
