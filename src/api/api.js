import axios from 'axios'
import qs from 'qs'

const API_URL = 'http://kkwyadmin.huichifangqiu.com'
const BASE_URL = `${API_URL}/index/`


const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    post: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }
})

const fetch = (path, data) => {
  return new Promise((resolve, reject) => {
    return api({
      method: 'POST',
      data: qs.stringify(data),
      url: path
    }).then(
      ({
        status,
        data
      }) => {
        if (status === 200 && data) {
          switch (data.code) {
            case 302:
            location.href = '/logo'
            break
            case -101:
              location.href = data.code_url
              break
            case 0:
              resolve(data.data)
              break
            default:
              reject(data)
              break
          }
        } else {
          reject(data)
        }
      },
      reject
    )
  })
}
export function getUserInfo(){
  return fetch('index/getUserInfo')
}