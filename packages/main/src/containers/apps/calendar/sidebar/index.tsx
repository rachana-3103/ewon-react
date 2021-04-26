import { FC } from "react";
import { Search, Plus } from "react-feather";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { Button } from "@doar/components";
import { StyledWrap, StyledHeader, StyledBody } from "./style";
import SearchForm from "../../../../components/apps/calendar/search";
import InlineCalendar from "../../../../components/apps/calendar/inline-calendar";
import CalendarEvents from "../../../../components/apps/calendar/calendar-events";
import UpcomingEvents from "../../../../components/apps/calendar/upcoming-events";

const Sidebar: FC = () => {
    return (
        <StyledWrap>
            <StyledHeader>
                <Search className="search" />
                <SearchForm />
                <Button size="sm" iconButton>
                    <div>
                        <Plus className="plus" />
                    </div>
                </Button>
            </StyledHeader>
            <PerfectScrollbar>
                <StyledBody>
                    <InlineCalendar />
                    <CalendarEvents />
                    <UpcomingEvents />
                </StyledBody>
            </PerfectScrollbar>
        </StyledWrap>
    );
};

export default Sidebar;
