import React from "react";
import Layout from "../layouts";
import AuthContainer from "../containers/signup";

const SignUp: React.FC = () => {
    return (
        <Layout fullHeight>
            <AuthContainer />
        </Layout>
    );
};

export default SignUp;
