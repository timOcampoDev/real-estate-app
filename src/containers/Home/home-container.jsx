import React, {useEffect} from 'react';
import { useDispatch , useSelector } from "react-redux";
import HomePresenter from './home-presenter';
import { getListings } from "../../reducers/root-reducer";

const HomeContainer = ()=>{
    const dispatch = useDispatch();
    const listingState = useSelector(getListings)

    useEffect(()=>{
        dispatch({
            type: 'listings/handleGetListings',
            payload: {
                data: {
                    queryResults : ['wuTang']
                }
            }
        })
    }, [])

    console.log(listingState, 'what is listingState?')
    return(
        <HomePresenter/>
    )
}

export default HomeContainer
