import { call, put, select } from 'redux-saga/effects'
import * as actions from './actions'
import * as services from './services'
import * as selectors from './selectors'

export function* fetchPostsSaga(limit, offset) {
  try {
    yield put(actions.fetchPostsRequest())

    const { posts, pagination } = yield call(
      services.fetchPosts,
      limit,
      offset,
    )

    yield put(actions.fetchPostsSuccess(posts, pagination))
    return { payload: { posts, pagination } }
  } catch (error) {
    yield put(actions.fetchPostsError(error))
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

export default {
  fetchPostsSaga,
  fetchPostByIdSaga,
  addPostRequestSaga,
}
