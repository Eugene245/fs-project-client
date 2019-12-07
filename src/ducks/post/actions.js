import * as types from './types'

export function fetchPostsRequest() {
  return {
    type: types.FETCH_POSTS_REQUEST,
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

// export function fetchPostByUserRequest() {
//   return {
//     type: types.FETCH_POST_BY_USER_REQUEST,
//   }
// }

// export function fetchPostByUserSuccess(post) {
//   return {
//     type: types.FETCH_POST_BY_USER_SUCCESS,
//     post,
//   }
// }

// export function fetchPostByUserError(error) {
//   return {
//     type: types.FETCH_POST_BY_USER_ERROR,
//     error,
//   }
// }

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