import { FC } from "react";
import { Marker as MarkerComponent } from "react-leaflet";
import { IMarkerProps } from "./types";

const LeafletMarker: FC<IMarkerProps> = ({ lat, lng, children }) => {
    return <MarkerComponent position={[lat, lng]}>{children}</MarkerComponent>;
};

export default LeafletMarker;
