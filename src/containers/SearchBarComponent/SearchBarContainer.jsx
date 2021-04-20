import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { initMap } from "./index";
import PlacesAutocomplete from 'react-places-autocomplete';
import {
    geocodeByAddress,
    geocodeByPlaceId,
    getLatLng,
} from 'react-places-autocomplete';
import SearchbarPresenter from "./SearchbarPresenter";

const SearchbarContainer =({props})=>{
    const [loaded, setLoaded] = useState(false)
    const [address, setAddress] = useState("")

    const handleSelect = async (value)=>{}

    return(
        <div>
            <PlacesAutocomplete value={address} onChange={setAddress} onSelect={handleSelect}>
                {/*Note : see https://www.npmjs.com/package/react-places-autocomplete for the render props passed below */}
                {({ getInputProps, suggestions, getSuggestionItemProps, loading})=>(
                    <div>
                        <input {...getInputProps({placeholder: "Type Address"})}/>

                        <div id={'auto-complete-suggestions-wrapper'}>
                            {loading ? <div>...loading</div> : null }

                            {suggestions.map((suggestion)=>{
                                return <div>{suggestion.description}</div>
                            })}

                        </div>
                    </div>


                )}
            </PlacesAutocomplete>

            {/*<SearchbarPresenter*/}
            {/*    props={ props }/>*/}
        </div>
    )
};

SearchbarContainer.propTypes={
    props: PropTypes.shape({}).isRequired
}

export default SearchbarContainer