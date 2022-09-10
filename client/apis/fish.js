import request from 'superagent'

const rootUrl = '/api/v1'

export function getFish() {
  return request.get(rootUrl + '/fish').then((res) => {
    return res.body
  })
}
