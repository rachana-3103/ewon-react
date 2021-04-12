import React from "react";
import Layout from "../layouts";
import VerifyContainer from "../containers/verify-account";

const VerifyAccount: React.FC = () => {
    return (
        <Layout className="auth-content-alt">
            <VerifyContainer />
        </Layout>
    );
};

export default VerifyAccount;
