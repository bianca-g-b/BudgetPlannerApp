import { createSlice } from "@reduxjs/toolkit";

// set initial theme state
const initialState = {
    theme: "light",
};

// create theme slice and the toggleTheme action
export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.theme = state.theme === "light" ? "dark" : "light";
        },
    },
});

// export actions
export const { toggleTheme } = themeSlice.actions;

// export reducer
export default themeSlice.reducer;