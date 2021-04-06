import React from "react";
import { Row } from "@doar/components";
import { CryptoFontCSS } from "@doar/shared/css";
import Layout from "../layouts";
import WelcomeArea from "../containers/dashboard-three/welcome-area";
import RowOne from "../containers/dashboard-three/row-one";
import RowTwo from "../containers/dashboard-three/row-two";
import RowThree from "../containers/dashboard-three/row-three";
import RowFour from "../containers/dashboard-three/row-four";

const DashboardThree: React.FC = () => {
    return (
        <Layout>
            <CryptoFontCSS />
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

export default DashboardThree;
