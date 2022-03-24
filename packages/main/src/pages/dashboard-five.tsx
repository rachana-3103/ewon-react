import React from "react";
import { Row } from "@doar/components";
import SEO from "../components/seo";
import Layout from "../layouts";
import Content from "../layouts/content";
import WelcomeArea from "../containers/dashboard-five/welcome-area";
import RowOne from "../containers/dashboard-five/row-one";

const DashboardFive: React.FC = () => {
    return (
        <Layout>
            <SEO />
            <Content>
                <WelcomeArea />
                <Row gutters={10}>
                    <RowOne />
                </Row>
            </Content>
        </Layout>
    );
};

export default DashboardFive;
