// REDUCERS-----------------------------------------------------------------------
import { createReducer } from 'redux-act'
import { combineReducers } from 'redux'
import * as actions from '../actions/index'

const Requests = createReducer({

  [actions.getRequestsOk]: (state, par) => par,

}, null)


const allReducers = combineReducers({
  Requests,
})


export default allReducers
// REDUCERS---------------------------------------------------------------------
