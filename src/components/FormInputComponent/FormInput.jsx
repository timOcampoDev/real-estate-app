import React from 'react';
import PropTypes from 'prop-types';
import Input from "@material-ui/core/Input";
import { TextFieldInput } from "./styles";

const FormInputComponent = ({props})=>{
    const {type, id, name, value, onChange } = props

    return(
        <Input
            id={id}
            name={name}
            className={TextFieldInput}
            type={type}
            value={value}
            onChange={onChange}
           />
    )
}
export default FormInputComponent