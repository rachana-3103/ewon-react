import { FC } from "react";
import Label from "../label";
import Item from "./item";
import { StyledWrap, StyledList } from "./style";

const SidebarMessages: FC = () => {
    return (
        <StyledWrap>
            <Label mb="10px" pl="10px">
                Direct Messages
            </Label>
            <StyledList>
                <Item status="online" name="dfbot" lastMsgTime="5 mins ago" />
                <Item
                    status="online"
                    bg="gray700"
                    name="situmay"
                    lastMsgTime="1 hour ago"
                />
                <Item
                    status="offline"
                    name="situmay"
                    bg="gray600"
                    lastMsgTime="1 hour ago"
                    unseenMsg={3}
                />
                <Item
                    status="offline"
                    bg="primary"
                    name="acantones"
                    lastMsgTime="2 hours ago"
                />
                <Item
                    status="offline"
                    bg="secondary"
                    name="rlabares"
                    lastMsgTime="2 hours ago"
                />
                <Item
                    status="online"
                    bg="success"
                    name="h.owen"
                    lastMsgTime="3 hours ago"
                />
                <Item
                    status="online"
                    bg="info"
                    name="k.billie"
                    lastMsgTime="3 hours ago"
                />
                <Item
                    status="online"
                    bg="teal"
                    name="m.audrey"
                    lastMsgTime="3 hours ago"
                />
                <Item
                    status="online"
                    bg="indigo"
                    name="macasindil"
                    lastMsgTime="4 hours ago"
                />
                <Item
                    status="online"
                    bg="pink"
                    name="e.ocaba"
                    lastMsgTime="4 hours ago"
                />
                <Item
                    status="online"
                    bg="cyan"
                    name="avendula"
                    lastMsgTime="5 hours ago"
                />
            </StyledList>
        </StyledWrap>
    );
};

export default SidebarMessages;
