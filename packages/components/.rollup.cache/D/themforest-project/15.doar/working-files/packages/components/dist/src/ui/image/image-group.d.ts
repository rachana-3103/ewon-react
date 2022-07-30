import { FC } from "react";
import { SpaceProps, FlexboxProps } from "@doar/shared/styled";
interface IGroupProps extends FlexboxProps, SpaceProps {
    className?: string;
    size?: "sm";
}
declare const ImageGroup: FC<IGroupProps>;
export default ImageGroup;
