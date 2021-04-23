import React, {useEffect, useState} from 'react';
import { useSelector } from "react-redux";
import PropTypes from 'prop-types';
import { initMap } from "./index";
import PlacesAutocomplete from 'react-places-autocomplete';
import ButtonComponent from "../../components/ButtonComponent";
import SearchbarPresenter from './SearchbarPresenter'
import {
    geocodeByAddress,
    geocodeByPlaceId,
    getLatLng,
} from 'react-places-autocomplete';

const SearchbarContainer =({props})=>{
    const getFormField = 'use Selector and replace with address';
    const setFormField = 'dispatch action to mimic setAddress';

    const { type, id, name, value, onChange , buttonText, onClick } = props;

    const [loaded, setLoaded] = useState(false)
    const [address, setAddress] = useState("")

    const [coordinates, setCoordinates] = useState({
        lat: null,
        lng: null
    })

    const handleSelectAuoSuggest = async (value)=>{
        const results = await geocodeByAddress(value);
        const latLng = await getLatLng( results[0] );
        setAddress(value); // passing value to setAddress will auto complete based to partial typing and suggestion
        setCoordinates( latLng )
        console.log( address )
    }

    return(
            <div>
                <PlacesAutocomplete value={address} onChange={setAddress} onSelect={ handleSelectAuoSuggest }>
                    {/*Note : see https://www.npmjs.com/package/react-places-autocomplete for details about the render props passed below */}
                    {({ getInputProps, suggestions, getSuggestionItemProps, loading})=>(
                        <div>
                           <div>
                               <input
                                   value={address}
                                   {...getInputProps({placeholder: "Type Address"})}
                               />
                               <ButtonComponent
                                   props={{
                                       buttonText,
                                       onClick
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