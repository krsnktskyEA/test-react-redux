import request from 'superagent'

/**
 * Ajax query for getting requests data.
 * @generator
 * @returns {string} response - requests data.
 */
export function* getRequests() {
  const url = 'http://localhost:3000/requests'
  const res = yield request.get(url)
  const response = JSON.parse(res.text)
  return response
}

/**
 * Ajax query for creating request.
 * @generator
 * @param {string} id - request id.
 * @param {string} dateFrom - simply date from.
 * @param {string} dateUntil - simply date until.
 * @param {string} passengers - passengers qty.
 * @param {string} price - simply price.
 * @param {string} currency - simply currency.
 * @returns {string} res - response.
 */
export function* createRequest(id, dateFrom, dateUntil, passengers, price, currency) {
  const data = { id, dateFrom, dateUntil, passengers, price, currency }
  const url = 'http://localhost:3000/requests'
  const res = yield request.post(url).set('accept', 'application/json').set('Content-Type', 'application/json').send(data)
  return res
}
