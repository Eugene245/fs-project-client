import * as types from './types'

export function initApp() {
  return {
    type: types.INIT_APP,
  }
}

export function registerUser(credentials) {
  return {
    type: types.REGISTER_USER,
    credentials,
  }
}

export function loginUser(credentials) {
  return {
    type: types.LOGIN_USER,
    credentials,
  }
}

export function logoutUser() {
  return {
    type: types.LOGOUT_USER,
  }
}

export function addPost(credentials) {
  return {
    type: types.ADD_POST,
    credentials,
  }
}

export function addComment(credentials) {
  return {
    type: types.ADD_COMMENT,
    credentials,
  }
}

export function follow(credentials) {
  return {
    type: types.FOLLOW,
    credentials,
  }
}

export function unfollow(credentials) {
  return {
    type: types.UNFOLLOW,
    credentials,
  }
}

export function fetchPosts(limit, offset) {
  return {
    type: types.FETCH_POSTS,
    limit,
    offset,
  }
}

export function fetchPostById(id) {
  return {
    type: types.FETCH_POST,
    id,
  }
}

export function fetchUser(name, offset, limit) {
  return {
    type: types.FETCH_USER,
    name,
    offset,
    limit,
  }
}