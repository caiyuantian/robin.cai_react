import { put, takeEvery, delay, call } from 'redux-saga/effects'
import actionTypes from '../actionTypes'


export function* clickCountryAsync(action) {
    let value = action.value;
    yield put({ type: actionTypes.CLICK_COUNTRY, value: value })
}

export function* clickCityAsync(action) {
    let value = action.value;
    yield put({ type: actionTypes.CLICK_CITY, value: value })
}

export function* clickImageAsync(action) {
    let value = action.value;
    yield put({ type: actionTypes.CLICK_IMAGE, value: value })
}

export function* watchFilterAsync() {
    yield takeEvery(actionTypes.CLICK_COUNTRY_ASYNC, clickCountryAsync);
    yield takeEvery(actionTypes.CLICK_CITY_ASYNC, clickCityAsync);
    yield takeEvery(actionTypes.CLICK_IMAGE_ASYNC, clickImageAsync);
}