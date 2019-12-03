import { combineReducers } from 'redux'
import postReducer from '../ducks/post/reducer'
import userReducer from '../ducks/user/reducer'
import {connectRouter} from 'connected-react-router'

export default history => combineReducers ({
  user: userReducer,
  router: connectRouter(history),
  post: postReducer
})