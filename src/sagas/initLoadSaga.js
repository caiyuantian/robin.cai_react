import { put, takeEvery, delay, call } from 'redux-saga/effects'
import actionTypes from '../actionTypes'

export function* fetchUserAsync() {
    try {
        const response = yield call(fetch, 'https://gist.githubusercontent.com/Lachlanbsmith/858629f93f628c62c4e29a3bb1d99bff/raw/bc403f2f39fbd3d41e48ff893f24d0545907ece0/login');
        //const data = response.json();
        const user = yield call([response, 'json']);
        //console.log(JSON.stringify(data));
        if (!!user) {
            yield put({ type: actionTypes.FEATCH_USER_OK, user: user});
        }
        //return data[0].usernameName;
    } catch (e) {
        console.log(e);
        //return null;
    }
}

export function* fetchDataAsync() {
    try {
        const response = yield call(fetch, 'https://gist.githubusercontent.com/Lachlanbsmith/c5eb3b858ff810febd3dfbd5960d3fd8/raw/64a0ba3ee02d52536157d2dd01dddb1069175a8f/buildings');
        const data = yield call([response, 'json']);
        if (!!data) {
            yield put({ type: actionTypes.FEATCH_DATA_OK, data: data});
        }
    } catch (e) {
        console.log(e);
    }
}

export function* watchInitLoad() {
    yield takeEvery('INIT_LOAD_DATA_ASYNC', fetchUserAsync);
    yield takeEvery('INIT_LOAD_DATA_ASYNC', fetchDataAsync);
}