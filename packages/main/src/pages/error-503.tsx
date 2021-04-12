import React from "react";
import Layout from "../layouts";
import ErrorContainer from "../containers/error-503";

const Error505: React.FC = () => {
    return (
        <Layout className="auth-content-alt">
            <ErrorContainer />
        </Layout>
    );
};

export default Error505;
