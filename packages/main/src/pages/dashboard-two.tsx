import React from "react";
import { Row } from "@doar/components";
import Layout from "../layouts";
import WelcomeArea from "../containers/dashboard-two/welcome-area";
import RowOne from "../containers/dashboard-two/row-one";

const DashboardTwo: React.FC = () => {
    return (
        <Layout>
            <WelcomeArea />
            <Row>
                <RowOne />
            </Row>
        </Layout>
    );
};

export default DashboardTwo;
