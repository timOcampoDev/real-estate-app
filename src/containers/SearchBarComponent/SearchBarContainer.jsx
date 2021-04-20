import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import SearchbarPresenter from "./SearchbarPresenter";
import { initMap } from "./index";

const SearchbarContainer =({props})=>{
    const [loaded, setLoaded] = useState(false)

    /**
     * Create script tag for google places api
     */
    useEffect(()=>{
        const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY
        const scriptTag = document.createElement('script');
        scriptTag.src=`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&libraries=places&callback=${initMap}`
        if(!loaded){
            scriptTag.addEventListener('load' , ()=> setLoaded(true) )
            document.body.appendChild(scriptTag)
        }
    },[])

    return(
        <SearchbarPresenter props={ props }/>)
};

SearchbarContainer.propTypes={
    props: PropTypes.shape({}).isRequired
}

export default SearchbarContainer