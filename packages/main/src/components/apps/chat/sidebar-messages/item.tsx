import { FC } from "react";
import {
    Avatar,
    AvatarInitial,
    MediaBody,
    Heading,
    Text,
    Badge,
} from "@doar/components";
import { StyledItem } from "./style";

interface IProps {
    status: "online" | "offline";
    image?: string;
    bg?: string;
    name: string;
    lastMsgTime: string;
    unseenMsg?: number;
}

const Item: FC<IProps> = ({
    status,
    bg,
    image,
    name,
    lastMsgTime,
    unseenMsg,
}) => {
    return (
        <StyledItem>
            <Avatar size="sm" status={status}>
                {image && <img src={image} alt={name} />}
                {!image && (
                    <AvatarInitial bg={bg}>
                        {name.substring(0, 1)}
                    </AvatarInitial>
                )}
            </Avatar>
            <MediaBody ml="10px">
                <Heading mb="0px">{name}</Heading>
                <Text as="small" display="block" color="text4">
                    {lastMsgTime}
                </Text>
            </MediaBody>
            {unseenMsg && (
                <Badge color="danger" shape="circle">
                    {unseenMsg}
                </Badge>
            )}
        </StyledItem>
    );
};

Item.defaultProps = {
    bg: "dark",
};

export default Item;
