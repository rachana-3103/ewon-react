import { FC, ElementType } from "react";
import { SpaceProps, ColorProps, TypographyProps } from "@doar/shared/styled";
interface IProps extends SpaceProps, ColorProps, TypographyProps {
    as?: ElementType;
    className?: string;
    tt?: string;
}
declare const Heading: FC<IProps>;
export default Heading;
