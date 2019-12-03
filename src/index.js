import React from 'react';
import { render } from 'react-dom';
import App from './App';
import store, { history } from './store/index'
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'connected-react-router'

const appElement = document.getElementById('app');
const rend = () => {
  render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    appElement
 );
}
store.subscribe(rend)
rend()