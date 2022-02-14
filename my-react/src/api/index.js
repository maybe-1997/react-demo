import request from '../utils/request'

export const getInfoApi = (params = {}) => {
  return request({
    url: '/get/info',
    method: 'GET',
    params
  })
}