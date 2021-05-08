import { FC } from "react";
import { X } from "react-feather";
import { Modal, ModalBody, Row, Col, Input, HRLine } from "@doar/components";
import NavIcon, { NavLink } from "../../../nav-icon";
import Editor from "./editor";
import "react-quill/dist/quill.snow.css";
import { StyledHeader, StyledTitle } from "./style";

interface IProps {
    show: boolean;
    onClose: () => void;
}

const ComposeMail: FC<IProps> = ({ show, onClose }) => {
    return (
        <Modal show={show} onClose={onClose} size="lg">
            <StyledHeader>
                <StyledTitle>New Message</StyledTitle>
                <NavIcon>
                    <NavLink onClick={onClose}>
                        <X />
                    </NavLink>
                </NavIcon>
            </StyledHeader>
            <ModalBody>
                <form>
                    <Row alignItems="center">
                        <Col sm>Recipient:</Col>
                        <Col sm={10}>
                            <Input
                                name="email-recipient"
                                id="email-recipient"
                                placeholder="Enter recipient's email address"
                                px="0px"
                                borderWidth="0px"
                            />
                        </Col>
                    </Row>
                    <HRLine my="10px" />
                    <Row alignItems="center">
                        <Col sm>Subject:</Col>
                        <Col sm={10}>
                            <Input
                                name="email-subject"
                                id="email-subject"
                                placeholder="Enter Subject"
                                px="0px"
                                borderWidth="0px"
                            />
                        </Col>
                    </Row>
                    <Editor placeholder="Write your message here" />
                </form>
            </ModalBody>
        </Modal>
    );
};

export default ComposeMail;
