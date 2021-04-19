import React from 'react';
import PropTypes from 'prop-types';
import TextField from "@material-ui/core/TextField";
import { TextFieldInput } from "./styles";

const FormInputComponent = (props)=>{
    const {type, id, name, value, onChange } = props

    return(
        <TextField
            id={id}
            className={TextFieldInput}
            type={type}
           />
    )
}
export default FormInputComponent