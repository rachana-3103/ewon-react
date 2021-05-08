import React from "react";
import Layout from "../../layouts";
import Wrapper from "../../containers/apps/mail/wrapper";
import Sidebar from "../../containers/apps/mail/sidebar";
import Group from "../../containers/apps/mail/group";
import Main from "../../containers/apps/mail/main";

const Mail: React.FC = () => {
    return (
        <Layout hasSidebar hideFooter>
            <Wrapper>
                <Sidebar />
                <Group />
                <Main />
            </Wrapper>
        </Layout>
    );
};

export default Mail;
