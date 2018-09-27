// ACTIONS---------------------------------------------------------------------------
import { createAction } from 'redux-act'

export const getRequestsStart = createAction('GET_REQUESTS_START')
export const getRequestsOk = createAction('GET_REQUESTS_OK')
export const getRequestsError = createAction('GET_REQUESTS_ERROR')

export const createRequestStart = createAction('CREATE_REQUEST_START')
export const createRequestOk = createAction('CREATE_REQUEST_OK')
export const createRequestError = createAction('CREATE_REQUEST_ERROR')

// ACTIONS---------------------------------------------------------------------------
