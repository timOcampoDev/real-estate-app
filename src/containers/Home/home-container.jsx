import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch , useSelector } from "react-redux";
import HomePresenter from './home-presenter';
import { getListings } from "../../reducers/listings-reducer";
import { getSearchBarField, handleSearchBarOnChange } from "../../reducers/formsReducer";

const HomeContainer = ()=>{
    const dispatch = useDispatch();
    const listingState = useSelector(getListings)
    const formState = useSelector(getSearchBarField)
    const { searchBarField } = formState;

    const handleSearchBarOnChange=( e )=>{
        dispatch({
            type: 'forms/handleSearchBarOnChange',
            payload:{
                name: e.target.name,
                value: e.target.value,
            }
        })
    }
    const handleSearchHomes = ( query )=>{
        dispatch( {
            type: 'forms/handleSearchHomes',
            payload: {
                query,
            },
        })
    }
    return(
        <HomePresenter props={{
            searchBarField,
            handleSearchBarOnChange,
            handleSearchHomes: ()=>handleSearchHomes( searchBarField ),
        }}/>
    );
}
export default HomeContainer
