import { call, put } from 'redux-saga/effects'
import * as actions from './actions'
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

export function* fetchUserSaga() {
  try {
    yield put(actions.fetchUserRequest())

    const {
      data: { user, token },
    } = yield call(services.fetchUser)
    yield put(actions.fetchUserSuccess(user))
    yield localStorage.setItem('token', token)
    return { payload: user, token }
  } catch (error) {
    yield put(actions.fetchUserError(error))
    return { error }
  }
}

export function* logoutSaga() {
  yield put(actions.logout())
}

export default {
  registerSaga,
  loginSaga,
  logoutSaga,
  fetchUserSaga,
}
