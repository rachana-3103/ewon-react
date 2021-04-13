import React from "react";
import { Media, MediaBody } from "@doar/components";
import Layout from "../layouts";
import LeftSidebar from "../containers/profile-view/left-sidebar";
import MainContent from "../containers/profile-view/main";
import RightSidebar from "../containers/profile-view/right-sidebar";

const ProfileView: React.FC = () => {
    return (
        <Layout p={[null, null, null, "40px 0"]}>
            <Media display={["block", null, null, "flex"]}>
                <LeftSidebar />
                <MediaBody
                    mt={["40px", null, null, 0]}
                    px={[null, null, null, "10px"]}
                >
                    <MainContent />
                </MediaBody>
                <RightSidebar />
            </Media>
        </Layout>
    );
};

export default ProfileView;
