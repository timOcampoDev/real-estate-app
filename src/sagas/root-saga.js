import {all, takeLatest} from 'redux-saga/effects'
import { handleSearchHomes } from "../reducers/formsReducer";
import { fetchListings } from "./listings/listings-saga";

export default function* rootSaga() {
    yield all([
        yield takeLatest( handleSearchHomes, fetchListings) ,
    ])
}