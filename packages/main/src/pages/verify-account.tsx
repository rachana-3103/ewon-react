import React from "react";
import Layout from "../layouts";
import Content from "../layouts/content";
import VerifyContainer from "../containers/verify-account";

const VerifyAccount: React.FC = () => {
    return (
        <Layout>
            <Content fullHeight align="center">
                <VerifyContainer />
            </Content>
        </Layout>
    );
};

export default VerifyAccount;
