import { FC } from "react";
import { SpaceProps } from "@doar/shared/styled";
interface IProps extends SpaceProps {
    className?: string;
}
interface IWrap extends IProps {
    dir?: "append" | "prepend";
}
declare const InputGroupAddon: FC<IWrap>;
export default InputGroupAddon;
