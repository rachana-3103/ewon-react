/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UIState {
    sidebar: boolean;
}

const initialState: UIState = {
    sidebar: false,
};

const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        toggleSidebar(state, action: PayloadAction<{ isOpen?: "open" }>) {
            const {
                payload: { isOpen },
            } = action;
            if (isOpen) {
                state.sidebar = false;
            } else {
                state.sidebar = !state.sidebar;
            }
        },
    },
});

export const { toggleSidebar } = uiSlice.actions;
export default uiSlice.reducer;
