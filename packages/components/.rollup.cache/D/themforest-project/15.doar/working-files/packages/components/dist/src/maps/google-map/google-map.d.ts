import { FC } from "react";
import { LayoutProps } from "@doar/shared/styled";
interface IProps extends LayoutProps {
    /**
     * Required. Pass google maps latitude
     */
    lat: number;
    /**
     * Required. Pass google maps longitude
     */
    lng: number;
    /**
     * 	The initial Map zoom level. Required. Valid values: Integers between zero, and up to the supported maximum zoom level.
     */
    zoom?: number;
}
declare const GoogleMap: FC<IProps>;
export default GoogleMap;
