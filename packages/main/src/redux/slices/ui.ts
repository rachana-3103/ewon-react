/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UIState {
    sidebar: boolean;
    sidebarTwo: boolean;
}

const initialState: UIState = {
    sidebar: false,
    sidebarTwo: true,
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
        toggleSidebarTwo(state, action: PayloadAction<boolean>) {
            const { payload } = action;
            state.sidebar = payload;
        },
    },
});

export const { toggleSidebar, toggleSidebarTwo } = uiSlice.actions;
export default uiSlice.reducer;
