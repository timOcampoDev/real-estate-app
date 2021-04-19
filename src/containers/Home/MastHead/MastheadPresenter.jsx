import React from 'react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useStyles } from "../../../styles/Theme";
import {MastheadWrapper} from "../styles";
import {cx} from '@emotion/css'

const MastheadPresenter = ()=>{
    const classes = useStyles({})
    return(
        <div className={ cx('masthead-wrapper', MastheadWrapper )} >
            <CssBaseline />
            <Container
                maxWidth="xl"
                classes={{root: classes.masthead}}
            >
            </Container>
        </div>
    )
}
export default MastheadPresenter