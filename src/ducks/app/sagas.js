import { all, call, put, takeLatest } from 'redux-saga/effects'
import { registerSaga, loginSaga, logoutSaga } from '../user/sagas'
import { addPostRequestSaga, fetchPostsSaga, fetchPostByIdSaga } from '../post/sagas'
import * as types from './types'

function* registerUserSaga(action) {
  yield call(registerSaga, action.credentials)
}

function* loginUserSaga(action) {
  yield call(loginSaga, action.credentials)
}

function* logoutUserSaga() {
  yield call(logoutSaga)
}

function* addPostSaga(action) {
  yield call(addPostRequestSaga, action.credentials)
}

function* fetchFeedSaga(action) {
  const { limit, offset } = action
  yield call(fetchPostsSaga, limit, offset)
}

function* fetchPostSaga(action) {
  yield call(fetchPostByIdSaga, action.id)
}

export default function*() {
  yield all([
    takeLatest(types.FETCH_POSTS, fetchFeedSaga),
    takeLatest(types.FETCH_POST, fetchPostSaga),
    takeLatest(types.REGISTER_USER, registerUserSaga),
    takeLatest(types.LOGIN_USER, loginUserSaga),
    takeLatest(types.LOGOUT_USER, logoutUserSaga),
    takeLatest(types.ADD_POST, addPostSaga),
  ])
}
