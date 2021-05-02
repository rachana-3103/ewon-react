/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import { createSlice } from "@reduxjs/toolkit";

export interface UIState {
    calendarSidebar: boolean;
}

const initialState: UIState = {
    calendarSidebar: false,
};

const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        toggleCalendarSidebar(state) {
            state.calendarSidebar = !state?.calendarSidebar;
        },
    },
});

export const { toggleCalendarSidebar } = uiSlice.actions;
export default uiSlice.reducer;
