import { call, put, select } from 'redux-saga/effects'
import * as actions from './actions'
import * as userActions from '../user/actions'
import * as services from './services'
import * as selectors from './selectors'

export function* fetchPostsSaga(limit, offset, users) {
  try {
    yield put(actions.fetchPostsRequest())

    const { posts, pagination } = yield call(
      services.fetchPosts,
      limit,
      offset,
      users,
    )

    yield put(actions.fetchPostsSuccess(posts, pagination))
    return { payload: { posts, pagination } }
  } catch (error) {
    yield put(actions.fetchPostsError(error))
    return { error }
  }
}

export function* fetchMorePostsSaga(limit, offset) {
  try {
    yield put(actions.fetchMorePostsRequest())

    const { posts, pagination } = yield call(
      services.fetchPosts,
      limit,
      offset,
    )

    yield put(actions.fetchMorePostsSuccess(posts, pagination))
    return { payload: { posts, pagination } }
  } catch (error) {
    yield put(actions.fetchMorePostsError(error))
    return { error }
  }
}

export function* fetchPostByIdSaga(id) {
  try {
    yield put(actions.fetchPostByIdRequest())
    const post = yield call(services.fetchPostById, id)
    yield put(actions.fetchPostByIdSuccess(post))
    return { payload: post }
  } catch (error) {
    yield put(actions.fetchPostByIdError(error))
    return { error }
  }
}

export function* deletePostByIdSaga(id, token) {
  try {
    yield put(actions.deletePostByIdRequest())
    const {deletedPostId} = yield call(services.deletePostById, id, token)
    yield put(actions.deletePostByIdSuccess(deletedPostId))
    return { payload: deletedPostId }
  } catch (error) {
    yield put(actions.deletePostByIdError(error))
    return { error }
  }
}

export function* addPostRequestSaga(credentials) {
  try {
    const {
      data: { post },
    } = yield services.sendPost(credentials)
    yield put(actions.AddPostSuccess(post))
    return { payload: post }
  } catch (error) {
    yield put(actions.AddPostError(error.response.data.msg))
    return { error }
  }
}

export function* addCommentRequestSaga(credentials) {
  try {
    const {
      data: { comment },
    } = yield services.sendComment(credentials)
    yield put(actions.AddCommentSuccess(comment))
    return { payload: comment }
  } catch (error) {
    yield put(actions.AddCommentError(error.response.data.msg))
    return { error }
  }
}

export function* likeRequestSaga(credentials) {
  yield put(actions.likeRequest())
  yield put(userActions.likeRequest())
  try {
    const { liked_posts, postId, likes } = yield call(services.like, credentials)
    yield put(userActions.likeSuccess(liked_posts))
    yield put(actions.likeSuccess(postId, likes))
    return { payload: { liked_posts, likes } }
  } catch (error) {
    yield put(actions.likeError(error))
    yield put(userActions.likeError(error))
    return { error }
  }
}

export function* unlikeRequestSaga(credentials) {
  yield put(actions.unlikeRequest())
  yield put(userActions.unlikeRequest())
  try {
    const { liked_posts, postId, likes } = yield call(services.unlike, credentials)
    yield put(userActions.unlikeSuccess(liked_posts))
    yield put(actions.unlikeSuccess(postId, likes))
    return { payload: { liked_posts, likes } }
  } catch (error) {
    yield put(actions.unlikeError(error))
    yield put(userActions.unlikeError(error))
    return { error }
  }
}

export default {
  fetchPostsSaga,
  fetchPostByIdSaga,
  addPostRequestSaga,
  addCommentRequestSaga,
  likeRequestSaga,
  unlikeRequestSaga,
}
