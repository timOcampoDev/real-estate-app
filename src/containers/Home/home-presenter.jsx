import React from 'react';
import PropTypes from 'prop-types';
import MastheadPresenter from "./MastHead";
import {useStyles} from "../../styles/Theme";
import Container from '@material-ui/core/Container';
import SearchBar from '../SearchBarComponent';

const HomePresenter = ({props})=>{
    const {searchBarField, handleSearchBarOnChange, handleSearchHomes} = props;

    const classes = useStyles({})
    return(

        <div className={'home-component'}>
            <MastheadPresenter/>

            <Container classes={{root: classes.home}}>
                <div>
                    <h1>
                        1% listing fee<br/>when you buy + sell.
                    </h1>

                    <SearchBar
                        props={{
                            buttonText: 'Search Homes',
                            onClick: handleSearchHomes,
                            id: 'home-search-bar',
                            type: 'search',
                            name: 'searchBarField',
                            value: searchBarField,
                            onChange: ( e )=> handleSearchBarOnChange(e)
                        }}/>
                </div>

                <div>
                    feed goes in here
                </div>
            </Container>
        </div>
    )
}

HomePresenter.propTypes={
    props: PropTypes.shape({
        searchBarField: PropTypes.string,
        handleSearchBarOnChange: PropTypes.func.isRequired,
        handleSearchHomes: PropTypes.func.isRequired,
    })
}

HomePresenter.defaultProps={
    props:{
        searchBarField: '',
    }
}
export default HomePresenter