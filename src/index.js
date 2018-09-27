/* eslint-env node */

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { BrowserRouter, Route } from 'react-router-dom'

import allReducers from './reducers/index'
import RootSaga from './sagas/index'
import EntryPage from './containers/EntryPage'
import CreateRequestForm from './containers/CreateRequestForm'


// CREATING STORE AND SAGA------------------------------------------------------------------
const saga = createSagaMiddleware()
const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(allReducers, composeEnchancers(applyMiddleware(saga)))
saga.run(RootSaga)


// RENDERING ROOT COMPONENT-------------------------------------------------------------------
ReactDOM.render(

  <Provider store={store}>
    <BrowserRouter basename="/">
      <div>
        <Route exact path="/" render={props => <EntryPage {...props} />} />
        <Route exact path="/createRequest" render={props => <CreateRequestForm {...props} />} />
      </div>
    </BrowserRouter>
  </Provider>,

  document.getElementById('app'),
)
