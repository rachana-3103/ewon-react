import React from "react";
import Layout from "../layouts";
import VerifyContainer from "../containers/verify";

const Verify: React.FC = () => {
    return (
        <Layout className="auth-content-alt">
            <VerifyContainer />
        </Layout>
    );
};

export default Verify;
