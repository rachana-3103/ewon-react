import React from "react";
import Layout from "../layouts";
import ErrorContainer from "../containers/error-500";

const Error500: React.FC = () => {
    return (
        <Layout fullHeight align="center">
            <ErrorContainer />
        </Layout>
    );
};

export default Error500;
