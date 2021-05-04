import { FC } from "react";
import { File, Image, Video, Music, Package } from "react-feather";
import Label from "../label";
import NavSidebar, { NavLink } from "../../../nav-sidebar";
import { StyledWrap } from "./style";

const FileLibrary: FC = () => {
    return (
        <>
            <StyledWrap>
                <Label pl={10}>File Library</Label>
                <NavSidebar>
                    <NavLink path="#!">
                        <File />
                        <span>Documents</span>
                    </NavLink>
                    <NavLink path="#!">
                        <Image />
                        <span>Images</span>
                    </NavLink>
                    <NavLink path="#!">
                        <Video />
                        <span>Videos</span>
                    </NavLink>
                    <NavLink path="#!">
                        <Music />
                        <span>Audio</span>
                    </NavLink>
                    <NavLink path="#!">
                        <Package />
                        <span>Zip Files</span>
                    </NavLink>
                </NavSidebar>
            </StyledWrap>
        </>
    );
};

export default FileLibrary;
