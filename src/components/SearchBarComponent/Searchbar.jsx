import React from 'react';
import PropTypes from 'prop-types';
import FormInputComponent from '../FormInputComponent';
import ButtonComponent from "../ButtonComponent";
import { SearchBarContainer } from "./styles";
import {cx} from '@emotion/css'

const SearchBar = ({ props })=>{
    const { type, id, name, value, onChange , buttonText, onClick, } = props;

    return(
        <div className={cx( 'search-bar-container' , SearchBarContainer )} >
            <FormInputComponent props={{ type, id, name, value, onChange}}/>
            <ButtonComponent props={{
                buttonText,
                onClick,
            }}/>
        </div>
    )
}

export default SearchBar