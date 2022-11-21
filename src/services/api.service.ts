import axios from 'axios'

const ApiService = {

  init: (baseUrl: string | undefined) => axios.defaults.baseURL = baseUrl,

  delete: ({ resource, params = null }: any = {}) => axios.delete(resource, { params: params }),

  get: ({ resource, params = null }: any = {}) => axios.get(resource, { params: params }),

  post: ({ resource, params = null, body }: any = {}) => axios.post(resource, body, { params: params }),

  put: ({ resource, params = null, body }: any = {}) => axios.put(resource, body, { params: params }),
}

export { ApiService }