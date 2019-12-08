import * as types from './types'

export function loginRequest(credentials) {
  return {
    type: types.LOGIN_REQUEST,
    credentials,
  }
}

export function loginSuccess(user) {
  return {
    type: types.LOGIN_SUCCESS,
    user,
  }
}

export function loginError(error) {
  return {
    type: types.LOGIN_ERROR,
    error,
  }
}

export function registerRequest(credentials) {
  return {
    type: types.REGISTER_REQUEST,
    credentials,
  }
}

export function registerSuccess(user) {
  return {
    type: types.REGISTER_SUCCESS,
    user,
  }
}
export function registerError(error) {
  return {
    type: types.REGISTER_ERROR,
    error,
  }
}

export function logout() {
  return {
    type: types.LOGOUT,
  }
}

export function fetchUserRequest() {
  return {
    type: types.FETCH_USER_REQUEST,
  }
}

export function fetchUserSuccess(user) {
  return {
    type: types.FETCH_USER_SUCCESS,
    user,
  }
}

export function fetchUserError(error) {
  return {
    type: types.FETCH_USER_ERROR,
    error,
  }
}

export function followRequest(credentials) {
  return {
    type: types.FOLLOW_REQUEST,
    credentials,
  }
}

export function followSuccess(following) {
  return {
    type: types.FOLLOW_SUCCESS,
    following,
  }
}

export function followError(error) {
  return {
    type: types.FOLLOW_ERROR,
    error,
  }
}

export function unfollowRequest(credentials) {
  return {
    type: types.UNFOLLOW_REQUEST,
    credentials,
  }
}

export function unfollowSuccess(following) {
  return {
    type: types.UNFOLLOW_SUCCESS,
    following,
  }
}

export function unfollowError(error) {
  return {
    type: types.UNFOLLOW_ERROR,
    error,
  }
}