import React from 'react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useStyles } from "../../../styles/Theme";

const MastheadPresenter = ()=>{
    const classes = useStyles({})
    return(
        <div>
            <CssBaseline />
            <Container
                fixed
                maxWidth="xl"
                classes={{root: classes.masthead}}
            >
            </Container>
        </div>
    )
}
export default MastheadPresenter