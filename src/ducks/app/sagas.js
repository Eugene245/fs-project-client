import { all, call, takeLatest } from 'redux-saga/effects'
import * as userSagas from '../user/sagas'
import * as postSagas from '../post/sagas'
import * as types from './types'

function* registerUserSaga(action) {
  yield call(userSagas.registerSaga, action.credentials)
}

function* loginUserSaga(action) {
  yield call(userSagas.loginSaga, action.credentials)
}

function* editUserSaga(action) {
  yield call(userSagas.editProfileSaga, action.credentials)
}

function* authUserSaga(action) {
  yield call(userSagas.authSaga, action.token)
}

function* logoutUserSaga() {
  yield call(userSagas.logoutSaga)
}

function* addPostSaga(action) {
  yield call(postSagas.addPostRequestSaga, action.credentials)
}

function* addCommentSaga(action) {
  yield call(postSagas.addCommentRequestSaga, action.credentials)
}

function* deleteCommentSaga(action) {
  yield call(postSagas.deleteCommentRequestSaga, action.credentials)
}

function* deletePostSaga(action) {
  const { id, token } = action
  yield call(postSagas.deletePostByIdSaga, id, token)
}

function* fetchFeedSaga(action) {
  const { limit, offset, users } = action
  yield call(postSagas.fetchPostsSaga, limit, offset, users)
}

function* fetchPostSaga(action) {
  yield call(postSagas.fetchPostByIdSaga, action.id)
}

function* fetchUserByNameSaga(action) {
  yield call(userSagas.fetchUserSaga, action.name)
}

function* searchUsersSaga(action) {
  yield call(userSagas.searchUsersSaga, action.query)
}

function* followSaga(action) {
  yield call(userSagas.followRequestSaga, action.credentials)
}

function* unfollowSaga(action) {
  yield call(userSagas.unfollowRequestSaga, action.credentials)
}

function* likeSaga(action) {
  yield call(postSagas.likeRequestSaga, action.credentials)
}

function* unlikeSaga(action) {
  yield call(postSagas.unlikeRequestSaga, action.credentials)
}

export default function*() {
  yield all([
    takeLatest(types.FETCH_POSTS, fetchFeedSaga),
    takeLatest(types.FETCH_MORE_POSTS, fetchFeedSaga),
    takeLatest(types.FETCH_POST, fetchPostSaga),
    takeLatest(types.DELETE_POST, deletePostSaga),
    takeLatest(types.FETCH_USER, fetchUserByNameSaga),
    takeLatest(types.SEARCH_USERS, searchUsersSaga),
    takeLatest(types.REGISTER_USER, registerUserSaga),
    takeLatest(types.LOGIN_USER, loginUserSaga),
    takeLatest(types.EDIT_USER, editUserSaga),
    takeLatest(types.AUTH_USER, authUserSaga),
    takeLatest(types.LOGOUT_USER, logoutUserSaga),
    takeLatest(types.FOLLOW, followSaga),
    takeLatest(types.UNFOLLOW, unfollowSaga),
    takeLatest(types.LIKE, likeSaga),
    takeLatest(types.UNLIKE, unlikeSaga),
    takeLatest(types.ADD_POST, addPostSaga),
    takeLatest(types.ADD_COMMENT, addCommentSaga),
    takeLatest(types.DELETE_COMMENT, deleteCommentSaga),
  ])
}
