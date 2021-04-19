import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const ButtonComponent = ({props})=> {
    const {buttonText, onClick} = props;

    return(
        <Button color={'primary'} variant={'contained'} onClick={onClick}>
            { buttonText }
        </Button>
    )
}

ButtonComponent.propTypes={
    props: PropTypes.shape({
        buttonText: PropTypes.string,
        onClick: PropTypes.func.isRequired,
    })
}
export default ButtonComponent
