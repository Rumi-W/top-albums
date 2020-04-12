import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducers from './store/reducers'
import { isChrome } from './utilities/browsers'
import App from './App'
import './index.css'

import * as serviceWorker from './serviceWorker'

const composeEnhancers =
  process.env.NODE_ENV === 'development' && isChrome ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))
const app = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
