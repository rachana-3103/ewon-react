import React from "react";
import { Row } from "@doar/components";
import Layout from "../layouts";
import Content from "../layouts/content";
import PageHeader from "../components/page-header";
import MainContent from "../containers/groups/main";
import Sidebar from "../containers/groups/sidebar";

const Groups: React.FC = () => {
    return (
        <Layout>
            <Content borderBottomWidth="1px">
                <PageHeader
                    prev={[
                        { text: "Profile", link: "/profile-view" },
                        { text: "Discover", link: "/" },
                    ]}
                    title="Groups"
                    wcText="Discover Groups"
                />
            </Content>
            <Content mt={[null, null, null, "0px"]}>
                <Row>
                    <MainContent />
                    <Sidebar />
                </Row>
            </Content>
        </Layout>
    );
};

export default Groups;
