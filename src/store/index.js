import {createStore, combineReducers, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga'
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import createHistory from 'history/createBrowserHistory'
import postState from '../ducks/post/reducer'
import userState from '../ducks/user/reducer'
import createRootReducer from './root-reducer'
import rootSaga from './root-saga'

export const history = createHistory();

const initialState = {
  ...postState,
  ...userState,
}

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware]

const store = createStore(
  createRootReducer(history),
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

sagaMiddleware.run(rootSaga)

export default store;
