/// <reference types="react" />
import { LayoutProps } from "@doar/shared/styled";
interface IProps extends LayoutProps {
    children: React.ReactNode;
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
declare const GoogleMap: {
    ({ width, height, lat, lng, zoom, children }: IProps): JSX.Element;
    defaultProps: {
        width: string;
        height: string;
        lat: number;
        lng: number;
        zoom: number;
    };
};
export default GoogleMap;
