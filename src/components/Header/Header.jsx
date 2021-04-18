import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { useStyles } from "../../styles/Theme";

const Header = ()=>{
    const classes = useStyles({})
    return(
        <AppBar
            classes={{ root: classes.header }}>
            Header
        </AppBar>
    )
};

export default Header