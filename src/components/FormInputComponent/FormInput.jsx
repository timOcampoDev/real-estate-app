import React from 'react';
import PropTypes from 'prop-types';
import TextField from "@material-ui/core/TextField";

const FormInputComponent = (props)=>{
    const {type, id, name, value, onChange } = props

    return(
        <TextField
            id={id} type={type}/>
    )
}
export default FormInputComponent