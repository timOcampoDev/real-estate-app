import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


export function* fetchListingsSaga(action ) {
    const { query } = action.payload
    const requestUrl = `/api/realtor/query-listings/${query}`

    console.log(query, 'what is action?')
    try{
        const response = yield call( axios.get, requestUrl )
        console.log('this is the response in saga' , response)

    }catch (e) {
        console.log(e , 'there was an error')
    }
}