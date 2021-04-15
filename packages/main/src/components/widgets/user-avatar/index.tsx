import { FC } from "react";
import { Avatar } from "@doar/components";
import image from "../../../images/img16.jpg";

const UserAvatar: FC = () => {
    return (
        <Avatar size="xxl" status="online">
            <img src={image} alt="user" />
        </Avatar>
    );
};

export default UserAvatar;
