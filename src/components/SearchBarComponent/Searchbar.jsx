import React from 'react';
import PropTypes from 'prop-types';
import FormInputComponent from '../FormInputComponent';
import ButtonComponent from "../ButtonComponent";

const SearchBar = ({ props })=>{
    const { type, id, name, value, onChange , buttonText, onClick} = props;
    return(
        <div>
            <FormInputComponent props={{ type, id, name, value, onChange}}/>
            <ButtonComponent props={{
                buttonText,
                onClick,
            }}/>
        </div>
    )
}

export default SearchBar