import React from "react";
import Layout from "../../layouts";
import Wrapper from "../../containers/apps/file-manager/wrapper";
import Sidebar from "../../containers/apps/file-manager/sidebar";
import MainContent from "../../containers/apps/file-manager/main";

const FileManager: React.FC = () => {
    return (
        <Layout hasSidebar>
            <Wrapper>
                <Sidebar />
                <MainContent />
            </Wrapper>
        </Layout>
    );
};

export default FileManager;
