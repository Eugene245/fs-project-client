import { call, put } from 'redux-saga/effects'
import * as actions from './actions'
import * as postActions from '../post/actions'
import * as services from './services'

export function* registerSaga(credentials) {
  try {
    const {
      data: { user },
    } = yield services.register(credentials)
    yield put(actions.registerSuccess(user))
    return { payload: user }
  } catch (error) {
    yield put(actions.registerError(error.response.data.msg))
    return { error }
  }
}

export function* loginSaga(credentials) {
  try {
    const {
      data: { user, token },
    } = yield services.login(credentials)
    yield put(actions.loginSuccess(user))
    yield localStorage.setItem('token', token)
    return { payload: { user, token } }
  } catch (error) {
    yield put(actions.loginError(error.response.data.msg))
    return { error }
  }
}

export function* authSaga(token) {
  try {
    const { user } = yield services.auth(token)
    yield put(actions.authSuccess(user))
    return { payload: { user } }
  } catch (error) {
    yield put(actions.authError(error.response.data.msg))
    return { error }
  }
}

export function* editProfileSaga(credentials) {
  try {
    const { user } = yield services.editProfile(credentials)
    yield put(actions.editProfileSuccess(user))
    return { payload: user }
  } catch (error) {
    yield put(actions.editProfileError(error.response.data.msg))
    return { error }
  }
}

export function* fetchUserSaga(userName) {
  try {
    yield put(actions.fetchUserRequest())
    yield put(postActions.fetchUserPostsRequest())

    const { user, posts } = yield call(
      services.fetchUser,
      userName,
    )
    yield put(actions.fetchUserSuccess(user))
    yield put(postActions.fetchUserPostsSuccess(posts))
    return { payload: { user, posts } }
  } catch (error) { 
    yield put(actions.fetchUserError(error))
    yield put(postActions.fetchUserPostsError(error))
    return { error }
  }
}

export function* searchUsersSaga(query) {
  try {
    yield put(actions.searchUsersRequest())
    const [...foundUsers] = yield call(services.searchUsers, query)
    yield put(actions.searchUsersSuccess(foundUsers))
    return { payload: { foundUsers } }
  } catch (error) { 
    yield put(actions.searchUsersError(error))
    return { error }
  }
}

export function* followRequestSaga(credentials) {
  try {
    const { following } = yield call(services.follow, credentials)
    yield put(actions.followSuccess(following))
    return { payload: following }
  } catch (error) {
    yield put(actions.followError(error))
    return { error }
  }
}

export function* unfollowRequestSaga(credentials) {
  try {
    const { following } = yield call(services.unfollow, credentials)
    yield put(actions.unfollowSuccess(following))
    return { payload: following }
  } catch (error) {
    yield put(actions.unfollowError(error))
    return { error }
  }
}

export function* logoutSaga() {
  yield localStorage.removeItem('token')
  yield put(actions.logout())
}

export default {
  registerSaga,
  loginSaga,
  logoutSaga,
  fetchUserSaga,
}
