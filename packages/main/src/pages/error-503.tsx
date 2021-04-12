import React from "react";
import Layout from "../layouts";
import ErrorContainer from "../containers/error-503";

const Error503: React.FC = () => {
    return (
        <Layout className="auth-content-alt">
            <ErrorContainer />
        </Layout>
    );
};

export default Error503;
