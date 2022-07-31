import { Children, FC, FunctionComponent, ReactChild, ReactText } from "react";
import L from "leaflet";
import { MapContainer, TileLayer } from "react-leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { MapBoxAccessKey } from "@doar/shared/data";
import { StyledMap } from "./style";
import { IProps } from "./types";

const DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

type IChild = Exclude<ReactChild, ReactText>;

const LeafletMap: FC<IProps> = ({
    width,
    height,
    lat,
    lng,
    zoom,
    scrollWheelZoom,
    children,
}) => {
    const RenderChild = Children.map(children, (el) => {
        const child = el as IChild;
        if (child !== null) {
            const childType = child.type as FunctionComponent;
            const name = childType.displayName || childType.name;
            if (name === "LeafletMarker") {
                return <child.type lat={lat} lng={lng} {...child.props} />;
            }
            if (name === "LeafletCircle") {
                return <child.type lat={lat} lng={lng} {...child.props} />;
            }
        }
        return null;
    });
    return (
        <StyledMap width={width} height={height}>
            <MapContainer
                center={[lat, lng]}
                zoom={zoom}
                scrollWheelZoom={scrollWheelZoom}
            >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    accessToken={MapBoxAccessKey}
                />
                {RenderChild}
            </MapContainer>
        </StyledMap>
    );
};

LeafletMap.defaultProps = {
    lat: 51.505,
    lng: -0.09,
    zoom: 13,
    scrollWheelZoom: false,
    width: "100%",
    height: "400px",
};

export default LeafletMap;
