import { FC } from "react";
import { Mail, Slash, User, MoreVertical } from "react-feather";
import {
    Card,
    ListGroup,
    ListGroupItem,
    Avatar,
    AvatarInitial,
} from "@doar/components";
import {
    StyledHeader,
    StyledTitle,
    StyledHeaderRight,
    StyledIcon,
    StyledListMiddle,
    StyledListTitle,
    StyledListText,
    StyledListEnd,
    StyledNavIcon,
    StyledNavLink,
    StyledFooter,
    StyledFooterLink,
} from "./style";

const Customers: FC = () => {
    return (
        <Card height="100%">
            <StyledHeader>
                <StyledTitle>New Customers</StyledTitle>
                <StyledHeaderRight>
                    <StyledIcon href="#" aria-label="refresh">
                        <i className="fa fa-redo" />
                    </StyledIcon>
                    <StyledIcon href="#" ml="10px" aria-label="more options">
                        <i className="fa fa-ellipsis-v" />
                    </StyledIcon>
                </StyledHeaderRight>
            </StyledHeader>
            <ListGroup flush>
                <ListGroupItem display="flex" px={[null, "20px"]}>
                    <Avatar display={["none", "block"]}>
                        <AvatarInitial bg="gray600">s</AvatarInitial>
                    </Avatar>
                    <StyledListMiddle>
                        <StyledListTitle>Socrates Itumay</StyledListTitle>
                        <StyledListText>Customer ID#00222</StyledListText>
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
                </ListGroupItem>
                <ListGroupItem display="flex" px={[null, "20px"]}>
                    <Avatar display={["none", "block"]}>
                        <AvatarInitial bg="pink" opacity="0.5">
                            D
                        </AvatarInitial>
                    </Avatar>
                    <StyledListMiddle>
                        <StyledListTitle>Reynante Labares</StyledListTitle>
                        <StyledListText>Customer ID#00221</StyledListText>
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
                </ListGroupItem>
                <ListGroupItem display="flex" px={[null, "20px"]}>
                    <Avatar display={["none", "block"]}>
                        <AvatarInitial bg="teal" opacity="0.5">
                            m
                        </AvatarInitial>
                    </Avatar>
                    <StyledListMiddle>
                        <StyledListTitle>Marianne Audrey</StyledListTitle>
                        <StyledListText>Customer ID#00220</StyledListText>
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
                </ListGroupItem>
                <ListGroupItem display="flex" px={[null, "20px"]}>
                    <Avatar display={["none", "block"]}>
                        <AvatarInitial bg="indigo" opacity="0.5">
                            o
                        </AvatarInitial>
                    </Avatar>
                    <StyledListMiddle>
                        <StyledListTitle>Owen Bongcaras</StyledListTitle>
                        <StyledListText>Customer ID#00219</StyledListText>
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
                </ListGroupItem>
                <ListGroupItem display="flex" px={[null, "20px"]}>
                    <Avatar display={["none", "block"]}>
                        <AvatarInitial bg="primary" opacity="0.5">
                            k
                        </AvatarInitial>
                    </Avatar>
                    <StyledListMiddle>
                        <StyledListTitle>Kirby Avendula</StyledListTitle>
                        <StyledListText>Customer ID#00218</StyledListText>
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
                </ListGroupItem>
            </ListGroup>
            <StyledFooter>
                <StyledFooterLink href="#">
                    View More Customers{" "}
                    <i className="icon ion-md-arrow-down mg-l-5" />
                </StyledFooterLink>
            </StyledFooter>
        </Card>
    );
};

export default Customers;
