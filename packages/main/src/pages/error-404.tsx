import React from "react";
import Layout from "../layouts";
import ErrorContainer from "../containers/error-404";

const ErrorNotFound: React.FC = () => {
    return (
        <Layout fullHeight align="center">
            <ErrorContainer />
        </Layout>
    );
};

export default ErrorNotFound;
