import { FC } from "react";
import { Row, Col } from "@doar/components";
import Stories from "../../../components/widgets/stories";
import PeopleViewed from "../../../components/widgets/people-viewed";
import PeopleMayKnow from "../../../components/widgets/people-may-know";
import { StyledWrap } from "./style";

const RightSidebar: FC = () => {
    return (
        <StyledWrap>
            <Row>
                <Col sm={6} md={5} lg={12}>
                    <Stories />
                </Col>
                <Col sm={6} md={5} lg={12} mt={["40px", 0, null, "40px"]}>
                    <PeopleViewed />
                </Col>
                <Col sm={6} md={5} lg={12} mt="40px">
                    <PeopleMayKnow />
                </Col>
            </Row>
        </StyledWrap>
    );
};

export default RightSidebar;
