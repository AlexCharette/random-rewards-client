import axios from 'axios'

const ApiService = {

  init: (baseUrl: string | undefined) => axios.defaults.baseURL = baseUrl,

  delete: (resource: any) => axios.delete(resource),

  get: (resource: any) => axios.get(resource),

  post: (resource: any, data: any) => axios.post(resource, data),

  put: (resource: any, data: any) => axios.put(resource, data)

}

export { ApiService }