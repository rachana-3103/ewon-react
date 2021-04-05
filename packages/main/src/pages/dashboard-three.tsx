import React from "react";
import { Row } from "@doar/components";
import Layout from "../layouts";
import WelcomeArea from "../containers/dashboard-three/welcome-area";
import RowOne from "../containers/dashboard-three/row-one";
import RowTwo from "../containers/dashboard-three/row-two";

const DashboardThree: React.FC = () => {
    return (
        <Layout>
            <WelcomeArea />
            <Row gutters={10}>
                <RowOne />
                <RowTwo />
            </Row>
        </Layout>
    );
};

export default DashboardThree;
