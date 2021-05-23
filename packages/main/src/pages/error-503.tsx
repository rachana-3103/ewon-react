import React from "react";
import Layout from "../layouts";
import Content from "../layouts/content";
import ErrorContainer from "../containers/error-503";

const Error505: React.FC = () => {
    return (
        <Layout>
            <Content fullHeight align="center">
                <ErrorContainer />
            </Content>
        </Layout>
    );
};

export default Error505;
