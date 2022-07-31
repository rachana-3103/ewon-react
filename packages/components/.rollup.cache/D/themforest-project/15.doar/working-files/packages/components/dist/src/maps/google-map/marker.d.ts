import { FC } from "react";
interface IMarkerProps {
    /**
     * Required. Pass google maps latitude
     */
    lat: number;
    /**
     * Required. Pass google maps longitude
     */
    lng: number;
}
declare const GoogleMapMarker: FC<IMarkerProps>;
export default GoogleMapMarker;
