import { FC } from "react";
import { SpaceProps, BorderProps, TypographyProps } from "@doar/shared/styled";
import { ColProps } from "./types";
interface IProps extends SpaceProps {
    className?: string;
}
interface IColProps extends IProps, ColProps, BorderProps, TypographyProps {
}
declare const Col: FC<IColProps>;
export default Col;
