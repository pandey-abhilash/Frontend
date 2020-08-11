
import axios from 'axios'
import config from '../../utils/config'

export async function createPosts(body){

    return axios.post(`${config.backendUrl}/posts/create`,body)
}
export async function fetchPosts(params){
    return axios.get(`${config.backendUrl}/posts/list/${params.email}/${params.pageNumber}/${params.pageSize}`)
}

export async function likePost(body){
    return axios.put(`${config.backendUrl}/posts/likes`,body)
}
export async function commentPost(body){
    return axios.put(`${config.backendUrl}/posts/comments`,body)
}