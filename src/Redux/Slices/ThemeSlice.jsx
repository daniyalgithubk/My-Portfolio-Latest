import { createSlice } from "@reduxjs/toolkit";


const ThemeSlice = createSlice({
    name : "theme",
    initialState : {
        theme : localStorage.getItem("theme") || "light"
    },
    reducers : {
        toggleTheme : (state) => {
            state.theme = state.theme === "light" ? "dark" : "light"
            localStorage.setItem("theme", state.theme)
        }
    }
})


export const {toggleTheme} = ThemeSlice.actions;
export default ThemeSlice.reducer;