import { FC } from "react";
import Layout from "../../layouts";
import Wrapper from "../../containers/apps/chat/wrapper";
import NavLeft from "../../containers/apps/chat/nav-left";
import Sidebar from "../../containers/apps/chat/sidebar";
import Main from "../../containers/apps/chat/main";

const Chat: FC = () => {
    return (
        <Layout hasSidebar hideFooter sidebarLayout={2}>
            <Wrapper>
                <NavLeft />
                <Sidebar />
                <Main />
            </Wrapper>
        </Layout>
    );
};

export default Chat;
