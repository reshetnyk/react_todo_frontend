import fetch from 'isomorphic-unfetch'

export const makeRequest = (params) => {
  const baseUrl = 'https://reshetnyk-react-to-do-backend.herokuapp.com'
  const url = baseUrl + params.url
  const requestParams = {
    method: params.method || 'get',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  }

  if (requestParams.method.toLowerCase() !== 'get') {
    requestParams.body = JSON.stringify(params.data) || null
  }

  return fetch(url, requestParams).then(resp => {
    return new Promise((resolve, reject) => {
      if (resp.status === 401) {
        reject(null)
      } else {
        resolve(resp.json())
      }
    })
  })
}
