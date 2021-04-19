import {combineReducers} from "@reduxjs/toolkit";
import { listingsSlice } from "./listings-reducer";
import { formsSlice} from "./formsReducer";

export const rootReducer = combineReducers({
    listingsReducer: listingsSlice.reducer,
    formsReducer : formsSlice.reducer,
})