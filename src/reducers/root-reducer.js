import {createSlice, combineReducers} from "@reduxjs/toolkit";

export const listingsState = {
    data: {
        queryResults: []
    }
};

export const listingsSlice = createSlice({
    name: 'listings',
    initialState : listingsState,
    reducers:{
        handleGetListings : (state = listingsState, action)=>{
            const { data } = action.payload
            const { queryResults } = data;

            return{
                ...state,
                data: {
                    ...state.data,
                    queryResults : queryResults,
                }
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