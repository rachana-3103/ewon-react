import React from "react";
import { Row } from "@doar/components";
import Layout from "../layouts";
import WelcomeArea from "../containers/sales-monitoring/welcome-area";
import RowOne from "../containers/sales-monitoring/row-one";
import RowTwo from "../containers/sales-monitoring/row-two";
import RowThree from "../containers/sales-monitoring/row-three";
import RowFour from "../containers/sales-monitoring/row-four";

const HomePage: React.FC = () => {
    return (
        <Layout>
            <WelcomeArea />
            <Row gutters={10}>
                <RowOne />
                <RowTwo />
                <RowThree />
                <RowFour />
            </Row>
        </Layout>
    );
};

export default HomePage;
