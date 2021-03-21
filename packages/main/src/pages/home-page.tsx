import React from "react";
import Layout from "../layouts";
import WelcomeArea from "../containers/sales-monitoring/welcome-area";
import RowOne from "../containers/sales-monitoring/row-one";
import RowTwo from "../containers/sales-monitoring/row-two";
import RowThree from "../containers/sales-monitoring/row-three";

const HomePage: React.FC = () => {
    return (
        <Layout>
            <WelcomeArea />
            <RowOne />
            <RowTwo />
            <RowThree />
        </Layout>
    );
};

export default HomePage;
