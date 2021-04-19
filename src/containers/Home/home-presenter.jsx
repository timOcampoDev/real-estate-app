import React from 'react';
import MastheadPresenter from "./MastHead";
import {useStyles} from "../../styles/Theme";
import Box from '@material-ui/core/Box';
import SearchBar from '../../components/SearchBarComponent';

const HomePresenter = ()=>{
    const classes = useStyles({})
    return(

        <div className={'home-component'}>
            <MastheadPresenter/>

            <Box classes={{root: classes.home}}>
                <div>
                    <h1>
                        1% listing fee<br/>when you buy + sell.
                    </h1>

                    <SearchBar
                        props={{
                            buttonText: 'WU TANG FOREVER',
                            onClick: ()=> alert('Logic'),
                            id: 'home-search-bar',
                            type: 'search',
                            name: 'search-bar',
                            value: '',
                        }}/>

                </div>

                <div>
                    feed goes in here
                </div>
            </Box>
        </div>
    )
}
export default HomePresenter