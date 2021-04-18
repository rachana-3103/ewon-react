import { FC } from "react";
import { Badge } from "@doar/components";
import WidgetTitle from "../widget-title";
import NavClassic, { NavLink } from "../../nav-classic";

const PositionDiscover: FC = () => {
    return (
        <>
            <WidgetTitle title="Discover By Position" />
            <NavClassic>
                <NavLink path="#!">
                    <span>Software Engineer</span>
                    <Badge variant="texted">20</Badge>
                </NavLink>
                <NavLink path="#!">
                    <span>UI/UX Designer</span>
                    <Badge variant="texted">18</Badge>
                </NavLink>
                <NavLink path="#!">
                    <span>Sales Representative</span>
                    <Badge variant="texted">14</Badge>
                </NavLink>
                <NavLink path="#!">
                    <span>Product Representative</span>
                    <Badge variant="texted">12</Badge>
                </NavLink>
                <NavLink path="#!">
                    <span>Full-Stack Developer</span>
                    <Badge variant="texted">10</Badge>
                </NavLink>
            </NavClassic>
        </>
    );
};

export default PositionDiscover;
