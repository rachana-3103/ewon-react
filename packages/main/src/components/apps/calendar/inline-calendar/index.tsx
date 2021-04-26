import { FC, useState } from "react";
import Calendar from "react-calendar";
import { StyledWrap } from "./style";

const InlineCalendar: FC = () => {
    const [value, setValue] = useState(new Date());
    const changeHandler = () => {
        setValue(new Date());
    };

    const formatShortWeekday = (locale: string, date: Date): string => {
        const days = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
        ];
        const d = new Date(date);
        const dayName = days[d.getDay()].substring(0, 2);
        return dayName;
    };
    const formatDay = (locale: string, date: Date): string => {
        const d = new Date(date);
        const day = d.getDate().toString().padStart(2, "0");
        return day;
    };

    return (
        <StyledWrap>
            <Calendar
                onChange={changeHandler}
                value={value}
                calendarType="US"
                prevLabel={<i className="fa fa-chevron-left" />}
                nextLabel={<i className="fa fa-chevron-right" />}
                formatShortWeekday={formatShortWeekday}
                formatDay={formatDay}
            />
        </StyledWrap>
    );
};

export default InlineCalendar;
