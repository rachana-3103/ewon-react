import React from "react";
import Layout from "../layouts";
import ErrorContainer from "../containers/error-500";

const Error500: React.FC = () => {
    return (
        <Layout className="auth-content-alt">
            <ErrorContainer />
        </Layout>
    );
};

export default Error500;
