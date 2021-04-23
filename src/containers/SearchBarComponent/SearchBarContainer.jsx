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

    const [coordinates, setCoordinates] = useState({
        lat: null,
        lng: null
    })

    const handleSelectAuoSugest = async (value)=>{
        const results = await geocodeByAddress(value);
        const latLng = await getLatLng( results[0] );
        setAddress(value); // this will auto complete based to partial typing and suggestion
        setCoordinates( latLng )
        console.log( address )
    }

    return(
        <div>
            <PlacesAutocomplete value={address} onChange={setAddress} onSelect={handleSelectAuoSugest}>
                {/*Note : see https://www.npmjs.com/package/react-places-autocomplete for details about the render props passed below */}
                {({ getInputProps, suggestions, getSuggestionItemProps, loading})=>(
                    <div>

                        <div>
                            <p>Latitude : {coordinates.lat}</p>
                            <p>Longitude : {coordinates.lng}</p>
                        </div>

                        <input {...getInputProps({placeholder: "Type Address"})}/>

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

            {/*<SearchbarPresenter*/}
            {/*    props={ props }/>*/}
        </div>
    )
};

SearchbarContainer.propTypes={
    props: PropTypes.shape({}).isRequired
}

export default SearchbarContainer