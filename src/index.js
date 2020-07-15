import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import { getPeople } from './reducers.js';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import 'tachyons';


const rootReducer = combineReducers({ getPeople });

const initialStoreEnhancer = () => {
    const history =  browserHistory;
  
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const storeEnhancer =
        composeEnhancers(
            applyMiddleware(
            ReduxThunk,
            routerMiddleware(history),
            ),
      )
  
    return storeEnhancer;
  };

export const store = createStore (rootReducer, initialStoreEnhancer());
//Middleware extend the store's abilities, and let you write async logic that interacts with the store.
//Redux Thunk middleware allows you to write action creators that return a function instead of an action. 
//The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met.

ReactDOM.render(
                <Provider store={store}>
                    <App />  
                </Provider>, document.getElementById('root'));

// expose store when run in Cypress
if (window.Cypress) {
  window.store = store
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
