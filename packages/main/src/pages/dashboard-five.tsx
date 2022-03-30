import React from "react";
import SEO from "../components/seo";
import Layout from "../layouts";
import Content from "../layouts/content";
import WelcomeArea from "../containers/dashboard-five/welcome-area";
import RowOne from "../containers/dashboard-five/row-one";
import RowTwo from "../containers/dashboard-five/row-two";

const DashboardFive: React.FC = () => {
    return (
        <Layout>
            <SEO />
            <Content>
                <WelcomeArea />
                <RowOne />
                <RowTwo />
            </Content>
        </Layout>
    );
};

export default DashboardFive;
