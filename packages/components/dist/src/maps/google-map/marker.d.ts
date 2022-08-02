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
declare const GoogleMapMarker: ({ lat, lng }: IMarkerProps) => JSX.Element;
export default GoogleMapMarker;
