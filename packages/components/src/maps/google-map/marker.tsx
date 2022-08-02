import { Marker as MarkerComponent } from "@react-google-maps/api";

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

const GoogleMapMarker = ({ lat, lng }: IMarkerProps) => {
    return <MarkerComponent position={{ lat, lng }} />;
};

export default GoogleMapMarker;
