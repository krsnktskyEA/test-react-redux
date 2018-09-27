//  CONFIGURING MIDDLEWARE (SAGAS)------------------------------------------------
import { fork, takeEvery, put, all, call } from 'redux-saga/effects'
import * as actions from '../actions/index'
import { getRequests, createRequest } from '../api/index'


function* SagaGetRequests() {
  try {
    const requests = yield call(getRequests)
    yield put(actions.getRequestsOk(requests))
  } catch (error) {
    yield put(actions.getRequestsError())
  }
}

function* SagaGetRequestsWatcher() {
  yield takeEvery(actions.getRequestsStart, SagaGetRequests)
}

function* SagaCreateRequest() {
  try {
    const id = 'req-666'
    const dateFrom = '2018/99/66'
    const dateUntil = '2018/99/67'
    const passengers = 6
    const price = 666
    const currency = 'USD'
    yield call(createRequest, id, dateFrom, dateUntil, passengers, price, currency)
    yield put(actions.createRequestOk())
  } catch (error) {
    yield put(actions.createRequestError())
  }
}

function* SagaCreateRequestWatcher() {
  yield takeEvery(actions.createRequestStart, SagaCreateRequest)
}

function* RootSaga() {
  yield all([
    fork(SagaGetRequestsWatcher),
    fork(SagaCreateRequestWatcher),
  ])
}

export default RootSaga
