import { FC } from "react";
import { StyledSidebar, StyledHeader, StyledBody, StyledFooter } from "./style";
import Scrollbar from "../../../../components/scrollbar";
import SidebarHeader from "../../../../components/apps/chat/sidebar-header";
import SidebarChannels from "../../../../components/apps/chat/sidebar-channels";
import SidebarMessages from "../../../../components/apps/chat/sidebar-messages";
import SidebarFooter from "../../../../components/apps/chat/sidebar-footer";

const Sidebar: FC = () => {
    return (
        <StyledSidebar className="sidebar">
            <StyledHeader>
                <SidebarHeader />
            </StyledHeader>
            <Scrollbar bottom="60px">
                <StyledBody>
                    <SidebarChannels />
                    <SidebarMessages />
                </StyledBody>
            </Scrollbar>
            <StyledFooter>
                <SidebarFooter />
            </StyledFooter>
        </StyledSidebar>
    );
};

export default Sidebar;
