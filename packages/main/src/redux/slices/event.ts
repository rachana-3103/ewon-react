import { createSlice } from "@reduxjs/toolkit";
import {
    calendarEvents,
    birthdayEvents,
    holidayEvents,
    discoveredEvents,
    meetupEvents,
    otherEvents,
} from "@doar/shared/data/events";
import { IEvent } from "@doar/shared/types";

// Define a type for the slice state

export interface EvenState {
    eventSources: IEvent[];
}

// // Define the initial state using that type
const initialState: EvenState = {
    eventSources: [
        calendarEvents,
        birthdayEvents,
        holidayEvents,
        discoveredEvents,
        meetupEvents,
        otherEvents,
    ],
};

const eventSlice = createSlice({
    name: "events",
    initialState,
    reducers: {
        increment: (state) => {
            return { ...state };
        },
    },
});

export const { increment } = eventSlice.actions;

export default eventSlice.reducer;
