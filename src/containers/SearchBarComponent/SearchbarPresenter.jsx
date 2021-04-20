import React from 'react';
import PropTypes from 'prop-types';
import FormInputComponent from '../../components/FormInputComponent';
import ButtonComponent from "../../components/ButtonComponent";

const SearchbarPresenter = ({ props })=>{
    const { type, id, name, value, onChange , buttonText, onClick } = props;

    return(
        <div className={'search-bar-presenter'} >

            <FormInputComponent props={{ type, id, name, value, onChange}}/>

            <ButtonComponent
                props={{
                buttonText,
                onClick,
            }}/>
        </div>
    )
}

export default SearchbarPresenter