import { FC } from "react";
import { SpaceProps, TypographyProps, LayoutProps } from "@doar/shared/styled";
interface IProps extends SpaceProps, TypographyProps, LayoutProps {
    htmlFor: string;
    className?: string;
}
declare const Label: FC<IProps>;
export default Label;
