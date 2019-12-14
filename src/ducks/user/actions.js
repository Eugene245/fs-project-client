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

export function registerSuccess() {
  return {
    type: types.REGISTER_SUCCESS,
  }
}

export function registerError(error) {
  return {
    type: types.REGISTER_ERROR,
    error,
  }
}

export function editProfileRequest(credentials) {
  return {
    type: types.EDIT_PROFILE_REQUEST,
    credentials,
  }
}

export function editProfileSuccess(user) {
  return {
    type: types.EDIT_PROFILE_SUCCESS,
    user,
  }
}
export function editProfileError(error) {
  return {
    type: types.EDIT_PROFILE_ERROR,
    error,
  }
}

export function authRequest(token) {
  return {
    type: types.AUTH_REQUEST,
    token,
  }
}

export function authSuccess(user) {
  return {
    type: types.AUTH_SUCCESS,
    user,
  }
}

export function authError(error) {
  return {
    type: types.AUTH_ERROR,
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

export function likeRequest(credentials) {
  return {
    type: types.LIKE_REQUEST,
    credentials,
  }
}

export function likeSuccess(liked_posts) {
  return {
    type: types.LIKE_SUCCESS,
    liked_posts,
  }
}

export function likeError(error) {
  return {
    type: types.LIKE_ERROR,
    error,
  }
}

export function unlikeRequest(credentials) {
  return {
    type: types.UNLIKE_REQUEST,
    credentials,
  }
}

export function unlikeSuccess(liked_posts) {
  return {
    type: types.UNLIKE_SUCCESS,
    liked_posts,
  }
}

export function unlikeError(error) {
  return {
    type: types.UNLIKE_ERROR,
    error,
  }
}