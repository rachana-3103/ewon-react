import { FC } from "react";
import { Popup } from "react-leaflet";

const LeafletPopup: FC = ({ children }) => {
    return <Popup>{children}</Popup>;
};

export default LeafletPopup;
