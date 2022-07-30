import React from "react";
import { SpaceProps, FlexboxProps, LayoutProps } from "@doar/shared/styled";
interface IMediaProps extends SpaceProps, FlexboxProps, LayoutProps {
    as?: React.ElementType;
    className?: string;
}
declare const Media: React.FC<IMediaProps>;
export default Media;
