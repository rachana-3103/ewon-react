import { FC } from "react";
import { Card, ListGroup, ListGroupItem, Avatar } from "@doar/components";
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
                    <Avatar />
                </ListGroupItem>
            </ListGroup>
        </Card>
    );
};

export default Transaction;
