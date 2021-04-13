import React from "react";
import Layout from "../layouts";
import AuthContainer from "../containers/signin";

const SignIn: React.FC = () => {
    return (
        <Layout fullHeight>
            <AuthContainer />
        </Layout>
    );
};

export default SignIn;
