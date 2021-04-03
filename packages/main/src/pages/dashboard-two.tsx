import React from "react";
import { Row } from "@doar/components";
import Layout from "../layouts";
import WelcomeArea from "../containers/dashboard-two/welcome-area";
import RowOne from "../containers/dashboard-two/row-one";
import RowTwo from "../containers/dashboard-two/row-two";
import RowThree from "../containers/dashboard-two/row-three";
import RowFour from "../containers/dashboard-two/row-four";
import RowFive from "../containers/dashboard-two/row-five";

const DashboardTwo: React.FC = () => {
    return (
        <Layout>
            <WelcomeArea />
            <Row gutters={10}>
                <RowOne />
                <RowTwo />
                <RowThree />
                <RowFour />
                <RowFive />
            </Row>
        </Layout>
    );
};

export default DashboardTwo;
