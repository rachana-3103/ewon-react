import React from "react";
import { IMegamenu } from "@doar/shared/types";
interface IProps {
    menu: IMegamenu[];
    onClick: (e: React.MouseEvent, hasChildren: boolean) => void;
    hasChildren: boolean;
}
declare const Megamenu: React.FC<IProps>;
export default Megamenu;
