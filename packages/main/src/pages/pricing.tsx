import React from "react";
import Layout from "../layouts";
import Content from "../layouts/content";
import PricingContainer from "../containers/pricing";

const Pricing: React.FC = () => {
    return (
        <Layout>
            <Content fullHeight align="center">
                <PricingContainer />
            </Content>
        </Layout>
    );
};

export default Pricing;
