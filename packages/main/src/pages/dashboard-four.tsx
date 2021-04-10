import React from "react";
import { Row, Col } from "@doar/components";
import Layout from "../layouts";
import WelcomeArea from "../containers/dashboard-four/welcome-area";
import LeftRowOne from "../containers/dashboard-four/left-row-one";
import LeftRowTwo from "../containers/dashboard-four/left-row-two";
import LeftRowThree from "../containers/dashboard-four/left-row-three";
import RightRowOne from "../containers/dashboard-four/right-row-one";
import RightRowFour from "../containers/dashboard-four/right-row-four";

const DashboardFour: React.FC = () => {
    return (
        <Layout>
            <WelcomeArea />
            <Row gutters={10}>
                <Col lg={8}>
                    <Row gutters={10}>
                        <LeftRowOne />
                        <LeftRowTwo />
                        <LeftRowThree />
                    </Row>
                </Col>
                <Col lg={4} mt={["10px", null, null, 0]}>
                    <Row gutters={10}>
                        <RightRowOne />
                        <RightRowFour />
                    </Row>
                </Col>
            </Row>
        </Layout>
    );
};

export default DashboardFour;
