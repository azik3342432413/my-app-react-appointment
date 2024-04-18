import { configureStore } from '@reduxjs/toolkit'
import dragReducer from "./slices/dragSlice";

export default configureStore({
    reducer: {
        drag: dragReducer,

    },
})