import { put, takeEvery, delay} from 'redux-saga/effects'

export function* addAsync() {
    yield delay(2000);
    yield put({ type: 'CLICK_ADD' })
}

export function* watchAddAsync() {
    yield takeEvery('CLICK_ADD_ASYNC', addAsync);
}