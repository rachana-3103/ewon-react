import { FC } from "react";
import { Row, Col } from "@doar/components";
import UserAvatar from "../../../components/profile-view/user-avatar";
import UserDetails from "../../../components/profile-view/user-details";
import UserSkill from "../../../components/profile-view/user-skills";
import UserWebsites from "../../../components/profile-view/user-websites";
import UserContactInfo from "../../../components/profile-view/user-contact-info";
import Explore from "../../../components/profile-view/explore";
import { StyledWrap } from "./style";

const LeftSidebar: FC = () => {
    return (
        <StyledWrap>
            <Row>
                <Col sm={3} md={2} lg={12}>
                    <UserAvatar />
                </Col>
                <Col sm={8} md={7} lg={12} mt={["20px", "0px", null, "25px"]}>
                    <UserDetails />
                </Col>
                <Col sm={6} md={5} lg={12} mt="40px" mb="16px">
                    <UserSkill />
                </Col>
                <Col sm={6} md={5} lg={12} mt="40px" mb="16px">
                    <UserWebsites />
                </Col>
                <Col sm={6} md={5} lg={12} mt="40px" mb="16px">
                    <UserContactInfo />
                </Col>
                <Col sm={6} md={5} lg={12} mt="40px">
                    <Explore />
                </Col>
            </Row>
        </StyledWrap>
    );
};

export default LeftSidebar;
