import {put, all, call, delay, fork, takeEvery} from "redux-saga/effects";
import *as types from './actionTypes'
import {loadUsersApi} from "@/app/redux/api";
import {loadUsersError, loadUsersSuccess} from "@/app/redux/action";

export function* onLoadUserStartAsync() {
    try {
        const response = yield call(loadUsersApi)
        if (response.status === 200) {
            yield delay(500)
            yield  put(loadUsersSuccess(response.data))
        }
    } catch (error) {
        yield put(loadUsersError(error.response.data))
    }
}


export function* onLoadUser() {
    yield takeEvery(types.LOAD_USERS_START, onLoadUserStartAsync)
}

const userSagas = [
    fork(onLoadUser)
]

export default function* rootSaga() {
    yield all([...userSagas])
}