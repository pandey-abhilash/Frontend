
import axios from 'axios'
import config from '../../utils/config'

export async function createPosts(body){
    return axios.post(`${config.backendUrl}/post/create`,body)
}
export async function fetchPosts(params){
    return axios.get(`${config.backendUrl}/post/${params.email}/${params.pageNumber}/${params.pageSize}`)
}