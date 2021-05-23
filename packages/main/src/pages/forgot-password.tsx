import React from "react";
import Layout from "../layouts";
import Content from "../layouts/content";
import PasswordContainer from "../containers/forgot-password";

const ForgotPassword: React.FC = () => {
    return (
        <Layout>
            <Content fullHeight align="center">
                <PasswordContainer />
            </Content>
        </Layout>
    );
};

export default ForgotPassword;
