import { FC } from "react";
import NewDropdown from "../../../../components/apps/file-manager/new-dropdown";
import UploadDropdown from "../../../../components/apps/file-manager/upload-dropdown";
import { StyledSidebar, StyledHeader, StyledBody } from "./style";

const Sidebar: FC = () => {
    return (
        <StyledSidebar>
            <StyledHeader>
                <NewDropdown />
                <UploadDropdown />
            </StyledHeader>
            <StyledBody>fsd</StyledBody>
        </StyledSidebar>
    );
};

export default Sidebar;
