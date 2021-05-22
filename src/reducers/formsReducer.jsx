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
        },

        handleSearchHomes : (state= formsReducerState, action)=>{
            const {query} = action.payload

            console.log('what is the query?' , query)

            return{
                ...state
            }
        },


        handleSelectAuoSuggest : (state= formsReducerState, action)=>{

        }
    }
})

/**
 * ACTIONS
 */
export const { handleSearchBarOnChange , handleSearchHomes} = formsSlice.actions;

/**
 * SELECTORS
 */
export const getFormState = (state= formsReducerState )=>state.rootReducer.formsReducer;
export const getSearchBarField = (state = formsReducerState)=> state.rootReducer.formsReducer

