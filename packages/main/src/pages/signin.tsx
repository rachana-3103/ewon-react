import React from "react";
import Layout from "../layouts";
import Content from "../layouts/content";
import AuthContainer from "../containers/signin";

const SignIn: React.FC = () => {
    return (
        <Layout>
            <Content fullHeight>
                <AuthContainer />
            </Content>
        </Layout>
    );
};

export default SignIn;
