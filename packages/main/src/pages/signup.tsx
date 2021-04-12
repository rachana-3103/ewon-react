import React from "react";
import Layout from "../layouts";
import AuthContainer from "../containers/signup";

const SignUp: React.FC = () => {
    return (
        <Layout className="auth-content">
            <AuthContainer />
        </Layout>
    );
};

export default SignUp;
