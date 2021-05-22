import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import PropTypes from 'prop-types';
import { initMap } from "./index";
import PlacesAutocomplete from 'react-places-autocomplete';
import ButtonComponent from "../../components/ButtonComponent";
import {getFormState, handleSearchHomes } from "../../reducers/formsReducer";

import {
    geocodeByAddress,
    geocodeByPlaceId,
    getLatLng,
} from 'react-places-autocomplete';

const SearchbarContainer =({ props })=>{
    const dispatch = useDispatch();
    const getState = useSelector(getFormState)
    const { type, id, name, value, onChange , buttonText, onClick } = props;

    const [isAutoCompleted, setAutoCompleted] = useState(false)
    const [address, setAddress] = useState("")

    const [coordinates, setCoordinates] = useState({
        lat: null,
        lng: null
    })

    const resetIsAutoCompleted = ()=> {
        if(isAutoCompleted === true ){
            return setAutoCompleted(false)
        }
    }

    const handleSelectAuoSuggest = async (value)=>{
        const results = await geocodeByAddress(value);
        const latLng = await getLatLng( results[0] );
        setAddress(value); // passing value to setAddress will auto complete based to partial typing and suggestion

        setCoordinates( latLng )
        console.log( isAutoCompleted )
    }

    const handleSearchClick = ( address , autoSearch)=>{

        if(!autoSearch){
            console.log(address , 'not from ')
        }

        if(autoSearch){
            const test = 'this is a test';
            console.log(test, 'make sure to remove when you get off the plane')
           console.log('this logic works')
        }

        dispatch({
            type: 'forms/handleSearchHomes',
            payload:{
                query: address,
            }})
    }


    return(
            <div>
                <PlacesAutocomplete onfocus={ resetIsAutoCompleted()} value={address} onChange={setAddress} onSelect={ handleSelectAuoSuggest }>
                    {/*Note : see https://www.npmjs.com/package/react-places-autocomplete for details about the render props passed below */}
                    {({ getInputProps, suggestions, getSuggestionItemProps, loading})=>(
                        <div>
                           <div>
                               <input
                                   type={'input'}

                                   value={address}
                                   {...getInputProps({placeholder: "Type Address"})}
                               />
                               <ButtonComponent
                                   props={{
                                       buttonText,
                                       onClick: ()=> handleSearchClick( address , isAutoCompleted )
                                   }}/>
                           </div>

                            <div id={'auto-complete-suggestions-wrapper'}>
                                {loading ? <div>...loading</div> : null }

                                {suggestions.map((suggestion, idx)=>{
                                    const style={
                                        background: suggestion.active ? "cyan" : 'black'}
                                    return(
                                        <div key={idx} {...getSuggestionItemProps( suggestion, { style } )} >
                                            {suggestion.description}
                                        </div>)
                                })}
                            </div>
                        </div>
                    )}
                </PlacesAutocomplete>
            </div>
    )
};

SearchbarContainer.propTypes={
    props: PropTypes.shape({}).isRequired
}

export default SearchbarContainer