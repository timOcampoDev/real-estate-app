import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { useStyles } from "../../styles/Theme";
// import { AppBarDivider } from "./styles";

const Header = ()=>{
    const classes = useStyles({})
    return(
        <AppBar
            classes={{ root: classes.header }}
            position="fixed"
        />
    )
};

export default Header