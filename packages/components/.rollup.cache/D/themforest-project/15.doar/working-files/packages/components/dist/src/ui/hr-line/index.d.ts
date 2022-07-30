import { FC } from "react";
import { SpaceProps, BorderProps } from "@doar/shared/styled";
interface IProps extends SpaceProps, BorderProps {
    className?: string;
}
declare const HRLine: FC<IProps>;
export default HRLine;
