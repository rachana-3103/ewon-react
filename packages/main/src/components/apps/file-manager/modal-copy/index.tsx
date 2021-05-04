import { FC } from "react";
import { Folder } from "react-feather";
import { Modal, ModalBody, ModalFooter, Button } from "@doar/components";
import NavSidebar, { NavLink } from "../../../nav-sidebar";
import { StyledClose, StyledTitle, StyledText, StyledWrap } from "./style";

interface IProps {
    show: boolean;
    onClose: () => void;
}

const CopyModal: FC<IProps> = ({ show, onClose }) => {
    return (
        <Modal show={show} onClose={onClose}>
            <ModalBody p={["20px", "30px"]}>
                <StyledClose onClose={onClose}>×</StyledClose>
                <StyledTitle>Copy Item to</StyledTitle>
                <StyledText>Please select a folder</StyledText>
                <StyledWrap>
                    <NavSidebar>
                        <NavLink>
                            <Folder /> Downloads
                        </NavLink>
                        <NavLink>
                            <Folder /> Personal Stuff
                        </NavLink>
                        <NavLink>
                            <Folder /> 3d Objects
                        </NavLink>
                        <NavLink>
                            <Folder /> Recordings
                        </NavLink>
                        <NavLink>
                            <Folder /> Support
                        </NavLink>
                    </NavSidebar>
                </StyledWrap>
            </ModalBody>
            <ModalFooter>
                <Button color="secondary" mr={[null, "5px"]} onClick={onClose}>
                    Close
                </Button>
                <Button>Copy</Button>
            </ModalFooter>
        </Modal>
    );
};

export default CopyModal;
