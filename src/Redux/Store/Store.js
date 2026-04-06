import { configureStore } from "@reduxjs/toolkit";
import ThemeReducer from '../Slices/ThemeSlice'


const store = configureStore({
    reducer : {
        theme : ThemeReducer
    }
})

export default store;