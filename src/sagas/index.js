import { fork } from 'redux-saga/effects'
import { watchInitLoad } from './initLoadSaga'
import { watchAddAsync } from './addSaga'
import { watchFilterAsync } from './filterSaga'

export default function* rootSaga() {
    yield fork(watchInitLoad);
    yield fork(watchAddAsync);
    yield fork(watchFilterAsync);
}