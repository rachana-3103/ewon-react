/// <reference types="google.maps" />
/// <reference types="react" />
import { LayoutProps } from "@doar/shared/styled";
declare type MapProps = google.maps.MapOptions & LayoutProps & {
    marker?: boolean;
};
declare const MyMap: React.FC<MapProps>;
export default MyMap;
