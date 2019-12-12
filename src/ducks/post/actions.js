import * as types from './types'

export function fetchPostsRequest(users) {
  return {
    type: types.FETCH_POSTS_REQUEST,
    users,
  }
}

export function fetchPostsSuccess(posts, pagination) {
  return {
    type: types.FETCH_POSTS_SUCCESS,
    posts,
    pagination,
  }
}

export function fetchPostsError(error) {
  return {
    type: types.FETCH_POSTS_ERROR,
    error,
  }
}

export function fetchUserPostsRequest() {
  return {
    type: types.FETCH_USER_POSTS_REQUEST,
  }
}

export function fetchUserPostsSuccess(posts, pagination) {
  return {
    type: types.FETCH_USER_POSTS_SUCCESS,
    posts,
    pagination,
  }
}

export function fetchUserPostsError(error) {
  return {
    type: types.FETCH_USER_POSTS_ERROR,
    error,
  }
}

export function fetchMorePostsRequest(users) {
  return {
    type: types.FETCH_MORE_POSTS_REQUEST,
    users,
  }
}

export function fetchMorePostsSuccess(posts, pagination) {
  return {
    type: types.FETCH_MORE_POSTS_SUCCESS,
    posts,
    pagination,
  }
}

export function fetchMorePostsError(error) {
  return {
    type: types.FETCH_MORE_POSTS_ERROR,
    error,
  }
}

export function fetchPostByIdRequest() {
  return {
    type: types.FETCH_POST_BY_ID_REQUEST,
  }
}

export function fetchPostByIdSuccess(post) {
  return {
    type: types.FETCH_POST_BY_ID_SUCCESS,
    post,
  }
}

export function fetchPostByIdError(error) {
  return {
    type: types.FETCH_POST_BY_ID_ERROR,
    error,
  }
}

export function resetPosts() {
  return {
    type: types.RESET_POSTS,
  }
}

export function AddPostRequest(credentials) {
  return {
    type: types.ADDPOST_REQUEST,
    credentials,
  }
}

export function AddPostSuccess() {
  return {
    type: types.ADDPOST_SUCCESS,
  }
}

export function AddPostError(error) {
  return {
    type: types.ADDPOST_ERROR,
    error,
  }
}

export function AddCommentRequest(credentials) {
  return {
    type: types.ADDCOMMENT_REQUEST,
    credentials,
  }
}

export function AddCommentSuccess() {
  return {
    type: types.ADDCOMMENT_SUCCESS,
  }
}

export function AddCommentError(error) {
  return {
    type: types.ADDCOMMENT_ERROR,
    error,
  }
}

export function likeRequest(credentials) {
  return {
    type: types.LIKE_REQUEST,
    credentials,
  }
}

export function likeSuccess(postId, likes) {
  return {
    type: types.LIKE_SUCCESS,
    postId,
    likes,
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

export function unlikeSuccess(postId, likes) {
  return {
    type: types.UNLIKE_SUCCESS,
    postId,
    likes,
  }
}

export function unlikeError(error) {
  return {
    type: types.UNLIKE_ERROR,
    error,
  }
}