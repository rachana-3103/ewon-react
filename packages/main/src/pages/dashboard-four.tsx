import React from "react";
import { Row, Col } from "@doar/components";
import Layout from "../layouts";
import WelcomeArea from "../containers/dashboard-four/welcome-area";

const DashboardFour: React.FC = () => {
    return (
        <Layout>
            <WelcomeArea />
            <Row gutters={10}>
                <Col lg={8}>daf</Col>
                <Col lg={4} mt={["10px", null, null, 0]}>
                    fasd
                </Col>
            </Row>
        </Layout>
    );
};

export default DashboardFour;
