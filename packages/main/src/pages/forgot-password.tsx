import React from "react";
import Layout from "../layouts";
import PasswordContainer from "../containers/forgot-password";

const ForgotPassword: React.FC = () => {
    return (
        <Layout fullHeight align="center">
            <PasswordContainer />
        </Layout>
    );
};

export default ForgotPassword;
