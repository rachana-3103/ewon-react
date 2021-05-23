import React from "react";
import Layout from "../layouts";
import Content from "../layouts/content";
import AuthContainer from "../containers/signup";

const SignUp: React.FC = () => {
    return (
        <Layout>
            <Content fullHeight>
                <AuthContainer />
            </Content>
        </Layout>
    );
};

export default SignUp;
