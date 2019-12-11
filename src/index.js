import React from 'react';
import { render } from 'react-dom';
import AppContainer from './containers/AppContainer';
import store, { history } from './store/index'
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'connected-react-router'

const appElement = document.getElementById('app');
const rend = () => {
  render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <AppContainer />
        </ConnectedRouter>
    </Provider>,
    appElement
 );
}
store.subscribe(rend)
rend()