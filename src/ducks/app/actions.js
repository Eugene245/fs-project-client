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

export function editUser(credentials) {
  return {
    type: types.EDIT_USER,
    credentials,
  }
}

export function AuthUser(token) {
  return {
    type: types.AUTH_USER,
    token,
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

export function deletePost(id, token) {
  return {
    type: types.DELETE_POST,
    id,
    token,
  }
}

export function addComment(credentials) {
  return {
    type: types.ADD_COMMENT,
    credentials,
  }
}

export function deleteComment(credentials) {
  return {
    type: types.DELETE_COMMENT,
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

export function like(credentials) {
  return {
    type: types.LIKE,
    credentials,
  }
}

export function unlike(credentials) {
  return {
    type: types.UNLIKE,
    credentials,
  }
}

export function fetchPosts(limit, offset, users) {
  return {
    type: types.FETCH_POSTS,
    limit,
    offset,
    users,
  }
}

export function fetchMorePosts(limit, offset, users) {
  return {
    type: types.FETCH_MORE_POSTS,
    limit,
    offset,
    users,
  }
}

export function fetchPostById(id) {
  return {
    type: types.FETCH_POST,
    id,
  }
}

export function fetchUser(name) {
  return {
    type: types.FETCH_USER,
    name,
  }
}

export function searchUsers(query) {
  return {
    type: types.SEARCH_USERS,
    query,
  }
}