import { FC } from "react";
import Label from "../label";
import {
    StyledWrap,
    StyledGroup,
    StyledItem,
    StyledTitle,
    StyledDetails,
} from "./style";

const UpcomingEvents: FC = () => {
    return (
        <StyledWrap>
            <Label mb="15px">Upcoming Events</Label>
            <StyledGroup>
                <StyledItem borderColor="danger">
                    <StyledTitle>Company Standup Meeting</StyledTitle>
                    <StyledDetails>
                        8:00am - 9:00am, Engineering Room
                    </StyledDetails>
                </StyledItem>
                <StyledItem borderColor="success">
                    <StyledTitle>Start Dashboard Concept</StyledTitle>
                    <StyledDetails>9:30am - 11:30am, Office Desk</StyledDetails>
                </StyledItem>
                <StyledItem borderColor="primary">
                    <StyledTitle>Chat Design Presentation</StyledTitle>
                    <StyledDetails>2:30pm - 3:00pm, Visual Room</StyledDetails>
                </StyledItem>
            </StyledGroup>
        </StyledWrap>
    );
};

export default UpcomingEvents;
