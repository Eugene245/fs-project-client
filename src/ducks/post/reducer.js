
import * as types from './types'
import initialState from './state'

export default function(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_POST_BY_ID_REQUEST:
      return {
        ...state,
        error: null,
      }

    case types.FETCH_POST_BY_ID_SUCCESS:
      return {
        ...state,
        postsById: {
          ...state.postsById,
          [action.post._id]: action.post,
        },
      }

    case types.FETCH_POSTS_REQUEST:
      return {
        ...state,
        error: null,
      }

    case types.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        ...action.posts.reduce(
          (result, item) => ({
            postsIds: result.postsIds.includes(item._id)
              ? result.postsIds
              : [...result.postsIds, item._id],
            postsById: {
              ...result.postsById,
              [item._id]: item,
            },
          }),
          { postsIds: state.postsIds, postsById: state.postsById },
        ),
        pagination: action.pagination,
      }

    case types.FETCH_POST_BY_ID_ERROR:
    case types.FETCH_POSTS_ERROR:
      return {
        ...state,
        error: action.error,
      }
    case types.ADDPOST_REQUEST:
    case types.ADDCOMMENT_REQUEST:
      return {
        ...state,
        error: null,
      }
    case types.ADDPOST_SUCCESS:
    case types.ADDCOMMENT_SUCCESS:
      return {
        ...state,
        added: true,
        error: null,
      }
    case types.ADDPOST_ERROR:
    case types.ADDCOMMENT_ERROR:
      return {
        ...state,
        added: false,
        error: action.error,
      }
    default:
      return state
  }
}
