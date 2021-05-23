import React from "react";
import { Media, MediaBody } from "@doar/components";
import Layout from "../layouts";
import Content from "../layouts/content";
import PageHeader from "../components/page-header";
import MainContent from "../containers/timeline/main";
import Sidebar from "../containers/timeline/sidebar";

const Timeline: React.FC = () => {
    return (
        <Layout>
            <Content borderBottomWidth="1px">
                <PageHeader
                    prev={[{ text: "Profile", link: "/profile-view" }]}
                    title="Timeline"
                    wcText="My Timeline"
                />
            </Content>
            <Content mt={[null, null, null, "0px"]}>
                <Media display={["block", null, null, "flex"]}>
                    <MediaBody>
                        <MainContent />
                    </MediaBody>
                    <Sidebar />
                </Media>
            </Content>
        </Layout>
    );
};

export default Timeline;
