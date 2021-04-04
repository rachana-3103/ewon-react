import React from "react";
import { Row } from "@doar/components";
import Layout from "../layouts";
import WelcomeArea from "../containers/dashboard-three/welcome-area";
import RowOne from "../containers/dashboard-three/row-one";

const DashboardThree: React.FC = () => {
    return (
        <Layout>
            <WelcomeArea />
            <Row gutters={10}>
                <RowOne />
            </Row>
        </Layout>
    );
};

export default DashboardThree;
