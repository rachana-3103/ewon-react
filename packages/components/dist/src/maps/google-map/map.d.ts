/// <reference types="google.maps" />
/// <reference types="react" />
declare type MapProps = google.maps.MapOptions & {
    children?: React.ReactNode;
    onClick?: (e: google.maps.MapMouseEvent) => void;
};
declare const Map: React.FC<MapProps>;
export default Map;
