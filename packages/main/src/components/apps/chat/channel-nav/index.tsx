import { FC, useState } from "react";
import { UserPlus, Users } from "react-feather";
import ModalInvitePeople from "../modal-invite-people";
import { useAppDispatch } from "../../../../redux/hooks";
import { toggleSidebar } from "../../../../redux/slices/chat-ui";
import { StyledNav, StyledButton } from "./style";

const ChannelNav: FC = () => {
    const dispatch = useAppDispatch();
    const [show, setShow] = useState(false);
    const handleModal = () => {
        setShow((prev) => !prev);
    };
    const handleSidebar = () => {
        dispatch(toggleSidebar());
    };

    return (
        <>
            <StyledNav>
                <StyledButton onClick={handleModal}>
                    <UserPlus />
                </StyledButton>
                <StyledButton $active onClick={handleSidebar}>
                    <Users />
                    <span>25</span>
                </StyledButton>
            </StyledNav>
            <ModalInvitePeople show={show} onClose={handleModal} />
        </>
    );
};

export default ChannelNav;
