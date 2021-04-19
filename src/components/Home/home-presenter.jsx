import React from 'react';
import MastheadPresenter from "./MastHead";
import {useStyles} from "../../styles/Theme";
import Container from '@material-ui/core/Container';

const HomePresenter = ()=>{
    const classes = useStyles({})
    return(
        <div className={'home-component'}>
            <MastheadPresenter/>
            <Container classes={{root: classes.home}}>
                <div>
                    <h1>
                        1% listing fee<br/>when you buy + sell.
                    </h1>

                </div>

                <div>
                    feed goes in here
                </div>
            </Container>
        </div>
    )
}
export default HomePresenter