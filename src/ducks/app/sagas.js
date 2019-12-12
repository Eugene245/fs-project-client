import { all, call, put, takeLatest } from 'redux-saga/effects'
import { registerSaga, loginSaga, logoutSaga, fetchUserSaga, followRequestSaga, unfollowRequestSaga, authSaga } from '../user/sagas'
import { addPostRequestSaga, addCommentRequestSaga, fetchPostsSaga, fetchPostByIdSaga, likeRequestSaga, unlikeRequestSaga } from '../post/sagas'
import * as types from './types'

function* registerUserSaga(action) {
  yield call(registerSaga, action.credentials)
}

function* loginUserSaga(action) {
  yield call(loginSaga, action.credentials)
}

function* authUserSaga(action) {
  yield call(authSaga, action.token)
}

function* logoutUserSaga() {
  yield call(logoutSaga)
}

function* addPostSaga(action) {
  yield call(addPostRequestSaga, action.credentials)
}

function* addCommentSaga(action) {
  yield call(addCommentRequestSaga, action.credentials)
}

function* fetchFeedSaga(action) {
  const { limit, offset, users } = action
  yield call(fetchPostsSaga, limit, offset, users)
}

function* fetchPostSaga(action) {
  yield call(fetchPostByIdSaga, action.id)
}

function* fetchUserByNameSaga(action) {
  yield call(fetchUserSaga, action.name)
}

function* followSaga(action) {
  yield call(followRequestSaga, action.credentials)
}

function* unfollowSaga(action) {
  yield call(unfollowRequestSaga, action.credentials)
}

function* likeSaga(action) {
  yield call(likeRequestSaga, action.credentials)
}

function* unlikeSaga(action) {
  yield call(unlikeRequestSaga, action.credentials)
}

export default function*() {
  yield all([
    takeLatest(types.FETCH_POSTS, fetchFeedSaga),
    takeLatest(types.FETCH_MORE_POSTS, fetchFeedSaga),
    takeLatest(types.FETCH_POST, fetchPostSaga),
    takeLatest(types.FETCH_USER, fetchUserByNameSaga),
    takeLatest(types.REGISTER_USER, registerUserSaga),
    takeLatest(types.LOGIN_USER, loginUserSaga),
    takeLatest(types.AUTH_USER, authUserSaga),
    takeLatest(types.LOGOUT_USER, logoutUserSaga),
    takeLatest(types.FOLLOW, followSaga),
    takeLatest(types.UNFOLLOW, unfollowSaga),
    takeLatest(types.LIKE, likeSaga),
    takeLatest(types.UNLIKE, unlikeSaga),
    takeLatest(types.ADD_POST, addPostSaga),
    takeLatest(types.ADD_COMMENT, addCommentSaga),
  ])
}
