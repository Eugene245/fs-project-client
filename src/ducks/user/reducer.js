import * as types from './types'
import initialState from './state'

export default function(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_REQUEST:
    case types.AUTH_REQUEST:
    case types.REGISTER_REQUEST:
      return {
        ...state,
        error: null,
        status: 'pending',
      }
    case types.EDIT_PROFILE_REQUEST:
    case types.FOLLOW_REQUEST:
    case types.UNFOLLOW_REQUEST:
    case types.LIKE_REQUEST:
    case types.UNLIKE_REQUEST:
    case types.SEARCH_USERS_REQUEST:
      return {
        ...state,
        error: null,
      }
    case types.SEARCH_USERS_SUCCESS:
      return {
        ...state,
        foundUsers: action.foundUsers,
      }
    case types.LOGIN_SUCCESS:  
    case types.REGISTER_SUCCESS:
      return {
        ...state,
        user: action.user,
        isAuthenticated: 'true',
        status: 'responded',
      } 
    case types.EDIT_PROFILE_SUCCESS:
      return {
        ...state, 
        user: action.user,
      }
    case types.AUTH_SUCCESS:
      return {
        ...state,
        user: action.user,
        isAuthenticated: 'true',
        status: 'responded',
      }
    case types.LIKE_SUCCESS:  
    case types.UNLIKE_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          liked_posts: action.liked_posts,
        },
      }
    case types.FOLLOW_SUCCESS:
    case types.UNFOLLOW_SUCCESS:  
    return {
      ...state,
      user: {
        ...state.user,
        following: action.following
      },
    }  
    case types.FETCH_USER_SUCCESS:
      return {
        ...state,
        receivedUser: action.user,
      }
    case types.LOGIN_ERROR:
    case types.REGISTER_ERROR:
      return {
        ...state,
        error: action.error,
        isAuthenticated: 'error',
        status: 'failed',
      }
    case types.RESET_FOUND_USERS:
      return {
        ...state,
        foundUsers: [],
      }
    
    case types.AUTH_ERROR: 
    return {
      ...state,
      error: action.error,
      status: 'failed',
    }
    case types.EDIT_PROFILE_ERROR:
    case types.FOLLOW_ERROR:
    case types.UNFOLLOW_ERROR:
    case types.LIKE_ERROR:
    case types.UNLIKE_ERROR:
    case types.FETCH_USER_ERROR:
      return {
        ...state,
        error: action.error,
      }
    case types.LOGOUT:
      return {
        ...state,
        user: {},
        token: null,
        isAuthenticated: 'false',
        status: '',
      }
    default:
      return state
  }
}
