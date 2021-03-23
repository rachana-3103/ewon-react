import { FC } from "react";
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
} from "./style";

const Transaction: FC = () => {
    return (
        <Card height="100%">
            <StyledHeader>
                <StyledTitle>Transaction History</StyledTitle>
                <StyledHeaderRight>
                    <StyledIcon href="#" aria-label="refesh">
                        <i className="icon ion-md-refresh" />
                    </StyledIcon>
                    <StyledIcon href="#" ml="10px" aria-label="more options">
                        <i className="icon ion-md-more" />
                    </StyledIcon>
                </StyledHeaderRight>
            </StyledHeader>
            <ListGroup flush>
                <ListGroupItem>
                    <Avatar>
                        <AvatarInitial>dd</AvatarInitial>
                    </Avatar>
                </ListGroupItem>
            </ListGroup>
        </Card>
    );
};

export default Transaction;
