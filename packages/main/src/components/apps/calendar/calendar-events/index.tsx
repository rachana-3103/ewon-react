import { FC } from "react";
import Label from "../label";
import { StyledWrap, StyledNav, StyledItem, StyledBullet } from "./style";

const CalendarEvents: FC = () => {
    return (
        <StyledWrap>
            <Label mb="10px" pl="10px">
                My Calendar
            </Label>
            <StyledNav>
                <StyledItem $type="calendar" $show>
                    <StyledBullet /> Calendar Events
                </StyledItem>
                <StyledItem $type="birthday" $show>
                    <StyledBullet /> Birthday Events
                </StyledItem>
                <StyledItem $type="holiday" $show>
                    <StyledBullet /> Holiday Events
                </StyledItem>
                <StyledItem $type="discover" $show>
                    <StyledBullet /> Discovered Events
                </StyledItem>
                <StyledItem $type="meetup" $show>
                    <StyledBullet /> Meetup Events
                </StyledItem>
                <StyledItem $type="other" $show>
                    <StyledBullet /> Other Events
                </StyledItem>
            </StyledNav>
        </StyledWrap>
    );
};

export default CalendarEvents;
