import React from "react";
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
            <RowOne />
            <RowTwo />
            <RowThree />
            <RowFour />
        </Layout>
    );
};

export default HomePage;
