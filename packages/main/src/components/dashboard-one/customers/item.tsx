import { FC } from "react";
import { Mail, Slash, User, MoreVertical } from "react-feather";
import { Avatar, AvatarInitial } from "@doar/components";
import { ICustomer } from "@doar/shared/types";
import {
    StyledListMiddle,
    StyledListTitle,
    StyledListText,
    StyledListEnd,
    StyledNavIcon,
    StyledNavLink,
} from "./style";

const Item: FC<ICustomer> = ({ id, name, image, bg }) => {
    const op = bg === "gray600" ? 1 : 0.5;
    return (
        <>
            <Avatar display={["none", "block"]}>
                {image && <img src={image} alt={name} />}
                {!image && (
                    <AvatarInitial bg={bg} opacity={op}>
                        {name.substring(0, 1)}
                    </AvatarInitial>
                )}
            </Avatar>
            <StyledListMiddle>
                <StyledListTitle>{name}</StyledListTitle>
                <StyledListText>Customer ID{id}</StyledListText>
            </StyledListMiddle>
            <StyledListEnd>
                <StyledNavIcon>
                    <StyledNavLink href="#" display={["none", "block"]}>
                        <Mail size="24" />
                    </StyledNavLink>
                    <StyledNavLink href="#" display={["none", "block"]}>
                        <Slash size="24" />
                    </StyledNavLink>
                    <StyledNavLink href="#" display={["none", "block"]}>
                        <User size="24" />
                    </StyledNavLink>
                    <StyledNavLink href="#" display={["block", "none"]}>
                        <MoreVertical size="24" />
                    </StyledNavLink>
                </StyledNavIcon>
            </StyledListEnd>
        </>
    );
};

export default Item;
