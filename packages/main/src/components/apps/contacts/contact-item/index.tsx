import { FC } from "react";
import { Star, Edit2 } from "react-feather";
import { Avatar, AvatarInitial, MediaBody } from "@doar/components";
import { useAppDispatch } from "../../../../redux/hooks";
import { toggleSidebar } from "../../../../redux/slices/ui";
import {
    StyledMedia,
    StyledName,
    StyledSpan,
    StyledNav,
    StyledNavBtn,
} from "./style";

interface IProps {
    image?: string;
    color?: string;
    name: string;
    phone: string;
    active?: boolean;
}

const ContactItem: FC<IProps> = ({ image, color, name, phone, active }) => {
    const dispatch = useAppDispatch();
    const clickHandler = () => {
        dispatch(toggleSidebar({ isOpen: undefined }));
    };
    return (
        <StyledMedia $active={active} onClick={clickHandler}>
            <Avatar size="sm" status="online">
                {image && <img src={image} alt={name} />}
                {!image && (
                    <AvatarInitial bg={color}>
                        {name.substring(0, 1)}
                    </AvatarInitial>
                )}
            </Avatar>
            <MediaBody ml="10px">
                <StyledName>{name}</StyledName>
                <StyledSpan>{phone}</StyledSpan>
            </MediaBody>
            <StyledNav>
                <StyledNavBtn>
                    <Star />
                </StyledNavBtn>
                <StyledNavBtn>
                    <Edit2 />
                </StyledNavBtn>
            </StyledNav>
        </StyledMedia>
    );
};

export default ContactItem;
