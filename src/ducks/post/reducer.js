import * as types from './types'
import initialState from './state'

export default function(state = initialState, action) {
  switch (action.type) {
    case types.LIKE_REQUEST:
    case types.UNLIKE_REQUEST: 
    case types.DELETE_POST_BY_ID_REQUEST:
    case types.FETCH_POST_BY_ID_REQUEST:
    case types.DELETE_COMMENT_REQUEST:
      return {
        ...state,
        error: null,
        status: 'pending',
      }
    case types.FETCH_POST_BY_ID_SUCCESS:
      return {
        ...state,
        postsById: {
          [action.post._id]: action.post,
        },
        postsIds: [action.post._id],
        status: 'responded',
      }
    case types.LIKE_SUCCESS:
    case types.UNLIKE_SUCCESS: 
      return {
        ...state,
        postsById: {
          ...state.postsById,
          [action.postId]: {
            ...state.postsById[action.postId],
            likes: action.likes
          }
        },
        status: 'responded',
      } 
    case types.FETCH_POSTS_REQUEST:
    case types.FETCH_USER_POSTS_REQUEST:
    case types.FETCH_MORE_POSTS_REQUEST:
      return {
        ...state,
        error: null,
        status: 'pending',
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
        status: 'responded',
      }
    case types.FETCH_USER_POSTS_SUCCESS:
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
        status: 'responded',
      }
    case types.FETCH_MORE_POSTS_SUCCESS:
      return {
        ...state,
        ...action.posts.map(
          (item) => ({
            postsIds: state.postsIds.push(item),
            postsById: state.postsById.push({ [item._id]: item })
          }),
        ),
        pagination: {
          ...state.pagination,
          offset: state.pagination.offset + state.pagination.limit + action.pagination.offset,
          limit: action.pagination.limit,
        },
        status: 'responded',
      }
    case types.DELETE_POST_BY_ID_SUCCESS:
      let newPostsById = Object.keys(state.postsById).reduce((reduced, curVal) => {
        if(action.deletedPostId !== curVal) 
          reduced[curVal] = state.postsById[curVal];
        return reduced
      }, {})
      return {
        ...state,
        postsIds: state.postsIds.filter(id => id !== action.deletedPostId),
        postsById: newPostsById,
        status: 'responded',
      }
    case types.RESET_POSTS:
      return (
        initialState
      )
    case types.FETCH_POST_BY_ID_ERROR:
    case types.FETCH_POSTS_ERROR:
    case types.FETCH_MORE_POSTS_ERROR:
    case types.LIKE_ERROR:
    case types.FETCH_USER_POSTS_ERROR:
    case types.UNLIKE_ERROR: 
      return {
        ...state,
        error: action.error,
        status: 'failed',
      }
    case types.ADDPOST_REQUEST:
    case types.ADDCOMMENT_REQUEST:
      return {
        ...state,
        error: null,
        status: 'pending',
      }
    case types.ADDPOST_SUCCESS:
    case types.ADDCOMMENT_SUCCESS:
    case types.DELETE_COMMENT_SUCCESS:
      return {
        ...state,
        postsById: {
          [action.id]: {
            ...state.postsById[action.id],
            comments: action.comments,
          }
        },
        added: true,
        error: null,
        status: 'responded',
      }
    case types.ADDPOST_ERROR:
    case types.ADDCOMMENT_ERROR:
    case types.DELETE_COMMENT_ERROR:
      return {
        ...state,
        added: false,
        error: action.error,
        status: 'failed',
      }
    default:
      return state
  }
}
