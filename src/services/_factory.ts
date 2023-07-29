// libs
import axios from 'axios'
// configs
import { API_BASE_URL } from '@/configs'

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.code === 'ERR_NETWORK') {
      error.message =
        'Terjadi kesalahan pada jaringan, silahkan coba lagi dalam beberapa saat.'
    }

    if (!error.response) {
      error.message =
        'Terjadi kesalahan pada server, silahkan coba lagi dalam beberapa saat.'
    }

    return Promise.reject(error)
  }
)

/**
 * @param {string} path
 * @returns {string}
 */
export function getEndpointUrl(path : string) {
  return `${API_BASE_URL}${path}`
}

/**
 * @param {string} endpoint
 * @param {Object} params
 * @param {string} token
 */
export function serviceDelete({endpoint, params, token} : any) {
  return axios.delete(getEndpointUrl(endpoint), {
    headers: token ? { Authorization: `Bearer ${token}` } : {},
    params
  })
}

/**
 * @param {string} endpoint
 * @param {Object} params
 * @param {string} token
 * @returns {Promise<AxiosResponse>}
 */
export function serviceGet(endpoint : string, params : any, token? : any) {
  return axios.get(getEndpointUrl(endpoint), 
  {
    // headers: token ? { Authorization: `Bearer ${token}` } : {},
    params
  }
  )
}

/**
 * @param {string} endpoint
 * @param {Object} payload
 * @param {string} token
 * @returns {Promise<AxiosResponse>}
 */
export function servicePatch(endpoint : string, payload : any, token? : any) {
  return axios.patch(getEndpointUrl(endpoint), payload, {
    // headers: token ? { Authorization: `Bearer ${token}` } : {}
  })
}

/**
 * @param {string} endpoint
 * @param {Object} payload
 * @param {string} token
 * @returns {Promise<AxiosResponse>}
 */
export function servicePost(endpoint : any, payload : any, token? : any) {
  return axios.post(getEndpointUrl(endpoint), payload, {
    // headers: token ? { Authorization: `Bearer ${token}` } : {}
  })
}

/**
 * @param {string} endpoint
 * @param {Object} payload
 * @param {string} token
 * @returns {Promise<AxiosResponse>}
 */
export function servicePut(endpoint : any, payload : any, token? : any) {
  return axios.put(getEndpointUrl(endpoint), payload, {
    // headers: token ? { Authorization: `Bearer ${token}` } : {}
  })
}
