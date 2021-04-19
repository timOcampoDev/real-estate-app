import {createSlice} from "@reduxjs/toolkit";

export const formsReducerState = {
    searchBarField: '',
};

export const formsSlice = createSlice({
    name: 'forms',
    initialState: formsReducerState,
    reducers:{
        handleSearchBarOnChange : (state= formsReducerState , action)=>{
            const {name, value} = action.payload
            return{
                ...state,
                [name]: value
            }
        }
    }
})

/**
 * ACTIONS
 */
export const { handleSearchBarOnChange } = formsSlice.actions;

/**
 * SELECTORS
 */
export const getSearchBarField = (state = formsReducerState)=> state.rootReducer.formsReducer

