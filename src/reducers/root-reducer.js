import {createSlice, combineReducers} from "@reduxjs/toolkit";


export const listingsState = {
    counter: 10
};

export const listingsSlice = createSlice({
    name: 'listings',
    initialState : listingsState,
    reducers:{
        handleGetListings : (state = listingsState, action)=>{
            console.log('i fired')
            return{
                ...state
            }
        }
    }
});

/**
 * ACTIONS
 */
export const { handleGetListings } = listingsSlice.actions
/**
 * SELECTORS
 */

export const getListings = (state= listingsState  )=> state


export const rootReducer = combineReducers({
    listingsReducer: listingsSlice.reducer
})