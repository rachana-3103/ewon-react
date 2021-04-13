import React from "react";
import Layout from "../layouts";
import ErrorContainer from "../containers/error-505";

const Error503: React.FC = () => {
    return (
        <Layout fullHeight align="center">
            <ErrorContainer />
        </Layout>
    );
};

export default Error503;
