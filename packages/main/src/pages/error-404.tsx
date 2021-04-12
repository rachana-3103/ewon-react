import React from "react";
import Layout from "../layouts";
import ErrorContainer from "../containers/error-404";

const ErrorNotFound: React.FC = () => {
    return (
        <Layout className="auth-content-alt">
            <ErrorContainer />
        </Layout>
    );
};

export default ErrorNotFound;
