import { FC } from "react";
import { Heading } from "@doar/components";
import ScrollBar from "../../../../components/scrollbar";
import ChannelNav from "../../../../components/apps/chat/channel-nav";
import DirectNav from "../../../../components/apps/chat/direct-nav";
import SearchForm from "../../../../components/apps/chat/search-form";
import SettingsNav from "../../../../components/apps/chat/settings-nav";
import ChatGroup from "../../../../components/apps/chat/chat-group";
import ChatForm from "../../../../components/apps/chat/chat-form";
import MemberList from "../../../../components/apps/chat/member-list";
import {
    StyledMain,
    StyledHeader,
    StyledHeaderRight,
    StyledBody,
    StyledBodyInner,
    StyledFooter,
    StyledSidebar,
} from "./style";

const Main: FC = () => {
    return (
        <StyledMain className="content">
            <StyledHeader>
                <Heading mb="0px">#products</Heading>
                <StyledHeaderRight>
                    <ChannelNav />
                    <DirectNav />
                    <SearchForm />
                    <SettingsNav />
                </StyledHeaderRight>
            </StyledHeader>
            <StyledBody>
                <ScrollBar>
                    <StyledBodyInner>
                        <ChatGroup />
                    </StyledBodyInner>
                </ScrollBar>
            </StyledBody>
            <StyledFooter>
                <ChatForm />
            </StyledFooter>
            <StyledSidebar>
                <ScrollBar>
                    <MemberList />
                </ScrollBar>
            </StyledSidebar>
        </StyledMain>
    );
};

export default Main;
