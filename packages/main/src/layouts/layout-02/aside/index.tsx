import React, { useState } from "react";
import { NavbarAside } from "@doar/components";
import { asideMenuData } from "@doar/shared/data";
import Header from "../header";
import Scrollbar from "../../../components/scrollbar";
import AsideUser from "../../../components/aside/user";
import { StyledAside, StyledBody } from "./style";

type TMaxText = "enter" | "leave";

const Aisde: React.FC = () => {
    const [minimize, setMinimize] = useState(false);
    const [maximize, setMaximize] = useState(false);

    const minimizeHandler = () => {
        setMinimize((prev) => !prev);
    };

    const maximizeHandler = (e: React.MouseEvent, text: TMaxText) => {
        e.preventDefault();
        if (!minimize) return;
        if (text === "enter") {
            setMaximize(true);
        }
        if (text === "leave") {
            setMaximize(false);
        }
    };

    return (
        <StyledAside $minimize={minimize} $maximize={maximize}>
            <Header minimizeHandler={minimizeHandler} minimize={minimize} />
            <Scrollbar>
                <StyledBody
                    $minimize={minimize}
                    $maximize={maximize}
                    className="aside-body"
                    onMouseEnter={(e) => maximizeHandler(e, "enter")}
                    onMouseLeave={(e) => maximizeHandler(e, "leave")}
                >
                    <AsideUser />
                    <NavbarAside menus={asideMenuData} />
                </StyledBody>
            </Scrollbar>
        </StyledAside>
    );
};

export default Aisde;
