import React from "react";
import Layout from "../layouts";
import WelcomeArea from "../containers/sales-monitoring/welcome-area";
import RowOne from "../containers/sales-monitoring/row-one";
import RowTwo from "../containers/sales-monitoring/row-two";

const HomePage: React.FC = () => {
    return (
        <Layout>
            <WelcomeArea />
            <RowOne />
            <RowTwo />
        </Layout>
    );
};

export default HomePage;
